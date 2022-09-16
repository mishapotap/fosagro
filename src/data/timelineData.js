// import * as routes from "../constants/routes"

import {
    CourseButtonImage1,
    CourseButtonImage2,
    CourseButtonImage3,
    CourseButtonImage4,
    CourseButtonImage5,
    CourseButtonImage6,
    CourseButtonImage7,
    CourseButtonImage8,
    CourseButtonImage9,
    CourseButtonImage10,
} from "../assets/images"
import { COLORS } from "../constants"

// TODO Добавить им разные координаты x y

const timelineData = {
    course1: {
        id: "01",
        title: '"Устойчивое развитие" - модный термин или реальность, которая касается каждого?',
        width: "2300",
        timeline: [
            {
                id: 1,
                button: {
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
            },
            {
                id: 2,
                button: {
                    link: "topic1/point1",
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
                            text: "Концепция устойчивого развития - не брать у природы в долг",
                            top: "calc(50% - 150px + 120px)",
                            left: "620px",
                        },
                    },
                ],
            },
            {
                id: 3,
                button: {
                    link: "topic2/point1",
                    value: {
                        title: "Концепции ESG",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "30 сек",
                        bgColor: COLORS.green_dark,
                        image: CourseButtonImage3,
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
                id: 4,
                button: {
                    link: "topic3/point1",
                    value: {
                        title: "А что в ФосАгро?",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "1 мин 20 сек",
                        bgColor: COLORS.brown_light,
                        image: CourseButtonImage4,
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
                            text: "Наши результаты, снизили выбросы",
                            top: "calc(50% - 150px + 95px)",
                            left: "1340px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "Наши результаты, снизили сброс сточных вод",
                            top: "calc(50% - 150px + 110px)",
                            left: "1420px",
                        },
                    },
                    {
                        id: 4,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "Наши результаты, проекты",
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
                id: 5,
                button: {
                    link: "topic4/point1",
                    value: {
                        title: "А что с поставщиками и потребителями?",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "1 мин 30 сек",
                        bgColor: COLORS.brown,
                        image: CourseButtonImage5,
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
                            text: "Зеленый стандарт",
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
                id: 6,
                button: {
                    link: "test",
                    value: {
                        title: "Тест",
                        description:
                            "Короткий тест на 5 вопросов по содержанию раздела.",
                        time: "≈4 мин",
                        bgColor: COLORS.blue,
                        image: CourseButtonImage6,
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
        title: "Цели устойчивого развития ООН",
        width: "2050",
        timeline: [
            {
                id: 1,
                button: {
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
            },
            {
                id: 2,
                button: {
                    link: "topic1/point1",
                    value: {
                        title: "Преобразования нашего мира, 17 целей",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "4мин 30сек",
                        bgColor: COLORS.green_light,
                        image: CourseButtonImage2,
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
                id: 3,
                button: {
                    link: "topic2/point1",
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
                id: 4,
                button: {
                    link: "topic3/point1",
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
                            text: "Каков наш подход в области управления?",
                            top: "calc(50% - 150px + 90px)",
                            left: "1260px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "Какой вклад вносит Компания в достижение ЦУР 2?",
                            top: "calc(50% - 150px + 95px)",
                            left: "1345px",
                        },
                    },
                    {
                        id: 4,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "Какие цели ставит перед собой компания?",
                            top: "calc(50% - 150px + 115px)",
                            left: "1435px",
                        },
                    },
                    {
                        id: 5,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "Как компания двигается к достижению этих целей? ",
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
                id: 5,
                button: {
                    link: "test",
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
            },
        ],
    },
    course3: {
        id: "03",
        title: "Инновационная деятельность ФосАгро",
        supTitle:
            "Продукция компании, цикл производства и почему мы разрабатываем новые марки и виды продукции?",
        width: "3050",
        timeline: [
            {
                id: 1,
                button: {
                    value: {
                        modal: [
                            {
                                top: "-20px",
                                left: "0",
                            },
                        ],
                        title: "Введение",
                        description:
                            "Уникальные разработки и нновационныерешения.",
                        time: "21 сек",
                        bgColor: COLORS.orange,
                        image: CourseButtonImage1,
                        rotate: "-64",
                        top: "calc(50% - 150px + 90px)",
                        left: "55px",
                    },
                },
            },
            {
                id: 2,
                button: {
                    link: "topic1/point1",
                    value: {
                        title: "Мировой контекст развития инноваций",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "1мин 40сек",
                        bgColor: COLORS.green_light,
                        image: CourseButtonImage2,
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
                id: 3,
                button: {
                    link: "topic2/point1",
                    value: {
                        title: "Как мы определяем свои приоритеты в развитии инноваций",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "1мин 10сек",
                        bgColor: COLORS.green_dark,
                        image: CourseButtonImage3,
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
                id: 4,
                button: {
                    link: "topic3/point1",
                    value: {
                        title: "Что делаем мы для развития инноваций в производстве?",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "1мин 20сек",
                        bgColor: COLORS.brown_light,
                        image: CourseButtonImage4,
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
                id: 5,
                button: {
                    link: "topic4/point1",
                    value: {
                        title: "Развитие элементов циркулярной экономики",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "1мин 30сек",
                        bgColor: COLORS.brown,
                        image: CourseButtonImage5,
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
                id: 6,
                button: {
                    link: "topic5/point1",
                    value: {
                        title: "Работа с поставщиками",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "1мин 30сек",
                        bgColor: COLORS.grey_light,
                        image: CourseButtonImage7,
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
                id: 7,
                button: {
                    link: "topic6/point1",
                    value: {
                        title: "Разработка новых продуктов",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "1мин",
                        bgColor: COLORS.blue_light,
                        image: CourseButtonImage8,
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
                id: 8,
                button: {
                    link: "topic7/point1",
                    value: {
                        title: "Международное сотрудничество и поддержка молодых ученых",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "2мин 10сек",
                        bgColor: COLORS.turquoise,
                        image: CourseButtonImage9,
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
                id: 9,
                button: {
                    link: "topic8/point1",
                    value: {
                        title: "Поддержка инновационных проектов",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "1мин 10сек",
                        bgColor: COLORS.coral,
                        image: CourseButtonImage10,
                        rotate: "-165",
                        top: "calc(50% - 150px + 95px)",
                        left: "2490px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.coral,
                            position: "top",
                            text: "Все мы немного изобретатели!",
                            top: "calc(50% - 150px + 135px)",
                            left: "2700px",
                        },
                    },
                ],
            },
            {
                id: 10,
                button: {
                    link: "test",
                    value: {
                        title: "Тест",
                        description:
                            "Короткий тест на 5 вопросов по содержанию раздела.",
                        time: "≈4 мин",
                        bgColor: COLORS.blue,
                        image: CourseButtonImage6,
                        rotate: "-150",
                        top: "calc(50% - 150px + 45px)",
                        left: "2790px",
                    },
                },
            },
        ],
    },
    course5: {
        id: "05",
        title: "Климат и энергоэффективность",
        width: "2750",
        timeline: [
            {
                id: 1,
                button: {
                    value: {
                        modal: [
                            {
                                top: "-20px",
                                left: "0",
                            },
                        ],
                        title: "Введение",
                        description:
                            "Уникальные разработки и нновационныерешения.",
                        time: "21 сек",
                        bgColor: COLORS.orange,
                        image: CourseButtonImage1,
                        rotate: "-64",
                        top: "calc(50% - 150px + 90px)",
                        left: "55px",
                    },
                },
            },
            {
                id: 2,
                button: {
                    link: "topic1/point1",
                    value: {
                        title: "Как меняется климат и почему это опасно для человечества",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "1мин 40сек",
                        bgColor: COLORS.green_light,
                        image: CourseButtonImage2,
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
                id: 3,
                button: {
                    link: "topic2/point1",
                    value: {
                        title: "Причины глобального потепления",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "30сек",
                        bgColor: COLORS.green_dark,
                        image: CourseButtonImage3,
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
                id: 4,
                button: {
                    link: "topic3/point1",
                    value: {
                        title: "Что дальше?",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "1мин 20сек",
                        bgColor: COLORS.brown_light,
                        image: CourseButtonImage4,
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
                id: 5,
                button: {
                    link: "topic4/point1",
                    value: {
                        title: "Углеродная нейтральность",
                        description:
                            "Краткая выжимка в несколько слов о чем будет в разделе",
                        time: "1мин 30сек",
                        bgColor: COLORS.brown,
                        image: CourseButtonImage5,
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
                id: 6,
                button: {
                    link: "topic5/point1",
                    value: {
                        title: "Работа с поставщиками",
                        description: "Климат для ФосАгро",
                        time: "1мин 30сек",
                        bgColor: COLORS.grey_light,
                        image: CourseButtonImage7,
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
                id: 7,
                button: {
                    link: "test",
                    value: {
                        title: "Тест",
                        description:
                            "Короткий тест на 5 вопросов по содержанию раздела.",
                        time: "≈4 мин",
                        bgColor: COLORS.blue,
                        image: CourseButtonImage6,
                        rotate: "-150",
                        top: "calc(50% - 150px + 90px)",
                        left: "2130px",
                    },
                },
            },
        ],
    },
}

export default timelineData
