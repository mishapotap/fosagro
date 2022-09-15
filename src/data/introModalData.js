import {
    IntroModalOne11,
    IntroModalOne12,
    IntroModalOne13,
    IntroModalOne21,
    IntroModalOne22,
    IntroModalOne23,
    IntroSpeaker,
} from "../assets/Course1/Into"
import {
    IntroModalTwo11,
    IntroModalTwo12,
    IntroModalTwo13,
    IntroModalTwo21,
    IntroModalTwo22,
    IntroModalTwo23,
} from "../assets/Course2/Intro"

import {
    IntroModalThree11,
    IntroModalThree12,
    IntroModalThree13,
} from "../assets/Course3/Intro"

import {
    IntroModalFive11,
    IntroModalFive12,
    IntroModalFive13,
} from "../assets/Course5/Intro"

const introModalData = {
    introModal1: [
        {
            text: `Устойчивое развитие - термин <span>популярный</span>. Его обсуждают практически на всех уровнях, во многих сферах. Что означает понятие устойчивого развития для "ФосАгро"?`,
            images: [
                {
                    source: IntroModalOne11,
                    alt: "image1",
                },
                {
                    source: IntroModalOne12,
                    alt: "image2",
                },
                {
                    source: IntroModalOne13,
                    alt: "image3",
                },
            ],
            audio: IntroSpeaker,
        },
        {
            text: `В этом блоке вместе с вами мы разберемся, как появилась концепция «Устойчивое развитие», сконцентрируем внимание на той деятельности, которую ведет компания в этой области.`,
            images: [
                {
                    source: IntroModalOne21,
                    alt: "image1",
                },
                {
                    source: IntroModalOne22,
                    alt: "image2",
                },
                {
                    source: IntroModalOne23,
                    alt: "image3",
                },
            ],
            audio: "",
        },
    ],
    introModal2: [
        {
            text: `До начала 80-х годов XX века бизнес, как и все человечество, не придавал большого значения окружающей среде.  Стремление зарабатывать было основным. Отдельные разговоры об ограниченности ресурсов планеты мало влияли на общую ситуацию.`,
            images: [
                {
                    source: IntroModalTwo11,
                    alt: "image1",
                },
                {
                    source: IntroModalTwo12,
                    alt: "image2",
                },
                {
                    source: IntroModalTwo13,
                    alt: "image3",
                },
            ],
            audio: IntroSpeaker,
        },
        {
            text: `При этом еще в XVIII веке английский экономист Томас Мальтус связывал причины социальных бедствий, политических потрясений и экологических катастроф с опережающим по отношению к ресурсам ростом численности населения. Эти идеи легли в основу концепции мальтузианства.`,
            images: [
                {
                    source: IntroModalTwo21,
                    alt: "image1",
                },
                {
                    source: IntroModalTwo22,
                    alt: "image2",
                },
                {
                    source: IntroModalTwo23,
                    alt: "image3",
                },
            ],
            audio: "",
        },
    ],
    introModal3: [
        {
            text: `Инновации, технологии и уникальные компетенции наших работников позволяют ФосАгро уверенно смотреть в будущее и отвечать на вызовы сегодняшнего дня.`,
            images: [
                {
                    source: IntroModalThree11,
                    alt: "image1",
                },
                {
                    source: IntroModalThree12,
                    alt: "image2",
                },
                {
                    source: IntroModalThree13,
                    alt: "image3",
                },
            ],
            audio: IntroSpeaker,
            note: "Каждый из нас может внести свой вклад. Любое предложение по улучшению производства может привести к большому инновационному рывку. Все мы немного изобретатели!",
        },
    ],
    introModal5: [
        {
            text: `Земля преобразует энергию солнечного света в инфракрасное излучение. Оно исходит от Земли в космос. Парниковые газы затрудняют этот процесс, частично поглощая излучение и удерживая энергию в атмосфере. Что влияет на температуру поверхности планеты.`,
            images: [
                {
                    source: IntroModalFive11,
                    alt: "image1",
                },
                {
                    source: IntroModalFive12,
                    alt: "image2",
                },
                {
                    source: IntroModalFive13,
                    alt: "image3",
                },
            ],
            audio: IntroSpeaker,
        },
    ],
}

export default introModalData
