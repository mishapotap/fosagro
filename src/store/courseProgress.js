/* eslint-disable class-methods-use-this */
import { makeAutoObservable } from "mobx"
import { coursePagesData, timelineData } from "../data"
import { COLORS } from "../constants"
import { sectColors, sectsProgressTypes } from "../data/coursePagesData/general"

class CourseProgress {
    activeSectId = 1

    activeCourseId = 1

    activeSectPageId = 1

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

    userVisitedAnyCourse = false

    dontShowInstructionExpires = 0

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

    get userPassedFullCourse() {
        const chaptersIds = Object.keys(coursePagesData)
        const notPassedChapter = chaptersIds.find(
            (id) => this.courseProgressPercent(id) !== 100
        )

        return !notPassedChapter
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
        if (this.isWrongPath) {
            return ""
        }

        if (this.activeSectData) return this.activeSectData.sectTitle

        return ""
    }

    get activeSectColor() {
        return this.isWrongPath ? COLORS.green : sectColors[this.activeSectId]
    }

    get progressType() {
        return this.isWrongPath
            ? "grass"
            : sectsProgressTypes[this.activeSectId]
    }

    get activeSectBtnData() {
        const tlData = timelineData[`course${this.activeCourseId}`].timeline
        const sectItem = tlData.find((i) => i.id === this.activeSectId)
        if (sectItem) {
            return sectItem.button
        }
        return {}
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

    get isTestAvailable() {
        const courseSects = Object.keys(this.visitedPages[this.activeCourseId])
        const okCourseSects = courseSects.filter((sect) => sect !== "test")
        const notComplSect = okCourseSects.find(
            (sectId) => !this.isSectCompleted(sectId)
        )
        return !notComplSect
    }

    get introStartLink() {
        return `/course${this.activeCourseId}/topic1/point1`
    }

    get instructionModalLink() {
        return `/course${this.activeCourseId}`
    }

    get isSlideBeforeTest() {
        return this.nextPageLink.includes("test")
    }

    timelineBtnLink(sectId, isTest) {
        if (isTest) return "test"

        const pagesData = this.visitedPages[this.activeCourseId][sectId]
        if (!pagesData) return `topic${sectId}/point1`

        // проверить посещал ли пользователь секцию, перенести к последней посещенной странице
        if (pagesData.length > 0) {
            const largestNum = pagesData.reduce((accVal, currentVal) =>
                Math.max(accVal, currentVal)
            )
            return `topic${sectId}/point${largestNum}`
        }
        return `topic${sectId}/point1`
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

    isPageAvailable(courseId, sectId, pageId) {
        const visitedSects = this.visitedPages[courseId]

        if (!visitedSects.intro) {
            return false
        }

        const sects = Object.entries(visitedSects)
        const notPassedSectBefore = sects.find(
            ([id]) => id < sectId && !this.isSectCompleted(id)
        )

        if (notPassedSectBefore) {
            return false
        }

        const beforePagesIds = visitedSects[sectId].filter(
            (pId) => pId < pageId
        )
        const pageAvailable = beforePagesIds.length === +pageId - 1

        return pageAvailable
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

    get dataForLS() {
        const seconds = 48 * 60 * 60 * 1000
        const date = new Date()

        return {
            userVisitedAnyCourse: {
                userVisitedAnyCourse: true,
                expires: date.getTime() + seconds,
            },
            // TODO позже раскомментировать
            // visitedPages: this.visitedPages,
        }
    }

    setProgressDataFromLs(data) {
        const {
            userVisitedAnyCourse: { userVisitedAnyCourse, expires },
            visitedPages,
        } = data

        const now = new Date()

        if (now.getTime() > expires) {
            this.userVisitedAnyCourse = false
        } else {
            this.userVisitedAnyCourse = userVisitedAnyCourse
        }

        if (visitedPages) {
            this.visitedPages = visitedPages
        }
    }

    setIsTestActive(val) {
        this.isTestActive = val
    }

    setUserVisitedAnyCourse() {
        this.userVisitedAnyCourse = true
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

    setActiveIds(courseId, sectId, pageId) {
        this.setActiveCourseId(courseId)
        this.setActiveSectId(sectId)
        this.setActivePageId(pageId)
    }

    setActiveCourseId(id) {
        this.setActivePageId(1)
        this.setActiveSectId(1)
        if (coursePagesData[id]) {
            this.activeCourseId = +id
            this.isWrongPath = false
        } else {
            this.isWrongPath = true
        }
    }

    setActiveSectId(id) {
        this.setActivePageId(1)
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

        if (visitedSectPages) {
            if (!visitedSectPages.includes(this.activeSectPageId)) {
                this.visitedPages[this.activeCourseId][this.activeSectId].push(
                    this.activeSectPageId
                )
            }
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
        }, 2200)
    }

    setNotifPos(posData) {
        this.notifPos = posData
    }
}

export default new CourseProgress()
