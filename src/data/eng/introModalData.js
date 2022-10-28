import {
    IntroModalOne11,
    IntroModalOne12,
    IntroModalOne13,
    IntroModalOne21,
    IntroModalOne22,
    IntroModalOne23,
    Intro1Speaker1,
    Intro1Speaker2,
} from "../../assets/_eng/Course1/Into"
import {
    IntroModalTwo11,
    IntroModalTwo12,
    IntroModalTwo13,
    IntroModalTwo21,
    IntroModalTwo22,
    IntroModalTwo23,
    Intro2Speaker1,
    Intro2Speaker2,
} from "../../assets/_eng/Course2/Intro"

import {
    IntroModalThree11,
    IntroModalThree12,
    IntroModalThree13,
    Intro3Speaker1,
} from "../../assets/_eng/Course3/Intro"

import {
    IntroModalFour11,
    IntroModalFour12,
    IntroModalFour13,
    IntroModalFour21,
    IntroModalFour22,
    IntroModalFour23,
    Intro4Speaker1,
    Intro4Speaker2,
} from "../../assets/_eng/Course4/Intro"

import {
    IntroModalFive11,
    IntroModalFive12,
    IntroModalFive13,
    Intro5Speaker1,
} from "../../assets/_eng/Course5/Intro"

import {
    IntroModalSix11,
    IntroModalSix12,
    IntroModalSix13,
    Intro6Speaker1,
} from "../../assets/_eng/Course6/Intro"

const introModalData = {
    introModal1: [
        {
            text: `The term “sustainable development” is on everyone’s lips these days. It is a hot topic discussed at practically all levels in many industries. But what does it mean for PhosAgro?`,
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
            audio: Intro1Speaker1,
        },
        {
            text: `Here, we will trace back the evolution of this concept and provide some details on the Company’s sustainable development initiatives.`,
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
            audio: Intro1Speaker2,
        },
    ],
    introModal2: [
        {
            text: `Up until the 1980s, businesses and humanity at large mostly ignored environmental matters. Profit was king, and the discourse on resource scarcity was far from where it needed to be to change the status quo.`,
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
            audio: Intro2Speaker1,
        },
        {
            text: `As far back as the 18th century, the English economist Thomas Malthus saw social ills, political turmoil and environmental disasters as a consequence of the world’s population increasing at a greater rate than its resources, which formed the bedrock of Malthusianism.`,
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
            audio: Intro2Speaker2,
        },
    ],
    introModal3: [
        {
            text: `Innovation, technology, and the unique competencies of our personnel enable PhosAgro to be confident about our future and meet today's challenges.`,
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
            audio: Intro3Speaker1,
            note: "Each of us can make a difference. Any proposal to streamline production processes can bring about a disruptive innovation. We are all a bit of an innovator!",
        },
    ],
    introModal4: [
        {
            text: `In Russia, the environmental agenda moved to the front burner following the May 2020 diesel fuel spill in the Arctic. It was a wake-up call for both the public and business, a reminder that the onus is on everyone to take care of the environment.`,
            images: [
                {
                    source: IntroModalFour11,
                    alt: "image1",
                },
                {
                    source: IntroModalFour12,
                    alt: "image2",
                },
                {
                    source: IntroModalFour13,
                    alt: "image3",
                },
            ],
            audio: Intro4Speaker1,
            links: [
                {
                    // ! нет названия и англ ссылки
                    id: 1,
                    text: "Project «Environment is everyone's business»",
                    url: "https://www.xn--80afbcbeimqege7abfeb7wqb.xn--p1ai/",
                },
            ],
        },
        {
            text: `PhosAgro’s Environmental Policy enshrines the Company's responsibility for minimising the environmental impact of its operations throughout the entire product life cycle – from mine to plate.`,
            images: [
                {
                    source: IntroModalFour21,
                    alt: "image1",
                },
                {
                    source: IntroModalFour22,
                    alt: "image2",
                },
                {
                    source: IntroModalFour23,
                    alt: "image3",
                },
            ],
            audio: Intro4Speaker2,
            links: [
                {
                    id: 1,
                    text: "PhosAgro Environmental Policy",
                    url: "https://cdn.phosagro.com/sustainability/environmental_policy.pdf",
                },
            ],
        },
    ],
    introModal5: [
        {
            text: `The Earth converts solar energy into infrared radiation and emits it back into space. Greenhouse gases hinder this process by partially absorbing the radiation and trapping the energy in the atmosphere, which affects the temperature of the planet’s surface.`,
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
            audio: Intro5Speaker1,
        },
    ],
    introModal6: [
        {
            text: `Social responsibility is a generally accepted ethical standard of modern business. PhosAgro’s operations are underpinned by programmes of social security, protection of human rights and employee development.`,
            images: [
                {
                    source: IntroModalSix11,
                    alt: "image1",
                },
                {
                    source: IntroModalSix12,
                    alt: "image2",
                },
                {
                    source: IntroModalSix13,
                    alt: "image3",
                },
            ],
            audio: Intro6Speaker1,
        },
    ],
}

export default introModalData
