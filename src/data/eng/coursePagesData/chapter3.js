import {
    CourseSliderThree11,
    CourseSliderThree12,
    CourseSliderThree13,
    Speaker11,
} from "../../../assets/_eng/Course3/Topic1/Point1"

import {
    CourseSliderThree21,
    CourseSliderThree22,
    CourseSliderThree23,
    Speaker12,
} from "../../../assets/_eng/Course3/Topic1/Point2"

import { Video21 } from "../../../assets/_eng/Course3/Topic2"
import { Video31 } from "../../../assets/_eng/Course3/Topic3"
import { Video41 } from "../../../assets/_eng/Course3/Topic4"
import { Video51 } from "../../../assets/_eng/Course3/Topic5"
import { Video61 } from "../../../assets/_eng/Course3/Topic6"
import { Video71 } from "../../../assets/_eng/Course3/Topic7"

import {
    CourseSliderThree81,
    CourseSliderThree82,
    CourseSliderThree83,
    Speaker81,
} from "../../../assets/_eng/Course3/Topic8"

const chapter3Data = {
    1: {
        sectTitle: "Global context for innovation",
        pages: {
            1: {
                title: "Brave new world",
                audioSrc: Speaker11,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Global population to reach 10 bln by 2050",
                                },
                                {
                                    id: 2,
                                    text: "Most people will choose to live in cities",
                                },
                                {
                                    id: 3,
                                    text: "Today, about 40% of the planet's land which is not covered by ice is subject to degradation",
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
                title: "Global challenges",
                audioSrc: Speaker12,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Reliable supply of safe, eco-efficient fertilizers to farmers",
                                },
                                {
                                    id: 2,
                                    text: "Development of high-performance and eco-friendly agriculture",
                                },
                                {
                                    id: 3,
                                    text: "Development of safe production practices",
                                },
                                { id: 4, text: "Open cooperation" },
                                {
                                    id: 5,
                                    text: "Contribution to food safety",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "PhosAgro's mission – Caring for Earth fertility for prosperous lives",
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
        sectTitle: "Our innovation priorities",
        pages: {
            1: {
                title: "Transparency and control",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "PhosAgro's innovation is built on:",
                            items: [
                                { id: 1, text: "compliance with regulations" },
                                {
                                    id: 2,
                                    text: "control over the production chain",
                                },
                                { id: 3, text: "availability of information" },
                                {
                                    id: 4,
                                    text: "open dialogue with stakeholders",
                                },
                                {
                                    id: 5,
                                    text: "integrated management system",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Our Development Strategy to 2025 sets out key focus areas for providing consumers with safe, eco-efficient and innovative products and services.",
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
                        text: "Annual and Sustainability Reports",
                        url: "https://www.phosagro.com/investors/reports/year/",
                    },
                ],
            },
        },
    },
    3: {
        sectTitle: "What we do to promote innovation in production",
        pages: {
            1: {
                title: "Our innovations",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: '<span class="bubble-trigger" data-bubble-id="1">NIUIF</span> is our main partner in innovating.',
                        },
                    },
                    {
                        component: "Bubble",
                        data: {
                            id: 1,
                            title: "NIUIF",
                            text: "Samoilov Scientific Research Institute for Fertilizers and Insectofungicides. Founded back in 1919, the institute has been actively involved in research for over a century now.",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "wet-process phosphoric acid production unit;",
                                },
                                {
                                    id: 2,
                                    text: "research into new technologies for sulphuric acid production;",
                                },
                                {
                                    id: 3,
                                    text: "testing and production of new fertilizer grades;",
                                },
                                {
                                    id: 4,
                                    text: "upgrade of scrubbing systems at production facilities.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "High quality standards, environmental safety and employee development are the pillars of innovative production.",
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
        sectTitle: "Development of circular economy elements",
        pages: {
            1: {
                title: "Nothing is wasted",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Using a by-product (phosphogypsum) to improve soil quality",
                                },
                                {
                                    id: 2,
                                    text: "Improving the processing of hard-to-process apatite-nepheline ores",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Circular economy: everything we use in our production processes is used in our business operations.",
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
                        text: "2021 INTEGRATED REPORT",
                        url: "https://cdn.phosagro.com/upload/iblock/bf3/bf36de1a733de17a594c897382e45697.pdf",
                    },
                    {
                        id: 2,
                        text: "Phosphogypsum",
                        // ! нет англ ссылки
                        url: "https://www.phosagro.ru/production/phosphogypsum/pavement/",
                    },
                ],
            },
        },
    },
    5: {
        sectTitle: "Supplier management",
        pages: {
            1: {
                title: "No secondary roles",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "In 2020, we developed a system to assess suppliers based on their ESG performance, covering:",
                            items: [
                                {
                                    id: 1,
                                    text: "environmental initiatives (including commitment to climate agenda);",
                                },
                                { id: 2, text: "social responsibility regulations (including health and safety, and human rights);" },
                                { id: 3, text: "governance processes (including quality management)." },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Innovation is a joint effort with no secondary roles.",
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
                        text: "How to become our supplier",
                        // ! нет англ ссылки
                        url: "https://www.phosagro.ru/procurement/to-suppliers/how-to-be-a-supplier/",
                    },
                ],
            },
        },
    },
    6: {
        sectTitle: "New product development",
        pages: {
            1: {
                title: "Our innovative products",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "urea with urease inhibitor (launched)",
                                },
                                {
                                    id: 2,
                                    text: "three new products to be launched by 2025",
                                },
                                {
                                    id: 3,
                                    text: "50 new fertilizer grades to be developed and marketed by 2025",
                                },
                                {
                                    id: 4,
                                    text: "70 new fertilizer grades to be developed and marketed by 2030, including innovative biomineral fertilizers",
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
                        text: "New ApaSil product",
                        // ! нет англ ссылки
                        url: "https://apasil.phosagro.ru/?utm_source=phosagro.ru&utm_medium=banner_main_page&utm_campaign=apasil",
                    },
                    {
                        id: 2,
                        text: "Product Catalogue",
                        // ! вроде можно внутри переключиться на англ?
                        url: "https://shop.phosagro.com/",
                    },
                ],
            },
        },
    },
    7: {
        sectTitle: "International cooperation and support for young sсholars",
        pages: {
            1: {
                title: "Green chemistry for life",
                content: [
                    {
                        component: "List",
                        data: {
                            title: `Our Green Chemistry for Life project seeks to support young scientists by:`,
                            items: [
                                {
                                    id: 1,
                                    text: "funding their research and particular projects;",
                                },
                                {
                                    id: 2,
                                    text: "building a community of experts leveraging the expertise of major practising scholars and the potential of young researchers.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: Video71,
                    },
                },
                links: [
                    {
                        id: 1,
                        text: "International projects",
                        url: "https://www.phosagro.com/international-projects/",
                    },
                ],
            },
        },
    },
    8: {
        sectTitle: "Support for innovative projects",
        pages: {
            1: {
                title: "There is an innovator in all of us!",
                audioSrc: Speaker81,
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "PhosAgro’s innovative projects foster the industrial development and create unique solutions for farmers to grow environmentally friendly and healthy crops. The Company supports scientific research, including innovative projects by young scholars from different countries, and gives them the opportunity to interact with renowned practising scientists.",
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
            },
        },
    },
}

export default chapter3Data
