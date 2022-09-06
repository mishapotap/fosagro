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

// TODO получить данные для тестов и заполнить (изменить структуру если понадобится)
const coursesTests = {
    1: {
        questions: [
            {
                id: 1,
                title: "Что значат буквы E, S, G в аббревиатуре ESG?",
                correct: 2,
                wrongAnswerSectId: 4,
                items: [
                    {
                        id: 1,
                        text: "E – этика, S – социальные аспекты, G – государственное управление",
                    },
                    {
                        id: 2,
                        text: "E – экология, S – социальные аспекты, G – корпоративное управление",
                    },
                    {
                        id: 3,
                        text: "E – естественное развитие, S – социальные вопросы, G – управление",
                    },
                ],
            },
            {
                id: 2,
                title: "Когда появились первые законы об охране окружающей среды?",
                correct: 2,
                wrongAnswerSectId: 4,
                items: [
                    {
                        id: 1,
                        text: "Когда появились первые законы об охране окружающей среды?",
                    },
                    {
                        id: 2,
                        text: "В ХIХ веке",
                    },
                    {
                        id: 3,
                        text: "В 90-х годах ХХ века",
                    },
                ],
            },
            {
                id: 3,
                title: "На заводах в Волхове и Балакове мы достигли?",
                correct: 2,
                wrongAnswerSectId: 4,
                items: [
                    {
                        id: 1,
                        text: "100% переработки отходов",
                    },
                    {
                        id: 2,
                        text: "Почти нулевого сброса сточных вод",
                    },
                    {
                        id: 3,
                        text: "Сокращения выбросов парниковых газов на 30%",
                    },
                ],
            },
            {
                id: 4,
                title: "В компании реализуется проект по охране труда, который называется?",
                correct: 2,
                wrongAnswerSectId: 4,
                items: [
                    {
                        id: 1,
                        text: "Трансформация культуры безопасности ",
                    },
                    {
                        id: 2,
                        text: "Модернизация охраны труда",
                    },
                    {
                        id: 3,
                        text: "Охрана труда",
                    },
                ],
            },
            {
                id: 5,
                title: "Компания распространяет требования ESG на поставщиков и потребителей, используя какие инструменты?",
                correct: 2,
                wrongAnswerSectId: 4,
                items: [
                    {
                        id: 1,
                        text: "ESG рейтинги",
                    },
                    {
                        id: 2,
                        text: "ESG оценку поставщиков и зеленые стандарты продукции",
                    },
                    {
                        id: 3,
                        text: "Телефонные конференции",
                    },
                ],
            },
        ],
    },
}

// TODO изменить логику, чтобы подходило не только к тестам с пятью вопросами?
const courseTestProgressData = [
    {
        rightAnswers: [5],
        data: {
            title: "Поздравляем!",
            label: "Вы вырастили большое и здоровое дерево!",
            text: "Вы можете продолжить изучение материала в следующем разделе.",
        },
    },
    {
        rightAnswers: [3, 4],
        data: {
            title: "Поздравляем!",
            label: "Ваше дерево выглядит совсем неплохо, но ему есть куда расти!",
            text: "Советуем ознакомиться с этими разделами для восполнения недостающих знаний:",
        },
    },
    {
        rightAnswers: [1, 2, 0],
        data: {
            title: "Ой, ваше дерево совсем не выросло!",
            label: "Ему нужен уход, внимание и забота!",
            text: "А чтобы получить необходимые для этого знания, советуем ознакомиться с этими разделами:",
        },
    },
]

export default {
    circleSlider,
    coursesTests,
    courseTestProgressData,
}
