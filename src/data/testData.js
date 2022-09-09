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

const listData = [
    {
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
    {
        title: "Новые вызовы:",
        items: [
            { id: 1, text: "исчерпаемость ресурсов;" },
            { id: 2, text: "продовольственная безопасность;" },
            { id: 3, text: "изменения климата." },
        ],
    },
]

export default {
    circleSlider,
    listData,
}
