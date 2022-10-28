import { Video11, Video12 } from "../../../assets/_eng/Course4/Topic1"

import { Video21, Video22 } from "../../../assets/_eng/Course4/Topic2"

import Video31 from "../../../assets/_eng/Course4/Topic3/video3.1.mp4"

import Video41 from "../../../assets/_eng/Course4/Topic4/video4.1.mp4"

import Video51 from "../../../assets/_eng/Course4/Topic5/video5.1.mp4"

import Video61 from "../../../assets/_eng/Course4/Topic6/video6.1.mp4"

import {
    CourseSliderFour11,
    CourseSliderFour12,
    CourseSliderFour13,
    Speaker71,
} from "../../../assets/_eng/Course4/Topic7/Point1"

import {
    CourseSliderFour21,
    CourseSliderFour22,
    CourseSliderFour23,
    Speaker72,
} from "../../../assets/_eng/Course4/Topic7/Point2"

import {
    CourseSliderFour31,
    CourseSliderFour32,
    CourseSliderFour33,
    Speaker73,
} from "../../../assets/_eng/Course4/Topic7/Point3"

const chapter4Data = {
    1: {
        sectTitle: "PhosAgro’s climate strategy",
        pages: {
            1: {
                title: "Climate action",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "Our goals to 2028:",
                            items: [
                                {
                                    id: 1,
                                    text: 'Reduce gross GHG emissions (Scopes <span class="bubble-trigger" data-bubble-id="1">1</span>, <span class="bubble-trigger" data-bubble-id="2">2</span>, and <span class="bubble-trigger" data-bubble-id="3">3</span>) by 14%',
                                },
                                {
                                    id: 2,
                                    text: "Reduce specific GHG emissions (Scope 1) by 31%",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "In 2021, we managed to reduce gross GHG emissions by 4% vs 2018, while specific emissions (per tonne of finished and semi-finished products, factoring in a nearly 15% production growth for the period) dropped 16%.",
                        },
                    },
                    {
                        component: "Bubble",
                        data: {
                            id: 1,
                            title: "Scope 1",
                            text: "direct GHG emissions that occur from sources that are controlled or owned by an organisation.",
                        },
                    },
                    {
                        component: "Bubble",
                        data: {
                            id: 2,
                            title: "Scope 2",
                            text: "indirect GHG emissions associated with the purchase of electricity, heat and steam consumed by an organisation.",
                        },
                    },
                    {
                        component: "Bubble",
                        data: {
                            id: 3,
                            title: "Scope 3",
                            text: "other indirect GHG emissions occurring outside an organisation.",
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
                        text: "2020 TCFD REPORT",
                        url: "https://cdn.phosagro.com/upload/iblock/e15/e15bf1098983dd8976a69b3e55184580.pdf",
                    },
                    {
                        id: 2,
                        text: "The full list of TCFD supporters",
                        url: "https://www.fsb-tcfd.org/supporters/",
                    },
                ],
            },
            2: {
                title: "Going low-carbon",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "The Company expanded the output of a new low-carbon fertilizer.",
                                },
                                {
                                    id: 2,
                                    text: "We signed a contract for green electricity supply.",
                                },
                                {
                                    id: 3,
                                    text: "Adoption of the carbon border adjustment mechanism.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: Video12,
                    },
                },
            },
        },
    },
    2: {
        sectTitle: "Energy Efficiency Programme",
        pages: {
            1: {
                title: "Energy efficiency",
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "The programme focuses on supporting the main technological processes to reduce Scope 2 GHG emissions to 794,700 tonnes of СО2 equivalent by 2028 through improving eco- and energy efficiency",
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
                links: [
                    {
                        id: 1,
                        text: "Energy Efficiency Program",
                        url: "https://cdn.phosagro.com/upload/docs/Energy_efficiency_program_en.pdf",
                    },
                ],
            },
            2: {
                title: "PhosAgro green resources",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "The Company reduced Scope 2 GHG emissions by 3.3% through green electricity purchases.",
                                },
                                {
                                    id: 2,
                                    text: "The Company reduced its specific consumption of all types of energy resources by 3.43%.",
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
        },
    },
    3: {
        sectTitle: "Waste",
        pages: {
            1: {
                title: "Reduce, recycle, utilize",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "We upgraded aluminium fluoride production facilities in Cherepovets.",
                                },
                                {
                                    id: 2,
                                    text: "We enhanced ore processing mechanisms in Kirovsk.",
                                },
                                {
                                    id: 3,
                                    text: "We promote phosphogypsum as a commercial product.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "The Company intends to significantly reduce waste generation and increase the share of waste recycling and utilisation to 40% by 2025.",
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
        },
    },
    4: {
        sectTitle: "Air",
        pages: {
            1: {
                title: "Clean air",
                content: [
                    {
                        component: "List",
                        data: {
                            // ! надо добавить заголовок списку? не поняла
                            items: [
                                {
                                    id: 1,
                                    text: "Investing more than RUB 1 bln in Clean Air capital projects of Apatit’s Cherepovets site in 2021.",
                                },
                                {
                                    id: 2,
                                    text: "Installing and upgrading gas recovery equipment in Volkhov.",
                                },
                                {
                                    id: 3,
                                    text: "Upgrading gas recovery equipment in Balakovo.",
                                },
                                {
                                    id: 4,
                                    text: "Implementing dust suppression of dusty surfaces in Kirovsk.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Specific emissions amounted to 0.801 kg/t, 24% down vs the 2018 base.",
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
                links: [
                    {
                        id: 1,
                        text: "the Clean Air initiative",
                        // ! тут на русском, нет на англ
                        url: "http://min.prirodyair.tilda.ws/",
                    },
                ],
            },
        },
    },
    5: {
        sectTitle: "Water",
        pages: {
            1: {
                title: "Zero waste water discharge",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "We completed the first stage of the water use optimisation programme in Cherepovets.",
                                },
                                {
                                    id: 2,
                                    text: "We are implementing a project to generate electricity based on the system of chemical water treatment and waste water reuse (Volkhov).",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Two of our facilities in Volkhov and Balakovo are already operating with zero waste water discharge. All PhosAgro production facilities are currently developing closed water circulation systems.",
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: Video51,
                    },
                },
                links: [
                    {
                        id: 1,
                        text: "Water Strategy",
                        url: "https://cdn.phosagro.com/upload/docs/society-water-strategy_en.pdf",
                    },
                ],
            },
        },
    },
    6: {
        sectTitle: "Biodivercity",
        pages: {
            1: {
                title: "Ecosystem stability",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "We develop comprehensive programmes to preserve biodiversity across all regions of the Company’s operation. In 2021, we completed the development of comprehensive programmes for the Cherepovets and Volkhov sites.",
                                },
                                {
                                    id: 2,
                                    text: "With the help of experts from research institutions, we assess environmental conditions across the Company’s footprint.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: Video61,
                    },
                },
                links: [
                    {
                        id: 1,
                        text: "Biodiversity Preservation Program",
                        url: "https://cdn.phosagro.com/upload/docs/biodiversity-program-presentation.pdf",
                    },
                ],
            },
        },
    },
    7: {
        sectTitle: "PhosAgro’s environmental management system",
        pages: {
            1: {
                title: "Environmental management",
                audioSrc: Speaker71,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Company’s management approach",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "The Board of Directors supervises the implementation of the Company's Environmental Strategy.",
                                },
                                {
                                    id: 2,
                                    text: "PhosAgro’s environmental management system is certified to ISO 14001.",
                                },
                                {
                                    id: 3,
                                    text: "The environmental management system relies on strict compliance with applicable laws and regulations.",
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
                        text: "Environmental management system",
                        url: "https://www.phosagro.com/sustainability/ecology/#accordion-ecology-management-system",
                    },
                ],
            },
            2: {
                title: "Phosagro eco-standard",
                audioSrc: Speaker72,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Vitality leaf ecolabel",
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "The Ecological Union uses a science-based approach grounded in a comprehensive life cycle analysis to evaluate products, projects and services.",
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
                        text: "Eco-properties",
                        url: "https://www.phosagro.com/production/vitality-leaf/",
                    },
                ],
            },
            3: {
                title: "Every little things counts",
                audioSrc: Speaker73,
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "PhosAgro recognises its impact on the environment. Every addition to our production capacities is designed to employ the best available techniques and operated in strict compliance with the applicable sustainability standards.",
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
