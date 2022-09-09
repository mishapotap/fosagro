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

