export const COLORS = {
    orange: "#DAAA00",
    green_light: "#A8AD00",
    green: "#2FB457",
    green_circle: "#B6BA29",
    green_dark: "#67823A",
    brown_light: "#C88242",
    brown: "#94795D",
    blue: "#00529B",
    blue_light: "#71B2C9",
    blue_text: "#004A93",
    white: "#FFFFFF",
    black: "#000000",
    color_animate: "#f5f9fd",
    red: "#9b0000",
    grey: "#D9D9D9",
    grey_light: "#707372",
    turquoise: "#00859B",
    green_bright: '#43B02A',
    copy_right: "#bec4c7",
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
    mobile: "600px",
    tablet: "768px",
    laptopS: "1024px",
    laptop: "1280px",
    laptopM: "1440px",
    laptopL: "1920px",
    desktop: "2560px",
}

export const DEVICE = {
    mobileS: `(max-width: ${DEVICE_SIZE.mobileS})`,
    mobileM: `(max-width: ${DEVICE_SIZE.mobileM})`,
    mobileL: `(max-width: ${DEVICE_SIZE.mobileL})`,
    mobile: `(max-width: ${DEVICE_SIZE.mobile})`,
    tablet: `(max-width: ${DEVICE_SIZE.tablet})`,
    laptopS: `(max-width: ${DEVICE_SIZE.laptopS})`,
    laptop: `(max-width: ${DEVICE_SIZE.laptop})`,
    laptopM: `(max-width: ${DEVICE_SIZE.laptopM})`,
    laptopL: `(max-width: ${DEVICE_SIZE.laptopL})`,
    desktop: `(max-width: ${DEVICE_SIZE.desktop})`,
}

export default {
    COLORS,
    FONTS,
    SIZES,
    DEVICE,
}
