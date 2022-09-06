import { SpeakerAudio, SpeakerAudio2 } from "../assets/audio"
import { CourseSlider1, CourseSlider2, CourseSlider3 } from "../assets/images"
import {
    IntroModalOne21,
    IntroModalOne22,
    IntroModalOne23,
} from "../assets/images/Course1"
import {
    IntroModalTwo11,
    IntroModalTwo12,
    IntroModalTwo13,
    IntroModalTwo21,
    IntroModalTwo22,
    IntroModalTwo23,
} from "../assets/images/Course2"

const introModalData = {
    introModal1: [
        {
            text: `Устойчивое развитие - термин <span class="accent">популярный</span>. Его обсуждают практически на всех уровнях, во многих сферах. Что означает понятие устойчивого развития для "ФосАгро"?`,
            images: [
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
            audio: SpeakerAudio,
            note: "Каждый из нас может внести свой вклад. Любое предложение по улучшению производства может привести к большому инновационному рывку. Все мы немного изобретатели!",
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
            audio: SpeakerAudio2,
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
            audio: SpeakerAudio,
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
            audio: SpeakerAudio2,
        },
    ],
}

export default introModalData
