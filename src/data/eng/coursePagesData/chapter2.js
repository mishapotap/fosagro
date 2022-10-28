import {
    CourseSliderTwo21,
    CourseSliderTwo22,
    CourseSliderTwo23,
    Speaker21,
} from "../../../assets/_eng/Course2/Topic2"

import {
    Video32,
    Video33,
    Video34,
    Video35,
    Video36,
} from "../../../assets/_eng/Course2/Topic3"

import { Speaker11 } from "../../../assets/_eng/Course2/Topic1/Point1"
import { Speaker12 } from "../../../assets/_eng/Course2/Topic1/Point2"
import { Speaker13 } from "../../../assets/_eng/Course2/Topic1/Point3"
import { Speaker31 } from "../../../assets/_eng/Course2/Topic3/Point1"

const chapter2Data = {
    1: {
        sectTitle: "Global transformation, 17 goals",
        pages: {
            1: {
                title: "The limits to growth",
                audioSrc: Speaker11,
                content: [
                    {
                        component: "List",
                        data: {
                            title: "1972:",
                            items: [
                                {
                                    id: 1,
                                    text: "The Limits to Growth report published",
                                },
                                {
                                    id: 2,
                                    text: "A special UN programme established",
                                },
                                {
                                    id: 3,
                                    text: "The first recorded use of the term “sustainable development”",
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
                        text: "Club of Rome",
                        url: "https://www.clubofrome.org/",
                    },
                ],
            },
            2: {
                title: "Global impact",
                audioSrc: Speaker12,
                content: [
                    {
                        component: "List",
                        data: {
                            title: "1999",
                            items: [
                                {
                                    id: 1,
                                    text: "The United Nations Global Compact launched;",
                                },
                                {
                                    id: 2,
                                    text: "The Ten Principles put forward for member companies.",
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
                        text: "UN Global Compact",
                        url: "https://www.unglobalcompact.org/",
                    },
                ],
            },
            3: {
                // ! не уверена что правильно
                title: "Sustainability agenda",
                audioSrc: Speaker13,
                content: [
                    {
                        component: "List",
                        data: {
                            title: "2015:",
                            items: [
                                {
                                    id: 1,
                                    text: "Transforming our world: the 2030 Agenda for Sustainable Development adopted",
                                },
                                {
                                    id: 2,
                                    text: "17 Sustainable Development Goals as part of the Agenda",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Sustainable development across the economic, social and environmental dimensions"
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
                        text: "The 2030 Agenda for Sustainable Development",
                        url: "https://sdgs.un.org/2030agenda",
                    },
                ],
            },
        },
    },
    2: {
        sectTitle: "How PhosAgro furthers UN SDGs",
        pages: {
            1: {
                title: "PhosAgro’s role",
                audioSrc: Speaker21,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                // ! добавить точки или убрать у последнего?
                                {
                                    id: 1,
                                    text: "PhosAgro plays an important role in ensuring global food security",
                                },
                                {
                                    id: 2,
                                    text: "in 2018, PhosAgro singled out ten most relevant UN SDGs",
                                },
                                {
                                    text: "in 2019, PhosAgro established a Committee for Sustainable Development (transformed into the Strategy and Sustainable Development Committee in 2022) under its Board of Directors.",
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
        sectTitle: "Prioritizing the SDGs for PhosAgro",
        pages: {
            1: {
                title: "Our sustainable development goals",
                audioSrc: Speaker31,
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "In 2020, we prioritised the UN Sustainable Development Goals, identifying eleven goals to which the Company contributes.",
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
                title: "UN SDG 2: approach to management",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "the goals of PhosAgro’s Development Strategy are aligned with the global market for eco-efficient fertilizers",
                                },
                                {
                                    id: 2,
                                    text: "the strategy has an impact on the Company’s actual budgets and production plans",
                                },
                                {
                                    id: 3,
                                    text: "the strategy implementation is overseen by PhosAgro’s Board of Directors",
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
                title: "Contribution to UN SDG 2",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "We offer innovative plant nutrition systems.",
                                },
                                { id: 2, text: "We develop new fertilizer grades." },
                                { id: 3, text: "We help improve soil fertility." },
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
                title: "What are our goals?",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "By 2025:",
                            items: [
                                {
                                    id: 1,
                                    text: "boost fertilizer sales in strategic priority markets to 10.3 mt (89% of total sales)",
                                },
                                {
                                    id: 2,
                                    text: "boost sales of premium fertilizer grades with no less than three nutrients to 5 mt (43% of total sales)",
                                },
                                {
                                    id: 3,
                                    text: "increase the number of distribution centres to 35",
                                },
                                {
                                    id: 4,
                                    text: "increase storage capacity to over 650,000 tonnes",
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
                        text: "Goal 2: Zero Hunger",
                        url: "https://www.phosagro.com/sustainability/end-hunger/",
                    },
                ],
            },
            5: {
                title: "How do we progress toward these goals?",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "In 2021:",
                            items: [
                                {
                                    id: 1,
                                    text: "our fertilizer sales in strategic priority markets were 9.2 mt (90% of total sales)",
                                },
                                {
                                    id: 2,
                                    text: "our premium fertilizer sales were 3.6 mt (35% of total sales",
                                },
                                {
                                    id: 3,
                                    text: "the number of our distribution centres grew to 31 and storage capacity to 765,000 tonnes",
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
                        text: "Commitment to UN goals",
                        url: "https://www.phosagro.com/sustainability/",
                    },
                ],
            },
            6: {
                title: "Transparent reporting",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Our commitment to international disclosure standards:",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Global Reporting Initiative (GRI)",
                                },
                                {
                                    id: 2,
                                    text: "Sustainability Accounting Standards Board (SASB)",
                                },
                                {
                                    id: 3,
                                    text: "Task Force on Climate-related Financial Disclosures (TCFD)",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "PhosAgro takes very seriously its social and environmental responsibility. For us, it is a matter of urgent need, not an attempt to jump on the bandwagon.",
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
