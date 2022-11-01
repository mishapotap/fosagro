import {
    IntroModalOne11,
    IntroModalOne12,
    IntroModalOne13,
    IntroModalOne21,
    IntroModalOne22,
    IntroModalOne23,
    Intro1Speaker1,
    Intro1Speaker2,
} from "../../assets/_ru/Course1/Intro"
import {
    IntroModalTwo11,
    IntroModalTwo12,
    IntroModalTwo13,
    IntroModalTwo21,
    IntroModalTwo22,
    IntroModalTwo23,
    Intro2Speaker1,
    Intro2Speaker2,
} from "../../assets/_ru/Course2/Intro"

import {
    IntroModalThree11,
    IntroModalThree12,
    IntroModalThree13,
    Intro3Speaker1,
} from "../../assets/_ru/Course3/Intro"

import {
    IntroModalFour11,
    IntroModalFour12,
    IntroModalFour13,
    IntroModalFour21,
    IntroModalFour22,
    IntroModalFour23,
    Intro4Speaker1,
    Intro4Speaker2,
} from "../../assets/_ru/Course4/Intro"

import {
    IntroModalFive11,
    IntroModalFive12,
    IntroModalFive13,
    Intro5Speaker1,
} from "../../assets/_ru/Course5/Intro"

import {
    IntroModalSix11,
    IntroModalSix12,
    IntroModalSix13,
    Intro6Speaker1,
} from "../../assets/_ru/Course6/Intro"

const introModalData = {
    introModal1: [
        {
            text: `Устойчивое развитие&nbsp;&nbsp;- термин <span>популярный</span>. Его обсуждают практически на всех уровнях, во многих сферах. Что означает понятие устойчивого развития для ФосАгро?`,
            images: [
                {
                    source: IntroModalOne11,
                    alt: "человек на фоне гор",
                },
                {
                    source: IntroModalOne12,
                    alt: "рука природы тянется к руке человека",
                },
                {
                    source: IntroModalOne13,
                    alt: "поле",
                },
            ],
            audio: Intro1Speaker1,
        },
        {
            text: `В этом блоке вместе с вами мы разберемся, как появилась концепция «Устойчивое развитие», сконцентрируем внимание на той деятельности, которую ведет Компания в этой области.`,
            images: [
                {
                    source: IntroModalOne21,
                    alt: "машина в поле",
                },
                {
                    source: IntroModalOne22,
                    alt: "машина в поле",
                },
                {
                    source: IntroModalOne23,
                    alt: "земля и трава",
                },
            ],
            audio: Intro1Speaker2,
        },
    ],
    introModal2: [
        {
            text: `До начала 80-х годов XX века бизнес, как и все человечество, не придавал большого значения окружающей среде.  Стремление зарабатывать было основным. Отдельные разговоры об ограниченности ресурсов планеты мало влияли на общественную ситуацию.`,
            images: [
                {
                    source: IntroModalTwo11,
                    alt: "черно-белая старая фотография фабрики",
                },
                {
                    source: IntroModalTwo12,
                    alt: "черно-белая старая фотография фабрики, женщины шьют",
                },
                {
                    source: IntroModalTwo13,
                    alt: "черно-белая старая фотография фабрики, машина",
                },
            ],
            audio: Intro2Speaker1,
        },
        {
            text: `При этом еще в XVIII веке английский экономист Томас Мальтус связывал причины социальных бедствий, политических потрясений и экологических катастроф с опережающим по отношению к ресурсам ростом численности населения. Эти идеи легли в основу концепции мальтузианства.`,
            images: [
                {
                    source: IntroModalTwo21,
                    alt: "портрет ученого Томаса Мальтуса",
                },
                {
                    source: IntroModalTwo22,
                    alt: "сильный дым, исходящий из вулкана",
                },
                {
                    source: IntroModalTwo23,
                    alt: "наводнение, дома и машины в воде",
                },
            ],
            audio: Intro2Speaker2,
        },
    ],
    introModal3: [
        {
            text: `Инновации, технологии и уникальные компетенции наших работников позволяют ФосАгро уверенно смотреть в будущее и отвечать на вызовы сегодняшнего дня.`,
            images: [
                {
                    source: IntroModalThree11,
                    alt: "оборудование на фабрике, и люди в форме ФосАгро",
                },
                {
                    source: IntroModalThree12,
                    alt: "женщина в белом халате с логотипом ФосАгро использует специальное оборудование",
                },
                {
                    source: IntroModalThree13,
                    alt: "мужчина в каске улыбается и смотрит в камеру",
                },
            ],
            audio: Intro3Speaker1,
            note: "Каждый из нас может внести свой вклад. Любое предложение по улучшению производства может привести к большому инновационному рывку. Все мы немного изобретатели!",
        },
    ],
    introModal4: [
        {
            text: `В России тема экологии особенно остро зазвучала после разлива дизельного топлива в Арктике в мае 2020 года. Тогда и общественность, и бизнес достигли понимания&nbsp;&nbsp;- «экология дело каждого».`,
            images: [
                {
                    source: IntroModalFour11,
                    alt: "вырубленый лес",
                },
                {
                    source: IntroModalFour12,
                    alt: "машины, копающие землю",
                },
                {
                    source: IntroModalFour13,
                    alt: "пожар в лесу",
                },
            ],
            audio: Intro4Speaker1,
            links: [
                {
                    id: 1,
                    text: "Проект «Экология дело каждого»",
                    url: "https://www.xn--80afbcbeimqege7abfeb7wqb.xn--p1ai/",
                },
            ],
        },
        {
            text: `В экологической Политике ФосАгро закреплена ответственность по минимизации воздействия деятельности предприятий на окружающую среду на всем протяжении жизненного цикла продукции — от руды до еды.`,
            images: [
                {
                    source: IntroModalFour21,
                    alt: "разлив нефти",
                },
                {
                    source: IntroModalFour22,
                    alt: "лес сверху",
                },
                {
                    source: IntroModalFour23,
                    alt: "женщина с контейнером для переработки материалов",
                },
            ],
            audio: Intro4Speaker2,
            links: [
                {
                    id: 1,
                    text: "Политика в области охраны окружающей среды ПАО «ФосАгро»",
                    url: "https://cdn.phosagro.ru/upload/docs/environmental_protection.pdf",
                },
            ],
        },
    ],
    introModal5: [
        {
            text: `Земля преобразует энергию солнечного света в инфракрасное излучение. Оно исходит от Земли в космос. Парниковые газы затрудняют этот процесс, частично поглощая излучение и удерживая энергию в атмосфере, что влияет на температуру поверхности планеты.`,
            images: [
                {
                    source: IntroModalFive11,
                    alt: "Земля из космоса",
                },
                {
                    source: IntroModalFive12,
                    alt: "Земля из космоса со звездами",
                },
                {
                    source: IntroModalFive13,
                    alt: "сухие деревья в пустыне",
                },
            ],
            audio: Intro5Speaker1,
        },
    ],
    introModal6: [
        {
            text: `Социальная ответственность&nbsp;&nbsp;- общепризнанный этический стандарт ведения современного бизнеса. Программы по обеспечению социальной защищенности, соблюдению прав человека и развитию сотрудников лежат в основе деятельности ФосАгро.`,
            images: [
                {
                    source: IntroModalSix11,
                    alt: "женщина в каске и форме ФосАгро улыбается и смотрит в камеру",
                },
                {
                    source: IntroModalSix12,
                    alt: "работники ФосАгро общаются между собой",
                },
                {
                    source: IntroModalSix13,
                    alt: "волейбольная команда в форме с логотипом ФосАгро",
                },
            ],
            audio: Intro6Speaker1,
        },
    ],
}

export default introModalData
