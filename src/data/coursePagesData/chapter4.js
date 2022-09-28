import { MainBG } from "../../assets/video"
// временно
import {
    CourseSliderFour11,
    CourseSliderFour12,
    CourseSliderFour13,
    Speaker71,
} from "../../assets/Course4/Topic7/Point1"

import {
    CourseSliderFour21,
    CourseSliderFour22,
    CourseSliderFour23,
    Speaker72,
} from "../../assets/Course4/Topic7/Point2"

import {
    CourseSliderFour31,
    CourseSliderFour32,
    CourseSliderFour33,
    Speaker73,
} from "../../assets/Course4/Topic7/Point3"

const chapter4Data = {
    1: {
        sectTitle: "Климатическая стратегия ФосАгро",
        pages: {
            1: {
                title: "Противодействие изменению климата",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "Наши цели к 2028 году:",
                            items: [
                                {
                                    id: 1,
                                    text: 'снижение валовых выбросов парниковых газов (<span class="bubble-trigger" data-id="1">охват 1</span>, <span class="bubble-trigger" data-id="2">охват 2</span> и <span class="bubble-trigger" data-id="3">охват 3</span>) на 14%;',
                                },
                                {
                                    id: 2,
                                    text: "снижение удельных выбросов парниковых газов охвата 1 на 31%.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "По итогам 2021 года нам уже удалось снизить валовые выбросы на 4% к 2018 году, а удельные (на тонну продукции и полуфабрикатов, с учетом почти 15% роста производства за этот период)– на 16%.",
                        },
                    },
                    {
                        component: "Bubble",
                        data: {
                            id: 1,
                            title: "Охват 1",
                            text: "Прямые выбросы парниковых газов из источников, принадлежащих или контролируемых организацией.",
                        },
                    },
                    {
                        component: "Bubble",
                        data: {
                            id: 2,
                            title: "Охват 2",
                            text: "Косвенные выбросы парниковых газов, связанные с покупкой электроэнергии, тепловой энергии и пара, потребляемых организацией.",
                        },
                    },
                    {
                        component: "Bubble",
                        data: {
                            id: 3,
                            title: "Охват 3",
                            text: "Остальные косвенные выбросы парниковых газов, которые происходят за пределами организации.",
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: MainBG,
                    },
                },
                links: [
                    {
                        id: 1,
                        text: "TCFD отчет ФосАгро 2020",
                        url: "https://cdn.phosagro.ru/upload/iblock/35c/35c2ee0bc879eb911cb2aa1a4dddf722.pdfchrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://cdn.phosagro.ru/upload/iblock/35c/35c2ee0bc879eb911cb2aa1a4dddf722.pdf",
                    },
                    {
                        id: 2,
                        text: "Полный список сторонников TCFD",
                        url: "https://www.fsb-tcfd.org/supporters/",
                    },
                ],
            },
            2: {
                title: "Углерод - на минимум",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Компания расширила выпуск нового удобрения с низкоуглеродными характеристиками.",
                                },
                                {
                                    id: 2,
                                    text: "Заключен контракт на поставку «зеленой» электроэнергии. ",
                                },
                                {
                                    id: 3,
                                    text: "Введение механизма трансграничного углеродного регулирования.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: MainBG,
                    },
                },
            },
        },
    },
    2: {
        sectTitle: "Программа энергоэффективности",
        pages: {
            1: {
                title: "Энергоэффективность",
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "Основная цель программы - обеспечение основных технологических процессов <span>сокращения выбросов парниковых газов охвата 2 до 794,7 тыс. т</span> СО2-эквивалента к 2028 году за счет повышения энергетической и экологической эффективности ",
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: MainBG,
                    },
                },
                links: [
                    {
                        id: 1,
                        text: "Программа энергоэффективности на 2020-2023 гг.",
                        url: "https://www.phosagro.ru/upload/docs/Energy_efficiency_program_ru.pdf ",
                    },
                ],
            },
            2: {
                title: "“Зеленые” ресурсы в ФосАгро",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Сократили выбросы парниковых газов охвата 2 на 3,3% за счет закупки зеленой электроэнергии.",
                                },
                                {
                                    id: 2,
                                    text: "Снизили удельный показатель потребления всех видов энергоресурсов на 3,43%.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: MainBG,
                    },
                },
            },
        },
    },
    3: {
        sectTitle: "Отходы",
        pages: {
            1: {
                title: "Сократить, переработать, утилизировать",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Основные проекты Компании за 2021 год.",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Мы модернизировали производство фторида алюминия в Череповце.",
                                },
                                {
                                    id: 2,
                                    text: "Мы повысили эффективность переработки руд в Кировске.",
                                },
                                {
                                    id: 3,
                                    text: "Мы продвигаем фосфогипс как товарный продукт.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Наша цель существенно сократить отходы и увеличить долю переработки и утилизации до 40% к 2025г.",
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: MainBG,
                    },
                },
            },
        },
    },
    4: {
        sectTitle: "Воздух",
        pages: {
            1: {
                title: "Чистый воздух",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Основные проекты Компании за 2021 год.",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Инвестиции в капитальные проекты Череповецкого производственного комплекса АО «Апатит» в 2021 году в рамках проекта «Чистый воздух» превысили 1 млрд руб.",
                                },
                                {
                                    id: 2,
                                    text: "Монтаж и модернизация оборудования для газоочистки в Волхове. ",
                                },
                                {
                                    id: 3,
                                    text: "Модернизация газоочистного оборудования в Балаково. ",
                                },
                                {
                                    id: 4,
                                    text: "Пылеподавление пылящих поверхностей в Кировске.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Удельные выбросы загрязняющих веществ составили 0,801 кг/т, что на 24% меньше, чем в базовом 2018 году.",
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: MainBG,
                    },
                },
                links: [
                    {
                        id: 1,
                        text: "Федеральный проект “Чистый воздух”",
                        url: "http://min.prirodyair.tilda.ws/",
                    },
                ],
            },
        },
    },
    5: {
        sectTitle: "Вода",
        pages: {
            1: {
                title: "Без стоков",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Мы провели первый этап программы оптимизации водопользования в Череповце.",
                                },
                                {
                                    id: 2,
                                    text: "Мы реализуем проект генерации электроэнергии со схемой химической водоочистки и повторного использования сточных вод в Волхове.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Уже сегодня два предприятия в Волхове и Балаково работают без стоков. На всех предприятиях ФосАгро ведется работа по созданию замкнутого водооборотного цикла.",
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: MainBG,
                    },
                },
                links: [
                    {
                        id: 1,
                        text: "Водная стратегия ФосАгро",
                        url: "https://www.phosagro.ru/upload/docs/society-water-strategy_ru.pdf",
                    },
                ],
            },
        },
    },
    6: {
        sectTitle: "Биоразнообразие",
        pages: {
            1: {
                title: "Устойчивость экосистем",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Мы разрабатываем комплексные программы по сохранению биологического разнообразия во всех регионах присутствия.",
                                },
                                {
                                    id: 2,
                                    text: "Вместе со специалистами научно-исследовательских организаций мы проводим оценку состояния окружающей среды в регионах присутствия.",
                                },
                                {
                                    id: 3,
                                    text: "Мы завершили в 2021 году разработку комплексных программ для череповецкой и волховской производственных площадок.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: MainBG,
                    },
                },
                links: [
                    {
                        id: 1,
                        text: "Программа по сохранению биоразнообразия",
                        url: "https://www.phosagro.ru/upload/docs/prezentasion-programm.pdf",
                    },
                ],
            },
        },
    },
    7: {
        sectTitle: "Экологическая система управления ФосАгро",
        pages: {
            1: {
                title: "Экологический менеджмент",
                audioSrc: Speaker71,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Подход Компании к управлению",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Реализацию экологической стратегии Компании контролирует совет директоров.",
                                },
                                {
                                    id: 2,
                                    text: "Экологическая система менеджмента ФосАгро прошла сертификацию на соответствие международным стандартам ISO 14001.",
                                },
                                {
                                    id: 3,
                                    text: "Система управления охраной окружающей среды базируется на строгом соответствии применимым законодательным требованиям.",
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
                            source: CourseSliderFour11,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderFour12,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderFour13,
                            alt: "image3",
                        },
                    ],
                },
                links: [
                    {
                        id: 1,
                        text: "Система экологического менеджмента",
                        url: "https://www.phosagro.ru/sustainability/ecology/#accordion-ecology-management-system",
                    },
                ],
            },
            2: {
                title: "Экостандарт ФосАгро",
                audioSrc: Speaker72,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Сертификация “Листок жизни”",
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "Важно отметить, что для оценки продуктов, проектов и услуг Экологический союз использует научно обоснованный подход, базирующийся на комплексном анализе жизненного цикла.",
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: "Slider",
                    data: [
                        {
                            source: CourseSliderFour21,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderFour22,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderFour23,
                            alt: "image3",
                        },
                    ],
                },
                links: [
                    {
                        id: 1,
                        text: "Экопреимущества",
                        url: "https://www.phosagro.ru/production/eco/",
                    },
                ],
            },
            3: {
                title: "Мелочей не бывает",
                audioSrc: Speaker73,
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "ФосАгро осознает свое влияние на окружающую среду. Все новые производства проектируются с учетом соответствия наилучшим доступным технологиям и эксплуатируются с безусловным соблюдением применимых экологических стандартов.",
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: "Slider",
                    data: [
                        {
                            source: CourseSliderFour31,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderFour32,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderFour33,
                            alt: "image3",
                        },
                    ],
                },
            },
        },
    },
}

export default chapter4Data
