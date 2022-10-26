import {
    CourseSliderOne21,
    CourseSliderOne22,
    CourseSliderOne23,
    Speaker12,
} from "../../assets/Course1/Topic1/Point2"
import { Speaker11 } from "../../assets/Course1/Topic1/Point1"

import {
    CourseSliderOne31,
    CourseSliderOne32,
    CourseSliderOne33,
    Speaker13,
} from "../../assets/Course1/Topic1/Point3"

import Speaker14 from "../../assets/Course1/Topic1/Point4/speaker14.mp3"

import { Speaker21 } from "../../assets/Course1/Topic2"
import {
    Video31,
    Video32,
    Video33,
    Video34,
    Video35,
} from "../../assets/Course1/Topic3"
import { Video41, Video42 } from "../../assets/Course1/Topic4"

const chapter1Data = {
    1: {
        sectTitle: "Суть концепции устойчивого развития",
        pages: {
            1: {
                title: "Экология Средневековья",
                audioSrc: Speaker11,
                content: [
                    {
                        component: "List",
                        data: {
                            title: "В средневековых городах появились:",
                            items: [
                                {
                                    id: 1,
                                    text: "службы по обращению с отходами;",
                                },
                                {
                                    id: 2,
                                    text: "токсичные производства обособили за пределами жилой зоны.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "animation",
                    component: "AnimateMap",
                },
            },
            2: {
                title: "Нужен баланс",
                audioSrc: Speaker12,
                content: [
                    {
                        component: "Note",
                        data: {
                            text: "Главная задача - соблюсти баланс между желанием человека комфортно жить и возможностями окружающей среды.",
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: "Slider",
                    data: [
                        {
                            source: CourseSliderOne21,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderOne22,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderOne23,
                            alt: "image3",
                        },
                    ],
                },
            },
            3: {
                title: "Делать больше, ресурсов тратить меньше",
                audioSrc: Speaker13,
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "60-е года XX века&nbsp;&nbsp;- существенное ухудшение состояния окружающей среды:",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "первые законы об охране окружающей среды приняты в Германии, США и СССР.",
                                },
                                {
                                    id: 2,
                                    text: "с 70-х на Земле фиксируется день экологического долга.",
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
                            source: CourseSliderOne31,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderOne32,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderOne33,
                            alt: "image3",
                        },
                    ],
                },
            },
            4: {
                title: "Концепция устойчивого развития - не брать у природы в долг",
                audioSrc: Speaker14,
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "Этот образ мыслей позволяет с заботой о природе, близких и коллегах, достигать большего; делать больше, а тратить меньше.",
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Всем вместе и каждому в отдельности нужно предпринимать все возможные меры, чтобы не брать у природы в долг. Во многом именно в этом и суть концепции устойчивого развития. ",
                        },
                    },
                ],
                media: {
                    type: "animation",
                    component: "AnimateEarth",
                },
            },
        },
    },
    2: {
        sectTitle: "Концепции ESG",
        pages: {
            1: {
                title: "Все взаимосвязано",
                audioSrc: Speaker21,
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "ESG включает аспекты системы устойчивого развития, целями которой являются бережное обращение с ресурсами, обеспечение равных прав для различных групп людей, охрана здоровья и выстраивание системы, которая будет эффективно этими аспектами управлять.",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            title: "Для достижения этих целей нужны:",
                            items: [
                                {
                                    id: 1,
                                    text: "команда;",
                                },
                                {
                                    id: 2,
                                    text: "регламентирующие документы;",
                                },
                                {
                                    id: 3,
                                    text: "эффективные инструменты управления.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "animation",
                    component: "Ecology",
                },
            },
        },
    },
    3: {
        sectTitle: "А что в ФосАгро?",
        pages: {
            1: {
                title: "Наши задачи",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Обеспечение <span>устойчивости</span> деятельности Компании.",
                                },
                                {
                                    id: 2,
                                    text: "Повышение <span>качества и экоэффективности</span> продукции.",
                                },
                                {
                                    id: 3,
                                    text: "Обеспечение <span>безопасности</span> рабочих мест и предприятий в целом.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: Video31,
                    },
                },
            },
            2: {
                title: "Наши результаты - снизили выбросы",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Мы <span>модернизируем производства</span> и <span>переходим на</span> наилучшие <span>доступные технологии.</span>",
                                },
                                {
                                    id: 2,
                                    text: "Мы существенно <span>снизили выбросы</span> в атмосферный воздух <span>на 29%</span> удельном выражении на тонну c <span>1,13</span> в 2017 году до <span>0,80 кг/т</span> в 2021 году.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: Video32,
                    },
                },
            },
            3: {
                title: "Наши результаты - снизили сброс сточных вод",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Почти <span>в 10 раз</span> мы <span>снизили</span> уровень содержания загрязняющих веществ в сточных водах.",
                                },
                                {
                                    id: 2,
                                    text: "Мы <span>перерабатываем</span> практически <span>40%</span> всех <span>отходов 1-4 классов</span> опасности.",
                                },
                                {
                                    id: 3,
                                    text: "Мы <span>сократили до ноля сброс сточных вод</span> в водные объекты на заводах в Балакове и Волхове за счёт реализации <span>системы замкнутого водооборота.</span>",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: Video33,
                    },
                },
            },
            4: {
                title: "Наши результаты - проекты",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Мы <span>реализуем проект трансформации</span> культуры безопасности.",
                                },
                                {
                                    id: 2,
                                    text: "Мы <span>поддерживаем города</span> присутствия Компании.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: Video34,
                    },
                },
            },
            5: {
                title: "Новые вызовы. Наша сила",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "Новые вызовы:",
                            items: [
                                { id: 1, text: "исчерпаемость ресурсов;" },
                                {
                                    id: 2,
                                    text: "продовольственная безопасность;",
                                },
                                { id: 3, text: "изменения климата." },
                            ],
                        },
                    },
                    {
                        component: "List",
                        data: {
                            title: "Наша сила:",
                            items: [
                                {
                                    id: 1,
                                    text: "в Компании сформирована профессиональная команда;",
                                },
                                { id: 2, text: "накоплен огромный опыт." },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: Video35,
                    },
                },
            },
        },
    },
    4: {
        sectTitle: "А что с поставщиками и потребителями?",
        pages: {
            1: {
                title: "Экопреимущества",
                content: [
                    {
                        component: "Text",
                        data: {
                            text: 'Все удобрения ФосАгро соответствуют самым высоким международным стандартам безопасности.',
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: 'Компания ФосАгро первой в России прошла оценку соответствия требованиям национального стандарта на улучшенную продукцию, вводящего самые жесткие в мире ограничения на содержание тяжелых металлов и мышьяка, и получила сертификат — <span>«Зеленый эталон»</span>.',
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: 'Помимо этого, Компания получила сертификат на соответствие своей продукции стандарту Экологического союза и право использовать признанную на международном уровне экомаркировку <span>«Листок жизни»</span>.',
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: 'Также у ФосАгро есть экологическое заявление <span>«Зеленый колос»</span>, которое подтверждает, что в составе продукции не содержится опасных для здоровья человека или почв концентраций кадмия.',
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: Video41,
                    },
                },
            },
            2: {
                title: "Кодекс поставщика",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Мы запустили проект по созданию <span>кодекса поставщика</span>.",
                                },
                                {
                                    id: 2,
                                    text: "Мы реализовали электронный инструмент <span>ESG-оценки поставщиков</span> с созданием соответствующего рейтинга.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: Video42,
                    },
                },
                links: [
                    {
                        id: 1,
                        text: "Кодекс поведения Контрагента Компании",
                        url: "https://cdn.phosagro.ru/upload/docs/Code_of_Conduct_for_Counterparties_2020_ru.pdf",
                    },
                    {
                        id: 2,
                        text: "Система оценки поставщиков и подрядчиков по критериям ESG",
                        url: "https://cdn.phosagro.ru/upload/20201209_Green_ru.pdf",
                    },
                    {
                        id: 3,
                        text: "Деятельность Компании в области устойчивого развития",
                        url: "https://cdn.phosagro.ru/upload/docs/ESG_Review.pdf",
                    },
                    {
                        id: 4,
                        text: "Годовые интегрированные отчеты",
                        url: "https://www.phosagro.ru/sustainability/",
                    },
                ],
            },
        },
    },
}

export default chapter1Data
