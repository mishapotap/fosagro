import {
    ObjectOOH1,
    ObjectOOH2,
    ObjectOOH3,
    ObjectOOH4,
    ObjectOOH5,
    ObjectOOH6,
    ObjectOOH7,
    ObjectOOH8,
    ObjectOOH9,
    ObjectOOH10,
    ObjectOOH11,
    ObjectOOH12,
    ObjectOOH13,
    ObjectOOH14,
    ObjectOOH15,
    ObjectOOH16,
    ObjectOOH17,
} from "../assets/images/Course2"

const objectOOHSlider = [
    {
        id: 1,
        data: [
            { source: ObjectOOH1, alt: "Ликвидация нищеты", link: "1" },
            { source: ObjectOOH2, alt: "Ликвидация голода", link: "2" },
            {
                source: ObjectOOH3,
                alt: "Хорошее здоровье и благополучие",
                link: "3",
            },
            { source: ObjectOOH4, alt: "Качественное образование", link: "4" },
            { source: ObjectOOH5, alt: "Гендерное равенство", link: "5" },
            { source: ObjectOOH6, alt: "Чистая вода и санитария", link: "6" },
        ],
    },
    {
        id: 2,
        data: [
            {
                source: ObjectOOH7,
                alt: "Недорогостоящая и чистая энергия",
                link: "7",
            },
            {
                source: ObjectOOH8,
                alt: "Достойная работа и экономический рост",
                link: "8",
            },
            { source: ObjectOOH9, alt: "Индустриализация", link: "9" },
            { source: ObjectOOH10, alt: "Уменьшиение неравенства", link: "10" },
            { source: ObjectOOH11, alt: "Устойчивые города", link: "11" },
            {
                source: ObjectOOH12,
                alt: "Ответственное потребление",
                link: "12",
            },
        ],
    },
    {
        id: 3,
        data: [
            {
                source: ObjectOOH13,
                alt: "Борьба с изменением климата",
                link: "13",
            },
            {
                source: ObjectOOH14,
                alt: "Сохранение морских экосистем",
                link: "14",
            },
            {
                source: ObjectOOH15,
                alt: "Сохранение экосистем суши",
                link: "15",
            },
            { source: ObjectOOH16, alt: "Мир, правосудие", link: "16" },
            {
                source: ObjectOOH17,
                alt: "Партнерство в интересах устойчивого развития",
                link: "17",
            },
        ],
    },
]

const objectFosagroSlider = [
    {
        id: 1,
        data: [
            {
                link: "https://www.phosagro.ru/sustainability/zero-hunger/",
                color: "#D3A029",
                icon: "aim_2",
                title: "2 цель",
                description: "Ликвидация голода",
            },
            {
                link: "",
                color: "#279B48",
                icon: "aim_3",
                title: "3 цель",
                description: "Хорошее здоровье и благополучие",
            },
            {
                link: "",
                color: "#C31F33",
                icon: "aim_4",
                title: "4 цель",
                description: "Качественное образование",
            },
            {
                link: "",
                color: "#00AED9",
                icon: "aim_6",
                title: "6 цель",
                description: "Чистая вода и санитария",
            },
            {
                link: "",
                color: "#8F1838",
                icon: "aim_8",
                title: "8 цель",
                description: "Достойная работа и экономический рост",
            },
            {
                link: "",
                color: "#F36D25",
                icon: "aim_9",
                title: "9 цель",
                description: "Индустриализация, инновации, инфраструктура",
            },
        ],
    },
    {
        id: 2,
        data: [
            {
                link: "",
                color: "#F99D26",
                icon: "aim_11",
                title: "11 цель",
                description: "Устойчивые города и населенные пункты",
            },
            {
                link: "",
                color: "#CF8D2A",
                icon: "aim_12",
                title: "12 цель",
                description: "Ответственное потребление и производство",
            },
            {
                link: "",
                color: "#48773E",
                icon: "aim_13",
                title: "13 цель",
                description: "Борьба с изменениями климата",
            },
            {
                link: "",
                color: "#3EB049",
                icon: "aim_15",
                title: "15 цель",
                description: "Сохранение экосистем суши",
            },
            {
                link: "",
                color: "#183668",
                icon: "aim_17",
                title: "17 цель",
                description: "Партнерство в интересах стойчивого развития",
            },
        ],
    },
]

export default { objectOOHSlider, objectFosagroSlider }
