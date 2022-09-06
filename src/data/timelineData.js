// import * as routes from "../constants/routes"

import {
    CourseButtonImage1,
    CourseButtonImage2,
    CourseButtonImage3,
    CourseButtonImage4,
    CourseButtonImage5,
    CourseButtonImage6,
} from "../assets/images/Course1"
import { COLORS } from "../constants"

// TODO Добавить им разные координаты x y

const timelineData = {
    course1: {
        id: "01",
        title: '"Устойчивое развитие" - модный термин или реальность, которая касается каждого?',
        timeline: [
            {
                slug: "courseStepButton",
                value: {
                    title: "Введение",
                    description:
                        "Краткая выжимка в несколько слов о чем будет в разделе",
                    time: "55 сек",
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
                    time: "2 мин",
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
                        "Короткий тест на 5 вопросов по содержанию раздела.",
                    time: "≈4 мин",
                    bgColor: COLORS.blue,
                    image: CourseButtonImage6,
                    rotate: "-150",
                    top: "calc(50% - 150px + 60px)",
                    left: "1840px",
                },
            },
        ],
    },
    course2: {
        id: "02",
        title: "Цели устойчивого развития ООН",
        timeline: [
            {
                slug: "courseStepButton",
                value: {
                    title: "Введение",
                    description:
                        "Предостережения об ограниченности ресурсов планеты.",
                    time: "40 сек",
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
                    title: "Преобразования нашего мира, 17 целей",
                    description:
                        "Краткая выжимка в несколько слов о чем будет в разделе",
                    time: "4мн 30сек",
                    bgColor: COLORS.green_light,
                    image: CourseButtonImage2,
                    rotate: "-145",
                    top: "calc(50% - 150px + 55px)",
                    left: "240px",
                },
            },
            {
                slug: "courseStepPoint",
                value: {
                    color: COLORS.green_light,
                    position: "top",
                    year: "1972",
                    text: "Опубликован доклад «Пределы роста»",
                    top: "calc(50% - 150px + 135px)",
                    left: "465px",
                },
            },
            {
                slug: "courseStepPoint",
                value: {
                    color: COLORS.green_light,
                    position: "bottom",
                    year: "1999",
                    text: "Создание глобального договора ООН",
                    top: "calc(50% - 150px + 145px)",
                    left: "545px",
                },
            },
            {
                slug: "courseStepPoint",
                value: {
                    color: COLORS.green_light,
                    position: "top",
                    year: "2015",
                    text: "Новая программа",
                    top: "calc(50% - 150px + 125px)",
                    left: "610px",
                },
            },
            {
                slug: "courseStepButton",
                value: {
                    title: "Как ФосАгро способствует достижению ЦУР ООН",
                    description:
                        "Краткая выжимка в несколько слов о чем будет в разделе",
                    time: "55 сек",
                    bgColor: COLORS.green_dark,
                    image: CourseButtonImage3,
                    rotate: "-77",
                    top: "calc(50% - 150px + 40px)",
                    left: "700px",
                },
            },
            {
                slug: "courseStepPoint",
                value: {
                    color: COLORS.green_dark,
                    position: "bottom",
                    year: "2018",
                    text: "Преобразования в России, компания ФосАгро",
                    top: "calc(50% - 150px + 155px)",
                    left: "890px",
                },
            },
            {
                slug: "courseStepButton",
                value: {
                    title: "Приоритизация ЦУР для ФосАгро",
                    description:
                        "Краткая выжимка в несколько слов о чем будет в разделе",
                    time: "1 мин 20 сек",
                    bgColor: COLORS.brown_light,
                    image: CourseButtonImage4,
                    rotate: "165",
                    top: "calc(50% - 150px + 75px)",
                    left: "980px",
                },
            },
            {
                slug: "courseStepPoint",
                value: {
                    color: COLORS.brown_light,
                    position: "top",
                    year: "2020",
                    text: "Наши цели устойчивого развития",
                    top: "calc(50% - 150px + 95px)",
                    left: "1180px",
                },
            },
            {
                slug: "courseStepPoint",
                value: {
                    color: COLORS.brown_light,
                    position: "bottom",
                    text: "Каков наш подход в области управления?",
                    top: "calc(50% - 150px + 90px)",
                    left: "1260px",
                },
            },
            {
                slug: "courseStepPoint",
                value: {
                    color: COLORS.brown_light,
                    position: "top",
                    text: "Какой вклад вносит Компания в достижение ЦУР 2?",
                    top: "calc(50% - 150px + 95px)",
                    left: "1345px",
                },
            },
            {
                slug: "courseStepPoint",
                value: {
                    color: COLORS.brown_light,
                    position: "bottom",
                    text: "Какие цели ставит перед собой компания?",
                    top: "calc(50% - 150px + 115px)",
                    left: "1435px",
                },
            },
            {
                slug: "courseStepPoint",
                value: {
                    color: COLORS.brown_light,
                    position: "top",
                    text: "Как компания двигается к достижению этих целей? ",
                    top: "calc(50% - 150px + 120px)",
                    left: "1525px",
                },
            },
            {
                slug: "courseStepPoint",
                value: {
                    color: COLORS.brown_light,
                    position: "bottom",
                    text: "У нас нет секретов",
                    top: "calc(50% - 150px + 90px)",
                    left: "1615px",
                },
            },
            {
                slug: "courseStepButton",
                value: {
                    title: "Тест",
                    description:
                        "Короткий тест на 5 вопросов по содержанию раздела.",
                    time: "≈4 мин",
                    bgColor: COLORS.blue,
                    image: CourseButtonImage6,
                    rotate: "-150",
                    top: "calc(50% - 150px + 50px)",
                    left: "1745px",
                },
            },
        ],
    },
}

export default timelineData
