import * as routes from "../constants/routes"
import mediaDuration from "./mediaDuration"
import { getMediaDurationSec } from "../utils"

const menuButtonData = [
    {
        id: 1,
        index: "01",
        text: "введение и личный вклад в устойчивое развитие",
        bgColor: "rgba(218, 170, 0, 0.8)",
        bgAnimateColor: "rgba(218, 170, 0, 0.5)",
        rotate: "9",
        href: routes.COURSE01,
        duration: getMediaDurationSec(mediaDuration.course1, "course"),
    },
    {
        id: 2,
        index: "02",
        text: "Цели устойчивого развития (ЦУР) ООН",
        bgColor: "rgba(200, 130, 66, 0.8)",
        bgAnimateColor: "rgba(200, 130, 66, 0.5)",
        rotate: "-94",
        href: routes.COURSE02,
        duration: getMediaDurationSec(mediaDuration.course2, "course"),
    },
    {
        id: 3,
        index: "03",
        text: "потребители и управление продукцией",
        bgColor: "rgba(112, 115, 114, 0.8)",
        bgAnimateColor: "rgba(112, 115, 114, 0.5)",
        rotate: "26",
        href: routes.COURSE03,
        progress: 10,
    },
    {
        id: 4,
        index: "04",
        text: "экология",
        bgColor: "rgba(182, 186, 41, 0.8)",
        bgAnimateColor: "rgba(182, 186, 41, 0.5)",
        rotate: "26",
        href: routes.COURSE04,
    },
    {
        id: 5,
        index: "05",
        text: "климат и энергоэффективность",
        bgColor: "rgba(103, 130, 58, 0.8)",
        bgAnimateColor: "rgba(103, 130, 58, 0.5)",
        rotate: "-65",
        href: routes.COURSE05,
    },
    {
        id: 6,
        index: "06",
        text: "социальная среда и права человека",
        bgColor: "rgba(113, 178, 201, 0.8)",
        bgAnimateColor: "rgba(113, 178, 201, 0.5)",
        rotate: "55",
        href: routes.COURSE06,
    },
]

export default menuButtonData
