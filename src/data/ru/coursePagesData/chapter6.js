import { Video11 } from "../../../assets/_ru/Course6/Topic1/Point1"

import {
    CourseSliderSix11,
    CourseSliderSix12,
    CourseSliderSix13,
    Speaker12,
} from "../../../assets/_ru/Course6/Topic1/Point2"

import { Video21 } from "../../../assets/_ru/Course6/Topic2/Point1"
import { Video22 } from "../../../assets/_ru/Course6/Topic2/Point2"

import {
    CourseSliderSix21,
    CourseSliderSix22,
    CourseSliderSix23,
    Speaker23,
} from "../../../assets/_ru/Course6/Topic2/Point3"

import {
    CourseSliderSix24,
    CourseSliderSix25,
    CourseSliderSix26,
    Speaker24,
} from "../../../assets/_ru/Course6/Topic2/Point4"

import { Video31 } from "../../../assets/_ru/Course6/Topic3"

import {
    CourseSliderSix41,
    CourseSliderSix42,
    CourseSliderSix43,
    Speaker41,
} from "../../../assets/_ru/Course6/Topic4/Point1"

import {
    CourseSliderSix44,
    CourseSliderSix45,
    CourseSliderSix46,
    Speaker42,
} from "../../../assets/_ru/Course6/Topic4/Point2"

import {
    CourseSliderSix47,
    CourseSliderSix48,
    CourseSliderSix49,
    Speaker43,
} from "../../../assets/_ru/Course6/Topic4/Point3"

import {
    CourseSliderSix410,
    CourseSliderSix411,
    CourseSliderSix412,
    Speaker44,
} from "../../../assets/_ru/Course6/Topic4/Point4"

import {
    CourseSliderSix413,
    CourseSliderSix414,
    CourseSliderSix415,
    Speaker45,
} from "../../../assets/_ru/Course6/Topic4/Point5"

import {
    CourseSliderSix416,
    CourseSliderSix417,
    CourseSliderSix418,
    Speaker46,
} from "../../../assets/_ru/Course6/Topic4/Point6"

import {
    CourseSliderSix419,
    CourseSliderSix420,
    CourseSliderSix421,
    Speaker47,
} from "../../../assets/_ru/Course6/Topic4/Point7"

import {
    CourseSliderSix422,
    CourseSliderSix423,
    CourseSliderSix424,
    Speaker48,
} from "../../../assets/_ru/Course6/Topic4/Point8"

const chapter6Data = {
    1: {
        sectTitle: "Права человека и социальные принципы ФосАгро",
        pages: {
            1: {
                title: "Права человека",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "Наши социальные принципы:",
                            items: [
                                {
                                    id: 1,
                                    text: "не допускают использования детского и принудительного труда;",
                                },
                                {
                                    id: 2,
                                    text: "обеспечивают свободы объединения в профсоюзы и права сотрудников на ведение переговоров о заключении коллективного договора;",
                                },
                                {
                                    id: 3,
                                    text: "создают безопасные и благоприятные рабочие условия для своих сотрудников и персонала подрядных организаций;",
                                },
                                {
                                    id: 4,
                                    text: "обеспечивают соблюдение прав человека на благоприятную окружающую среду.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: Video11,
                    },
                },
                links: [
                    {
                        id: 1,
                        text: "Политика управления персоналом ФосАгро",
                        url: "https://www.phosagro.ru/upload/docs/hr_policy.pdf",
                    },
                    {
                        id: 2,
                        text: "Заявление о прозрачности в отношении закона «О современном рабстве»",
                        url: "https://www.phosagro.ru/upload/docs/About_morern_sl.pdf",
                    },
                    {
                        id: 3,
                        text: "Кодекс этики",
                        url: "https://cdn.phosagro.ru/upload/docs/ethics_code.pdf",
                    },
                    {
                        id: 4,
                        text: "Международный билль о правах человека",
                        url: "https://www.ohchr.org/ru/what-are-human-rights/international-bill-human-rights",
                    },
                    {
                        id: 5,
                        text: "Всеобщая декларация международной организации труда",
                        url: "https://www.ohchr.org/ru/what-are-human-rights",
                    },
                    {
                        id: 6,
                        text: "Кодекс поведения Контрагента Компании",
                        url: "https://www.phosagro.ru/upload/docs/Code_of_Conduct_for_Counterparties_2020_ru.pdf",
                    },
                ],
            },
            2: {
                title: "Социальные инструменты ФосАгро",
                audioSrc: Speaker12,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Каналы коммуникации и обратной связи в ФосАгро:",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            items: [
                                { id: 1, text: "Горячая линия;" },
                                {
                                    id: 2,
                                    text: "раздел «Вопросы и ответы» в корпоративных газетах;",
                                },
                                {
                                    id: 3,
                                    text: "регулярные встречи с руководством и общие собрания для сотрудников;",
                                },
                                { id: 4, text: "интернет-портал." },
                            ],
                        },
                    },
                    {
                        component: "LampList",
                        data: {
                            title: "Горячая линия предполагает прием сообщений в трех вариантах:",
                            items: [
                                {
                                    id: 1,
                                    text: "<span>по телефону:</span> 8 (8202) 59-32-32;",
                                },
                                {
                                    id: 2,
                                    text: "<span>на электронный почтовый ящик:</span> <a href=\"mailto:help@phosagro.ru\">help@phosagro.ru</a>;",
                                },
                                {
                                    id: 3,
                                    text: "<span>на почтовый адрес:</span> 162622, Вологодская обл., г. Череповец, Северное ш., д.75, Дирекция по экономической безопасности.",
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
                            source: CourseSliderSix11,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderSix12,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderSix13,
                            alt: "image3",
                        },
                    ],
                },
                links: [
                    {
                        id: 1,
                        text: "Положение об организации “Горячей линии”",
                        url: "https://www.phosagro.ru/upload/docs/hotline.pdf",
                    },
                ],
            },
        },
    },
    2: {
        sectTitle: "Сотрудники ФосАгро - ключ к успеху Компании",
        pages: {
            1: {
                title: "Мы - ФосАгро",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "В ФосАгро работает более 18 тысяч сотрудников",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            title: "Для наших сотрудников мы:",
                            items: [
                                {
                                    id: 1,
                                    text: "Формируем культуру безопасности, равенства и уважения.",
                                },
                                {
                                    id: 2,
                                    text: "Предоставляем широкие возможности для получения новых знаний и навыков.",
                                },
                                {
                                    id: 3,
                                    text: "Предлагаем конкурентную заработную плату и социальные гарантии.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Средняя заработная плата выросла более чем на 50 % по сравнению с 2017 годом.",
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "97% сотрудников предприятий - это персонал, нанятый из числа местного населения в регионах присутствия Компании.",
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: Video21,
                    },
                },
            },
            2: {
                title: "Работаем и учимся",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Мы разработали модульное дистанционное обучение.",
                                },
                                {
                                    id: 2,
                                    text: "Мы увеличили среднее количество часов обучения на одного сотрудника на 20%.",
                                },
                                {
                                    id: 3,
                                    text: "Мы развиваем систему корпоративных библиотек.",
                                },
                                {
                                    id: 4,
                                    text: "Мы создали систему наставничества. ",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: Video22,
                    },
                },
            },
            3: {
                title: "Наша молодежь",
                audioSrc: Speaker23,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Наша молодежь — это кадровый резерв для ключевых позиций в Компании.",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            title: "Молодым профессионалам мы предлагаем:",
                            items: [
                                {
                                    id: 1,
                                    text: "конкурентоспособную заработную плату;",
                                },
                                {
                                    id: 2,
                                    text: "поддержку при переезде и обеспечение жильем;",
                                },
                                { id: 3, text: "помощь наставника." },
                            ],
                        },
                    },
                    {
                        component: "List",
                        data: {
                            title: "В Компании работают специальные программы для молодежи:",
                            items: [
                                {
                                    id: 1,
                                    text: "«ФосАгро-классы» и «ФосАгро-школы»;",
                                },
                                {
                                    id: 2,
                                    text: "«Молодые талантливые специалисты».",
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
                            source: CourseSliderSix21,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderSix22,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderSix23,
                            alt: "image3",
                        },
                    ],
                },
            },
            4: {
                title: "Наша поддержка",
                audioSrc: Speaker24,
                content: [
                    {
                        component: "List",
                        data: {
                            title: "Социальные льготы и гарантии для сотрудников:",
                            items: [
                                {
                                    id: 1,
                                    text: "выплата материальной помощи сотруднику;",
                                },
                                {
                                    id: 2,
                                    text: "оздоровление, санитарно-курортное лечение, добровольная медицинская страховка, базы отдыха;",
                                },
                                {
                                    id: 3,
                                    text: "программа улучшения социально-бытовых условий труда;",
                                },
                                {
                                    id: 4,
                                    text: "расходы на культурно-массовую работу;",
                                },
                                {
                                    id: 5,
                                    text: "корпоративная жилищная программа;",
                                },
                                {
                                    id: 6,
                                    text: "прочие социальные льготы и гарантии.",
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
                            source: CourseSliderSix24,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderSix25,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderSix26,
                            alt: "image3",
                        },
                    ],
                },
            },
        },
    },
    3: {
        sectTitle: "Охрана труда и промышленной безопасности",
        pages: {
            1: {
                title: "“Золотые правила” безопасности",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "За период 2019–2021 годов в АО «Апатит» и его филиалах удалось добиться:",
                            items: [
                                {
                                    id: 1,
                                    text: "уменьшения общего числа автомобильных происшествий на 26% (с 50 до 37 случаев);",
                                },
                                {
                                    id: 2,
                                    text: "снижения уровня тяжелого травматизма на 75% — с 12 до 3 случаев;",
                                },
                                {
                                    id: 3,
                                    text: "снижения количества инцидентов на 75% — с 8 до 2 случаев;",
                                },
                                { id: 4, text: "отсутствия аварий;" },
                                { id: 5, text: "отсутствия пожаров;" },
                                {
                                    id: 6,
                                    text: "отсутствия транспортных происшествий с пострадавшими / крупным ущербом.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Наша главная цель — не допускать несчастных случаев со смертельным исходом.",
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
                links: [
                    {
                        id: 1,
                        text: "Политика в области охраны труда, промышленной и пожарной безопасности",
                        url: "https://cdn.phosagro.ru/upload/docs/sustainability/Industrial-fire-safety-policy.pdf",
                    },
                    {
                        id: 2,
                        text: "Соответствие системы менеджмента международным стандартам",
                        url: "https://www.phosagro.ru/upload/docs/iso-45001-2018-21-1584-026.pdf",
                    },
                    {
                        id: 3,
                        text: "«Золотые правила» ФосАгро",
                        url: "https://www.phosagro.ru/files/golden_rules.pdf",
                    },
                ],
            },
        },
    },
    4: {
        sectTitle: "Вовлечение местных сообществ",
        pages: {
            1: {
                title: "Социальные программы ФосАгро",
                audioSrc: Speaker41,
                content: [
                    {
                        component: "Note",
                        data: {
                            text: "Стабильность и успех родных для нас регионов — важный фактор устойчивого развития ФосАгро.",
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "Благотворительная деятельность Компании реализуется исходя из интересов общественной пользы, а также на основе партнерских отношений с органами государственной власти и местного самоуправления, с местным сообществом и общественными организациями, с образовательными учреждениями и другими заинтересованными сторонами.",
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: "Slider",
                    data: [
                        {
                            source: CourseSliderSix41,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderSix42,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderSix43,
                            alt: "image3",
                        },
                    ],
                },
                links: [
                    {
                        id: 1,
                        text: "Программы вовлечения местных сообществ",
                        url: "https://www.phosagro.ru/sustainability/social-response/#accordion-communities",
                    },
                ],
            },
            2: {
                title: "Любимые города",
                audioSrc: Speaker42,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "«Наши любимые города» ",
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "С 2003 года ФосАгро занимается формированием качественной городской среды для устойчивого развития в городах присутствия Компании: Кировск, Череповец, Балаково, Волхов.",
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: "Slider",
                    data: [
                        {
                            source: CourseSliderSix44,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderSix45,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderSix46,
                            alt: "image3",
                        },
                    ],
                },
            },
            3: {
                title: "Школа-ВУЗ-предприятие",
                audioSrc: Speaker43,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Программа «Образование»",
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "Эта программа&nbsp;&nbsp;- логическое продолжение многолетнего проекта «ФосАгро классы». Профориентационная работа теперь проводится с младших классов. Компания расширила материальную помощь школам, участвующим в проекте.",
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: "Slider",
                    data: [
                        {
                            source: CourseSliderSix47,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderSix48,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderSix49,
                            alt: "image3",
                        },
                    ],
                },
            },
            4: {
                title: "Образование, здоровье, духовность",
                audioSrc: Speaker44,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: 'Программа "Детям России Образование, Здоровье и Духовность" ("ДРОЗД")',
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "С 2003 года ФосАгро реализует уникальную многоступенчатую программу поддержки образования ДРОЗД. Она объединяет социальные проекты в рамках единой платформы, охватывает все уровни образования с перспективой трудоустройства выпускников на предприятиях Компании.",
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: "Slider",
                    data: [
                        {
                            source: CourseSliderSix410,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderSix411,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderSix412,
                            alt: "image3",
                        },
                    ],
                },
            },
            5: {
                title: "Духовное возрождение",
                audioSrc: Speaker45,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: 'Программа "Духовное возрождение"',
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "Компания «ФосАгро» оказывает постоянную благотворительную помощь в восстановлении и строительстве православных святынь, как в России, так и за рубежом, реализует проекты по поддержке традиционных культурных и духовных ценностей.",
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: "Slider",
                    data: [
                        {
                            source: CourseSliderSix413,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderSix414,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderSix415,
                            alt: "image3",
                        },
                    ],
                },
            },
            6: {
                title: "Связь поколений",
                audioSrc: Speaker46,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: 'Программа "Связь поколений"',
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "С 2015 года на предприятиях ФосАгро проводится комплексная реконструкция и модернизация заводских музеев. Мы превращаем музеи в культурно-образовательные центры для жителей и гостей городов присутствия.",
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: "Slider",
                    data: [
                        {
                            source: CourseSliderSix416,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderSix417,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderSix418,
                            alt: "image3",
                        },
                    ],
                },
            },
            7: {
                title: "Помогать важно",
                audioSrc: Speaker47,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: 'Программа "Адресная помощь"',
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "С 2003 года мы оказываем адресную помощь незащищенным слоям населения. На каждом из предприятий ФосАгро созданы Комиссиии по социальным вопросам и благотворительности, которые принимают к рассмотрению обращения.",
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: "Slider",
                    data: [
                        {
                            source: CourseSliderSix419,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderSix420,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderSix421,
                            alt: "image3",
                        },
                    ],
                },
            },
            8: {
                title: "Спорт",
                audioSrc: Speaker48,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Программа «Содействие развитию спорта»",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            title: "ФосАгро с 2012 года поддерживает некоммерческие организации, ориентированные на развитие спорта, туризма и здорового образа жизни.",
                            items: [
                                {
                                    id: 1,
                                    text: "Всероссийская федерация художественной гимнастики;",
                                },
                                {
                                    id: 2,
                                    text: "Российская шахматная федерация;",
                                },
                                {
                                    id: 3,
                                    text: "Общественный Фонд поддержки и развития спорта «Чемпион»;",
                                },
                                {
                                    id: 4,
                                    text: "Федерация лыжных гонок России;",
                                },
                                {
                                    id: 5,
                                    text: "Общероссийская общественная организация «Российская федерация прыжков в воду» и так далее.",
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
                            source: CourseSliderSix422,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderSix423,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderSix424,
                            alt: "image3",
                        },
                    ],
                },
            },
        },
    },
}

export default chapter6Data
