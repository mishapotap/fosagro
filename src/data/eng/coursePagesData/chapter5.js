import Speaker11 from "../../../assets/_eng/Course5/Topic1/speaker11.mp3"

import {
    CourseSliderFive21,
    CourseSliderFive22,
    CourseSliderFive23,
    Speaker21,
} from "../../../assets/_eng/Course5/Topic2/Point1"

import {
    CourseSliderFive24,
    CourseSliderFive25,
    CourseSliderFive26,
    Speaker22,
} from "../../../assets/_eng/Course5/Topic2/Point2"

import Speaker23 from "../../../assets/_eng/Course5/Topic2/Point3/speaker23.mp3"

import Speaker24 from "../../../assets/_eng/Course5/Topic2/Point4/speaker24.mp3"

import {
    CourseSliderFive31,
    CourseSliderFive32,
    CourseSliderFive33,
    Speaker31,
} from "../../../assets/_eng/Course5/Topic3/Point1"

import {
    CourseSliderFive34,
    CourseSliderFive35,
    CourseSliderFive36,
    Speaker32,
} from "../../../assets/_eng/Course5/Topic3/Point2"

import {
    CourseSliderFive37,
    CourseSliderFive38,
    CourseSliderFive39,
    Speaker33,
} from "../../../assets/_eng/Course5/Topic3/Point3"

import {
    CourseSliderFive41,
    CourseSliderFive42,
    CourseSliderFive43,
    Speaker41,
} from "../../../assets/_eng/Course5/Topic4"

import Video51 from "../../../assets/_eng/Course5/Topic5/video5.1.mp4"

const chapter5Data = {
    1: {
        sectTitle: "How the climate is changing and why it is a threat to human wellbeing",
        pages: {
            1: {
                title: "+1 degree celsius",
                audioSrc: Speaker11,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Global warming has already reached some 1.1 °C.",
                                },
                                {
                                    id: 2,
                                    text: "The “hockey stick” graph, which shows the average global temperature rise, was published in 1999.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "In 1824, Joseph Fourier was the first to discover the greenhouse effect.",
                        },
                    },
                ],
                media: {
                    type: "animation",
                    component: "AnimateDegrees",
                },
                links: [
                    {
                        id: 1,
                        text: "Climate Spiral",
                        url: "https://www.youtube.com/watch?v=jWoCXLuTIkI",
                    },
                    {
                        id: 2,
                        text: "NASA Global climate change",
                        url: "https://climate.nasa.gov/vital-signs/global-temperature/",
                    },
                    {
                        id: 3,
                        text: "Geophysical Research Letters",
                        url: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/1999GL900070",
                    },
                ],
            },
        },
    },
    2: {
        sectTitle: "Causes of global warming",
        pages: {
            1: {
                title: "Natural causes",
                audioSrc: Speaker21,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Сhanges in wind patterns and ocean currents;",
                                },
                                { id: 2, text: "Volcanic activity;" },
                                { id: 3, text: "Tipping of the Earth’s poles;" },
                                {
                                    id: 4,
                                    text: "Changes in solar activity – fluctuations in the amount of sunlight and solar radiation reaching the Earth depending on changes in the Earth’s orbit and axial tilt.",
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
                            source: CourseSliderFive21,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderFive22,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderFive23,
                            alt: "image3",
                        },
                    ],
                },
            },
            2: {
                title: "Human causes",
                audioSrc: Speaker22,
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "Human impact on climate has long been the subject of scientific debate. Joseph Fourier had suspected that human activities could be influencing the climate, but it was not until the late 19th century that it first became a scientific assertion.",
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: "Slider",
                    data: [
                        {
                            source: CourseSliderFive24,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderFive25,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderFive26,
                            alt: "image3",
                        },
                    ],
                },
            },
            3: {
                title: "What about human impact?",
                audioSrc: Speaker23,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "In the late 19th century, scientists first argued that human activity could affect the climate.",
                                },
                                {
                                    id: 2,
                                    text: "The Milankovitch cycles: the Earth should be cooling, but instead it is heating up.",
                                },
                                {
                                    id: 3,
                                    text: "In 1988, the Intergovernmental Panel on Climate Change (IPCC) was established with the UN participation.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "In 2007, the scientific community (IPCC) asserted a 90% probability that human activity was the main cause of global warming.",
                        },
                    },
                ],
                media: {
                    type: "animation",
                    component: "AnimateHumanEffect",
                },
                links: [
                    {
                        id: 1,
                        text: "IPCC Reports",
                        url: "https://www.ipcc.ch/ar6-syr/",
                    },
                ],
            },
            4: {
                title: "+4 degree celsius",
                audioSrc: Speaker24,
                content: [
                    {
                        component: "List",
                        data: {
                            title: "Some of the key human causes of global warming:",
                            items: [
                                {
                                    id: 1,
                                    text: "deforestation of large areas. The fewer the trees, the more CO2 in the atmosphere.",
                                },
                                {
                                    id: 2,
                                    text: "mass livestock production. Mass livestock production accounts for about 20% of the anthropogenic climate change.",
                                },
                                {
                                    id: 3,
                                    text: "use of nitrogen fertilizers in agriculture.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "The IPCC predicts a 4 °C rise in global average temperature by 2100.",
                        },
                    },
                ],
                media: {
                    type: "animation",
                    component: "AnimateGas",
                },
                links: [
                    {
                        id: 1,
                        text: "Report on climate change in Russia",
                        // ! нет англ ссылки (но и не должно быть?)
                        url: "https://www.meteorf.gov.ru/images/news/20220324/4/Doklad.pdf",
                    },
                ],
            },
        },
    },
    3: {
        sectTitle: "What’s next?",
        pages: {
            1: {
                title: "Physical consequences",
                audioSrc: Speaker31,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "ice melting and sea level rise (in the most aggressive scenarios – up to 98 cm in the 21st century);",
                                },
                                {
                                    id: 2,
                                    text: "increased frequency of natural disasters;",
                                },
                                {
                                    id: 3,
                                    text: "increased periods of extreme heat;",
                                },
                                {
                                    id: 4,
                                    text: "threats to biodiversity and other natural resources, such as ocean acidification;",
                                },
                                {
                                    id: 5,
                                    text: "weakening or collapsing of the Atlantic meridional currents;",
                                },
                                {
                                    id: 6,
                                    text: "shifts in plant and animal habitats, increased likelihood of extinction for some of them.",
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
                            source: CourseSliderFive31,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderFive32,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderFive33,
                            alt: "image3",
                        },
                    ],
                },
            },
            2: {
                title: "Social consequences",
                audioSrc: Speaker32,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "greater number of people falling outside the comfortable climate niche;",
                                },
                                { id: 2, text: "increased violence;" },
                                {
                                    id: 3,
                                    text: "volatility in crop yields;",
                                },
                                {
                                    id: 4,
                                    text: "increase in global land surface area experiencing mean annual temperatures greater than 29 °C. This, in turn, may increase air pollution, leading to a hike in cardiovascular and respiratory diseases.",
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
                            source: CourseSliderFive34,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderFive35,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderFive36,
                            alt: "image3",
                        },
                    ],
                },
                links: [
                    // ! нет названия
                    {id: 1, text: "Tuvalu minister gives Cop26 speech standing in water", url: "https://www.youtube.com/watch?v=jBBsv0QyscE&ab_channel=GuardianNews"}
                ]
            },
            3: {
                title: "Economic consequences",
                audioSrc: Speaker33,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Risks of production and logistics disruptions",
                                },
                                {
                                    id: 2,
                                    text: "Risks of losing profits and entire business",
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
                            source: CourseSliderFive37,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderFive38,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderFive39,
                            alt: "image3",
                        },
                    ],
                },
            },
        },
    },
    4: {
        sectTitle: "Carbon neutrality",
        pages: {
            1: {
                title: "The Paris Agreement",
                audioSrc: Speaker41,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "In 2015, 196 parties adopted the Paris Agreement. Carbon neutrality became a global trend",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            title: "Over 90 nations intend to leverage market mechanisms to meet their commitments under the Paris Agreement:",
                            items: [
                                {
                                    id: 1,
                                    text: "The emission fee is set either as carbon tax (35 countries) or in the format of a carbon market (28 countries).",
                                },
                                {
                                    id: 2,
                                    text: "Carbon pricing covers some 20% of global greenhouse gas emissions.",
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
                            source: CourseSliderFive41,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderFive42,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderFive43,
                            alt: "image3",
                        },
                    ],
                },
                links: [
                    {
                        id: 1,
                        text: "UN environment programme",
                        url: "https://www.unep.org/",
                    },
                    {
                        id: 2,
                        text: "Russia's Low-carbon Development Strategy until 2050",
                        // ! нет англ (но и не должно быть?)
                        url: "http://static.government.ru/media/files/ADKkCzp3fWO32e2yA0BhtIpyzWfHaiUa.pdf",
                    },
                    {
                        id: 3,
                        text: "The Paris Agreement",
                        url: "https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement",
                    },
                ],
            },
        },
    },
    5: {
        sectTitle: "Climate for PhosAgro",
        pages: {
            1: {
                title: "Climate for PhosAgro",
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "Our key climate-related target is a 14% reduction in greenhouse gas emissions by 2028 vs the 2018 base.",
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "We address this objective in relation to greenhouse gas emissions by our production facilities (Scope 1), emissions from the generation of purchased energy (Scope 2), and emissions that occur in our value chain when our partners produce resources that we consume, or use our products (Scope 3).",
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
                        text: "Climate Ambition Accelerator",
                        url: "https://unglobalcompact.org/take-action/climate-ambition-accelerator",
                    },
                    {
                        id: 2,
                        text: "CGI Russia",
                        url: "https://eng.cgi-russia.ru/",
                    },
                    {
                        id: 2,
                        text: "2021 INTEGRATED REPORT",
                        url: "https://ar2021.phosagro.com/reports/phosagro/annual/2021/gb/English/0/home.html",
                    },
                ],
            },
        },
    },
}

export default chapter5Data
