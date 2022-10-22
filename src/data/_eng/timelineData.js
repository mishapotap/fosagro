import { TestImage, IntroTimelineImage } from "../assets/images"
import { COLORS } from "../constants"

import {
    Line1Topic1,
    Line1Topic2,
    Line1Topic3,
    Line1Topic4,
    Line1Topic1Image,
    Line1Topic2Image,
    Line1Topic3Image,
    Line1Topic4Image,
} from "../assets/Course1/TimeLine"

import {
    Line2Topic1,
    Line2Topic2,
    Line2Topic3,
    Line2Topic1Image,
    Line2Topic2Image,
    Line2Topic3Image,
} from "../assets/Course2/TimeLine"

import {
    Line3Topic1,
    Line3Topic2,
    Line3Topic3,
    Line3Topic4,
    Line3Topic5,
    Line3Topic6,
    Line3Topic7,
    Line3Topic8,
    Line3Topic1Image,
    Line3Topic2Image,
    Line3Topic3Image,
    Line3Topic4Image,
    Line3Topic5Image,
    Line3Topic6Image,
    Line3Topic7Image,
    Line3Topic8Image,
} from "../assets/Course3/TimeLine"

import {
    Line4Topic1,
    Line4Topic2,
    Line4Topic3,
    Line4Topic4,
    Line4Topic5,
    Line4Topic6,
    Line4Topic7,
    Line4Topic1Image,
    Line4Topic2Image,
    Line4Topic3Image,
    Line4Topic4Image,
    Line4Topic5Image,
    Line4Topic6Image,
    Line4Topic7Image,
} from "../assets/Course4/TimeLine"

import {
    Line5Topic1,
    Line5Topic2,
    Line5Topic3,
    Line5Topic4,
    Line5Topic5,
    Line5Topic1Image,
    Line5Topic2Image,
    Line5Topic3Image,
    Line5Topic4Image,
    Line5Topic5Image,
} from "../assets/Course5/TimeLine"

import {
    Line6Topic1,
    Line6Topic2,
    Line6Topic3,
    Line6Topic4,
    Line6Topic1Image,
    Line6Topic2Image,
    Line6Topic3Image,
    Line6Topic4Image,
} from "../assets/Course6/TimeLine"

import { getMediaDurationSec } from "../utils"
import mediaDuration from "./mediaDuration"

import {
    Intro,
    Course1,
    Course2,
    Course3,
    Course4,
    Course5,
    Course6,
    Test,
} from "../assets/audio"

// TODO Добавить им разные координаты x y

const timelineData = {
    course1: {
        id: "01",
        titleAudio: Course1,
        title: '"Устойчивое развитие" - модный термин или реальность, которая касается каждого?',
        width: "2700",
        metaTitle:
            '"Устойчивое развитие" - модный термин или реальность, которая касается каждого?',
        metaDescription:
            "Что такое концепция устойчивого развития, которая часто ассоциируется с ESG? Каждая буква в аббревиатуре ESG несет свой смысл: E - экология, S - социальная сфера, G - корпоративное управление. Вместе они составляют аспекты системы устойчивого развития.",
        timeline: [
            {
                id: 0,
                intro: true,
                button: {
                    audio: Intro,
                    value: {
                        modal: [
                            {
                                top: "-20px",
                                left: "0",
                            },
                            {
                                top: "-35px",
                                left: "30px",
                            },
                        ],
                        title: "Введение",
                        time: getMediaDurationSec(mediaDuration.course1[0]),
                        bgColor: COLORS.orange,
                        image: IntroTimelineImage,
                        rotate: "-64",
                        top: "calc(50% - 150px + 110px)",
                        left: "40px",
                    },
                },
            },
            {
                id: 1,
                button: {
                    link: "topic1/point1",
                    audio: Line1Topic1,
                    value: {
                        title: "Суть концепции устойчивого развития",
                        time: getMediaDurationSec(mediaDuration.course1[1]),
                        bgColor: COLORS.green_light,
                        image: Line1Topic1Image,
                        rotate: "-127",
                        top: "calc(50% - 150px + 55px)",
                        left: "240px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_light,
                            position: "top",
                            text: "Экология Средневековья",
                            top: "calc(50% - 150px + 125px)",
                            left: "440px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.green_light,
                            position: "bottom",
                            text: "Нужен баланс",
                            top: "calc(50% - 150px + 140px)",
                            left: "495px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.green_light,
                            position: "top",
                            text: "Делать больше, ресурсов тратить меньше",
                            top: "calc(50% - 150px + 145px)",
                            left: "560px",
                        },
                    },
                    {
                        id: 4,
                        value: {
                            color: COLORS.green_light,
                            position: "bottom",
                            text: "Не брать у природы в долг",
                            top: "calc(50% - 150px + 120px)",
                            left: "620px",
                        },
                    },
                ],
            },
            {
                id: 2,
                button: {
                    link: "topic2/point1",
                    audio: Line1Topic2,
                    value: {
                        title: "Концепции ESG",
                        time: getMediaDurationSec(mediaDuration.course1[2]),
                        bgColor: COLORS.green_dark,
                        image: Line1Topic2Image,
                        rotate: "105",
                        top: "calc(50% - 150px + 45px)",
                        left: "715px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_dark,
                            position: "top",
                            text: "Все взаимосвязано",
                            top: "calc(50% - 150px + 155px)",
                            left: "930px",
                        },
                    },
                ],
            },
            {
                id: 3,
                button: {
                    link: "topic3/point1",
                    audio: Line1Topic3,
                    value: {
                        title: "А что в ФосАгро?",
                        time: getMediaDurationSec(mediaDuration.course1[3]),
                        bgColor: COLORS.brown_light,
                        image: Line1Topic3Image,
                        rotate: "165",
                        top: "calc(50% - 150px + 80px)",
                        left: "1025px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "Наши задачи",
                            top: "calc(50% - 150px + 90px)",
                            left: "1255px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "Доступные технологии",
                            top: "calc(50% - 150px + 95px)",
                            left: "1340px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "Экология",
                            top: "calc(50% - 150px + 110px)",
                            left: "1420px",
                        },
                    },
                    {
                        id: 4,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "Социальная среда",
                            top: "calc(50% - 150px + 120px)",
                            left: "1500px",
                        },
                    },
                    {
                        id: 5,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "Новые вызовы. Наша сила",
                            top: "calc(50% - 150px + 100px)",
                            left: "1580px",
                        },
                    },
                ],
            },
            {
                id: 4,
                button: {
                    link: "topic4/point1",
                    audio: Line1Topic4,
                    value: {
                        title: "А что с поставщиками и потребителями?",
                        time: getMediaDurationSec(mediaDuration.course1[4]),
                        bgColor: COLORS.brown,
                        image: Line1Topic4Image,
                        rotate: "76",
                        top: "calc(50% - 150px + 25px)",
                        left: "1670px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown,
                            position: "top",
                            text: "Экопреимущества",
                            top: "calc(50% - 150px + 130px)",
                            left: "1880px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.brown,
                            position: "bottom",
                            text: "Кодекс поставщика",
                            top: "calc(50% - 150px + 130px)",
                            left: "1940px",
                        },
                    },
                ],
            },
            {
                id: 5,
                test: true,
                button: {
                    link: "test",
                    audio: Test,
                    value: {
                        title: "Тест",
                        time: `≈${getMediaDurationSec(
                            mediaDuration.course1[5]
                        )}`,
                        bgColor: COLORS.blue,
                        image: TestImage,
                        rotate: "-150",
                        top: "calc(50% - 150px + 90px)",
                        left: "2030px",
                    },
                },
            },
        ],
    },
    course2: {
        id: "02",
        titleAudio: Course2,
        title: "Цели устойчивого развития ООН",
        width: "2450",
        metaTitle: "Цели устойчивого развития ООН",
        metaDescription:
            "Принята новая программа «Преобразование нашего мира: Повестка дня в области устойчивого развития на период до 2030 года».  Повестка дня включает 17 целей по построению устойчивого мира. Устойчивый мир — это баланс экономического роста, социальной и экологической ответственности.",
        timeline: [
            {
                id: 0,
                intro: true,
                button: {
                    audio: Intro,
                    value: {
                        modal: [
                            {
                                top: "-20px",
                                left: "0",
                            },
                            {
                                top: "-35px",
                                left: "30px",
                            },
                        ],
                        title: "Введение",
                        time: getMediaDurationSec(mediaDuration.course2[0]),
                        bgColor: COLORS.orange,
                        image: IntroTimelineImage,
                        rotate: "-64",
                        top: "calc(50% - 150px + 110px)",
                        left: "40px",
                    },
                },
            },
            {
                id: 1,
                button: {
                    link: "topic1/point1",
                    audio: Line2Topic1,
                    value: {
                        title: "Преобразования нашего мира, 17 целей",
                        time: getMediaDurationSec(mediaDuration.course2[1]),
                        bgColor: COLORS.green_light,
                        image: Line2Topic1Image,
                        rotate: "-145",
                        top: "calc(50% - 150px + 55px)",
                        left: "240px",
                    },
                },
                points: [
                    {
                        id: 1,
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
                        id: 2,
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
                        id: 3,
                        value: {
                            color: COLORS.green_light,
                            position: "top",
                            year: "2015",
                            text: "Новая программа",
                            top: "calc(50% - 150px + 125px)",
                            left: "610px",
                        },
                    },
                ],
            },
            {
                id: 2,
                button: {
                    link: "topic2/point1",
                    audio: Line2Topic2,
                    value: {
                        title: "Как ФосАгро способствует достижению ЦУР ООН",
                        time: getMediaDurationSec(mediaDuration.course2[2]),
                        bgColor: COLORS.green_dark,
                        image: Line2Topic2Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 40px)",
                        left: "700px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_dark,
                            position: "bottom",
                            year: "2018",
                            text: "Преобразования в России, компания ФосАгро",
                            top: "calc(50% - 150px + 155px)",
                            left: "890px",
                        },
                    },
                ],
            },
            {
                id: 3,
                button: {
                    link: "topic3/point1",
                    audio: Line2Topic3,
                    value: {
                        title: "Приоритизация ЦУР для ФосАгро",
                        time: getMediaDurationSec(mediaDuration.course2[3]),
                        bgColor: COLORS.brown_light,
                        image: Line2Topic3Image,
                        rotate: "165",
                        top: "calc(50% - 150px + 75px)",
                        left: "980px",
                    },
                },
                points: [
                    {
                        id: 1,
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
                        id: 2,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "ЦУР ООН 2: подход к управлению",
                            top: "calc(50% - 150px + 90px)",
                            left: "1260px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "Вклад в достижение ЦУР ООН 2",
                            top: "calc(50% - 150px + 95px)",
                            left: "1345px",
                        },
                    },
                    {
                        id: 4,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "Целевые показатели в области достижения ЦУР ООН 2",
                            top: "calc(50% - 150px + 115px)",
                            left: "1435px",
                        },
                    },
                    {
                        id: 5,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "Результаты по достижению ЦУР ООН 2",
                            top: "calc(50% - 150px + 120px)",
                            left: "1525px",
                        },
                    },
                    {
                        id: 6,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "У нас нет секретов",
                            top: "calc(50% - 150px + 90px)",
                            left: "1615px",
                        },
                    },
                ],
            },
            {
                id: 4,
                test: true,
                button: {
                    link: "test",
                    audio: Test,
                    value: {
                        title: "Тест",
                        time: `≈${getMediaDurationSec(
                            mediaDuration.course2[4]
                        )}`,
                        bgColor: COLORS.blue,
                        image: TestImage,
                        rotate: "-150",
                        top: "calc(50% - 150px + 50px)",
                        left: "1745px",
                    },
                },
            },
        ],
    },
    course3: {
        id: "03",
        titleAudio: Course3,
        title: "Инновационная деятельность ФосАгро",
        supTitle:
            "Продукция компании, цикл производства и почему мы разрабатываем новые марки и виды продукции",
        width: "3450",
        metaTitle: "Инновационная деятельность ФосАгро",
        metaDescription:
            "Новаторство позволяет повысить эффективность и соблюсти баланс безопасности и экологичности. Инновации, технологии и уникальные компетенции наших работников позволяют ФосАгро уверенно смотреть в будущее и отвечать на вызовы сегодняшнего дня.",
        timeline: [
            {
                id: 0,
                intro: true,
                button: {
                    audio: Intro,
                    value: {
                        modal: [
                            {
                                top: "-20px",
                                left: "0",
                            },
                        ],
                        title: "Введение",
                        time: getMediaDurationSec(mediaDuration.course3[0]),
                        bgColor: COLORS.orange,
                        image: IntroTimelineImage,
                        rotate: "-64",
                        top: "calc(50% - 150px + 90px)",
                        left: "55px",
                    },
                },
            },
            {
                id: 1,
                button: {
                    link: "topic1/point1",
                    audio: Line3Topic1,
                    value: {
                        title: "Мировой контекст развития инноваций",
                        time: getMediaDurationSec(mediaDuration.course3[1]),
                        bgColor: COLORS.green_light,
                        image: Line3Topic1Image,
                        rotate: "-145",
                        top: "calc(50% - 150px + 60px)",
                        left: "295px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_light,
                            position: "top",
                            text: "Новый мир",
                            top: "calc(50% - 150px + 145px)",
                            left: "520px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.green_light,
                            position: "bottom",
                            text: "Глобальные задачи",
                            top: "calc(50% - 150px + 140px)",
                            left: "580px",
                        },
                    },
                ],
            },
            {
                id: 2,
                button: {
                    link: "topic2/point1",
                    audio: Line3Topic2,
                    value: {
                        title: "Как мы определяем свои приоритеты в развитии инноваций",
                        time: getMediaDurationSec(mediaDuration.course3[2]),
                        bgColor: COLORS.green_dark,
                        image: Line3Topic2Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 40px)",
                        left: "670px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_dark,
                            position: "top",
                            text: "Открытость и контроль",
                            top: "calc(50% - 150px + 150px)",
                            left: "890px",
                        },
                    },
                ],
            },
            {
                id: 3,
                button: {
                    link: "topic3/point1",
                    audio: Line3Topic3,
                    value: {
                        title: "Что делаем мы для развития инноваций в производстве?",
                        time: getMediaDurationSec(mediaDuration.course3[3]),
                        bgColor: COLORS.brown_light,
                        image: Line3Topic3Image,
                        rotate: "165",
                        top: "calc(50% - 150px + 85px)",
                        left: "980px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "Наши инновации",
                            top: "calc(50% - 150px + 90px)",
                            left: "1190px",
                        },
                    },
                ],
            },
            {
                id: 4,
                button: {
                    link: "topic4/point1",
                    audio: Line3Topic4,
                    value: {
                        title: "Развитие элементов циркулярной экономики",
                        time: getMediaDurationSec(mediaDuration.course3[4]),
                        bgColor: COLORS.brown,
                        image: Line3Topic4Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 30px)",
                        left: "1280px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown,
                            position: "top",
                            text: "Всё в дело",
                            top: "calc(50% - 150px + 120px)",
                            left: "1490px",
                        },
                    },
                ],
            },
            {
                id: 5,
                button: {
                    link: "topic5/point1",
                    audio: Line3Topic5,
                    value: {
                        title: "Работа с поставщиками",
                        time: getMediaDurationSec(mediaDuration.course3[5]),
                        bgColor: COLORS.grey_light,
                        image: Line3Topic5Image,
                        rotate: "0",
                        top: "calc(50% - 150px + 40px)",
                        left: "1570px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.grey_light,
                            position: "bottom",
                            text: "Второстепенных ролей нет",
                            top: "calc(50% - 150px + 110px)",
                            left: "1780px",
                        },
                    },
                ],
            },
            {
                id: 6,
                button: {
                    link: "topic6/point1",
                    audio: Line3Topic6,
                    value: {
                        title: "Разработка новых продуктов",
                        time: getMediaDurationSec(mediaDuration.course3[6]),
                        bgColor: COLORS.blue_light,
                        image: Line3Topic6Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 60px)",
                        left: "1870px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.blue_light,
                            position: "top",
                            text: "Инновационные продукты ФосАгро",
                            top: "calc(50% - 150px + 160px)",
                            left: "2090px",
                        },
                    },
                ],
            },
            {
                id: 7,
                button: {
                    link: "topic7/point1",
                    audio: Line3Topic7,
                    value: {
                        title: "Международное сотрудничество и поддержка молодых ученых",
                        time: getMediaDurationSec(mediaDuration.course3[7]),
                        bgColor: COLORS.turquoise,
                        image: Line3Topic7Image,
                        rotate: "165",
                        top: "calc(50% - 150px + 100px)",
                        left: "2190px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.turquoise,
                            position: "bottom",
                            text: "Зеленая Химия для жизни",
                            top: "calc(50% - 150px + 150px)",
                            left: "2400px",
                        },
                    },
                ],
            },
            {
                id: 8,
                button: {
                    link: "topic8/point1",
                    audio: Line3Topic8,
                    value: {
                        title: "Поддержка инновационных проектов",
                        time: getMediaDurationSec(mediaDuration.course3[8]),
                        bgColor: COLORS.green_bright,
                        image: Line3Topic8Image,
                        rotate: "-165",
                        top: "calc(50% - 150px + 95px)",
                        left: "2490px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_bright,
                            position: "top",
                            text: "Все мы немного изобретатели!",
                            top: "calc(50% - 150px + 135px)",
                            left: "2700px",
                        },
                    },
                ],
            },
            {
                id: 9,
                test: true,
                button: {
                    link: "test",
                    audio: Test,
                    value: {
                        title: "Тест",
                        time: `≈${getMediaDurationSec(
                            mediaDuration.course3[9]
                        )}`,
                        bgColor: COLORS.blue,
                        image: TestImage,
                        rotate: "-150",
                        top: "calc(50% - 150px + 45px)",
                        left: "2790px",
                    },
                },
            },
        ],
    },
    course4: {
        id: "04",
        titleAudio: Course4,
        title: "Экология",
        width: "3250",
        metaTitle: "Экология",
        metaDescription:
            "Компания ФосАгро провела комплексную оценку своей деятельности, определила основные направления воздействия на компоненты окружающей среды. Экологическая стратегия Компании соотносится с Целями в области устойчивого развития ООН (ЦУР ООН)",
        timeline: [
            {
                id: 0,
                intro: true,
                button: {
                    audio: Intro,
                    value: {
                        modal: [
                            {
                                top: "-20px",
                                left: "0",
                            },
                            {
                                top: "-35px",
                                left: "30px",
                            },
                        ],
                        title: "Введение",
                        time: getMediaDurationSec(mediaDuration.course4[0]),
                        bgColor: COLORS.orange,
                        image: IntroTimelineImage,
                        rotate: "-64",
                        top: "calc(50% - 150px + 90px)",
                        left: "55px",
                    },
                },
            },
            {
                id: 1,
                button: {
                    link: "topic1/point1",
                    audio: Line4Topic1,
                    value: {
                        title: "Климатическая стратегия ФосАгро",
                        time: getMediaDurationSec(mediaDuration.course4[1]),
                        bgColor: COLORS.green_light,
                        image: Line4Topic1Image,
                        rotate: "-145",
                        top: "calc(50% - 150px + 60px)",
                        left: "295px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_light,
                            position: "top",
                            text: "Противодействие изменению климата",
                            top: "calc(50% - 150px + 145px)",
                            left: "520px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.green_light,
                            position: "bottom",
                            text: "Углерод - на минимум",
                            top: "calc(50% - 150px + 140px)",
                            left: "580px",
                        },
                    },
                ],
            },
            {
                id: 2,
                button: {
                    link: "topic2/point1",
                    audio: Line4Topic2,
                    value: {
                        title: `Программа энергоэффективности`,
                        time: getMediaDurationSec(mediaDuration.course4[2]),
                        bgColor: COLORS.green_dark,
                        image: Line4Topic2Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 40px)",
                        left: "670px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_dark,
                            position: "top",
                            text: "Энергоэффективность",
                            top: "calc(50% - 150px + 150px)",
                            left: "890px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.green_dark,
                            position: "bottom",
                            text: `“Зеленые” ресурсы`,
                            top: "calc(50% - 150px + 155px)",
                            left: "940px",
                        },
                    },
                ],
            },
            {
                id: 3,
                button: {
                    link: "topic3/point1",
                    audio: Line4Topic3,
                    value: {
                        title: "Отходы",
                        time: getMediaDurationSec(mediaDuration.course4[3]),
                        bgColor: COLORS.brown_light,
                        image: Line4Topic3Image,
                        rotate: "165",
                        top: "calc(50% - 150px + 65px)",
                        left: "1025px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "Сократить, переработать, утилизировать",
                            top: "calc(50% - 150px + 90px)",
                            left: "1230px",
                        },
                    },
                ],
            },
            {
                id: 4,
                button: {
                    link: "topic4/point1",
                    audio: Line4Topic4,
                    value: {
                        title: "Воздух",
                        time: getMediaDurationSec(mediaDuration.course4[4]),
                        bgColor: COLORS.brown,
                        image: Line4Topic4Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 30px)",
                        left: "1320px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown,
                            position: "bottom",
                            text: "Чистый воздух",
                            top: "calc(50% - 150px + 115px)",
                            left: "1520px",
                        },
                    },
                ],
            },
            {
                id: 5,
                button: {
                    link: "topic5/point1",
                    audio: Line4Topic5,
                    value: {
                        title: "Вода",
                        time: getMediaDurationSec(mediaDuration.course4[5]),
                        bgColor: COLORS.grey_light,
                        image: Line4Topic5Image,
                        rotate: "0",
                        top: "calc(50% - 150px + 20px)",
                        left: "1610px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.grey_light,
                            position: "top",
                            text: "Без стоков",
                            top: "calc(50% - 150px + 120px)",
                            left: "1830px",
                        },
                    },
                ],
            },
            {
                id: 6,
                button: {
                    link: "topic6/point1",
                    audio: Line4Topic6,
                    value: {
                        title: "Биоразнообразие",
                        time: getMediaDurationSec(mediaDuration.course4[6]),
                        bgColor: COLORS.blue_light,
                        image: Line4Topic6Image,
                        rotate: "0",
                        top: "calc(50% - 150px + 50px)",
                        left: "1920px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.blue_light,
                            position: "bottom",
                            text: "Устойчивость экосистем",
                            top: "calc(50% - 150px + 165px)",
                            left: "2120px",
                        },
                    },
                ],
            },
            {
                id: 7,
                button: {
                    link: "topic7/point1",
                    audio: Line4Topic7,
                    value: {
                        title: "Экологическая система управления ФосАгро",
                        time: getMediaDurationSec(mediaDuration.course4[7]),
                        bgColor: COLORS.turquoise,
                        image: Line4Topic7Image,
                        rotate: "0",
                        top: "calc(50% - 150px + 70px)",
                        left: "2210px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.turquoise,
                            position: "top",
                            text: "Экологический менеджмент",
                            top: "calc(50% - 150px + 150px)",
                            left: "2420px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.turquoise,
                            position: "bottom",
                            text: "Экостандарт ФосАгро",
                            top: "calc(50% - 150px + 165px)",
                            left: "2480px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.turquoise,
                            position: "top",
                            text: "Мелочей не бывает",
                            top: "calc(50% - 150px + 165px)",
                            left: "2540px",
                        },
                    },
                ],
            },
            {
                id: 8,
                test: true,
                button: {
                    link: "test",
                    audio: Test,
                    value: {
                        title: "Тест",
                        time: `≈${getMediaDurationSec(
                            mediaDuration.course4[8]
                        )}`,
                        bgColor: COLORS.blue,
                        image: TestImage,
                        rotate: "-150",
                        top: "calc(50% - 150px + 65px)",
                        left: "2640px",
                    },
                },
            },
        ],
    },
    course5: {
        id: "05",
        titleAudio: Course5,
        title: "Климат и энергоэффективность",
        width: "2750",
        metaTitle: "Климат и энергоэффективность ",
        metaDescription:
            "Основная цель ФосАгро в области климата – снижение выбросов парниковых газов к 2028 году на 14% по отношению к базовому 2018 году. В 2021 году Компания стала партнером CGI Russia. С 2021 года ФосАгро публикует климатические отчеты по стандартам TCFD.",
        timeline: [
            {
                id: 0,
                intro: true,
                button: {
                    audio: Intro,
                    value: {
                        modal: [
                            {
                                top: "-20px",
                                left: "0",
                            },
                        ],
                        title: "Введение",
                        time: getMediaDurationSec(mediaDuration.course5[0]),
                        bgColor: COLORS.orange,
                        image: IntroTimelineImage,
                        rotate: "-64",
                        top: "calc(50% - 150px + 90px)",
                        left: "55px",
                    },
                },
            },
            {
                id: 1,
                button: {
                    link: "topic1/point1",
                    audio: Line5Topic1,
                    value: {
                        title: "Как меняется климат и почему это опасно для человечества",
                        time: getMediaDurationSec(mediaDuration.course5[1]),
                        bgColor: COLORS.green_light,
                        image: Line5Topic1Image,
                        rotate: "-145",
                        top: "calc(50% - 150px + 60px)",
                        left: "295px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_light,
                            position: "top",
                            text: "+1 градус",
                            top: "calc(50% - 150px + 145px)",
                            left: "510px",
                        },
                    },
                ],
            },
            {
                id: 2,
                button: {
                    link: "topic2/point1",
                    audio: Line5Topic2,
                    value: {
                        title: "Причины глобального потепления",
                        time: getMediaDurationSec(mediaDuration.course5[2]),
                        bgColor: COLORS.green_dark,
                        image: Line5Topic2Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 50px)",
                        left: "610px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_dark,
                            position: "bottom",
                            text: "Природные аспекты",
                            top: "calc(50% - 150px + 140px)",
                            left: "845px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.green_dark,
                            position: "top",
                            text: "Антропогенные аспекты",
                            top: "calc(50% - 150px + 155px)",
                            left: "900px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.green_dark,
                            position: "bottom",
                            text: "А что с влиянием человека?",
                            top: "calc(50% - 150px + 155px)",
                            left: "955px",
                        },
                    },
                    {
                        id: 4,
                        value: {
                            color: COLORS.green_dark,
                            position: "top",
                            text: "+4 градуса",
                            top: "calc(50% - 150px + 150px)",
                            left: "1010px",
                        },
                    },
                ],
            },
            {
                id: 3,
                button: {
                    link: "topic3/point1",
                    audio: Line5Topic3,
                    value: {
                        title: "Что дальше?",
                        time: getMediaDurationSec(mediaDuration.course5[3]),
                        bgColor: COLORS.brown_light,
                        image: Line5Topic3Image,
                        rotate: "165",
                        top: "calc(50% - 150px + 50px)",
                        left: "1100px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "Физические последствия",
                            top: "calc(50% - 150px + 95px)",
                            left: "1320px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "Социальные последствия",
                            top: "calc(50% - 150px + 100px)",
                            left: "1375px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "Экономические последствия",
                            top: "calc(50% - 150px + 115px)",
                            left: "1435px",
                        },
                    },
                ],
            },
            {
                id: 4,
                button: {
                    link: "topic4/point1",
                    audio: Line5Topic4,
                    value: {
                        title: "Углеродная нейтральность",
                        time: getMediaDurationSec(mediaDuration.course5[4]),
                        bgColor: COLORS.brown,
                        image: Line5Topic4Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 40px)",
                        left: "1530px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown,
                            position: "top",
                            text: "Парижское соглашение",
                            top: "calc(50% - 150px + 100px)",
                            left: "1735px",
                        },
                    },
                ],
            },
            {
                id: 5,
                button: {
                    link: "topic5/point1",
                    audio: Line5Topic5,
                    value: {
                        title: "Климат для ФосАгро",
                        time: getMediaDurationSec(mediaDuration.course5[5]),
                        bgColor: COLORS.grey_light,
                        image: Line5Topic5Image,
                        rotate: "0",
                        top: "calc(50% - 150px + 50px)",
                        left: "1820px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.grey_light,
                            position: "bottom",
                            text: "Климат для ФосАгро",
                            top: "calc(50% - 150px + 145px)",
                            left: "2025px",
                        },
                    },
                ],
            },
            {
                id: 6,
                test: true,
                button: {
                    link: "test",
                    audio: Test,
                    value: {
                        title: "Тест",
                        time: `≈${getMediaDurationSec(
                            mediaDuration.course5[6]
                        )}`,
                        bgColor: COLORS.blue,
                        image: TestImage,
                        rotate: "-150",
                        top: "calc(50% - 150px + 90px)",
                        left: "2130px",
                    },
                },
            },
        ],
    },
    course6: {
        id: "06",
        titleAudio: Course6,
        title: "Социальная среда и права человека",
        width: "2950",
        metaTitle: "Социальная среда и права человека ",
        metaDescription:
            "Социальная ответственность - общепризнанный этический стандарт ведения современного бизнеса. Программы по обеспечению социальной защищенности, соблюдению прав человека и развитию сотрудников лежат в основе деятельности ФосАгро.",
        timeline: [
            {
                id: 0,
                intro: true,
                button: {
                    audio: Intro,
                    value: {
                        modal: [
                            {
                                top: "-20px",
                                left: "0",
                            },
                        ],
                        title: "Введение",
                        time: getMediaDurationSec(mediaDuration.course6[0]),
                        bgColor: COLORS.orange,
                        image: IntroTimelineImage,
                        rotate: "-64",
                        top: "calc(50% - 150px + 90px)",
                        left: "55px",
                    },
                },
            },
            {
                id: 1,
                button: {
                    link: "topic1/point1",
                    audio: Line6Topic1,
                    value: {
                        title: "Права человека и социальные принципы ФосАгро",
                        time: getMediaDurationSec(mediaDuration.course6[1]),
                        bgColor: COLORS.green_light,
                        image: Line6Topic1Image,
                        rotate: "-145",
                        top: "calc(50% - 150px + 60px)",
                        left: "295px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_light,
                            position: "top",
                            text: "Права человека",
                            top: "calc(50% - 150px + 145px)",
                            left: "510px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.green_light,
                            position: "bottom",
                            text: "Социальные инструменты ФосАгро",
                            top: "calc(50% - 150px + 140px)",
                            left: "570px",
                        },
                    },
                ],
            },
            {
                id: 2,
                button: {
                    link: "topic2/point1",
                    audio: Line6Topic2,
                    value: {
                        title: "Сотрудники ФосАгро - ключ к успеху Компании",
                        time: getMediaDurationSec(mediaDuration.course6[2]),
                        bgColor: COLORS.green_dark,
                        image: Line6Topic2Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 50px)",
                        left: "650px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_dark,
                            position: "top",
                            text: "Мы - ФосАгро",
                            top: "calc(50% - 150px + 145px)",
                            left: "865px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.green_dark,
                            position: "bottom",
                            text: "Работаем и учимся",
                            top: "calc(50% - 150px + 150px)",
                            left: "920px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.green_dark,
                            position: "top",
                            text: "Наша молодежь",
                            top: "calc(50% - 150px + 150px)",
                            left: "980px",
                        },
                    },
                    {
                        id: 4,
                        value: {
                            color: COLORS.green_dark,
                            position: "bottom",
                            text: "Наша поддержка",
                            top: "calc(50% - 150px + 140px)",
                            left: "1050px",
                        },
                    },
                ],
            },
            {
                id: 3,
                button: {
                    link: "topic3/point1",
                    audio: Line6Topic3,
                    value: {
                        title: "Охрана труда и промышленной безопасности",
                        time: getMediaDurationSec(mediaDuration.course6[3]),
                        bgColor: COLORS.brown_light,
                        image: Line6Topic3Image,
                        rotate: "165",
                        top: "calc(50% - 150px + 50px)",
                        left: "1135px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "“Золотые правила” безопасности",
                            top: "calc(50% - 150px + 95px)",
                            left: "1345px",
                        },
                    },
                ],
            },
            {
                id: 4,
                button: {
                    link: "topic4/point1",
                    audio: Line6Topic4,
                    value: {
                        title: "Вовлечение местных сообществ",
                        time: getMediaDurationSec(mediaDuration.course6[4]),
                        bgColor: COLORS.brown,
                        image: Line6Topic4Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 40px)",
                        left: "1440px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown,
                            position: "bottom",
                            text: "Социальные программы ФосАгро",
                            top: "calc(50% - 150px + 85px)",
                            left: "1655px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.brown,
                            position: "top",
                            text: "Любимые города",
                            top: "calc(50% - 150px + 95px)",
                            left: "1725px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.brown,
                            position: "bottom",
                            text: "Школа - ВУЗ - предприятие",
                            top: "calc(50% - 150px + 115px)",
                            left: "1800px",
                        },
                    },
                    {
                        id: 4,
                        value: {
                            color: COLORS.brown,
                            position: "top",
                            text: "Образование, здоровье, духовность",
                            top: "calc(50% - 150px + 125px)",
                            left: "1875px",
                        },
                    },
                    {
                        id: 5,
                        value: {
                            color: COLORS.brown,
                            position: "bottom",
                            text: "Духовное возрождение",
                            top: "calc(50% - 150px + 130px)",
                            left: "1955px",
                        },
                    },
                    {
                        id: 6,
                        value: {
                            color: COLORS.brown,
                            position: "top",
                            text: "Связь поколений",
                            top: "calc(50% - 150px + 140px)",
                            left: "2030px",
                        },
                    },
                    {
                        id: 7,
                        value: {
                            color: COLORS.brown,
                            position: "bottom",
                            text: "Помогать важно",
                            top: "calc(50% - 150px + 165px)",
                            left: "2110px",
                        },
                    },
                    {
                        id: 8,
                        value: {
                            color: COLORS.brown,
                            position: "top",
                            text: "Спорт",
                            top: "calc(50% - 150px + 165px)",
                            left: "2180px",
                        },
                    },
                ],
            },
            {
                id: 5,
                test: true,
                button: {
                    link: "test",
                    audio: Test,
                    value: {
                        title: "Тест",
                        time: `≈${getMediaDurationSec(
                            mediaDuration.course6[5]
                        )}`,
                        bgColor: COLORS.blue,
                        image: TestImage,
                        rotate: "-150",
                        top: "calc(50% - 150px + 80px)",
                        left: "2290px",
                    },
                },
            },
        ],
    },
}

export default timelineData
