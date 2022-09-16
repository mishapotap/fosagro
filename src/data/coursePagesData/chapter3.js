import { MainBG } from "../../assets/video"

import {
    CourseSliderThree11,
    CourseSliderThree12,
    CourseSliderThree13,
} from "../../assets/Course3/Topic1/Point1"

import {
    CourseSliderThree21,
    CourseSliderThree22,
    CourseSliderThree23,
} from "../../assets/Course3/Topic1/Point2"

import {
    CourseSliderThree81,
    CourseSliderThree82,
    CourseSliderThree83,
} from "../../assets/Course3/Topic8"

const chapter3Data = {
    1: {
        sectTitle: "Мировой контекст развития инноваций",
        pages: {
            1: {
                title: "Новый мир",
                audioSrc: "",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Население Земли достигнет отметки в 10 миллиардов человек к 2050 году.",
                                },
                                {
                                    id: 2,
                                    text: "Большинство людей будут выбирать для жизни города.",
                                },
                                {
                                    id: 3,
                                    text: "Сегодня происходит деградация примерно 40 процентов всей не покрытой льдом территории суши Земли.",
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
                            source: CourseSliderThree11,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderThree12,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderThree13,
                            alt: "image3",
                        },
                    ],
                },
            },
            2: {
                title: "Глобальные задачи",
                audioSrc: "",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Надежные поставки безопасных экоэффективных удобрений аграриям.",
                                },
                                {
                                    id: 2,
                                    text: "Развитие высокопродуктивного и экологичного сельского хозяйства.",
                                },
                                {
                                    id: 3,
                                    text: "Развитие культуры производства.",
                                },
                                { id: 4, text: "Открытое сотрудничество. " },
                                {
                                    id: 5,
                                    text: "Обеспечение продовольственной безопасности.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Миссия ФосАгро: Заботимся о плодородии земли для процветания жизни.",
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: "Slider",
                    data: [
                        {
                            source: CourseSliderThree21,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderThree22,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderThree23,
                            alt: "image3",
                        },
                    ],
                },
            },
        },
    },
    2: {
        sectTitle: "Как мы определяем свои приоритеты в развитии инноваций",
        pages: {
            1: {
                title: "Открытость и контроль",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "Инновации ФосАгро строятся на:",
                            items: [
                                { id: 1, text: "соблюдении норм;" },
                                {
                                    id: 2,
                                    text: "контроле производственной цепочки;",
                                },
                                { id: 3, text: "открытости информации;" },
                                {
                                    id: 4,
                                    text: "открытом диалоге со стейкхолдерами;",
                                },
                                {
                                    id: 5,
                                    text: "интегрированной системе управления.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "В Стратегии развития Компании до 2025 года определены основные направления обеспечения потребителей безопасной, экоэффективной, инновационной продукцией и сервисами.",
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
                        text: "Годовые интегрированные отчеты",
                        url: "https://www.phosagro.ru/investors/reports/year/",
                    },
                ],
            },
        },
    },
    3: {
        sectTitle: "Что мы делаем для развития инноваций в производстве?",
        pages: {
            1: {
                title: "Наши инновации",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: 'Главный партнер в развитии инноваций - <span class="bubble-trigger" data-id="1">НИУИФ</span>.',
                        },
                    },
                    {
                        component: "Bubble",
                        data: {
                            id: 1,
                            title: "НИУИФ",
                            text: "Научно-исследовательский институт по удобрениям и инсектофунгицидам имени профессора Я.В. Самойлова. Ему более 100 лет! Основан в 1919 году.",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Развитие производств экстракционной фосфорной кислоты.",
                                },
                                {
                                    id: 2,
                                    text: "Работа над новыми технологиями производства серной кислоты.",
                                },
                                {
                                    id: 3,
                                    text: "Испытание и выпуск новых марок удобрений.",
                                },
                                {
                                    id: 4,
                                    text: "Модернизации систем очистки газов на производственных комплексах. ",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Высокие стандарты качества, экологическая безопасность и развитие сотрудников - основы инновационного производства.",
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
        sectTitle: "Развитие элементов циркулярной экономики",
        pages: {
            1: {
                title: "Всё в дело",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Использование побочного продукта (фосфогипс) для повышения качества почвы.",
                                },
                                {
                                    id: 2,
                                    text: "Повышение эффективности переработки труднообогатимых апатит-нефелиновых руд.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Экономика замкнутого цикла: все, что мы используем в производственных процессах, находит применение в хозяйственной деятельности.",
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
                        text: "Годовой отчет за 2021 год",
                        url: "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://cdn.phosagro.ru/upload/iblock/dc9/dc9ee42f1af7716f4ce9cebfde271755.pdf",
                    },
                ],
            },
        },
    },
    5: {
        sectTitle: "Работа с поставщиками",
        pages: {
            1: {
                title: "Второстепенных ролей нет",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "В 2020 году мы разработали систему ESG оценки поставщиков, включающую:",
                            items: [
                                {
                                    id: 1,
                                    text: "экологические инициативы в том числе вопросы климатической повестки;",
                                },
                                { id: 2, text: "социальные нормы;" },
                                { id: 3, text: "управленческие процессы." },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Инновации - совместная работа, второстепенных ролей нет.",
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
    6: {
        sectTitle: "Разработка новых продуктов",
        pages: {
            1: {
                title: "Инновационные продукты ФосАгро",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "карбамид с ингибитором уреазы (выведен на рынок);",
                                },
                                {
                                    id: 2,
                                    text: "до 2025 года планирует начать выпуск трех новых продуктов;",
                                },
                                {
                                    id: 3,
                                    text: "к 2025 году планирует разработать и вывести на рынок дополнительно 50 марок удобрений;",
                                },
                                {
                                    id: 4,
                                    text: "к 2030 году планирует разработать и вывести на рынок 70 марок новых удобрений, в том числе инновационных биоминеральных удобрений.",
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
    7: {
        sectTitle: "Международное сотрудничество и поддержка молодых ученых",
        pages: {
            1: {
                title: "Зеленая Химия для жизни",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "Зеленая Химия для жизни",
                            items: [
                                {
                                    id: 1,
                                    text: "материальная поддержка исследовательской работы и реализации конкретных проектов;",
                                },
                                {
                                    id: 2,
                                    text: "создание профессионального экспертного сообщества на базе опыта крупных современных ученых и потенциала молодых профессионалов.",
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
    8: {
        sectTitle: "Поддержка инновационных проектов",
        pages: {
            1: {
                title: "Все мы немного изобретатели!",
                audioSrc: "",
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "Инновационные проекты ФосАгро являются основой для развития промышленности, дают возможность фермерам использовать уникальные решения для выращивания экологичной и здоровой продукции. Компания поддерживает научные исследования, в том числе инновационные проекты молодых профессионалов из разных стран, дает им возможность общаться с известными учеными современности.",
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: "Slider",
                    data: [
                        {
                            source: CourseSliderThree81,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderThree82,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderThree83,
                            alt: "image3",
                        },
                    ],
                },
                links: [
                    {
                        id: 1,
                        text: "Годовые интегрированные отчеты",
                        url: "https://www.phosagro.ru/investors/reports/year/",
                    },
                ],
            },
        },
    },
}

export default chapter3Data
