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
        <span class="total-slides-number">${getFormattedNumber(
            total
        )}</span>
    `
}

export async function makePostRequest(url, data) {
    // const settings = {
    //     type: "POST",
    //     body: JSON.stringify(data),
    // }
    // const response = await fetch(url, settings)

    // if (!response.ok) {
    //     throw new Error(
    //         `Could not fetch ${url}, status: ${response.status}`
    //     )
    // }
    // return response.json()

    // ------ для проверки

    // console.log("data", data)

    // eslint-disable-next-line no-new
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // eslint-disable-next-line no-new
            // reject(new Error("Test error"))
            resolve("success")
        }, 3000)
    })
}


