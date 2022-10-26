/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import Cookies from "js-cookie"
import { makeAutoObservable } from "mobx"
import CourseProgressStore from "./courseProgress"
import CourseTestStore from "./courseTest"
import ModalStore from "./modal"

class CookiesStore {
    userAcceptedCookiesNow = false

    constructor() {
        makeAutoObservable(this)
    }

    get userAcceptedCookies() {
        return Cookies.get("userAcceptedCookies")
    }

    get cookiesExpires() {
        return Cookies.get("cookiesExpires")
    }

    setCookiesExpFromNow() {
        const now = new Date()
        const expires = now.getTime() + 30 * (60 * 60 * 24 * 1000)
        // для проверки минута
        // const expires = now.getTime() + 60000
        Cookies.set("cookiesExpires", expires, { expires: 30 })
    }

    // при загрузке страницы
    setDataFromCookies() {
        // console.log('setDataFromCookies this.userAcceptedCookies', this.userAcceptedCookies);
        if (this.userAcceptedCookies) {
            const progressData = Cookies.get("courseProgress")
            const testsData = Cookies.get("courseTests")
            // console.log('progressData', progressData);

            const userVisitedAnyChapter = Cookies.get("userVisitedAnyChapter")
            const userVisitedFinalPage = Cookies.get("userVisitedFinalPage")
            const cookiesExpires = Cookies.get("cookiesExpires")

            const now = new Date()

            // console.log('expires', new Date(+cookiesExpires));
            if (!cookiesExpires) {
                // установить expires с сегодня + 30 дней
                this.setCookiesExpFromNow()
            } else if (now.getTime() > +cookiesExpires) {
                // сбросить куки
                this.resetCookies()
                // а если мы пршли не на первую страницу, не будет ли проблем? вроде нет
                // показать окошко с куки
                ModalStore.showModal("cookie")
                return
            }

            if (progressData) {
                CourseProgressStore.setDataFromCookies(progressData)
            }

            if (testsData) {
                CourseTestStore.setDataFromCookies(testsData)
            }

            if (userVisitedAnyChapter) {
                CourseProgressStore.setUserVisitedAnyChapter(
                    userVisitedAnyChapter
                )
            }

            if (userVisitedFinalPage) {
                CourseProgressStore.setUserVisitedFinalPage()
            }
            ModalStore.showModal("welcomeBack")
        } else {
            ModalStore.showModal("cookie")
        }
    }

    setUserAcceptedCookies() {
        const hasCookies = Cookies.get("userAcceptedCookies")

        if (!hasCookies) {
            Cookies.set("userAcceptedCookies", "true", { expires: 30 })
            this.userAcceptedCookiesNow = true
        }

        this.setCookiesExpFromNow()
    }

    // перед перезагрузкой страницы/уходе с нее
    setDataInCookies() {
        // console.log('setDataInCookies this.userAcceptedCookies', this.userAcceptedCookies);
        if (this.userAcceptedCookies) {
            const testsVal = JSON.stringify(CourseTestStore.dataForCookies)
            const progressVal = JSON.stringify(
                CourseProgressStore.dataForCookies
            )
            // console.log('progress', CourseProgressStore.dataForCookies);
            // console.log('progressVal', progressVal);

            if (CourseProgressStore.userVisitedAnyChapter) {
                Cookies.set(
                    "userVisitedAnyChapter",
                    CourseProgressStore.userVisitedAnyChapter,
                    { expires: 2 }
                )
            }

            if (CourseProgressStore.userVisitedFinalPage) {
                Cookies.set("userVisitedFinalPage", "true", { expires: 30 })
            }

            Cookies.set("courseTests", testsVal, { expires: 30 })
            Cookies.set("courseProgress", progressVal, { expires: 30 })
            Cookies.set("userAcceptedCookies", "true", { expires: 30 })
            if (this.cookiesExpires) {
                Cookies.set("cookiesExpires", this.cookiesExpires, { expires: 30 })
            }
        }
    }

    resetCookies() {
        Cookies.remove("courseTests")
        Cookies.remove("courseProgress")
        Cookies.remove("userAcceptedCookies")
        Cookies.remove("userVisitedAnyChapter")
        Cookies.remove("userVisitedFinalPage")
        Cookies.remove("cookiesExpires")
    }
}

export default new CookiesStore()
