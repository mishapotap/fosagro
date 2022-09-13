import { COLORS } from "../../constants"
import {
    CourseSlider1,
    CourseSlider2,
    CourseSlider3,
} from "../../assets/images"
import { MainBG, TepkVideo, TestVideo } from "../../assets/video"
import { SpeakerAudio, SpeakerAudio2 } from "../../assets/audio"

// TODO заполнить нормальные данные для аудио, видео, слайдеров и ссылок

const chapter1Data = {
    1: {
        sectTitle: "Суть концепции устойчивого развития",
        sectColor: COLORS.green_light,
        progressType: 'grass',
        pages: {
            1: {
                title: "Экология Средневековья",
                audioSrc: SpeakerAudio,
                content: [
                    {
                        component: 'List',
                        data: {
                            title: "В средневековых городах появились:",
                            items: [
                                {
                                    id: 1,
                                    text: "службы по обращению с отходами;",
                                },
                                {
                                    id: 2,
                                    text: "токсичные производства обособили за пределами жилой зоны.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "animation",
                    component: 'AnimateMap',
                },
            },
            2: {
                title: "Нужен баланс",
                audioSrc: SpeakerAudio2,
                content: [
                    {
                        component: 'Text',
                        data: {
                            text: "Главная задача  - <span>соблюсти баланс</span> между желанием человека комфортно жить и возможностями окружающей среды.",
                        },
                    },
                ],
                media: {
                    type: "circleSlider",
                    component: 'Slider',
                    // временно
                    data: [
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
                },
            },
            3: {
                title: "Делать больше, ресурсов тратить меньше",
                audioSrc: "",
                content: [
                    {
                        component: 'Text',
                        data: {
                            text: "60-е года XX века - существенное ухудшение состояния окружающей среды:",
                        },
                    },
                    {
                        component: 'List',
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "первые законы об охране окружающей среды приняты в Германии, США и СССР.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "animation",
                    component: 'AnimateScience',
                },
            },
            4: {
                title: "Концепция устойчивого развития - не брать у природы в долг",
                audioSrc: "",
                content: [
                    {
                        component: 'Text',
                        data: {
                            text: "С 70-х годов на Земле фиксируется день экологического долга.",
                        },
                    },
                ],
                media: {
                    type: "animation",
                    component: 'AnimateEarth',
                },
            },
        },
    },
    2: {
        sectTitle: "Концепции ESG",
        sectColor: COLORS.green_dark,
        progressType: 'tropics',
        pages: {
            1: {
                title: "Все взаимосвязано",
                audioSrc: "",
                content: [
                    {
                        component: 'List',
                        data: {
                            title: "Цели:",
                            items: [
                                {
                                    id: 1,
                                    text: "бережное обращение с ресурсами;",
                                },
                                {
                                    id: 2,
                                    text: "обеспечение равных прав для различных групп людей;",
                                },
                                { id: 3, text: "охрана здоровья." },
                            ],
                        },
                    },
                    {
                        component: 'List',
                        data: {
                            title: "Для достижения этих целей нужны:",
                            items: [
                                { id: 1, text: "команда;" },
                                {
                                    id: 2,
                                    text: "регламентирующие корпоративные процессы;",
                                },
                                {
                                    id: 3,
                                    text: "эффективные инструменты управления.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "animation",
                    component: 'Ecology',
                },
                links: [
                    { id: 1, text: "Отчет о деятельности компании", url: "#" },
                ],
            },
        },
    },
    3: {
        sectTitle: "А что в ФосАгро?",
        sectColor: COLORS.brown_light,
        progressType: 'canyons',
        pages: {
            1: {
                title: "Наши результаты - снизили выбросы",
                content: [
                    {
                        component: 'List',
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Мы <span>модернизируем производства</span> и <span>переходим на</span> наилучшие <span>доступные технологии.</span>",
                                },
                                {
                                    id: 2,
                                    text: "Мы существенно <span>снизили выбросы</span> в атмосферный воздух <span>на 29%</span> удельном выражении на тонну c <span>1,13 кг/т</span> в 2017 до <span>0,80 кг/т</span> в 2021 году.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: 'VideoPlayer',
                    data: {
                        src: TestVideo,
                    },
                },
            },
            2: {
                title: "Наши результаты - снизили сброс сточных вод",
                content: [
                    {
                        component: 'List',
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Почти <span>в 10 раз</span> мы <span>снизили</span> уровень содержания загрязняющих веществ в сточных водах.",
                                },
                                {
                                    id: 2,
                                    text: "Мы <span>перерабатываем</span> практически <span>40%</span> всех <span>отходов 1-4 класса</span> опасности.",
                                },
                                {
                                    id: 3,
                                    text: "Мы <span>сократили до ноля сброс сточных вод</span> в водные объекты на заводах в Балакове и Волхове за счёт реализации <span>системы замкнутого водооборота.</span>",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: 'VideoPlayer',
                    data: {
                        src: MainBG,
                    },
                },
            },
            3: {
                title: "Наши результаты - проекты",
                content: [
                    {
                        component: 'List',
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: "Мы <span>реализуем проект трансформации</span> культуры безопасности.",
                                },
                                {
                                    id: 2,
                                    text: "Мы <span>поддерживаем города</span> присутствия компании.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: 'VideoPlayer',
                    data: {
                        src: TepkVideo,
                    },
                },
            },
            4: {
                title: "Новые вызовы. Наша сила",
                content: [
                    {
                        component: 'List',
                        data: {
                            title: "Новые вызовы:",
                            items: [
                                { id: 1, text: "исчерпаемость ресурсов;" },
                                {
                                    id: 2,
                                    text: "продовольственная безопасность;",
                                },
                                { id: 3, text: "изменения климата." },
                            ],
                        },
                    },
                    {
                        component: 'List',
                        data: {
                            title: "Наша сила:",
                            items: [
                                {
                                    id: 1,
                                    text: "в компании сформирована профессиональная команда;",
                                },
                                { id: 2, text: "накоплен огромный опыт." },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: 'VideoPlayer',
                    data: {
                        src: TepkVideo,
                    },
                },
            },
        },
    },
    4: {
        sectTitle: "А что с поставщиками и потребителями?",
        sectColor: COLORS.brown,
        progressType: 'desert',
        pages: {
            1: {
                title: "Зеленый стандарт",
                content: [
                    {
                        component: 'Text',
                        data: {
                            text: 'Мы создали маркировку качества <span>"Зеленый стандарт".</span>',
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: 'VideoPlayer',
                    data: {
                        src: TepkVideo,
                    },
                },
            },
            2: {
                title: "Кодекс поставщика",
                content: [
                    {
                        component: 'List',
                        data: {
                            items: [
                                {
                                    id: 1,
                                    text: " Мы запустили проект по созданию <span>кодекса поставщика.</span>",
                                },
                                {
                                    id: 2,
                                    text: "Мы реализовали электронный инструмент <span>ESG  - оценки поставщиков</span> с созданием соответствующего рейтинга.",
                                },
                            ],
                        },
                    },
                ],
                media: {
                    type: "video",
                    component: 'VideoPlayer',
                    data: {
                        src: TepkVideo,
                    },
                },
                links: [
                    { id: 1, text: "Контакты", url: "#" },
                    { id: 2, text: "Годовые интегрированные отчеты", url: "#" },
                ],
            },
        },
    },
}

export default chapter1Data
