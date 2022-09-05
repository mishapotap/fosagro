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
            top: "calc(50% - 150px + 110px)",
            left: "40px",
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
            top: "calc(50% - 150px + 55px)",
            left: "240px",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.green_light,
            position: "top",
            text: "Экология Средневековья",
            top: "calc(50% - 150px + 120px)",
            left: "425px",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.green_light,
            position: "bottom",
            text: "Нужен баланс",
            top: "calc(50% - 150px + 140px)",
            left: "495px",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.green_light,
            position: "top",
            text: "Делать больше, ресурсов тратить меньше",
            top: "calc(50% - 150px + 145px)",
            left: "560px",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.green_light,
            position: "bottom",
            text: "Концепция устойчивого развития - не брать у природы в долг",
            top: "calc(50% - 150px + 120px)",
            left: "620px",
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
            top: "calc(50% - 150px + 45px)",
            left: "675px",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.green_dark,
            position: "top",
            text: "Все взаимосвязано",
            top: "calc(50% - 150px + 145px)",
            left: "860px",
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
            top: "calc(50% - 150px + 80px)",
            left: "930px",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.brown_light,
            position: "bottom",
            text: "Наши задачи",
            top: "calc(50% - 150px + 120px)",
            left: "1120px",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.brown_light,
            position: "top",
            text: "Наши результаты, снизили выбросы",
            top: "calc(50% - 150px + 95px)",
            left: "1180px",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.brown_light,
            position: "bottom",
            text: "Наши результаты, снизили сброс сточных вод",
            top: "calc(50% - 150px + 90px)",
            left: "1255px",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.brown_light,
            position: "top",
            text: "Наши результаты, проекты",
            top: "calc(50% - 150px + 95px)",
            left: "1340px",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.brown_light,
            position: "bottom",
            text: "Новые вызовы. Наша сила",
            top: "calc(50% - 150px + 115px)",
            left: "1430px",
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
            top: "calc(50% - 150px + 25px)",
            left: "1530px",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.brown,
            position: "top",
            text: "Зеленый стандарт",
            top: "calc(50% - 150px + 95px)",
            left: "1710px",
        },
    },
    {
        slug: "courseStepPoint",
        value: {
            color: COLORS.brown,
            position: "bottom",
            text: "Кодекс поставщика",
            top: "calc(50% - 150px + 110px)",
            left: "1780px",
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
            top: "calc(50% - 150px + 60px)",
            left: "1840px",
        },
    },
]

export default timelineData
