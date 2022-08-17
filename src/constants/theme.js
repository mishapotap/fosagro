export const COLORS = {
    orange: "#DAAA00",
    green_light: "#A8AD00",
    green: "#2FB457",
    green_circle: "#B6BA29",
    green_dark: "#67823A",
    brown_light: "#C88242",
    brown: "#94795D",
    blue: "#00529B",
    blue_text: "#004A93",
    white: "#FFFFFF",
    black: "#000000",
}

export const FONTS = {
    modalTitle: {
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "30px",
        color: COLORS.blue,
    },
    modalTitleWhite: {
        fontWeight: "700",
        fontSize: "23px",
        lineHeight: "30px",
        color: COLORS.green,
    },
}

export const SIZES = {
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    // width,
    // height
}

const DEVICE_SIZE = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptopS: "1024px",
    laptopM: "1440px",
    laptopL: "1920px",
    desktop: "2560px",
}

export const DEVICE = {
    mobileS: `(min-width: ${DEVICE_SIZE.mobileS})`,
    mobileM: `(min-width: ${DEVICE_SIZE.mobileM})`,
    mobileL: `(min-width: ${DEVICE_SIZE.mobileL})`,
    tablet: `(min-width: ${DEVICE_SIZE.tablet})`,
    laptopS: `(min-width: ${DEVICE_SIZE.laptopS})`,
    laptopM: `(min-width: ${DEVICE_SIZE.laptopM})`,
    laptopL: `(min-width: ${DEVICE_SIZE.laptopL})`,
    desktop: `(min-width: ${DEVICE_SIZE.desktop})`,
}

export default {
    COLORS,
    FONTS,
    SIZES,
    DEVICE,
}
