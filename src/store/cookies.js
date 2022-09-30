/* eslint-disable class-methods-use-this */
import Cookies from "js-cookie"
import { makeAutoObservable } from "mobx"
import CourseProgressStore from './courseProgress'
import CourseTestStore from "./courseTest"
import ModalStore from "./modal"

class CookiesStore {
    constructor() {
        makeAutoObservable(this)
    }

    get userAcceptedCookies() {
        return Cookies.get("userAcceptedCookies")
    }

    // при загрузке страницы
    setDataFromCookies() {
        if (this.userAcceptedCookies) {
            const progressData = Cookies.get("courseProgress")
            const testsData = Cookies.get("courseTests")
            const userVisitedAnyChapter = Cookies.get("userVisitedAnyChapter")

            if (progressData) {
                CourseProgressStore.setDataFromCookies(progressData)
            }

            if (testsData) {
                CourseTestStore.setDataFromCookies(testsData)
            }

            if (userVisitedAnyChapter) {
                CourseProgressStore.setUserVisitedAnyChapter(userVisitedAnyChapter)
            }
        } else {
            ModalStore.showModal("cookie")
        }
    }

    setUserAcceptedCookies() {
        Cookies.set('userAcceptedCookies', 'true', { expires: 30 })
    }

    // перед перезагрузкой странице/уходе с нее
    setDataInCookies() {
        if (this.userAcceptedCookies) {
            const testsVal = JSON.stringify(CourseTestStore.dataForCookies)
            const progressVal = JSON.stringify(
                CourseProgressStore.dataForCookies
            )

            if (CourseProgressStore.userVisitedAnyChapter) {
                Cookies.set(
                    "userVisitedAnyChapter",
                    CourseProgressStore.userVisitedAnyChapter,
                    { expires: 2 }
                )
            }

            Cookies.set("courseTests", testsVal, { expires: 30 })
            Cookies.set("courseProgress", progressVal, { expires: 30 })
            Cookies.set('userAcceptedCookies', 'true', { expires: 30 })
        }
    }
}

export default new CookiesStore()
