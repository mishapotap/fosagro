import {
    CourseButtonImage1,
    CourseButtonImage2,
    CourseButtonImage3,
    CourseButtonImage4,
    CourseButtonImage5,
    CourseButtonImage6,
} from "../assets/images/Course1"
import { COLORS } from "../constants"

const courseStepButtonData1 = [
    {
        title: "Введение",
        description: "Краткая выжимка в несколько слов о чем будет в разделе",
        time: "50 сек",
        bgColor: COLORS.orange,
        image: CourseButtonImage1,
        rotate: "-64",
    },
    {
        title: "Суть концепции устойчивого развития",
        description: "Краткая выжимка в несколько слов о чем будет в разделе",
        time: "2 сек",
        bgColor: COLORS.green_light,
        image: CourseButtonImage2,
        rotate: "-127",
    },
    {
        title: "Концепции ESG",
        description: "Краткая выжимка в несколько слов о чем будет в разделе",
        time: "30 сек",
        bgColor: COLORS.green_dark,
        image: CourseButtonImage3,
        rotate: "105",
    },
    {
        title: "А что в ФосАгро?",
        description: "Краткая выжимка в несколько слов о чем будет в разделе",
        time: "1 мин 20 сек",
        bgColor: COLORS.brown_light,
        image: CourseButtonImage4,
        rotate: "165",
    },
    {
        title: "А что с поставщиками и потребителями?",
        description: "Краткая выжимка в несколько слов о чем будет в разделе",
        time: "1 мин 30 сек",
        bgColor: COLORS.brown,
        image: CourseButtonImage5,
        rotate: "76",
    },
    {
        title: "Тест",
        description: "Краткая выжимка в несколько слов о чем будет в разделе",
        time: "≈4 мин",
        bgColor: COLORS.blue,
        image: CourseButtonImage6,
        rotate: "-150",
    },
]

export default courseStepButtonData1
