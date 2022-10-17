/* eslint-disable class-methods-use-this */
import { makeAutoObservable } from "mobx"
import { coursePagesData, timelineData, menuButtonData } from "../data"
import { COLORS } from "../constants"
import { sectColors, sectsProgressTypes } from "../data/coursePagesData/general"
// import SoundStore from "./sound"

const initialVisitedPages = {
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

class CourseProgress {
    activeSectId = 1

    activeChapterId = 1

    activePageId = 1

    showNotification = false

    userVisitedFinalPage = false

    isTestActive = false

    userVisitedAnyChapter = false

    notifPos = { left: 0, top: 0 }

    notifTimeoutId = null

    isTimelinePageActive = true

    isWrongPath = false

    visitedPages = initialVisitedPages

    isErrorPage = false

    constructor() {
        makeAutoObservable(this)
    }

    get userPassedFullCourse() {
        const chaptersIds = Object.keys(coursePagesData)
        const notPassedChapter = chaptersIds.find(
            (id) => this.chapterProgressPercent(id) !== 100
        )

        return !notPassedChapter
    }

    get activeChapterData() {
        return coursePagesData[this.activeChapterId] || null
    }

    get activeSectData() {
        if (this.activeChapterData) {
            return this.activeChapterData[this.activeSectId] || null
        }
        return null
    }

    get activePageData() {
        if (this.activeChapterData && this.activeSectData) {
            const pageData = this.activeSectData.pages[this.activePageId]
            if (pageData) {
                return pageData
            }
            return null
        }
        return null
    }

    get activeChapterIndex() {
        return `0${this.activeChapterId}`
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

    // тип прогресса активной секции (для StepProgressBar)
    get progressType() {
        return this.isWrongPath
            ? "grass"
            : sectsProgressTypes[this.activeSectId]
    }

    get activeSectBtnData() {
        const tlData = timelineData[`course${this.activeChapterId}`].timeline
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
        let newLink = `/course${this.activeChapterId}/`

        const newPageId = +this.activePageId + 1
        const nextPage = this.activeSectData.pages[newPageId]
        if (nextPage) {
            // новая страница секции
            newLink += `topic${this.activeSectId}/point${newPageId}`
        } else {
            const nextSectId = +this.activeSectId + 1
            // перейти на другую секцию
            if (coursePagesData[this.activeChapterId][nextSectId]) {
                newLink += `topic${nextSectId}/point1`
            } else {
                newLink += "test"
            }
        }

        return newLink
    }

    get prevPageLink() {
        // eslint-disable-next-line prefer-const
        let newLink = `/course${this.activeChapterId}/`

        if (this.isTestActive) {
            const sectsCount = Object.keys(this.activeChapterData).length
            const lastSectData = this.activeChapterData[sectsCount]

            const lastPageId = Object.keys(lastSectData.pages).length
            newLink += `topic${sectsCount}/point${lastPageId}`

            return newLink
        }

        const newPageId = +this.activePageId - 1
        const prevPage = this.activeSectData.pages[newPageId]
        if (prevPage) {
            // новая страница секции
            newLink += `topic${this.activeSectId}/point${newPageId}`
        } else {
            const prevSectId = +this.activeSectId - 1
            const prevSectData =
                coursePagesData[this.activeChapterId][prevSectId]
            // перейти на предыдущую секцию если есть
            if (prevSectData) {
                const pagesCount = Object.keys(prevSectData.pages).length
                newLink += `topic${prevSectId}/point${pagesCount}`
            } else {
                return `/course${this.activeChapterId}`
            }
        }

        return newLink
    }

    get activeChapterProgressPer() {
        return this.chapterProgressPercent(this.activeChapterId)
    }

    get isTestAvailable() {
        const chapterSects = Object.keys(
            this.visitedPages[this.activeChapterId]
        )
        const okChapterSects = chapterSects.filter((sect) => sect !== "test")
        const notComplSect = okChapterSects.find(
            (sectId) => !this.isSectCompleted(sectId)
        )
        return !notComplSect
    }

    get introStartLink() {
        return `/course${this.activeChapterId}/topic1/point1`
    }

    get instructionModalLink() {
        return `/course${this.activeChapterId}`
    }

    get isSlideBeforeTest() {
        return this.nextPageLink.includes("test")
    }

    // разделы, которые уже изучались (для WelcomeBackModal)
    get startedLearnChapters() {
        return Object.keys(this.visitedPages)
            .filter((id) => this.chapterProgressPercent(id) !== 0)
            .map((i) => +i)
    }

    // заголовок активного раздела
    get activeChapterTitle() {
        const data = menuButtonData.find((i) => i.id === this.activeChapterId)
        // надо с индексом
        if (data) return `${data.index} ${data.text}`
        return "Тест"
    }

    // данные кнопок для разделов, которые уже изучались (для WelcomeBackModal)
    get welcomeBtnsData() {
        const data = menuButtonData.filter((i) =>
            this.startedLearnChapters.includes(i.id)
        )
        return data
    }

    // начал ли пользователь изучение какого-либо из разделов
    get userStartedLearnAnyChapter() {
        return this.startedLearnChapters.length !== 0
    }

    // ссылка для кнопки секции в таймлайне
    // (чтобы перенаправлять пользователя на актуальную страницу)
    timelineBtnLink(sectId, isTest) {
        if (isTest) return "test"

        const pagesData = this.visitedPages[this.activeChapterId][sectId]
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

    // количество всех страниц в разделе
    chapterPagesCount(chapterId) {
        if (coursePagesData[chapterId]) {
            // потому что + тест и введение
            let count = 2

            Object.entries(coursePagesData[chapterId]).forEach(
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

    // количество страниц в секции
    sectPagesCount(chapterId, sectId) {
        const pages = Object.keys(coursePagesData[chapterId][sectId].pages)
        return pages.length
    }

    // количество посещенных страниц в разделе
    chapterVisitedPagesCount(chapterId) {
        if (this.visitedPages[chapterId]) {
            let count = 0

            Object.values(this.visitedPages[chapterId]).forEach((pagesArr) => {
                if (typeof pagesArr === "object") {
                    pagesArr.forEach(() => {
                        count += 1
                    })
                }
            })

            if (this.visitedPages[chapterId].test) count += 1

            if (this.visitedPages[chapterId].intro) count += 1

            return count
        }

        return 0
    }

    // прогресс прохождения раздела
    chapterProgressPercent(chapterId = 1) {
        const percent =
            (this.chapterVisitedPagesCount(chapterId) * 100) /
            this.chapterPagesCount(chapterId)
        return Math.trunc(percent)
    }

    // пройдена ли страница (для таймлайна)
    isPageCompleted(sectId, pageId) {
        const sectPagesArr = this.visitedPages[this.activeChapterId][sectId]
        if (sectPagesArr) {
            return sectPagesArr.includes(pageId)
        }

        return false
    }

    // доступна ли секция (нет, если предыдущие не пройдены)
    isSectAvailable(sectId) {
        if (sectId === "intro") return true

        const sectsBefore = []
        Object.entries(this.visitedPages[this.activeChapterId]).forEach(
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

    // доступна ли страница (нет, если предыдущие секции и страницы до этой в данной секции не пройдены)
    isPageAvailable(chapterId, sectId, pageId) {
        const visitedSects = this.visitedPages[chapterId]

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

    // пройдена ли секция (для отображения в таймлайне)
    isSectCompleted(sectId) {
        if (sectId === "test") {
            return this.visitedPages[this.activeChapterId].test
        }

        if (sectId === "intro") {
            return this.visitedPages[this.activeChapterId].intro
        }

        const visitedPagesArr = this.visitedPages[this.activeChapterId][sectId]

        if (visitedPagesArr) {
            const visitedPagesCount = visitedPagesArr.length
            return (
                this.sectPagesCount(this.activeChapterId, sectId) ===
                visitedPagesCount
            )
        }

        return false
    }

    // данные, которые надо сохранить в cookies
    get dataForCookies() {
        return {
            visitedPages: this.visitedPages,
        }
    }

    resetProgress() {
        this.visitedPages = initialVisitedPages
        this.userVisitedAnyChapter = false
    }

    resetActiveTestProgress() {
        this.visitedPages[this.activeChapterId].test = false
    }

    setIsErrorPage(bool) {
        this.isErrorPage = bool
    }

    // setNewSectAudioFromIntro() {
    //     const tlData = timelineData[`course${this.activeChapterId}`].timeline
    //     const sectItem = tlData.find((i) => i.id === 1)
    //     if (sectItem && sectItem.button.audio) {
    //         SoundStore.newSectAudio = new Audio(sectItem.button.audio)
    //     }
    // }

    setNewSectAudioFromContent() {
        // // ! если тест следующий?
        // const tlData = timelineData[`course${this.activeChapterId}`].timeline
        // const sectItem = tlData.find((i) => {
        //     if (type === 'back') {
        //         return i.id === this.activeChapterId
        //     }
        // })
        // if (sectItem && sectItem.button.audio) {
        //     SoundStore.newSectAudio = new Audio(sectItem.button.audio)
        // }
    }

    // setNewSectAudio(sectId) {
    //     const tlData = timelineData[`course${this.activeChapterId}`].timeline
    //     const sectItem = tlData.find((i) => i.id === sectId)

    //     if (sectItem && sectItem.button.audio) {
    //         const audioEl = new Audio(sectItem.button.audio)
    //         SoundStore.newSectAudio = audioEl
    //     }
    // }

    setDataFromCookies(dataString) {
        const data = JSON.parse(dataString)

        const { visitedPages } = data

        if (visitedPages) {
            this.visitedPages = visitedPages
        }
    }

    setUserVisitedFinalPage() {
        this.userVisitedFinalPage = true
    }

    setIsTestActive(val) {
        this.isTestActive = val
    }

    setUserVisitedAnyChapter(val) {
        this.userVisitedAnyChapter = val
    }

    setTestPassed() {
        this.visitedPages[this.activeChapterId].test = true
    }

    setIntroPassed() {
        this.visitedPages[this.activeChapterId].intro = true
    }

    setIsTimelinePageActive(val) {
        this.isTimelinePageActive = val
    }

    setActiveIds(chapterId, sectId, pageId) {
        this.setActiveChapterId(chapterId)
        this.setActiveSectId(sectId)
        this.setActivePageId(pageId)
    }

    setActiveChapterId(id) {
        this.setActivePageId(1)
        this.setActiveSectId(1)
        if (coursePagesData[id]) {
            this.activeChapterId = +id
            this.isWrongPath = false
        } else {
            this.isWrongPath = true
        }
    }

    setActiveSectId(id) {
        this.setActivePageId(1)
        if (coursePagesData[this.activeChapterId][id]) {
            this.activeSectId = +id
            this.isWrongPath = false
        } else {
            this.isWrongPath = true
        }
    }

    setActivePageId(id) {
        const { pages } =
            coursePagesData[this.activeChapterId][this.activeSectId]
        // eslint-disable-next-line eqeqeq
        const pageData = Object.keys(pages).find((i) => i == id)
        if (pageData) {
            this.activePageId = +id
            this.isWrongPath = false
        } else {
            this.isWrongPath = true
        }
    }

    setVisitedPage() {
        const visitedSectPages =
            this.visitedPages[this.activeChapterId][this.activeSectId]

        if (visitedSectPages) {
            if (!visitedSectPages.includes(this.activePageId)) {
                this.visitedPages[this.activeChapterId][this.activeSectId].push(
                    this.activePageId
                )
            }
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
