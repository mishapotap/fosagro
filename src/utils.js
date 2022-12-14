import { ISENG } from "./constants"
import { mediaDuration } from "./data"

/* eslint-disable no-unused-vars */
export function formatTime(time) {
    const isoString = new Date(time * 1000).toISOString()
    if (time >= 3600) {
        return isoString.slice(11, 19)
    }
    return isoString.slice(14, 19)
}

export function renderCustom(swiper, current, total) {
    const getFormattedNumber = (number) =>
        number < 10 ? `0${number}` : `${number}`

    return /* html */ `
        <span class="cur-slide-number">${getFormattedNumber(current)}</span>
        <span class="separator">/</span>
        <span class="total-slides-number">${getFormattedNumber(total)}</span>
    `
}

export async function makePostRequest(url, data) {
    const settings = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }

    const response = await fetch(url, settings)

    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`)
    }

    return response

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve()
    //     }, 3000);
    // })
}

// получение положения элемента относительно окна
export function getElWindowPos(el) {
    const rect = el.getBoundingClientRect()
    return {
        left: rect.left,
        top: rect.top,
        leftCenter: rect.left + el.offsetWidth / 2,
        right: rect.left + el.offsetWidth,
    }
}

// получение длительности медиа для темы
export function getMediaDuration(array) {
    const valeurInitiale = 0
    const duration = array.reduce(
        (accumulateur, valeurCourante) => accumulateur + valeurCourante[1],
        valeurInitiale
    )

    return duration
}

// длительность темы в секундах
export function getMediaDurationSec(data, key = "") {
    let duration = 0
    if (key === "") {
        duration = getMediaDuration(data)
    } else {
        const keyCourseArray = Object.keys(data)
        keyCourseArray.forEach((keyObj) => {
            duration += getMediaDuration(data[keyObj])
        })
    }

    const min = Math.floor(duration / 60)
    const minTextRu = "мин"
    const minTextEng = "min"
    const minText = ISENG ? minTextEng : minTextRu

    const secTextRu = "сек"
    const secTextEng = "sec"
    const secText = ISENG ? secTextEng : secTextRu

    const sec =
        Math.floor(duration - Math.floor(duration / 60) * 60) < 10
            ? `${Math.floor(duration - Math.floor(duration / 60) * 60)}`
            : Math.floor(duration - Math.floor(duration / 60) * 60)

    let time = ""

    if (key === "") {
        time = (min > 0 ? `${min} ${minText} ` : "") + (sec > 0 ? `${sec} ${secText}` : "")
    } else {
        time = min > 0 ? `${min} ${minText} ` : ""
    }

    return time
}

export function getFullCourseDuration() {
    const chapters = Object.keys(mediaDuration)
    const courseTime = chapters
        .map((courseKey) => {
            // длительность всех секций части курса
            const chapterData = Object.entries(mediaDuration[courseKey])
            const chapterTime = chapterData
                .map(([sectKey, sectVal]) => getMediaDuration(sectVal))
                .reduce((sum, current) => sum + current, 0)
            return chapterTime
        })
        .reduce((sum, current) => sum + current, 0)

    const formattedCourseTime = formatTime(courseTime)
    const [h, mins, secs] = formattedCourseTime.split(":")

    return secs ? h * 60 + (mins * 1 + 1) : h * 60 + mins * 1
}

export function fullscreen(el, goFull = () => {}, exitFull = () => {}) {
    const isInFullScreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement

    // console.log('isInFullScreen', isInFullScreen);

    if (isInFullScreen) {
        if (document.exitFullscreen) {
            document.exitFullscreen().then(() => {
                exitFull()
            })
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen().then(() => {
                exitFull()
            })
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen().then(() => {
                exitFull()
            })
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen().then(() => {
                exitFull()
            })
        }
    } else {
        // eslint-disable-next-line no-lonely-if
        if (el.requestFullscreen) {
            el.requestFullscreen().then(() => {
                goFull()
            })
        } else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen().then(() => {
                goFull()
            })
        } else if (el.webkitRequestFullScreen) {
            el.webkitRequestFullScreen().then(() => {
                goFull()
            })
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen().then(() => {
                goFull()
            })
        }
    }

    // переход в полноэкранный режим на айфоне
    if (!el.webkitDisplayingFullscreen) {
        el.webkitEnterFullscreen()
    }
}

export function isTouchDevice() {
    // console.log('isTouchDevice', "ontouchstart" in window ||
    // navigator.maxTouchPoints > 0 ||
    // navigator.msMaxTouchPoints > 0);
    // return (
    //     "ontouchstart" in window ||
    //     navigator.maxTouchPoints > 0 ||
    //     navigator.msMaxTouchPoints > 0
    // )
    return document.documentElement.clientWidth < 1024
}

export function pauseMedia() {
    const audioEls = document.querySelectorAll("audio")
    const videoEls = document.querySelectorAll("video")
    const mediaEls = [...audioEls, ...videoEls]

    mediaEls.forEach((el) => {
        if (!el.paused) {
            el.pause()
        }
    })
}

export function getLargestArrNum(arr = [0]) {
    const largestNum = arr.reduce((accVal, currentVal) =>
        Math.max(accVal, currentVal)
    )
    return largestNum
}
