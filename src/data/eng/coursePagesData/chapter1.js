import {
    CourseSliderOne21,
    CourseSliderOne22,
    CourseSliderOne23,
    Speaker12,
} from "../../../assets/_eng/Course1/Topic1/Point2"
import { Speaker11 } from "../../../assets/_eng/Course1/Topic1/Point1"

import {
    CourseSliderOne31,
    CourseSliderOne32,
    CourseSliderOne33,
    Speaker13,
} from "../../../assets/_eng/Course1/Topic1/Point3"

import Speaker14 from "../../../assets/_eng/Course1/Topic1/Point4/speaker14.mp3"

import { Speaker21 } from "../../../assets/_eng/Course1/Topic2"
import {
    Video31,
    Video32,
    Video33,
    Video34,
    Video35,
} from "../../../assets/_eng/Course1/Topic3"
import { Video41, Video42 } from "../../../assets/_eng/Course1/Topic4"

const chapter1Data = {
    1: {
        sectTitle: "Sustainable development in a nutshell",
        pages: {
            1: {
                title: "Environmental management in the Middle Ages",
                audioSrc: Speaker11,
                content: [
                    {
                        component: "List",
                        data: {
                            title: "Medieval cities featured:",
                            items: [
                                {
                                    id: 1,
                                    text: "waste management services",
                                },
                                {
                                    id: 2,
                                    text: "toxic industries outside residential areas",
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
                title: "It is all about balance",
                audioSrc: Speaker12,
                content: [
                    {
                        component: "Note",
                        data: {
                            text: "The main challenge here is about living well within environmental limits.",
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
                title: "Do more with less",
                audioSrc: Speaker13,
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "The 1960s saw major environmental degradation:",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "the first environmental laws were adopted in Germany, the USA and the USSR",
                                },
                                {
                                    id: 2,
                                    text: "in the 1970s, Earth Overshoot Day was conceived",
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
                title: "Sustainable development is about not borrowing from Earth",
                audioSrc: Speaker14,
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "With this way of thinking, we can do more with less while caring about nature and our loved ones and colleagues.",
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "We, one and all, should make every possible effort to stop borrowing from the environment. This can be thought of as the very essence of sustainable development.",
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
        sectTitle: "ESG concepts",
        pages: {
            1: {
                title: "Everything is interrelated",
                audioSrc: Speaker21,
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "ESG represents the three pillars of sustainable development, which is about using resources carefully, ensuring equal rights for different groups of people, protecting health and building a system to manage all these aspects in an effective way.",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            title: "To achieve these, one needs:",
                            items: [
                                {
                                    id: 1,
                                    // ! надо ли тут ставить точки с запятыми? у них не было
                                    // перепроверить знаки как в ру и в их док и уточнить
                                    text: "a team;",
                                },
                                {
                                    id: 2,
                                    text: "internal regulations;",
                                },
                                {
                                    id: 3,
                                    text: "effective management tools.",
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
        sectTitle: "What about PhosAgro?",
        pages: {
            1: {
                title: "Our goals",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "To ensure the Company’s sustainability.",
                                },
                                {
                                id: 2,
                                    text: "To improve the quality and eco-efficiency of our products.",
                                },
                                {
                                    id: 3,
                                    text: "To ensure workplace and industrial safety.",
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
                title: "Our results: reduction of emissions",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    // ! двоеточие?
                                    text: "We are modernising our production facilities and implementing the best available techniques.",
                                },
                                {
                                    id: 2,
                                    text: "We have significantly cut emissions from 1.13 kg/t in 2017 to 0.80 kg/t in 2021, or by 29% per tonne of output.",
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
                title: "Our results: reduction of waste water discharges",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "We have reduced waste water pollutants by almost 90%.",
                                },
                                {
                                    id: 2,
                                    text: "We recycle almost 40% of all hazard class 1–4 waste.",
                                },
                                {
                                    id: 3,
                                    text: "We have completely eliminated waste water discharges at our Balakovo and Volkhov plants thanks to a closed water circulation system.",
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
                title: "Our results: projects",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Implementation of the Safety Culture Transformation Project.",
                                },
                                {
                                    id: 2,
                                    text: "Support of cities across our footprint.",
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
                title: "New challenges. Our strengths",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "New challenges:",
                            items: [
                                { id: 1, text: "depletion of resources;" },
                                {
                                    id: 2,
                                    text: "food security;",
                                },
                                { id: 3, text: "climate change." },
                            ],
                        },
                    },
                    {
                        component: "List",
                        data: {
                            title: "Our strength:",
                            items: [
                                {
                                    id: 1,
                                    text: "a team of professionals;",
                                },
                                { id: 2, text: "vast experience." },
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
        sectTitle: "What about suppliers and customers?",
        pages: {
            1: {
                title: "Eco-benefits",
                content: [
                    {
                        component: "Text",
                        data: {
                            text: 'All of PhosAgro’s fertilizers meet the highest international safety standards.',
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: 'PhosAgro was first in Russia to achieve compliance with the national standard for improved products which introduced the world’s most rigorous limits on heavy metals and arsenic content in agriculture and received the Green One certificate.',
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: 'On top of that, the Company was certified under the Ecological Union’s Vitality Leaf standard and obtained the right to use the internationally recognised eco-label on its products.',
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: 'Additionally, PhosAgro’s Green Label environmental claim asserts that the product is free from dangerous cadmium concentrations harmful to human health and soils.',
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
                title: "Supplier code of conduct",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Launched a project to create a supplier code of conduct.",
                                },
                                {
                                    id: 2,
                                    text: "Implemented an electronic tool to assess and rate suppliers’ ESG compliance.",
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
                        text: "Code of Conduct for Counterparties",
                        url: "https://cdn.phosagro.com/upload/docs/Code_of_Conduct_for_Counterparties_2020_en.pdf",
                    },
                    {
                        id: 2,
                        text: "Supplier and contractor evaluation system based on ESG criteria",
                        url: "https://cdn.phosagro.com/upload/20201209_Green_en.pdf",
                    },
                    {
                        id: 3,
                        text: "PhosAgro ESG review",
                        url: "https://cdn.phosagro.com/upload/docs/ESG_Review-EN.pdf",
                    },
                    {
                        id: 4,
                        text: "Annual and Sustainability Reports",
                        url: "https://www.phosagro.com/sustainability/",
                    },
                ],
            },
        },
    },
}

export default chapter1Data
