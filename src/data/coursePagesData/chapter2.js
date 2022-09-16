import {
    CourseSliderTwo21,
    CourseSliderTwo22,
    CourseSliderTwo23,
} from "../../assets/Course2/Topic2"
import { MainBG } from "../../assets/video"

// TODO заполнить нормальные данные для аудио, видео, слайдеров и ссылок

const chapter2Data = {
    1: {
        sectTitle: "Преобразования нашего мира. 17 целей",
        pages: {
            1: {
                title: "Пределы роста",
                audioSrc: "",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "В 1972 году:",
                            items: [
                                {
                                    id: 1,
                                    text: "опубликован доклад <span>«Пределы роста»;</span>",
                                },
                                {
                                    id: 2,
                                    text: "создана профильная программа при ООН;",
                                },
                                {
                                    id: 3,
                                    text: "впервые употреблен термин <span>«устойчивое развитие».</span>",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "animation",
                    component: "AnimateChart",
                },
            },
            2: {
                title: "Глобальный договор",
                audioSrc: "",
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
                                    text: "провозглашаются <span>десять</span> всеобщих принципов развития компаний.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "animation",
                    component: "AnimateGlobalContract",
                },
            },
            3: {
                title: "На повестке дня - устойчивое развитие",
                audioSrc: "",
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
                                    text: "повестка дня включает <span>17 целей</span> по построению устойчивого мира;",
                                },
                                {
                                    id: 3,
                                    text: "устойчивый мир — это <span>баланс</span> экономического роста, социальной и экологической ответственности.",
                                },
                            ],
                        },
                    },
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
                        // TODO попросить рабочую ссылку?
                        url: "https://www.un.org/ga/search/view_doc.asp?symbol=A/RES/70/1&Lang=R",
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
                audioSrc: "",
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
                                    id: 3,
                                    text: "В 2019 году в ФосАгро <span>создан комитет</span> Совета директоров по устойчивому развитию.",
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
                audioSrc: "",
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
                                    text: "Цели стратегии развития ФосАгро связаны с <span>мировым рынком</span> экоэффективных удобрений.",
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
                    data: { src: MainBG },
                },
                links: [
                    {
                        id: 1,
                        text: "Годовой отчет ФосАгро 2021 года",
                        url: "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://cdn.phosagro.ru/upload/iblock/dc9/dc9ee42f1af7716f4ce9cebfde271755.pdf",
                    },
                ],
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
                    data: { src: MainBG },
                },
                links: [
                    { id: 1, text: "Каталог продукции ФосАгро", url: "https://www.phosagro.ru/production/" },
                    // TODO добавить ссылку
                    {
                        id: 2,
                        text: "Проекты ФосАгро, направленные на сохранение и повышение почвенного плодородия",
                        url: "#",
                    },
                ],
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
                                    text: "<span>увеличить продажи удобрений</span> на стратегически приоритетных рынках до <span>10,3</span> млн тонн (<span>89%</span> от общего объема продукции);",
                                },
                                {
                                    id: 2,
                                    text: "<span>увеличить долю продаж премиальных</span>, содержащих более 2 полезных элементов, <span>марок удобрений</span> до <span>5</span> млн тонн (<span>43%</span> от общего объема продукции);",
                                },
                                {
                                    id: 3,
                                    text: "<span>увеличить</span> количество дистрибуционных <span>центров</span> до <span>35;</span>",
                                },
                                {
                                    id: 4,
                                    text: "<span>повысить ёмкость</span> баз хранения до показателей свыше <span>650</span> тысяч тонн.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: { src: MainBG },
                },
                links: [
                    {
                        id: 1,
                        text: "Приверженность ЦУР ООН в ФосАгро",
                        url: "https://www.phosagro.ru/sustainability/",
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
                                    text: "<span>продажи на приоритетных рынках</span> составили <span>9,2</span> млн тонн (<span>90%</span> от общего объема);",
                                },
                                {
                                    id: 2,
                                    text: "<span>продажи премиальных марок</span> составили <span>3,6</span> млн тонн (<span>35%</span> от общего объема);",
                                },
                                {
                                    id: 3,
                                    text: "<span>количество дистрибуционных центров</span> возросло до <span>31</span>, а <span>емкости складов</span> – до <span>765</span> тыс. тонн.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: { src: MainBG },
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
                    data: { src: MainBG },
                },
            },
        },
    },
}

export default chapter2Data