// import * as routes from "../constants/routes"
import {
    CourseButtonImage1,
    CourseButtonImage2,
    CourseButtonImage3,
    CourseButtonImage4,
    CourseButtonImage5,
    CourseButtonImage6,
} from "../assets/images"
import { COLORS } from "../constants"

// TODO Добавить им разные координаты x y

const timelineData = [
    {
        slug: "courseStepButton",
        value: {
            title: "Введение",
            description:
                "Краткая выжимка в несколько слов о чем будет в разделе",
            time: "50 сек",
            bgColor: COLORS.orange,
            image: CourseButtonImage1,
            rotate: "-64",
        },
    },
    {
        slug: "courseStepButton",
        value: {
            title: "Суть концепции устойчивого развития",
            description:
                "Краткая выжимка в несколько слов о чем будет в разделе",
            time: "2 сек",
            bgColor: COLORS.green_light,
            image: CourseButtonImage2,
            rotate: "-127",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.green_light,
            position: "top",
            text: "Экология Средневековья",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.green_light,
            position: "bottom",
            text: "Нужен баланс",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.green_light,
            position: "top",
            text: "Делать больше, ресурсов тратить меньше",
        },
    },
    {
        slug: "courseStepButton",
        value: {
            title: "Концепции ESG",
            description:
                "Краткая выжимка в несколько слов о чем будет в разделе",
            time: "30 сек",
            bgColor: COLORS.green_dark,
            image: CourseButtonImage3,
            rotate: "105",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.green_dark,
            position: "top",
            text: "Все взаимосвязано",
        },
    },
    {
        slug: "courseStepButton",
        value: {
            title: "А что в ФосАгро?",
            description:
                "Краткая выжимка в несколько слов о чем будет в разделе",
            time: "1 мин 20 сек",
            bgColor: COLORS.brown_light,
            image: CourseButtonImage4,
            rotate: "165",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.brown_light,
            position: "bottom",
            text: "Наши задачи",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.brown_light,
            position: "top",
            text: "Наши результаты, снизили выбросы",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.brown_light,
            position: "bottom",
            text: "Наши результаты, снизили сброс сточных вод",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.brown_light,
            position: "top",
            text: "Наши результаты, проекты",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.brown_light,
            position: "bottom",
            text: "Новые вызовы. Наша сила",
        },
    },
    {
        slug: "courseStepButton",
        value: {
            title: "А что с поставщиками и потребителями?",
            description:
                "Краткая выжимка в несколько слов о чем будет в разделе",
            time: "1 мин 30 сек",
            bgColor: COLORS.brown,
            image: CourseButtonImage5,
            rotate: "76",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.brown,
            position: "top",
            text: "Зеленый стандарт",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.brown,
            position: "bottom",
            text: "Кодекс поставщика",
        },
    },
    {
        slug: "courseStepButton",
        value: {
            title: "Тест",
            description:
                "Краткая выжимка в несколько слов о чем будет в разделе",
            time: "≈4 мин",
            bgColor: COLORS.blue,
            image: CourseButtonImage6,
            rotate: "-150",
        },
    },
]

export default timelineData
