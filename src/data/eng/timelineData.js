import { TestImage, IntroTimelineImage } from "../../assets/images"
import { COLORS } from "../../constants"

import {
    Line1Topic1,
    Line1Topic2,
    Line1Topic3,
    Line1Topic4,
    Line1Topic1Image,
    Line1Topic2Image,
    Line1Topic3Image,
    Line1Topic4Image,
} from "../../assets/_eng/Course1/TimeLine"

import {
    Line2Topic1,
    Line2Topic2,
    Line2Topic3,
    Line2Topic1Image,
    Line2Topic2Image,
    Line2Topic3Image,
} from "../../assets/_eng/Course2/TimeLine"

import {
    Line3Topic1,
    Line3Topic2,
    Line3Topic3,
    Line3Topic4,
    Line3Topic5,
    Line3Topic6,
    Line3Topic7,
    Line3Topic8,
    Line3Topic1Image,
    Line3Topic2Image,
    Line3Topic3Image,
    Line3Topic4Image,
    Line3Topic5Image,
    Line3Topic6Image,
    Line3Topic7Image,
    Line3Topic8Image,
} from "../../assets/_eng/Course3/TimeLine"

import {
    Line4Topic1,
    Line4Topic2,
    Line4Topic3,
    Line4Topic4,
    Line4Topic5,
    Line4Topic6,
    Line4Topic7,
    Line4Topic1Image,
    Line4Topic2Image,
    Line4Topic3Image,
    Line4Topic4Image,
    Line4Topic5Image,
    Line4Topic6Image,
    Line4Topic7Image,
} from "../../assets/_eng/Course4/TimeLine"

import {
    Line5Topic1,
    Line5Topic2,
    Line5Topic3,
    Line5Topic4,
    Line5Topic5,
    Line5Topic1Image,
    Line5Topic2Image,
    Line5Topic3Image,
    Line5Topic4Image,
    Line5Topic5Image,
} from "../../assets/_eng/Course5/TimeLine"

import {
    Line6Topic1,
    Line6Topic2,
    Line6Topic3,
    Line6Topic4,
    Line6Topic1Image,
    Line6Topic2Image,
    Line6Topic3Image,
    Line6Topic4Image,
} from "../../assets/_eng/Course6/TimeLine"

import { getMediaDurationSec } from "../../utils"
import mediaDuration from "./mediaDuration"

import {
    Intro,
    Course1,
    Course2,
    Course3,
    Course4,
    Course5,
    Course6,
    Test,
} from "../../assets/_eng/audio"

const timelineData = {
    course1: {
        id: "01",
        titleAudio: Course1,
        title: 'Sustainability: a buzzword or reality that we all are part of?',
        width: "2700",
        metaTitle:
            'Sustainability: a buzzword or reality that we all are part of?',
        metaDescription:
            "What is the concept of sustainable development, which is often associated with ESG? In the word “ESG”, E stands for “environment”, S for “social”, and G for “corporate governance”. Together, they represent the three pillars of sustainable development.",
        timeline: [
            {
                id: 0,
                intro: true,
                button: {
                    audio: Intro,
                    value: {
                        modal: [
                            {
                                top: "-20px",
                                left: "0",
                            },
                            {
                                top: "-35px",
                                left: "30px",
                            },
                        ],
                        title: "Introduction",
                        time: getMediaDurationSec(mediaDuration.course1[0]),
                        bgColor: COLORS.orange,
                        image: IntroTimelineImage,
                        rotate: "-64",
                        top: "calc(50% - 150px + 110px)",
                        left: "40px",
                    },
                },
            },
            {
                id: 1,
                button: {
                    link: "topic1/point1",
                    audio: Line1Topic1,
                    value: {
                        title: "Sustainable development in a nutshell",
                        time: getMediaDurationSec(mediaDuration.course1[1]),
                        bgColor: COLORS.green_light,
                        image: Line1Topic1Image,
                        rotate: "-127",
                        top: "calc(50% - 150px + 55px)",
                        left: "240px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_light,
                            position: "top",
                            text: "Environmental management in the Middle Ages",
                            top: "calc(50% - 150px + 125px)",
                            left: "440px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.green_light,
                            position: "bottom",
                            text: "It is all about balance",
                            top: "calc(50% - 150px + 140px)",
                            left: "495px",
                            width: 118,
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.green_light,
                            position: "top",
                            text: "Do more with less",
                            top: "calc(50% - 150px + 145px)",
                            left: "560px",
                        },
                    },
                    {
                        id: 4,
                        value: {
                            color: COLORS.green_light,
                            position: "bottom",
                            text: "A production that does not borrow from the environment",
                            top: "calc(50% - 150px + 120px)",
                            left: "620px",
                        },
                    },
                ],
            },
            {
                id: 2,
                button: {
                    link: "topic2/point1",
                    audio: Line1Topic2,
                    value: {
                        title: "ESG concepts",
                        time: getMediaDurationSec(mediaDuration.course1[2]),
                        bgColor: COLORS.green_dark,
                        image: Line1Topic2Image,
                        rotate: "105",
                        top: "calc(50% - 150px + 45px)",
                        left: "715px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_dark,
                            position: "top",
                            text: "Everything is interrelated",
                            top: "calc(50% - 150px + 155px)",
                            left: "930px",
                        },
                    },
                ],
            },
            {
                id: 3,
                button: {
                    link: "topic3/point1",
                    audio: Line1Topic3,
                    value: {
                        title: "What about PhosAgro?",
                        time: getMediaDurationSec(mediaDuration.course1[3]),
                        bgColor: COLORS.brown_light,
                        image: Line1Topic3Image,
                        rotate: "165",
                        top: "calc(50% - 150px + 80px)",
                        left: "1025px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "Our goals",
                            top: "calc(50% - 150px + 90px)",
                            left: "1255px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "Available technology",
                            top: "calc(50% - 150px + 95px)",
                            left: "1340px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "Environment",
                            top: "calc(50% - 150px + 110px)",
                            left: "1420px",
                        },
                    },
                    {
                        id: 4,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "Social initiatives",
                            top: "calc(50% - 150px + 120px)",
                            left: "1500px",
                        },
                    },
                    {
                        id: 5,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "New challenges. Our strengths",
                            top: "calc(50% - 150px + 100px)",
                            left: "1580px",
                        },
                    },
                ],
            },
            {
                id: 4,
                button: {
                    link: "topic4/point1",
                    audio: Line1Topic4,
                    value: {
                        title: "What about suppliers and customers?",
                        time: getMediaDurationSec(mediaDuration.course1[4]),
                        bgColor: COLORS.brown,
                        image: Line1Topic4Image,
                        rotate: "76",
                        top: "calc(50% - 150px + 25px)",
                        left: "1670px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown,
                            position: "top",
                            text: "Eco-benefits",
                            top: "calc(50% - 150px + 130px)",
                            left: "1880px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.brown,
                            position: "bottom",
                            text: "Supplier code of conduct",
                            top: "calc(50% - 150px + 130px)",
                            left: "1940px",
                        },
                    },
                ],
            },
            {
                id: 5,
                test: true,
                button: {
                    link: "test",
                    audio: Test,
                    value: {
                        title: "Test",
                        time: `≈${getMediaDurationSec(
                            mediaDuration.course1[5]
                        )}`,
                        bgColor: COLORS.blue,
                        image: TestImage,
                        rotate: "-150",
                        top: "calc(50% - 150px + 90px)",
                        left: "2030px",
                    },
                },
            },
        ],
    },
    course2: {
        id: "02",
        titleAudio: Course2,
        title: "UN Sustainable Development Goals",
        width: "2450",
        metaTitle: "UN Sustainable Development Goals",
        metaDescription:
            `A new program "Transforming Our World: The 2030 Agenda for Sustainable Development" has been adopted. The agenda includes 17 goals to build a sustainable world. A sustainable world is a balance of economic growth, social and environmental responsibility.`,
        timeline: [
            {
                id: 0,
                intro: true,
                button: {
                    audio: Intro,
                    value: {
                        modal: [
                            {
                                top: "-20px",
                                left: "0",
                            },
                            {
                                top: "-35px",
                                left: "30px",
                            },
                        ],
                        title: "Introduction",
                        time: getMediaDurationSec(mediaDuration.course2[0]),
                        bgColor: COLORS.orange,
                        image: IntroTimelineImage,
                        rotate: "-64",
                        top: "calc(50% - 150px + 110px)",
                        left: "40px",
                    },
                },
            },
            {
                id: 1,
                button: {
                    link: "topic1/point1",
                    audio: Line2Topic1,
                    value: {
                        title: "Global transformation, 17 goals",
                        time: getMediaDurationSec(mediaDuration.course2[1]),
                        bgColor: COLORS.green_light,
                        image: Line2Topic1Image,
                        rotate: "-145",
                        top: "calc(50% - 150px + 55px)",
                        left: "240px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_light,
                            position: "top",
                            year: "1972",
                            text: "The Limits to Growth published",
                            top: "calc(50% - 150px + 135px)",
                            left: "465px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.green_light,
                            position: "bottom",
                            year: "1999",
                            text: "United Nations Global Compact launched",
                            top: "calc(50% - 150px + 145px)",
                            left: "545px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.green_light,
                            position: "top",
                            year: "2015",
                            text: "New programme",
                            top: "calc(50% - 150px + 125px)",
                            left: "610px",
                        },
                    },
                ],
            },
            {
                id: 2,
                button: {
                    link: "topic2/point1",
                    audio: Line2Topic2,
                    value: {
                        title: "How PhosAgro furthers UN SDGs",
                        time: getMediaDurationSec(mediaDuration.course2[2]),
                        bgColor: COLORS.green_dark,
                        image: Line2Topic2Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 40px)",
                        left: "700px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_dark,
                            position: "bottom",
                            year: "2018",
                            text: "Transformations in Russia – PhosAgro",
                            top: "calc(50% - 150px + 155px)",
                            left: "890px",
                        },
                    },
                ],
            },
            {
                id: 3,
                button: {
                    link: "topic3/point1",
                    audio: Line2Topic3,
                    value: {
                        title: "Prioritizing the SDGs for PhosAgro",
                        time: getMediaDurationSec(mediaDuration.course2[3]),
                        bgColor: COLORS.brown_light,
                        image: Line2Topic3Image,
                        rotate: "165",
                        top: "calc(50% - 150px + 75px)",
                        left: "980px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            year: "2020",
                            text: "Our sustainable development goals",
                            top: "calc(50% - 150px + 95px)",
                            left: "1180px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "UN SDG 2: approach to management",
                            top: "calc(50% - 150px + 90px)",
                            left: "1260px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "Contribution to UN SDG 2",
                            top: "calc(50% - 150px + 95px)",
                            left: "1345px",
                        },
                    },
                    {
                        id: 4,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "UN SDG 2 targets",
                            top: "calc(50% - 150px + 115px)",
                            left: "1435px",
                        },
                    },
                    {
                        id: 5,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "UN SDG 2 implementation progress",
                            top: "calc(50% - 150px + 120px)",
                            left: "1525px",
                        },
                    },
                    {
                        id: 6,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "Transparent reporting",
                            top: "calc(50% - 150px + 90px)",
                            left: "1615px",
                        },
                    },
                ],
            },
            {
                id: 4,
                test: true,
                button: {
                    link: "test",
                    audio: Test,
                    value: {
                        title: "Test",
                        time: `≈${getMediaDurationSec(
                            mediaDuration.course2[4]
                        )}`,
                        bgColor: COLORS.blue,
                        image: TestImage,
                        rotate: "-150",
                        top: "calc(50% - 150px + 50px)",
                        left: "1745px",
                    },
                },
            },
        ],
    },
    course3: {
        id: "03",
        titleAudio: Course3,
        title: "Innovation at PhosAgro",
        supTitle:
            "Our products, our product cycle and why we are developing new grades and types of products",
        width: "3450",
        metaTitle: "Innovation at PhosAgro",
        metaDescription:
            "Innovation improves efficiency and strikes a balance between safety and environmental friendliness. Innovations, technologies and unique competencies of our employees allow PhosAgro to confidently look into the future and meet the challenges of today.",
        timeline: [
            {
                id: 0,
                intro: true,
                button: {
                    audio: Intro,
                    value: {
                        modal: [
                            {
                                top: "-20px",
                                left: "0",
                            },
                        ],
                        title: "Introduction",
                        time: getMediaDurationSec(mediaDuration.course3[0]),
                        bgColor: COLORS.orange,
                        image: IntroTimelineImage,
                        rotate: "-64",
                        top: "calc(50% - 150px + 90px)",
                        left: "55px",
                    },
                },
            },
            {
                id: 1,
                button: {
                    link: "topic1/point1",
                    audio: Line3Topic1,
                    value: {
                        title: "Global context for innovation",
                        time: getMediaDurationSec(mediaDuration.course3[1]),
                        bgColor: COLORS.green_light,
                        image: Line3Topic1Image,
                        rotate: "-145",
                        top: "calc(50% - 150px + 60px)",
                        left: "295px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_light,
                            position: "top",
                            text: "Brave new world",
                            top: "calc(50% - 150px + 145px)",
                            left: "520px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.green_light,
                            position: "bottom",
                            text: "Global challenges",
                            top: "calc(50% - 150px + 140px)",
                            left: "580px",
                        },
                    },
                ],
            },
            {
                id: 2,
                button: {
                    link: "topic2/point1",
                    audio: Line3Topic2,
                    value: {
                        title: "Our innovation priorities",
                        time: getMediaDurationSec(mediaDuration.course3[2]),
                        bgColor: COLORS.green_dark,
                        image: Line3Topic2Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 40px)",
                        left: "670px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_dark,
                            position: "top",
                            text: "Transparency and control",
                            top: "calc(50% - 150px + 150px)",
                            left: "890px",
                        },
                    },
                ],
            },
            {
                id: 3,
                button: {
                    link: "topic3/point1",
                    audio: Line3Topic3,
                    value: {
                        title: "What we do to promote innovation in production",
                        time: getMediaDurationSec(mediaDuration.course3[3]),
                        bgColor: COLORS.brown_light,
                        image: Line3Topic3Image,
                        rotate: "165",
                        top: "calc(50% - 150px + 85px)",
                        left: "980px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "Our innovations",
                            top: "calc(50% - 150px + 90px)",
                            left: "1190px",
                        },
                    },
                ],
            },
            {
                id: 4,
                button: {
                    link: "topic4/point1",
                    audio: Line3Topic4,
                    value: {
                        title: "Development of circular economy elements",
                        time: getMediaDurationSec(mediaDuration.course3[4]),
                        bgColor: COLORS.brown,
                        image: Line3Topic4Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 30px)",
                        left: "1280px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown,
                            position: "top",
                            text: "Nothing is wasted",
                            top: "calc(50% - 150px + 120px)",
                            left: "1490px",
                        },
                    },
                ],
            },
            {
                id: 5,
                button: {
                    link: "topic5/point1",
                    audio: Line3Topic5,
                    value: {
                        title: "Supplier management",
                        time: getMediaDurationSec(mediaDuration.course3[5]),
                        bgColor: COLORS.grey_light,
                        image: Line3Topic5Image,
                        rotate: "0",
                        top: "calc(50% - 150px + 40px)",
                        left: "1570px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.grey_light,
                            position: "bottom",
                            text: "No secondary roles",
                            top: "calc(50% - 150px + 110px)",
                            left: "1780px",
                        },
                    },
                ],
            },
            {
                id: 6,
                button: {
                    link: "topic6/point1",
                    audio: Line3Topic6,
                    value: {
                        title: "New product development",
                        time: getMediaDurationSec(mediaDuration.course3[6]),
                        bgColor: COLORS.blue_light,
                        image: Line3Topic6Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 60px)",
                        left: "1870px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.blue_light,
                            position: "top",
                            text: "Our innovative products",
                            top: "calc(50% - 150px + 160px)",
                            left: "2090px",
                        },
                    },
                ],
            },
            {
                id: 7,
                button: {
                    link: "topic7/point1",
                    audio: Line3Topic7,
                    value: {
                        title: "International cooperation and support for young sсholars",
                        time: getMediaDurationSec(mediaDuration.course3[7]),
                        bgColor: COLORS.turquoise,
                        image: Line3Topic7Image,
                        rotate: "165",
                        top: "calc(50% - 150px + 100px)",
                        left: "2190px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.turquoise,
                            position: "bottom",
                            text: "Green chemistry for life",
                            top: "calc(50% - 150px + 150px)",
                            left: "2400px",
                        },
                    },
                ],
            },
            {
                id: 8,
                button: {
                    link: "topic8/point1",
                    audio: Line3Topic8,
                    value: {
                        title: "Support for innovative projects",
                        time: getMediaDurationSec(mediaDuration.course3[8]),
                        bgColor: COLORS.green_bright,
                        image: Line3Topic8Image,
                        rotate: "-165",
                        top: "calc(50% - 150px + 95px)",
                        left: "2490px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_bright,
                            position: "top",
                            text: "There is an innovator in all of us!",
                            top: "calc(50% - 150px + 135px)",
                            left: "2700px",
                        },
                    },
                ],
            },
            {
                id: 9,
                test: true,
                button: {
                    link: "test",
                    audio: Test,
                    value: {
                        title: "Test",
                        time: `≈${getMediaDurationSec(
                            mediaDuration.course3[9]
                        )}`,
                        bgColor: COLORS.blue,
                        image: TestImage,
                        rotate: "-150",
                        top: "calc(50% - 150px + 45px)",
                        left: "2790px",
                    },
                },
            },
        ],
    },
    course4: {
        id: "04",
        titleAudio: Course4,
        title: "Environment",
        width: "3250",
        metaTitle: "Environment",
        metaDescription:
            "PhosAgro has conducted a comprehensive assessment of its operations and identified the key areas of its environmental impact. The Company’s Environmental Strategy reflects the UN Sustainable Development Goals (SDGs).",
        timeline: [
            {
                id: 0,
                intro: true,
                button: {
                    audio: Intro,
                    value: {
                        modal: [
                            {
                                top: "-20px",
                                left: "0",
                            },
                            {
                                top: "-35px",
                                left: "30px",
                            },
                        ],
                        title: "Introduction",
                        time: getMediaDurationSec(mediaDuration.course4[0]),
                        bgColor: COLORS.orange,
                        image: IntroTimelineImage,
                        rotate: "-64",
                        top: "calc(50% - 150px + 90px)",
                        left: "55px",
                    },
                },
            },
            {
                id: 1,
                button: {
                    link: "topic1/point1",
                    audio: Line4Topic1,
                    value: {
                        title: "PhosAgro’s climate strategy",
                        time: getMediaDurationSec(mediaDuration.course4[1]),
                        bgColor: COLORS.green_light,
                        image: Line4Topic1Image,
                        rotate: "-145",
                        top: "calc(50% - 150px + 60px)",
                        left: "295px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_light,
                            position: "top",
                            text: "Climate action",
                            top: "calc(50% - 150px + 145px)",
                            left: "520px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.green_light,
                            position: "bottom",
                            text: "Going low-carbon",
                            top: "calc(50% - 150px + 140px)",
                            left: "580px",
                        },
                    },
                ],
            },
            {
                id: 2,
                button: {
                    link: "topic2/point1",
                    audio: Line4Topic2,
                    value: {
                        title: `Energy Efficiency Programme`,
                        time: getMediaDurationSec(mediaDuration.course4[2]),
                        bgColor: COLORS.green_dark,
                        image: Line4Topic2Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 40px)",
                        left: "670px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_dark,
                            position: "top",
                            text: "Energy efficiency",
                            top: "calc(50% - 150px + 150px)",
                            left: "890px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.green_dark,
                            position: "bottom",
                            text: `Green resources`,
                            top: "calc(50% - 150px + 155px)",
                            left: "940px",
                        },
                    },
                ],
            },
            {
                id: 3,
                button: {
                    link: "topic3/point1",
                    audio: Line4Topic3,
                    value: {
                        title: "Waste",
                        time: getMediaDurationSec(mediaDuration.course4[3]),
                        bgColor: COLORS.brown_light,
                        image: Line4Topic3Image,
                        rotate: "165",
                        top: "calc(50% - 150px + 65px)",
                        left: "1025px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "Reduce, recycle, utilize",
                            top: "calc(50% - 150px + 90px)",
                            left: "1230px",
                        },
                    },
                ],
            },
            {
                id: 4,
                button: {
                    link: "topic4/point1",
                    audio: Line4Topic4,
                    value: {
                        title: "Air",
                        time: getMediaDurationSec(mediaDuration.course4[4]),
                        bgColor: COLORS.brown,
                        image: Line4Topic4Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 30px)",
                        left: "1320px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown,
                            position: "bottom",
                            text: "Clean air",
                            top: "calc(50% - 150px + 115px)",
                            left: "1520px",
                        },
                    },
                ],
            },
            {
                id: 5,
                button: {
                    link: "topic5/point1",
                    audio: Line4Topic5,
                    value: {
                        title: "Water",
                        time: getMediaDurationSec(mediaDuration.course4[5]),
                        bgColor: COLORS.grey_light,
                        image: Line4Topic5Image,
                        rotate: "0",
                        top: "calc(50% - 150px + 20px)",
                        left: "1610px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.grey_light,
                            position: "top",
                            text: "Zero waste water discharge",
                            top: "calc(50% - 150px + 120px)",
                            left: "1830px",
                        },
                    },
                ],
            },
            {
                id: 6,
                button: {
                    link: "topic6/point1",
                    audio: Line4Topic6,
                    value: {
                        title: "Biodivercity",
                        time: getMediaDurationSec(mediaDuration.course4[6]),
                        bgColor: COLORS.blue_light,
                        image: Line4Topic6Image,
                        rotate: "0",
                        top: "calc(50% - 150px + 50px)",
                        left: "1920px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.blue_light,
                            position: "bottom",
                            text: "Ecosystem stability",
                            top: "calc(50% - 150px + 165px)",
                            left: "2120px",
                        },
                    },
                ],
            },
            {
                id: 7,
                button: {
                    link: "topic7/point1",
                    audio: Line4Topic7,
                    value: {
                        title: "PhosAgro’s environmental management system",
                        time: getMediaDurationSec(mediaDuration.course4[7]),
                        bgColor: COLORS.turquoise,
                        image: Line4Topic7Image,
                        rotate: "0",
                        top: "calc(50% - 150px + 70px)",
                        left: "2210px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.turquoise,
                            position: "top",
                            text: "Environmental management",
                            top: "calc(50% - 150px + 150px)",
                            left: "2420px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.turquoise,
                            position: "bottom",
                            text: "Phosagro eco-standard",
                            top: "calc(50% - 150px + 165px)",
                            left: "2480px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.turquoise,
                            position: "top",
                            text: "Every little things counts",
                            top: "calc(50% - 150px + 165px)",
                            left: "2540px",
                            width: 114,
                        },
                    },
                ],
            },
            {
                id: 8,
                test: true,
                button: {
                    link: "test",
                    audio: Test,
                    value: {
                        title: "Test",
                        time: `≈${getMediaDurationSec(
                            mediaDuration.course4[8]
                        )}`,
                        bgColor: COLORS.blue,
                        image: TestImage,
                        rotate: "-150",
                        top: "calc(50% - 150px + 65px)",
                        left: "2640px",
                    },
                },
            },
        ],
    },
    course5: {
        id: "05",
        titleAudio: Course5,
        title: "Climate and energy efficiency",
        width: "2750",
        metaTitle: "Climate and energy efficiency",
        metaDescription:
            "PhosAgro's main climate goal is to reduce greenhouse gas emissions by 14% by 2028 compared to the base year 2018. In 2021, the Company became a partner of CGI Russia. PhosAgro has been publishing climate reports in accordance with TCFD standards since 2021.",
        timeline: [
            {
                id: 0,
                intro: true,
                button: {
                    audio: Intro,
                    value: {
                        modal: [
                            {
                                top: "-20px",
                                left: "0",
                            },
                        ],
                        title: "Introduction",
                        time: getMediaDurationSec(mediaDuration.course5[0]),
                        bgColor: COLORS.orange,
                        image: IntroTimelineImage,
                        rotate: "-64",
                        top: "calc(50% - 150px + 90px)",
                        left: "55px",
                    },
                },
            },
            {
                id: 1,
                button: {
                    link: "topic1/point1",
                    audio: Line5Topic1,
                    value: {
                        title: "How the climate is changing and why it is a threat to human wellbeing",
                        time: getMediaDurationSec(mediaDuration.course5[1]),
                        bgColor: COLORS.green_light,
                        image: Line5Topic1Image,
                        rotate: "-145",
                        top: "calc(50% - 150px + 60px)",
                        left: "295px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_light,
                            position: "top",
                            text: "+1 degree celsius",
                            top: "calc(50% - 150px + 145px)",
                            left: "510px",
                        },
                    },
                ],
            },
            {
                id: 2,
                button: {
                    link: "topic2/point1",
                    audio: Line5Topic2,
                    value: {
                        title: "Causes of global warming",
                        time: getMediaDurationSec(mediaDuration.course5[2]),
                        bgColor: COLORS.green_dark,
                        image: Line5Topic2Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 50px)",
                        left: "610px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_dark,
                            position: "bottom",
                            text: "Natural causes",
                            top: "calc(50% - 150px + 140px)",
                            left: "845px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.green_dark,
                            position: "top",
                            text: "Human causes",
                            top: "calc(50% - 150px + 155px)",
                            left: "900px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.green_dark,
                            position: "bottom",
                            text: "What about human impact?",
                            top: "calc(50% - 150px + 155px)",
                            left: "955px",
                        },
                    },
                    {
                        id: 4,
                        value: {
                            color: COLORS.green_dark,
                            position: "top",
                            text: "+4 degree celsius",
                            top: "calc(50% - 150px + 150px)",
                            left: "1010px",
                            width: 114,
                        },
                    },
                ],
            },
            {
                id: 3,
                button: {
                    link: "topic3/point1",
                    audio: Line5Topic3,
                    value: {
                        title: "What’s next?",
                        time: getMediaDurationSec(mediaDuration.course5[3]),
                        bgColor: COLORS.brown_light,
                        image: Line5Topic3Image,
                        rotate: "165",
                        top: "calc(50% - 150px + 50px)",
                        left: "1100px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "Physical consequences",
                            top: "calc(50% - 150px + 95px)",
                            left: "1320px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "Social consequences",
                            top: "calc(50% - 150px + 100px)",
                            left: "1375px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.brown_light,
                            position: "bottom",
                            text: "Economic consequences",
                            top: "calc(50% - 150px + 115px)",
                            left: "1435px",
                        },
                    },
                ],
            },
            {
                id: 4,
                button: {
                    link: "topic4/point1",
                    audio: Line5Topic4,
                    value: {
                        title: "Carbon neutrality",
                        time: getMediaDurationSec(mediaDuration.course5[4]),
                        bgColor: COLORS.brown,
                        image: Line5Topic4Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 40px)",
                        left: "1530px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown,
                            position: "top",
                            text: "The Paris Agreement",
                            top: "calc(50% - 150px + 100px)",
                            left: "1735px",
                        },
                    },
                ],
            },
            {
                id: 5,
                button: {
                    link: "topic5/point1",
                    audio: Line5Topic5,
                    value: {
                        title: "Climate for PhosAgro",
                        time: getMediaDurationSec(mediaDuration.course5[5]),
                        bgColor: COLORS.grey_light,
                        image: Line5Topic5Image,
                        rotate: "0",
                        top: "calc(50% - 150px + 50px)",
                        left: "1820px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.grey_light,
                            position: "bottom",
                            text: "Climate for PhosAgro",
                            top: "calc(50% - 150px + 145px)",
                            left: "2025px",
                        },
                    },
                ],
            },
            {
                id: 6,
                test: true,
                button: {
                    link: "test",
                    audio: Test,
                    value: {
                        title: "Test",
                        time: `≈${getMediaDurationSec(
                            mediaDuration.course5[6]
                        )}`,
                        bgColor: COLORS.blue,
                        image: TestImage,
                        rotate: "-150",
                        top: "calc(50% - 150px + 90px)",
                        left: "2130px",
                    },
                },
            },
        ],
    },
    course6: {
        id: "06",
        titleAudio: Course6,
        title: "Social environment and human rights",
        width: "2950",
        metaTitle: "Social environment and human rights",
        metaDescription:
            "Social responsibility is a generally accepted ethical standard of modern business. PhosAgro’s operations are underpinned by programmes of social security, protection of human rights and employee development.",
        timeline: [
            {
                id: 0,
                intro: true,
                button: {
                    audio: Intro,
                    value: {
                        modal: [
                            {
                                top: "-20px",
                                left: "0",
                            },
                        ],
                        title: "Introduction",
                        time: getMediaDurationSec(mediaDuration.course6[0]),
                        bgColor: COLORS.orange,
                        image: IntroTimelineImage,
                        rotate: "-64",
                        top: "calc(50% - 150px + 90px)",
                        left: "55px",
                    },
                },
            },
            {
                id: 1,
                button: {
                    link: "topic1/point1",
                    audio: Line6Topic1,
                    value: {
                        title: "Human rights and social principles of PhosAgro",
                        time: getMediaDurationSec(mediaDuration.course6[1]),
                        bgColor: COLORS.green_light,
                        image: Line6Topic1Image,
                        rotate: "-145",
                        top: "calc(50% - 150px + 60px)",
                        left: "295px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_light,
                            position: "top",
                            text: "Human rights",
                            top: "calc(50% - 150px + 145px)",
                            left: "510px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.green_light,
                            position: "bottom",
                            text: "PhosAgro’s social tools",
                            top: "calc(50% - 150px + 140px)",
                            left: "570px",
                        },
                    },
                ],
            },
            {
                id: 2,
                button: {
                    link: "topic2/point1",
                    audio: Line6Topic2,
                    value: {
                        title: "PhosAgro employees – key to our success",
                        time: getMediaDurationSec(mediaDuration.course6[2]),
                        bgColor: COLORS.green_dark,
                        image: Line6Topic2Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 50px)",
                        left: "650px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.green_dark,
                            position: "top",
                            text: "We are PhosAgro",
                            top: "calc(50% - 150px + 145px)",
                            left: "865px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.green_dark,
                            position: "bottom",
                            text: "Working and studying",
                            top: "calc(50% - 150px + 150px)",
                            left: "920px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.green_dark,
                            position: "top",
                            text: "Our youth policy",
                            top: "calc(50% - 150px + 150px)",
                            left: "980px",
                        },
                    },
                    {
                        id: 4,
                        value: {
                            color: COLORS.green_dark,
                            position: "bottom",
                            text: "Our support",
                            top: "calc(50% - 150px + 140px)",
                            left: "1050px",
                        },
                    },
                ],
            },
            {
                id: 3,
                button: {
                    link: "topic3/point1",
                    audio: Line6Topic3,
                    value: {
                        title: "Occupational heath and safety",
                        time: getMediaDurationSec(mediaDuration.course6[3]),
                        bgColor: COLORS.brown_light,
                        image: Line6Topic3Image,
                        rotate: "165",
                        top: "calc(50% - 150px + 50px)",
                        left: "1135px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown_light,
                            position: "top",
                            text: "Golden rules of OHS",
                            top: "calc(50% - 150px + 95px)",
                            left: "1345px",
                        },
                    },
                ],
            },
            {
                id: 4,
                button: {
                    link: "topic4/point1",
                    audio: Line6Topic4,
                    value: {
                        title: "Engagement of local communities",
                        time: getMediaDurationSec(mediaDuration.course6[4]),
                        bgColor: COLORS.brown,
                        image: Line6Topic4Image,
                        rotate: "-77",
                        top: "calc(50% - 150px + 40px)",
                        left: "1440px",
                    },
                },
                points: [
                    {
                        id: 1,
                        value: {
                            color: COLORS.brown,
                            position: "bottom",
                            text: "PhosAgro’s social programmes",
                            top: "calc(50% - 150px + 85px)",
                            left: "1655px",
                        },
                    },
                    {
                        id: 2,
                        value: {
                            color: COLORS.brown,
                            position: "top",
                            text: "Favourite cities",
                            top: "calc(50% - 150px + 95px)",
                            left: "1725px",
                        },
                    },
                    {
                        id: 3,
                        value: {
                            color: COLORS.brown,
                            position: "bottom",
                            text: "School-university-employment",
                            top: "calc(50% - 150px + 115px)",
                            left: "1800px",
                        },
                    },
                    {
                        id: 4,
                        value: {
                            color: COLORS.brown,
                            position: "top",
                            text: "Education, health and ethics",
                            top: "calc(50% - 150px + 125px)",
                            left: "1875px",
                        },
                    },
                    {
                        id: 5,
                        value: {
                            color: COLORS.brown,
                            position: "bottom",
                            text: "Spiritual Revival",
                            top: "calc(50% - 150px + 130px)",
                            left: "1955px",
                        },
                    },
                    {
                        id: 6,
                        value: {
                            color: COLORS.brown,
                            position: "top",
                            text: "Connecting generations",
                            top: "calc(50% - 150px + 140px)",
                            left: "2030px",
                        },
                    },
                    {
                        id: 7,
                        value: {
                            color: COLORS.brown,
                            position: "bottom",
                            text: "It is important to help",
                            top: "calc(50% - 150px + 165px)",
                            left: "2110px",
                        },
                    },
                    {
                        id: 8,
                        value: {
                            color: COLORS.brown,
                            position: "top",
                            text: "Sports",
                            top: "calc(50% - 150px + 165px)",
                            left: "2180px",
                        },
                    },
                ],
            },
            {
                id: 5,
                test: true,
                button: {
                    link: "test",
                    audio: Test,
                    value: {
                        title: "Test",
                        time: `≈${getMediaDurationSec(
                            mediaDuration.course6[5]
                        )}`,
                        bgColor: COLORS.blue,
                        image: TestImage,
                        rotate: "-150",
                        top: "calc(50% - 150px + 80px)",
                        left: "2290px",
                    },
                },
            },
        ],
    },
}

export default timelineData
