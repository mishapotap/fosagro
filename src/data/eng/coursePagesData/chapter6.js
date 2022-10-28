import { Video11 } from "../../../assets/_eng/Course6/Topic1/Point1"

import {
    CourseSliderSix11,
    CourseSliderSix12,
    CourseSliderSix13,
    Speaker12,
} from "../../../assets/_eng/Course6/Topic1/Point2"

import { Video21 } from "../../../assets/_eng/Course6/Topic2/Point1"
import { Video22 } from "../../../assets/_eng/Course6/Topic2/Point2"

import {
    CourseSliderSix21,
    CourseSliderSix22,
    CourseSliderSix23,
    Speaker23,
} from "../../../assets/_eng/Course6/Topic2/Point3"

import {
    CourseSliderSix24,
    CourseSliderSix25,
    CourseSliderSix26,
    Speaker24,
} from "../../../assets/_eng/Course6/Topic2/Point4"

import { Video31 } from "../../../assets/_eng/Course6/Topic3"

import {
    CourseSliderSix41,
    CourseSliderSix42,
    CourseSliderSix43,
    Speaker41,
} from "../../../assets/_eng/Course6/Topic4/Point1"

import {
    CourseSliderSix44,
    CourseSliderSix45,
    CourseSliderSix46,
    Speaker42,
} from "../../../assets/_eng/Course6/Topic4/Point2"

import {
    CourseSliderSix47,
    CourseSliderSix48,
    CourseSliderSix49,
    Speaker43,
} from "../../../assets/_eng/Course6/Topic4/Point3"

import {
    CourseSliderSix410,
    CourseSliderSix411,
    CourseSliderSix412,
    Speaker44,
} from "../../../assets/_eng/Course6/Topic4/Point4"

import {
    CourseSliderSix413,
    CourseSliderSix414,
    CourseSliderSix415,
    Speaker45,
} from "../../../assets/_eng/Course6/Topic4/Point5"

import {
    CourseSliderSix416,
    CourseSliderSix417,
    CourseSliderSix418,
    Speaker46,
} from "../../../assets/_eng/Course6/Topic4/Point6"

import {
    CourseSliderSix419,
    CourseSliderSix420,
    CourseSliderSix421,
    Speaker47,
} from "../../../assets/_eng/Course6/Topic4/Point7"

import {
    CourseSliderSix422,
    CourseSliderSix423,
    CourseSliderSix424,
    Speaker48,
} from "../../../assets/_eng/Course6/Topic4/Point8"

const chapter6Data = {
    1: {
        sectTitle: "Human rights and social principles of PhosAgro",
        pages: {
            1: {
                title: "Human rights",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "Our social principles:",
                            items: [
                                {
                                    id: 1,
                                    text: "prohibit the use of child or forced labour,",
                                },
                                {
                                    id: 2,
                                    text: "ensure the freedom of association and collective bargaining for our employees,",
                                },
                                {
                                    id: 3,
                                    text: "create a safe and favourable working environment for the employees of PhosAgro and its contractors,",
                                },
                                {
                                    id: 4,
                                    text: "protect the human right to favourable environment.",
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
                        text: "Personnel management policy",
                        url: "https://cdn.phosagro.com/sustainability/personnel_management_policy.pdf",
                    },
                    {
                        id: 2,
                        text: "Statement on the Company’s Transparency",
                        url: "https://cdn.phosagro.com/sustainability/Modern_Slavery_Act.pdf",
                    },
                    {
                        id: 3,
                        text: "Code of Ethics",
                        url: "https://cdn.phosagro.com/sustainability/Code_of_Ethics_eng.pdf",
                    },
                    {
                        id: 4,
                        text: "International Bill of Human Rights",
                        url: "https://www.ohchr.org/en/what-are-human-rights/international-bill-human-rights",
                    },
                    {
                        id: 5,
                        text: "Universal Declaration of Human Rights (UDHR)",
                        url: "https://www.ohchr.org/en/what-are-human-rights",
                    },
                    {
                        id: 6,
                        text: "Code of Conduct for Counterparties",
                        url: "https://cdn.phosagro.com/upload/docs/Code_of_Conduct_for_Counterparties_2020_en.pdf",
                    },
                ],
            },
            2: {
                title: "PhosAgro’s social tools",
                audioSrc: Speaker12,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "PhosAgro’s most important communication and feedback channels",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            items: [
                                { id: 1, text: "Hotline," },
                                {
                                    id: 2,
                                    text: "Q&A section in corporate newspapers,",
                                },
                                {
                                    id: 3,
                                    text: "regular meetings for staff and management,",
                                },
                                { id: 4, text: "web portal." },
                            ],
                        },
                    },
                    {
                        component: "LampList",
                        data: {
                            title: "There are three ways to report to the Hotline:",
                            items: [
                                {
                                    id: 1,
                                    text: "<span>by phone at</span> +7 8202 59 32 32,",
                                },
                                {
                                    id: 2,
                                    text: "<span>by e-mail</span> <a href=\"mailto:help@phosagro.ru\">help@phosagro.ru</a> and",
                                },
                                {
                                    id: 3,
                                    text: "<span>by post:</span> Economic Security Department, 75 Severnoye Highway, Cherepovets, Vologda Region, 162622, Russia.",
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
                        text: "Hotline",
                        // ! нет англ ссылки (но может и не должно быть?)
                        url: "https://www.phosagro.ru/upload/docs/hotline.pdf",
                    },
                ],
            },
        },
    },
    2: {
        sectTitle: "PhosAgro employees – key to our success",
        pages: {
            1: {
                title: "We are PhosAgro",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "PhosAgro employs over 18,000 people.",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            title: "For our employees, we:",
                            items: [
                                {
                                    id: 1,
                                    text: "foster a culture of safety, equality, and respect,",
                                },
                                {
                                    id: 2,
                                    text: "provide ample opportunities to develop new competencies,",
                                },
                                {
                                    id: 3,
                                    text: "offer competitive salaries and social benefits.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "The average pay is more than 50% higher than in 2017.",
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "97% of on-site employees are hired locally.",
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
                title: "Working and studying",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "We have developed e-learning modules.",
                                },
                                {
                                    id: 2,
                                    text: "We have increased the average training hours per employee by 20% year-on-year.",
                                },
                                {
                                    id: 3,
                                    text: "We develop a system of corporate libraries.",
                                },
                                {
                                    id: 4,
                                    text: "We have a coaching system in place.",
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
                title: "Our youth policy",
                audioSrc: Speaker23,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Young specialists form a talent pool for key positions within the Company.",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            title: "At PhosAgro, young specialists are offered:",
                            items: [
                                {
                                    id: 1,
                                    text: "competitive salary,",
                                },
                                {
                                    id: 2,
                                    text: "relocation and housing support,",
                                },
                                { id: 3, text: "mentor’s help." },
                            ],
                        },
                    },
                    {
                        component: "List",
                        data: {
                            title: "Our dedicated youth programmes:",
                            items: [
                                {
                                    id: 1,
                                    text: "PhosAgro Classes and PhosAgro Schools,",
                                },
                                {
                                    id: 2,
                                    text: "High-Potential Graduates.",
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
                title: "Our support",
                audioSrc: Speaker24,
                content: [
                    {
                        component: "List",
                        data: {
                            title: "Social benefits and employee guarantees:",
                            items: [
                                {
                                    id: 1,
                                    text: "financial aid;",
                                },
                                {
                                    id: 2,
                                    text: "recreation, rehabilitation, health resort treatment and VHI;",
                                },
                                {
                                    id: 3,
                                    text: "improvement of working conditions;",
                                },
                                {
                                    id: 4,
                                    text: "corporate and cultural events;",
                                },
                                {
                                    id: 5,
                                    text: "corporate housing programme;",
                                },
                                {
                                    id: 6,
                                    text: "other social benefits and guarantees.",
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
        sectTitle: "Occupational heath and safety",
        pages: {
            1: {
                title: "Golden rules of OHS",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "Key 2019–2021 results of Apatit and its branches:",
                            items: [
                                {
                                    id: 1,
                                    text: "total number of car incidents dropped by 26% (to 37 cases from 50);",
                                },
                                {
                                    id: 2,
                                    text: "severe injuries reduced by 75% – to 3 cases from 12;",
                                },
                                {
                                    id: 3,
                                    text: "incidents reduced by 75% – to 2 cases from 8;",
                                },
                                { id: 4, text: "zero accidents;" },
                                { id: 5, text: "zero fires;" },
                                {
                                    id: 6,
                                    text: "no traffic accidents with injuries or major damage.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Our key aim is to avoid fatalities",
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
                        text: "The Occupational Health and Safety and Fire Security Policy",
                        url: "https://cdn.phosagro.com/upload/docs/sustainability/Industrial-fire-safety-policy-en.pdf",
                    },
                    {
                        id: 2,
                        text: "ISO 45001:2018",
                        // ! нет на англ
                        url: "https://www.phosagro.ru/upload/docs/iso-45001-2018-21-1584-026.pdf",
                    },
                    {
                        id: 3,
                        text: "“Golden Rules” of OHS",
                        // ! нет англ ссылки
                        url: "https://www.phosagro.ru/files/golden_rules.pdf",
                    },
                ],
            },
        },
    },
    4: {
        sectTitle: "Engagement of local communities",
        pages: {
            1: {
                title: "PhosAgro’s social programmes",
                audioSrc: Speaker41,
                content: [
                    {
                        component: "Note",
                        data: {
                            text: "Stable and successful home regions are a key driver of the Company's sustainable development.",
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "Our charitable activities are based on public benefit priorities and opportunities to partner with regional and local government authorities, local communities and non-governmental organisations, educational institutions and other stakeholders.",
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
                        text: "Local community engagement programmes",
                        url: "https://www.phosagro.com/sustainability/social-response/#accordion-communities",
                    },
                ],
            },
            2: {
                title: "Favourite cities",
                audioSrc: Speaker42,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Our Favourite Cities.",
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "Since 2003, PhosAgro has been implementing a project to improve the quality of urban environment and promote sustainable development of the cities where it operates: Kirovsk, Cherepovets, Balakovo, and Volkhov.",
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
                title: "School-university-employment",
                audioSrc: Speaker43,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Education",
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "This programme is a natural follow-up to PhosAgro Classes. We now provide career guidance as early as in primary school. The Company has expanded the funding for schools participating in the programme.",
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
                title: "Education, health and ethics",
                audioSrc: Speaker44,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: 'Educated and Healthy Children of Russia (DROZD)',
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "Since 2003, PhosAgro has been successfully implementing DROZD, a unique multi-level educational support programme. It serves as a single platform for social projects spanning all levels of education with the possibility of subsequent employment in the Company.",
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
                title: "Spiritual Revival",
                audioSrc: Speaker45,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: 'Spiritual Revival',
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "PhosAgro has been providing charitable assistance in building and rebuilding orthodox holy sites both in Russia and abroad, while also pursuing projects fostering long-standing cultural and spiritual values.",
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
                title: "Connecting Generations",
                audioSrc: Speaker46,
                content: [
                    // {
                    //     component: "Label",
                    //     data: {
                    //         // ! дублирование заголовка, ок?
                    //         text: 'Connecting Generations',
                    //     },
                    // },
                    {
                        component: "Text",
                        data: {
                            text: "Since 2015, PhosAgro has been renovating and upgrading its on-site museums to transform them into cultural and educational centres for residents and visitors of the cities where we operate.",
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
                title: "It is important to help",
                audioSrc: Speaker47,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: 'Targeted Assistance',
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "Since 2003, we have been providing targeted assistance to vulnerable population groups.",
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
                title: "Sports",
                audioSrc: Speaker48,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Promotion of sports",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            title: "Since 2012, PhosAgro has been supporting non-profit organisations which promote sports, tourism and healthy lifestyles.",
                            items: [
                                {
                                    id: 1,
                                    text: "Russian Rhythmic Gymnastics Federation;",
                                },
                                {
                                    id: 2,
                                    text: "Russian Chess Federation;",
                                },
                                {
                                    id: 3,
                                    text: "Champion Sports Support and Development Fund;",
                                },
                                {
                                    id: 4,
                                    text: "Russian Cross-Country Skiing Federation;",
                                },
                                {
                                    id: 5,
                                    text: "Russian Diving Federation, etc.",
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
