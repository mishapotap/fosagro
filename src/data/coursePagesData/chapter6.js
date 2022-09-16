// временно
import {
    CourseSliderThree11,
    CourseSliderThree12,
    CourseSliderThree13,
} from "../../assets/Course3/Topic1/Point1"

import { MainBG } from "../../assets/video"

const chapter6Data = {
    1: {
        sectTitle: "Права человека и социальные принципы ФосАгро",
        pages: {
            1: {
                title: "Права человека",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "Наши социальные принципы:",
                            items: [
                                {id: 1, text: "не допускают использования детского и принудительного труда;"},
                                {id: 2, text: "обеспечивают свободы объединения в профсоюзы и права сотрудников на ведение переговоров о заключении коллективного договора;"},
                                {id: 3, text: "создают безопасные и благоприятные рабочие условия для своих сотрудников и персонала подрядных организаций;"},
                                {id: 4, text: "обеспечивают соблюдение прав человека на благоприятную окружающую среду."},
                            ]
                        }
                    }
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: MainBG
                    }
                },
                links: [
                    {id: 1, text: "Политика управления персоналом ФосАгро", url: "https://www.phosagro.ru/upload/docs/hr_policy.pdf"},
                    {id: 2, text: "Заявление о прозрачности в отношении закона «О современном рабстве»", url: "https://www.phosagro.ru/upload/docs/About_morern_sl.pdf"},
                    {id: 3, text: "Международный билль о правах человека", url: "https://www.ohchr.org/ru/what-are-human-rights/international-bill-human-rights"},
                    {id: 4, text: "Всеобщая декларация международной организации труда", url: "https://www.ohchr.org/ru/what-are-human-rights"},
                    {id: 5, text: "Обязательное требование ФосАгро к подрядным организациям", url: "https://www.phosagro.ru/upload/docs/Code_of_Conduct_for_Counterparties_2020_ru.pdf"}
                ]
            },
            2: {
                title: "Социальные инструменты ФосАгро",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Каналы коммуникации и обратной связи в ФосАгро"
                        }
                    },
                    {
                        component: "List",
                        data: {
                            items: [
                                {id: 1, text: "Горячая линия;"},
                                {id: 2, text: "раздел «Вопросы и ответы» в корпоративных газетах;"},
                                {id: 3, text: "регулярные встречи с руководством и общие собрания для сотрудников;"},
                                {id: 4, text: "интернет-портал."},
                            ]
                        }
                    },
                    {
                        component: "LampList",
                        data: {
                            title: "Горячая линия предполагает прием сообщений в трех вариантах:",
                            items: [
                                {id: 1, text: "<span>по телефону</span> 8 (8202) 59-32-32;"},
                                {id: 2, text: "<span>на электронный почтовый ящик</span> help@phosagro.ru;"},
                                {id: 3, text: "<span>на почтовый адрес:</span> 162622, Вологодская обл., г. Череповец, Северное ш., д.75, Дирекция по экономической безопасности."},
                            ]
                        }
                    }
                ],
                media: {
                    type: 'circleSlider',
                    component: 'Slider',
                    data: [
                        {
                            source: CourseSliderThree11,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderThree12,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderThree13,
                            alt: "image3",
                        },
                    ]
                },
                links: [
                    {id: 1, text: "Положение об организации “Горячей линии”", url: "https://www.phosagro.ru/upload/docs/hotline.pdf"}
                ]
            }
        }
    },
    2: {
        sectTitle: "Сотрудники ФосАгро - ключ к успеху Компании",
        pages: {
            1: {
                title: "Мы - ФосАгро",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "В ФосАгро работает более 18 тысяч сотрудников"
                        }
                    },
                    {
                        component: "List",
                        data: {
                            title: "Для наших сотрудников мы:",
                            items: [
                                {id: 1, text: "Формируем культуру безопасности, равенства и уважения."},
                                {id: 2, text: "Предоставляем широкие возможности для получения новых знаний и навыков."},
                                {id: 3, text: "Предлагаем конкурентную заработную плату и социальные гарантии."},
                            ]
                        }
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Средняя заработная плата выросла более чем на 50 % по сравнению с 2017 годом."
                        }
                    },
                    {
                        component: "Note",
                        data: {
                            text: "97% работников предприятий - это персонал, нанятый из числа местного населения в регионах присутствия Компании."
                        }
                    },
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: MainBG
                    }
                },
            },
            2: {
                title: "Работаем и учимся",
                content: [
                    {
                        component: "List",
                        data: {
                            items: [
                                {id: 1, text: "Мы разработали модульное дистанционное обучение."},
                                {id: 2, text: "Мы увеличили среднее количество часов обучения на одного работника на 20%."},
                                {id: 3, text: "Мы развиваем систему корпоративных библиотек."},
                                {id: 4, text: "Мы создали систему наставничества. "},
                            ]
                        }
                    }
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: MainBG
                    }
                },
            },
            3: {
                title: "Наша молодежь",
                audioSrc: "",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Наша молодежь — это кадровый резерв для ключевых позиций в Компании."
                        }
                    },
                    {
                        component: "List",
                        data: {
                            title: "Молодым профессионалам мы предлагаем:",
                            items: [
                                {id: 1, text: "конкурентоспособную заработную плату;"},
                                {id: 2, text: "поддержку при переезде и обеспечение жильем;"},
                                {id: 3, text: "помощь наставника."},
                            ]
                        }
                    },
                    {
                        component: "List",
                        data: {
                            title: "В Компании работают специальные программы для молодежи:",
                            items: [
                                {id: 1, text: "«ФосАгро-классы» и «ФосАгро-школы»;"},
                                {id: 2, text: "«Молодые талантливые специалисты»."},
                            ]
                        }
                    },
                ],
                media: {
                    type: 'circleSlider',
                    component: 'Slider',
                    data: [
                        {
                            source: CourseSliderThree11,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderThree12,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderThree13,
                            alt: "image3",
                        },
                    ]
                },
            },
            4: {
                title: "Наша поддержка",
                audioSrc: "",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "Социальная поддержка наших сотрудников и профсоюзной организации:",
                            items: [
                                {id: 1, text: "выплаты материальной помощи; "},
                                {id: 2, text: "финансирование санаторно-курортного лечения и культурно-массовые работы;"},
                                {id: 3, text: "корпоративные жилищные программы;"},
                                {id: 4, text: "прочие социальные льготы и гарантии."},
                            ]
                        }
                    }
                ],
                media: {
                    type: 'circleSlider',
                    component: 'Slider',
                    data: [
                        {
                            source: CourseSliderThree11,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderThree12,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderThree13,
                            alt: "image3",
                        },
                    ]
                },
            }
        }
    },
    3: {
        sectTitle: "Охрана труда и промышленной безопасности",
        pages: {
            1: {
                title: "“Золотые правила” безопасности",
                content: [
                    {
                        component: "List",
                        data: {
                            title: "За период 2019–2021 годов в АО «Апатит» и его филиалах удалось добиться:",
                            items: [
                                {id: 1, text: "уменьшения общего числа автомобильных происшествий на 26% (с 50 до 37 случаев);"},
                                {id: 2, text: "снижение уровня тяжелого травматизма на 75% — с 12 до трех случаев; "},
                                {id: 3, text: "снижение количества инцидентов на 75% — с восьми до двух случаев; "},
                                {id: 4, text: "отсутствие аварий; "},
                                {id: 5, text: "отсутствие пожаров; "},
                                {id: 6, text: "отсутствие транспортных происшествий с пострадавшими / крупным ущербом."},
                            ]
                        }
                    },
                    {
                        component: "Note",
                        data: {
                            text: "Наша главная цель — не допускать несчастных случаев со смертельным исходом."
                        }
                    }
                ],
                media: {
                    type: "video",
                    component: "VideoPlayer",
                    data: {
                        src: MainBG
                    }
                },
                links: [
                    {id: 1, text: "Соответствие системы менеджмента международным стандартам", url: "https://www.phosagro.ru/upload/docs/iso-45001-2018-21-1584-026.pdf"},
                    {id: 2, text: "«Золотые правила» ФосАгро", url: "https://www.phosagro.ru/files/golden_rules.pdf"}
                ]
            }
        }
    },
    4: {
        sectTitle: "Вовлечение местных сообществ",
        pages: {
            1: {
                title: "Социальные программы ФосАгро",
                audioSrc: "",
                content: [
                    {
                        component: "Text",
                        data: {
                            text: "Стабильность и успех родных для нас регионов — важный фактор устойчивого развития ФосАгро. Благотворительная деятельность Компании реализуется исходя из интересов общественной пользы, а также на основе партнерских отношений с органами государственной власти и местного самоуправления, с местным сообществом и общественными организациями, с образовательными учреждениями и другими заинтересованными сторонами."
                        }
                    }
                ],
                media: {
                    type: 'circleSlider',
                    component: 'Slider',
                    data: [
                        {
                            source: CourseSliderThree11,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderThree12,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderThree13,
                            alt: "image3",
                        },
                    ]
                },
                links: [
                    {id: 1, text: "Благотворительная деятельность Компании", url: "https://www.phosagro.ru/upload/docs/Charity.pdf"}
                ]
            },
            2: {
                title: "Любимые города",
                audioSrc: "",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "«Наши любимые города» "
                        }
                    },
                    {
                        component: "Text",
                        data: {
                            text: "С 2003 года ФосАгро занимается формированием качественной городской среды для устойчивого развития в городах присутствия Компании: Кировск, Череповец, Балаково, Волхов."
                        }
                    }
                ],
                media: {
                    type: 'circleSlider',
                    component: 'Slider',
                    data: [
                        {
                            source: CourseSliderThree11,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderThree12,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderThree13,
                            alt: "image3",
                        },
                    ]
                },
            },
            3: {
                title: "Школа-ВУЗ-предприятие",
                audioSrc: "",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Программа «ФосАгро школа-колледж-вуз»"
                        }
                    },
                    {
                        component: "Text",
                        data: {
                            text: "Эта программа - логическое продолжение многолетнего проекта «ФосАгро классы». Профориентационная работа теперь проводится с младших классов. Компания расширила материальную помощь школам, участвующим в проекте."
                        }
                    }
                ],
                media: {
                    type: 'circleSlider',
                    component: 'Slider',
                    data: [
                        {
                            source: CourseSliderThree11,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderThree12,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderThree13,
                            alt: "image3",
                        },
                    ]
                },
            },
            4: {
                title: "Образование, здоровье, духовность",
                audioSrc: "",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Программа \"Детям России Образование, Здоровье и Духовность\" (\"ДРОЗД\")"
                        }
                    },
                    {
                        component: "Text",
                        data: {
                            text: "С 2003 года ФосАгро реализует уникальную многоступенчатую программу поддержки образования ДРОЗД. Она объединяет социальные проекты в рамках единой платформы, охватывает все уровни образования с перспективой трудоустройства выпускников на предприятиях Компании."
                        }
                    }
                ],
                media: {
                    type: 'circleSlider',
                    component: 'Slider',
                    data: [
                        {
                            source: CourseSliderThree11,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderThree12,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderThree13,
                            alt: "image3",
                        },
                    ]
                },
            },
            5: {
                title: "Духовное возрождение",
                audioSrc: "",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Программа \"Духовное возрождение\""
                        }
                    },
                    {
                        component: "Text",
                        data: {
                            text: "Компания «ФосАгро» оказывает постоянную благотворительную помощь в восстановлении и строительстве православных святынь, как в России, так и за рубежом, реализует проекты по поддержке традиционных культурных и духовных ценностей."
                        }
                    }
                ],
                media: {
                    type: 'circleSlider',
                    component: 'Slider',
                    data: [
                        {
                            source: CourseSliderThree11,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderThree12,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderThree13,
                            alt: "image3",
                        },
                    ]
                },
            },
            6: {
                title: "Связь поколений",
                audioSrc: "",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Программа \"Связь поколений\""
                        }
                    },
                    {
                        component: 'Text',
                        data: {
                            text: "С 2015 года на предприятиях ФосАгро проводится комплексная реконструкция и модернизация заводских музеев. Мы превращаем музеи в культурно-образовательные центры для жителей и гостей городов присутствия."
                        }
                    }
                ],
                media: {
                    type: 'circleSlider',
                    component: 'Slider',
                    data: [
                        {
                            source: CourseSliderThree11,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderThree12,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderThree13,
                            alt: "image3",
                        },
                    ]
                },
            },
            7: {
                title: "Помогать важно",
                audioSrc: "",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Программа \"Адресная помощь\""
                        }
                    },
                    {
                        component: "Text",
                        data: {
                            text: "С 2003 года мы оказываем адресную помощь незащищенным слоям населения."
                        }
                    }
                ],
                media: {
                    type: 'circleSlider',
                    component: 'Slider',
                    data: [
                        {
                            source: CourseSliderThree11,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderThree12,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderThree13,
                            alt: "image3",
                        },
                    ]
                },
            },
            8: {
                title: "Спорт",
                audioSrc: "",
                content: [
                    {
                        component: "Label",
                        data: {
                            text: "Программа «Содействие развитию спорта»"
                        }
                    },
                    {
                        component: "List",
                        data: {
                            title: "ФосАгро с 2012 года поддерживает некоммерческие организации, ориентированные на развитие спорта, туризма и здорового образа жизни.",
                            items: [
                                {id: 1, text: "Всероссийская федерация художественной гимнастики;"},
                                {id: 2, text: "Российская шахматная федерация;"},
                                {id: 3, text: "Общественный Фонд поддержки и развития спорта «Чемпион»;"},
                                {id: 4, text: "Федерация лыжных гонок России;"},
                                {id: 5, text: "Общероссийская общественная организация «Российская федерация прыжков в воду» и так далее."},
                            ]
                        }
                    }
                ],
                media: {
                    type: 'circleSlider',
                    component: 'Slider',
                    data: [
                        {
                            source: CourseSliderThree11,
                            alt: "image1",
                        },
                        {
                            source: CourseSliderThree12,
                            alt: "image2",
                        },
                        {
                            source: CourseSliderThree13,
                            alt: "image3",
                        },
                    ]
                },
            },
        }
    }
}

export default chapter6Data
