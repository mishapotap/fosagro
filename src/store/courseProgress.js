/* eslint-disable class-methods-use-this */
import { makeAutoObservable } from "mobx"
import { coursePagesData } from "../data"
import { COLORS } from "../constants"
import { sectColors, sectsProgressTypes } from "../data/coursePagesData/general"

// TODO отслеживать прогресс пользователя
// TODO связать прогресс с кружками на таймлайне
// (еще на гоавную проценты надо прохождения)

class CourseProgress {

    activeSectId = 1

    activeCourseId = 1

    activeSectPageId = 1

    activeSectLink = ""

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

    get isWrongPath () {
        return !this.activePageData
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
        return this.isWrongPath ? "grass" : sectsProgressTypes[this.activeSectId]
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
                // переключить на прошлый курс, если есть
                const prevCourseId = +this.activeCourseId - 1
                const prevCourseData = coursePagesData[prevCourseId]
                if (prevCourseData) {
                    return `/course${prevCourseId}`
                }
                return "/"
            }
        }

        return newLink
    }

    setActiveCourseId(id) {
        this.activeCourseId = id
    }

    setActiveSectId(id) {
        this.activeSectId = id
    }

    setActivePageId(id) {
        this.activeSectPageId = id
    }
}

export default new CourseProgress()
