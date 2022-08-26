import { CourseSlider1, CourseSlider2, CourseSlider3 } from "../assets/images"

const circleSlider = [
    [
        {
            source: CourseSlider1,
            alt: "image1",
        },
        {
            source: CourseSlider2,
            alt: "image2",
        },
        {
            source: CourseSlider3,
            alt: "image3",
        },
    ],
    [
        {
            source: CourseSlider3,
            alt: "image1",
        },
        {
            source: CourseSlider2,
            alt: "image2",
        },
        {
            source: CourseSlider1,
            alt: "image3",
        },
    ],
]

const introSlider = [
    {
        text: `Устойчивое развитие - термин <span class="accent">популярный</span>. Его обсуждают практически на всех уровнях, во многих сферах. Что означает понятие устойчивого развития для "ФосАгро"?`,
        images: circleSlider[0],
        audio: "",
        note: "Каждый из нас может внести свой вклад. Любое предложение по улучшению производства может привести к большому инновационному рывку. Все мы немного изобретатели!",
    },
    {
        text: `В этом блоке вместе с вами мы разберемся, как появилась концепция «Устойчивое развитие», сконцентрируем внимание на той деятельности, которую ведет компания в этой области.`,
        images: circleSlider[1],
        audio: "",
    },
]

export default { circleSlider, introSlider }
