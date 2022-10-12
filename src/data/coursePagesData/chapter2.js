import {
    CourseSliderTwo21,
    CourseSliderTwo22,
    CourseSliderTwo23,
    Speaker21,
} from "../../assets/Course2/Topic2"

import {
    Video32,
    Video33,
    Video34,
    Video35,
    Video36,
} from "../../assets/Course2/Topic3"

import { Speaker11 } from "../../assets/Course2/Topic1/Point1"
import { Speaker12 } from "../../assets/Course2/Topic1/Point2"
import { Speaker13 } from "../../assets/Course2/Topic1/Point3"
import { Speaker31 } from "../../assets/Course2/Topic3/Point1"

// TODO заполнить нормальные данные для аудио, видео, слайдеров и ссылок

const chapter2Data = {
    1: {
        sectTitle: "Преобразования нашего мира. 17 целей",
        pages: {
            1: {
                title: "Пределы роста",
                audioSrc: Speaker11,
                content: [
                    {
                        component: "List",
                        data: {
                            title: "В 1972 году:",
                            items: [
                                {
                                    id: 1,
                                    text: "опубликован доклад <span>«Пределы роста»</span>;",
                                },
                                {
                                    id: 2,
                                    text: "создана профильная <span>программа при ООН</span>;",
                                },
                                {
                                    id: 3,
                                    text: "впервые употреблен термин <span>«устойчивое развитие»</span>.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "animation",
                    component: "AnimateChart",
                },
                links: [
                    {
                        id: 1,
                        text: "Римский клуб",
                        url: "https://www.clubofrome.org/",
                    },
                ],
            },
            2: {
                title: "Глобальный договор",
                audioSrc: Speaker12,
                content: [
                    {
                        component: "List",
                        data: {
                            title: "В 1999 году:",
                            items: [
                                {
                                    id: 1,
                                    text: "создан Глобальный договор ООН;",
                                },
                                {
                                    id: 2,
                                    text: "провозглашаются десять всеобщих принципов развития компаний.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "animation",
                    component: "AnimateGlobalContract",
                },
                links: [
                    {
                        id: 1,
                        text: "Глобальный договор ООН",
                        url: "http://globalcompact.ru/",
                    },
                ],
            },
            3: {
                title: "На повестке дня - устойчивое развитие",
                audioSrc: Speaker13,
                content: [
                    {
                        component: "List",
                        data: {
                            title: "В 2015 году:",
                            items: [
                                {
                                    id: 1,
                                    text: "принята новая программа «Преобразование нашего мира: Повестка дня в области устойчивого развития на период до 2030 года»;",
                                },
                                {
                                    id: 2,
                                    text: "повестка дня включает <span>17 целей</span> по построению устойчивого мира.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Устойчивый мир — это баланс экономического роста, социальной и экологической ответственности."
                        }
                    }
                ],
                media: {
                    type: "objectSlider",
                    component: "ObjectSlider",
                    data: { type: "OOH" },
                },
                links: [
                    {
                        id: 1,
                        text: "Повестка дня в области устойчивого развития на период до 2030 года",
                        url: "https://sdgs.un.org/ru/2030agenda",
                    },
                ],
            },
        },
    },
    2: {
        sectTitle: "Как ФосАгро способствует достижению ЦУР ООН",
        pages: {
            1: {
                title: "Роль ФосАгро",
                audioSrc: Speaker21,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "ФосАгро играет важную роль в обеспечении <span>глобальной продовольственной безопасности.</span>",
                                },
                                {
                                    id: 2,
                                    text: "В  2018 году определены <span>10 целей</span> устойчивого развития ООН ФосАгро.",
                                },
                                {
                                    text: "В 2019 году в ФосАгро <span>создан комитет</span> Совета директоров по устойчивому развитию (с 2022 — комитет по стратегии и устойчивому развитию).",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: "Slider",
                    data: [
                        {
                            source: CourseSliderTwo21,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderTwo22,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderTwo23,
                            alt: "image3",
                        },
                    ],
                },
            },
        },
    },
    3: {
        sectTitle: "Приоритизация ЦУР для ФосАгро",
        pages: {
            1: {
                title: "Наши цели устойчивого развития",
                audioSrc: Speaker31,
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "В 2020 году мы провели процедуру приоритизации Целей устойчивого развития для ФосАгро. В результате определены <span>11 целей</span>, достижению которых способствует наша Компания.",
                        },
                    },
                ],
                media: {
                    type: "objectSlider",
                    component: "ObjectSlider",
                    data: { type: "fosagro" },
                },
            },
            2: {
                title: "Каков наш подход в области управления?",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "<span>Цели Стратегии развития</span> ФосАгро <span>связаны с мировым рынком</span> экоэффективных удобрений.",
                                },
                                {
                                    id: 2,
                                    text: "Стратегия влияет на <span>реальные бюджеты</span> Компании и производственные планы.",
                                },
                                {
                                    id: 3,
                                    text: "Реализацию стратегии контролирует <span>Совет директоров</span> «ФосАгро».",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: { src: Video32 },
                },
            },
            3: {
                title: "Какой вклад вносит Компания в достижение ЦУР 2?",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Инновационные системы питания растений.",
                                },
                                { id: 2, text: "Новые марки удобрений." },
                                { id: 3, text: "Плодородие почв." },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: { src: Video33 },
                },
            },
            4: {
                title: "Какие цели ставит перед собой Компания?",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "К 2025 году:",
                            items: [
                                {
                                    id: 1,
                                    text: "<span>увеличить продажи удобрений</span> на стратегически приоритетных рынках до <span>10,3</span> млн т (<span>89%</span> от общего объема продукции);",
                                },
                                {
                                    id: 2,
                                    text: "<span>увеличить долю продаж премиальных</span>, содержащих более 2 полезных элементов, <span>марок удобрений</span> до <span>5</span> млн т (<span>43%</span> от общего объема продукции);",
                                },
                                {
                                    id: 3,
                                    text: "<span>увеличить</span> количество дистрибуционных <span>центров</span> до <span>35 ед.;</span>",
                                },
                                {
                                    id: 4,
                                    text: "<span>повысить ёмкость</span> баз хранения до показателей свыше <span>650</span> тыс. т.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: { src: Video34 },
                },
                links: [
                    {
                        id: 1,
                        text: "Цель 2: Ликвидация голода",
                        url: "https://www.phosagro.ru/sustainability/zero-hunger/",
                    },
                ],
            },
            5: {
                title: "Как Компания двигается к достижению этих целей?",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "В 2021 году:",
                            items: [
                                {
                                    id: 1,
                                    text: "<span>продажи на приоритетных рынках</span> составили <span>9,2</span> млн т (<span>90%</span> от общего объема);",
                                },
                                {
                                    id: 2,
                                    text: "<span>продажи премиальных марок</span> составили <span>3,6</span> млн т (<span>35%</span> от общего объема);",
                                },
                                {
                                    id: 3,
                                    text: "<span>количество дистрибуционных центров</span> возросло до <span>31</span>, а <span>емкости складов</span> – до <span>765</span> тыс. т.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: { src: Video35 },
                },
                links: [
                    {
                        id: 1,
                        text: "Приверженность ЦУР ООН в ФосАгро",
                        url: "https://www.phosagro.ru/sustainability/",
                    },
                ],
            },
            6: {
                title: "У нас нет секретов",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "ФосАгро следует международным стандартам раскрытия.",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Глобальной инициативе по отчётности <span>(GRI).</span>",
                                },
                                {
                                    id: 2,
                                    text: "Совету по стандартам учета в области устойчивого развития <span>(SASB).</span>",
                                },
                                {
                                    id: 3,
                                    text: "Рабочей группе по раскрытию финансовой информации, связанной с изменением климата <span>(TCFD).</span>",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Ключевой аспект деятельности ФосАгро - повышенная социальная и экологическая ответственность. Это не дань моде. Это необходимость.",
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: { src: Video36 },
                },
            },
        },
    },
}

export default chapter2Data
