import Speaker11 from "../../../assets/_ru/Course5/Topic1/speaker11.mp3"

import {
    CourseSliderFive21,
    CourseSliderFive22,
    CourseSliderFive23,
    Speaker21,
} from "../../../assets/_ru/Course5/Topic2/Point1"

import {
    CourseSliderFive24,
    CourseSliderFive25,
    CourseSliderFive26,
    Speaker22,
} from "../../../assets/_ru/Course5/Topic2/Point2"

import Speaker23 from "../../../assets/_ru/Course5/Topic2/Point3/speaker23.mp3"

import Speaker24 from "../../../assets/_ru/Course5/Topic2/Point4/speaker24.mp3"

import {
    CourseSliderFive31,
    CourseSliderFive32,
    CourseSliderFive33,
    Speaker31,
} from "../../../assets/_ru/Course5/Topic3/Point1"

import {
    CourseSliderFive34,
    CourseSliderFive35,
    CourseSliderFive36,
    Speaker32,
} from "../../../assets/_ru/Course5/Topic3/Point2"

import {
    CourseSliderFive37,
    CourseSliderFive38,
    CourseSliderFive39,
    Speaker33,
} from "../../../assets/_ru/Course5/Topic3/Point3"

import {
    CourseSliderFive41,
    CourseSliderFive42,
    CourseSliderFive43,
    Speaker41,
} from "../../../assets/_ru/Course5/Topic4"

import Video51 from "../../../assets/_ru/Course5/Topic5/video5.1.mp4"

const chapter5Data = {
    1: {
        sectTitle: "Как меняется климат и почему это опасно для человечества",
        pages: {
            1: {
                title: "+1 градус",
                audioSrc: Speaker11,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Прирост температуры уже сейчас составляет около 1,1 градуса Цельсия.",
                                },
                                {
                                    id: 2,
                                    text: "В 1999 году опубликован график роста температур («хоккейная клюшка»).",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "В 1824 году Жозеф Фурье впервые обнаружил парниковый эффект.",
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
                        text: "Визуализация климатической спирали",
                        url: "https://www.youtube.com/watch?v=jWoCXLuTIkI",
                    },
                    {
                        id: 2,
                        text: "Глобальное изменение климата NASA (НАСА)",
                        url: "https://climate.nasa.gov/vital-signs/global-temperature/",
                    },
                    {
                        id: 3,
                        text: "Письма о геофизических исследованиях",
                        url: "https://agupubs.onlinelibrary.wiley.com/doi/10.1029/1999GL900070",
                    },
                ],
            },
        },
    },
    2: {
        sectTitle: "Причины глобального потепления",
        pages: {
            1: {
                title: "Природные аспекты",
                audioSrc: Speaker21,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Изменения в структуре ветров и характере океанических течений.",
                                },
                                { id: 2, text: "Вулканическая деятельность." },
                                { id: 3, text: "Смещение полюсов." },
                                {
                                    id: 4,
                                    text: "Изменение солнечной активности&nbsp;&nbsp;- колебания достигающего Земли количества солнечного света и солнечной радиации в зависимости от изменений положения оси Земли и её орбиты.",
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
                            alt: "синяя вода с волнами, вид сверху",
                        },
                        {
                            source: CourseSliderFive22,
                            alt: "извержение вулкана",
                        },
                        {
                            source: CourseSliderFive23,
                            alt: "планета Земля в кубе льда",
                        },
                    ],
                },
            },
            2: {
                title: "Антропогенные аспекты",
                audioSrc: Speaker22,
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "Долгое время возможность влияния на климат антропогенных факторов была предметом научных дискуссий. Еще упомянутый ранее Фурье заподозрил, что деятельность человека может влиять на климат. Но лишь в конце 19-го века учёные впервые начали это утверждать.",
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: "Slider",
                    data: [
                        {
                            source: CourseSliderFive24,
                            alt: "портрет Жозефа Фурье, французского математика и физика",
                        },
                        {
                            source: CourseSliderFive25,
                            alt: "много машин стоят в пробке",
                        },
                        {
                            source: CourseSliderFive26,
                            alt: "фабрики с трубами, из которых выходит дым",
                        },
                    ],
                },
            },
            3: {
                title: "А что с влиянием человека?",
                audioSrc: Speaker23,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "В конце 19-го века учёные впервые начали утверждать, что деятельность человека может влиять на климат.",
                                },
                                {
                                    id: 2,
                                    text: "«Циклы Миланковича»: Земля должна остужаться, наблюдается обратное.",
                                },
                                {
                                    id: 3,
                                    text: "В 1988 году при участии ООН была создана Межправительственная группа экспертов по изменению климата.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "В 2007 году человек, с вероятностью в 90%, признан научным сообществом (МГЭИК) основной причиной глобального потепления.",
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
                        text: "Доклады МГЭИК",
                        url: "https://www.ipcc.ch/languages-2/russian/",
                    },
                ],
            },
            4: {
                title: "+4 градуса",
                audioSrc: Speaker24,
                content: [
                    {
                        component: "List",
                        data: {
                            title: "Одними из основных антропогенных факторов глобального потепления являются:",
                            items: [
                                {
                                    id: 1,
                                    text: "вырубка деревьев на больших территориях. Чем больше исчезает деревьев, тем выше концентрация CO<sub>2</sub> в воздухе;",
                                },
                                {
                                    id: 2,
                                    text: "массовое животноводство. Около 20% антропогенных климатических изменений связаны с массовым животноводством;",
                                },
                                {
                                    id: 3,
                                    text: "использование в сельском хозяйстве азотсодержащих удобрений.",
                                },
                            ],
                        },
                    },
                    {
                        component: "Note",
                        data: {
                            text: "МГЭИК к 2100 году прогнозирует повышение температуры на Земле на 4 градуса.",
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
                        text: "Доклад об особенностях климата на территории РФ за 2021 год",
                        url: "https://www.meteorf.gov.ru/images/news/20220324/4/Doklad.pdf",
                    },
                ],
            },
        },
    },
    3: {
        sectTitle: "Что дальше?",
        pages: {
            1: {
                title: "Физические последствия",
                audioSrc: Speaker31,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Таяние льдов и повышение уровня моря (в наиболее агрессивных сценариях – до 98 см в 21 веке).",
                                },
                                {
                                    id: 2,
                                    text: "Увеличение частоты природных катаклизмов.",
                                },
                                {
                                    id: 3,
                                    text: "Увеличение периодов чрезвычайно жаркой погоды.",
                                },
                                {
                                    id: 4,
                                    text: "Угроза биологическим видам живых существ и другим природным ресурсам, например, закисление океана.",
                                },
                                {
                                    id: 5,
                                    text: "Замедление или прекращение циркуляции атлантических меридиональных течений.",
                                },
                                {
                                    id: 6,
                                    text: "Смещение ареалов биологических видов, увеличение вероятности вымирания части из них.",
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
                            alt: "айсберг посреди воды",
                        },
                        {
                            source: CourseSliderFive32,
                            alt: "закат в горах",
                        },
                        {
                            source: CourseSliderFive33,
                            alt: "два медведя среди травы",
                        },
                    ],
                },
            },
            2: {
                title: "Социальные последствия",
                audioSrc: Speaker32,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Увеличение числа жителей планеты, которые находятся в непригодных для жизни условиях.",
                                },
                                { id: 2, text: "Увеличение уровня насилия." },
                                {
                                    id: 3,
                                    text: "Колебания урожайности сельскохозяйственных культур.",
                                },
                                {
                                    id: 4,
                                    text: "Увеличение территории суши со среднегодовой температурой свыше 29 градусов. Это чревато повышением уровня загрязнения воздуха и как следствие – увеличением сердечно-сосудистых и респираторных заболеваний.",
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
                            alt: "мальчик сидит на разрушенной тумбе и читает книгу",
                        },
                        {
                            source: CourseSliderFive35,
                            alt: "большая толпа людей",
                        },
                        {
                            source: CourseSliderFive36,
                            alt: "министр Тувалу говорит речь в воде",
                        },
                    ],
                },
                links: [
                    {id: 1, text: "Выступление министра Тувалу в воде", url: "https://www.youtube.com/watch?v=jBBsv0QyscE&ab_channel=GuardianNews"}
                ]
            },
            3: {
                title: "Экономические последствия",
                audioSrc: Speaker33,
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "риски нарушения процессов производства и логистики;",
                                },
                                {
                                    id: 2,
                                    text: "риски потери прибыли и бизнеса.",
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
                            alt: "стройка, оборудование",
                        },
                        {
                            source: CourseSliderFive38,
                            alt: "порт",
                        },
                        {
                            source: CourseSliderFive39,
                            alt: "человек смотрит презентацию по изменению продаж",
                        },
                    ],
                },
            },
        },
    },
    4: {
        sectTitle: "Углеродная нейтральность",
        pages: {
            1: {
                title: "Парижское соглашение",
                audioSrc: Speaker41,
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "В 2015 году 196 стран приняли Парижское соглашение. Углеродная нейтральность стала мировым трендом",
                        },
                    },
                    {
                        component: "List",
                        data: {
                            title: "Более 90 стран планируют использовать рыночные механизмы для соблюдения обязательств по Парижскому соглашению:",
                            items: [
                                {
                                    id: 1,
                                    text: "плата за выбросы установлена в виде углеродного налога (35 стран) и в формате углеродного рынка (28 стран);",
                                },
                                {
                                    id: 2,
                                    text: "ценой на углерод охвачено около 20% глобальных выбросов парниковых газов.",
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
                            alt: "глобус",
                        },
                        {
                            source: CourseSliderFive42,
                            alt: "фабрика, вид сверху",
                        },
                        {
                            source: CourseSliderFive43,
                            alt: "планета земля, солнечные батареи",
                        },
                    ],
                },
                links: [
                    {
                        id: 1,
                        text: "Программа ООН по окружающей среде",
                        url: "https://www.unep.org/",
                    },
                    {
                        id: 2,
                        text: "Cтратегия низкоуглеродного развития России до 2050 года",
                        url: "http://static.government.ru/media/files/ADKkCzp3fWO32e2yA0BhtIpyzWfHaiUa.pdf",
                    },
                    {
                        id: 3,
                        text: "Парижское соглашение",
                        url: "https://unfccc.int/ru/peregovornyy-process-i-vstrechi/parizhskoe-soglashenie/chto-takoe-parizhskoe-soglashenie",
                    },
                ],
            },
        },
    },
    5: {
        sectTitle: "Климат для ФосАгро",
        pages: {
            1: {
                title: "Климат для ФосАгро",
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "<span>Основная цель нашей Компании в области климата – снижение выбросов парниковых газов к 2028 году на 14% по отношению к базовому 2018 году.</span>",
                        },
                    },
                    {
                        component: "Text",
                        data: {
                            text: "Эту задачу мы ставим перед собой в части выбросов парниковых газов при производстве нашей продукции (охват №1), в части выбросов при производстве генерирующими компаниями приобретенной нами энергии (охват №2), а также в части выбросов в цепочке поставок – при производстве контрагентами потребляемых нами ресурсов, а также при использовании нашей продукции (охват №3).",
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
                        text: "Платформа Climate Ambition Accelerator",
                        url: "https://unglobalcompact.org/take-action/climate-ambition-accelerator",
                    },
                    {
                        id: 2,
                        text: "Глобальная Климатическая Инициатива",
                        url: "https://cgi-russia.ru/",
                    },
                    {
                        id: 2,
                        text: "Годовой отчет Компании за 2021 год",
                        url: "https://ar2021.phosagro.com/reports/phosagro/annual/2021/gb/Russian/0/.html",
                    },
                ],
            },
        },
    },
}

export default chapter5Data
