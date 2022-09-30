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
        type: "POST",
        body: JSON.stringify(data),
    }

    const response = await fetch(url, settings)

    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`)
    }
    // return response.json()

    // eslint-disable-next-line no-new
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // eslint-disable-next-line no-new
            // reject(new Error("Test error"))
            resolve("success")
        }, 3000)
    })
}

// получение положения элемента относительно окна
export function getElWindowPos(el) {
    const rect = el.getBoundingClientRect()
    return {
        left: rect.left,
        top: rect.top,
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

    const sec =
        Math.floor(duration - Math.floor(duration / 60) * 60) < 10
            ? `${Math.floor(duration - Math.floor(duration / 60) * 60)}`
            : Math.floor(duration - Math.floor(duration / 60) * 60)

    let time = ""

    if (key === "") {
        time = (min > 0 ? `${min} мин ` : "") + (sec > 0 ? `${sec} сек` : "")
    } else {
        time = min > 0 ? `${min} мин ` : ""
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
    const [mins, secs] = formattedCourseTime.split(":")

    return secs ? +mins + 1 : mins
}
