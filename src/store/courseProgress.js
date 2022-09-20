/* eslint-disable class-methods-use-this */
import { makeAutoObservable } from "mobx"
import { coursePagesData } from "../data"
import { COLORS } from "../constants"
import { sectColors, sectsProgressTypes } from "../data/coursePagesData/general"

// TODO сделать чтобы состояние устанавливалось в ls и бралось из него
// (не только здесь, еще состояние тестов)

// TODO сделать защиту роутов для страниц курса? (если пред темы не пройдены чтобы нельзя было попасть)

// TODO сделать чтобы при нажатии на секцию открывалась страница на которой остановился
// пользователь, а не с начала?

class CourseProgress {
    activeSectId = 1

    activeCourseId = 1

    activeSectPageId = 1

    activeSectLink = ""

    showNotification = false

    isTestActive = false

    userVisitedCourse = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
    }

    notifPos = { left: 0, top: 0 }

    notifTimeoutId = null

    isTimelinePageActive = true

    isWrongPath = false

    visitedPages = {
        1: {
            intro: false,
            1: [],
            4: [],
            3: [],
            2: [],
            test: false,
        },
        2: {
            intro: false,
            1: [],
            2: [],
            3: [],
            test: false,
        },
        3: {
            intro: false,
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            test: false,
        },
        4: {
            intro: false,
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            test: false,
        },
        5: {
            intro: false,
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            test: false,
        },
        6: {
            intro: false,
            1: [],
            2: [],
            3: [],
            4: [],
            test: false,
        },
    }

    constructor() {
        makeAutoObservable(this)
    }

    get activeCourseData() {
        return coursePagesData[this.activeCourseId] || null
    }

    get activeSectData() {
        if (this.activeCourseData) {
            return this.activeCourseData[this.activeSectId] || null
        }
        return null
    }

    get activePageData() {
        if (this.activeCourseData && this.activeSectData) {
            const pageData = this.activeSectData.pages[this.activeSectPageId]
            if (pageData) {
                return pageData
            }
            return null
        }
        return null
    }

    get activeSectTitle() {
        return this.isWrongPath ? "" : this.activeSectData.sectTitle
    }

    get activeSectColor() {
        return this.isWrongPath ? COLORS.green : sectColors[this.activeSectId]
    }

    get progressType() {
        return this.isWrongPath
            ? "grass"
            : sectsProgressTypes[this.activeSectId]
    }

    get activeSectPagesCount() {
        if (this.isWrongPath) {
            return 1
        }
        const activeSectPages = this.activeSectData.pages
        const pagesCount = Object.keys(activeSectPages).length
        return pagesCount
    }

    get nextPageLink() {
        let newLink = `/course${this.activeCourseId}/`

        const newPageId = +this.activeSectPageId + 1
        const nextPage = this.activeSectData.pages[newPageId]
        if (nextPage) {
            // новая страница секции
            newLink += `topic${this.activeSectId}/point${newPageId}`
        } else {
            const nextSectId = +this.activeSectId + 1
            // перейти на другую секцию
            if (coursePagesData[this.activeCourseId][nextSectId]) {
                newLink += `topic${nextSectId}/point1`
            } else {
                newLink += "test"
            }
        }

        return newLink
    }

    get prevPageLink() {
        // eslint-disable-next-line prefer-const
        let newLink = `/course${this.activeCourseId}/`

        if (this.isTestActive) {
            const sectsCount = Object.keys(this.activeCourseData).length
            const lastSectData = this.activeCourseData[sectsCount]

            const lastPageId = Object.keys(lastSectData.pages).length
            newLink += `topic${sectsCount}/point${lastPageId}`

            return newLink
        }

        const newPageId = +this.activeSectPageId - 1
        const prevPage = this.activeSectData.pages[newPageId]
        if (prevPage) {
            // новая страница секции
            newLink += `topic${this.activeSectId}/point${newPageId}`
        } else {
            const prevSectId = +this.activeSectId - 1
            const prevSectData =
                coursePagesData[this.activeCourseId][prevSectId]
            // перейти на предыдущую секцию если есть
            if (prevSectData) {
                const pagesCount = Object.keys(prevSectData.pages).length
                newLink += `topic${prevSectId}/point${pagesCount}`
            } else {
                return `/course${this.activeCourseId}`
            }
        }

        return newLink
    }

    get activeCourseProgressPer() {
        return this.courseProgressPercent(this.activeCourseId)
    }

    coursePagesCount(courseId) {
        if (coursePagesData[courseId]) {
            // потому что + тест и введение
            let count = 2

            Object.entries(coursePagesData[courseId]).forEach(
                // eslint-disable-next-line no-unused-vars
                ([sectId, sectData]) => {
                    if (typeof sectData === "object") {
                        const sectPagesCount = Object.keys(
                            sectData.pages
                        ).length
                        count += sectPagesCount
                    }
                }
            )

            return count
        }
        return 0
    }

    setIsTestActive(val) {
        this.isTestActive = val
    }

    sectPagesCount(courseId, sectId) {
        const pages = Object.keys(coursePagesData[courseId][sectId].pages)
        return pages.length
    }

    courseVisitedPagesCount(courseId) {
        if (this.visitedPages[courseId]) {
            let count = 0

            Object.values(this.visitedPages[courseId]).forEach((pagesArr) => {
                if (typeof pagesArr === "object") {
                    pagesArr.forEach(() => {
                        count += 1
                    })
                }
            })

            if (this.visitedPages[courseId].test) count += 1

            if (this.visitedPages[courseId].intro) count += 1

            return count
        }

        return 0
    }

    courseProgressPercent(courseId = 1) {

        const percent =
            (this.courseVisitedPagesCount(courseId) * 100) /
            this.coursePagesCount(courseId)
        return Math.trunc(percent)
    }

    isPageCompleted(sectId, pageId) {
        const sectPagesArr = this.visitedPages[this.activeCourseId][sectId]
        if (sectPagesArr) {
            return sectPagesArr.includes(pageId)
        }

        return false
    }

    isSectAvailable(sectId) {
        if (sectId === "intro") return true

        const sectsBefore = []
        Object.entries(this.visitedPages[this.activeCourseId]).forEach(
            ([id]) => {
                if (id === "intro") {
                    sectsBefore.push(id)
                } else if (id < sectId) {
                    sectsBefore.push(id)
                }
            }
        )

        // секция доступна если все предыдущие пройдены
        const notCompletedSect = sectsBefore.find(
            (sect) => !this.isSectCompleted(sect)
        )
        const isSectAvailable = !notCompletedSect

        return isSectAvailable
    }

    isSectCompleted(sectId) {

        if (sectId === "test") {
            return this.visitedPages[this.activeCourseId].test
        }

        if (sectId === "intro") {
            return this.visitedPages[this.activeCourseId].intro
        }

        const visitedPagesArr = this.visitedPages[this.activeCourseId][sectId]

        if (visitedPagesArr) {
            const visitedPagesCount = visitedPagesArr.length
            return (
                this.sectPagesCount(this.activeCourseId, sectId) ===
                visitedPagesCount
            )
        }

        return false
    }

    setTestPassed() {
        this.visitedPages[this.activeCourseId].test = true
    }

    setIntroPassed() {
        this.visitedPages[this.activeCourseId].intro = true
    }

    setIsTimelinePageActive(val) {
        this.isTimelinePageActive = val
    }

    setActiveCourseId(id) {
        if (coursePagesData[id]) {
            this.activeCourseId = +id
            this.isWrongPath = false
        } else {
            this.isWrongPath = true
        }
    }

    setActiveSectId(id) {
        if (coursePagesData[this.activeCourseId][id]) {
            this.activeSectId = +id
            this.isWrongPath = false
        } else {
            this.isWrongPath = true
        }
    }

    setActivePageId(id) {
        const { pages } =
            coursePagesData[this.activeCourseId][this.activeSectId]
        // eslint-disable-next-line eqeqeq
        const pageData = Object.keys(pages).find((i) => i == id)
        if (pageData) {
            this.activeSectPageId = +id
            this.isWrongPath = false
        } else {
            this.isWrongPath = true
        }
    }

    setVisitedPage() {
        const visitedSectPages =
            this.visitedPages[this.activeCourseId][this.activeSectId]

        if (!visitedSectPages.includes(this.activeSectPageId)) {
            this.visitedPages[this.activeCourseId][this.activeSectId].push(
                this.activeSectPageId
            )
        }
    }

    setUserVisitedCourse(courseId) {
        if (!this.userVisitedCourse[courseId]) {
            this.userVisitedCourse[courseId] = true
        }
    }

    setShowNotification(val) {
        this.showNotification = val
    }

    setNotifTimeout() {
        if (this.notifTimeoutId) clearTimeout(this.notifTimeoutId)

        this.showNotification = true

        this.notifTimeoutId = setTimeout(() => {
            this.setShowNotification(false)
        }, 2000)
    }

    setNotifPos(posData) {
        this.notifPos = posData
    }
}

export default new CourseProgress()
