// TODO изменить логику, чтобы подходило не только к тестам с пятью вопросами?
// import {
//     Test0Right,
//     Test12Right,
//     Test34Right,
//     Test5Right,
// } from "../assets/audio/test"

const finalData = [
    {
        rightAnswers: [0],
        data: {
            title: "Oops! Looks like your tree has not grown at all.",
            label: "It needs care and attention.",
            text: "To acquire the necessary knowledge, we suggest revisiting the following units",
            audio: Test0Right,
        },
    },
    {
        rightAnswers: [1, 2],
        data: {
            title: "Good job!",
            label: "Keep it up and next time your tree will be even bigger.",
            text: "To fill in the knowledge gaps, we suggest taking another look at the following units",
            audio: Test12Right,
        },
    },
    {
        rightAnswers: [3, 4],
        data: {
            title: " Well done!",
            label: "Your tree is looking great, but there is still some room for growth.",
            text: "Perhaps you should go through the following units one more time to fill in the gaps in your knowledge",
            audio: Test34Right,
        },
    },
    {
        rightAnswers: [5],
        data: {
            title: "Congratulations!",
            label: "Вы вырастYour tree has grown big and healthy.",
            text: "Feel free to proceed to the next section",
            audio: Test5Right,
        },
    },
]

// реальные данные
const testsQsData = {
    1: [
        {
            id: 1,
            title: "What do the E, S and G stand for in the word “ESG”?",
            correct: 2,
            wrongAnswerSectId: 2,
            items: [
                {
                    id: 1,
                    text: "E – ethics, S – social aspects, G – global warming",
                },
                {
                    id: 2,
                    text: "E – environment, S – social aspects, G – corporate governance",
                },
                {
                    id: 3,
                    text: "E – evolution, S – social issues, G – governance",
                },
            ],
        },
        {
            id: 2,
            title: "When did the first environmental laws appear?",
            correct: 1,
            wrongAnswerSectId: 1,
            items: [
                {
                    id: 1,
                    text: "The 1960s",
                },
                {
                    id: 2,
                    text: "The 19th century",
                },
                {
                    id: 3,
                    text: "The 1990s",
                },
            ],
        },
        {
            id: 3,
            title: "What are our achievements at the Volkhov and Balakovo plants?",
            correct: 2,
            wrongAnswerSectId: 3,
            items: [
                {
                    id: 1,
                    text: "100% waste recycling",
                },
                {
                    id: 2,
                    text: "Near-zero waste water discharge",
                },
                {
                    id: 3,
                    text: "A 30% reduction in greenhouse gas emissions",
                },
            ],
        },
        {
            id: 4,
            title: "What is the name of the health and safety project implemented by the Company?",
            correct: 1,
            wrongAnswerSectId: 3,
            items: [
                {
                    id: 1,
                    text: "Safety Culture Transformation Project",
                },
                {
                    id: 2,
                    text: "Health and Safety Upgrade Project",
                },
                {
                    id: 3,
                    text: "Health and Safety Project",
                },
            ],
        },
        {
            id: 5,
            title: "Which tools does the Company use to apply ESG requirements to its suppliers and customers?",
            correct: 2,
            wrongAnswerSectId: 4,
            items: [
                {
                    id: 1,
                    text: "ESG rankings",
                },
                {
                    id: 2,
                    text: "Supplier ESG assessment and green product standards",
                },
                {
                    id: 3,
                    text: "Conference calls",
                },
            ],
        },
    ],
    2: [
        {
            id: 1,
            title: "How many Sustainable Development Goals were adopted by the UN in 2015?",
            correct: 3,
            wrongAnswerSectId: 1,
            items: [
                {
                    id: 1,
                    text: "15",
                },
                {
                    id: 2,
                    text: "18",
                },
                {
                    id: 3,
                    text: "17",
                },
            ],
        },
        {
            id: 2,
            title: "When did PhosAgro single out the most relevant SDGs?",
            correct: 3,
            wrongAnswerSectId: 2,
            items: [
                {
                    id: 1,
                    text: "2020",
                },
                {
                    id: 2,
                    text: "2019",
                },
                {
                    id: 3,
                    text: "2018",
                },
            ],
        },
        {
            id: 3,
            title: "How many priority SDGs were determined by PhosAgro?",
            correct: 3,
            wrongAnswerSectId: 3,
            items: [
                {
                    id: 1,
                    text: "17",
                },
                {
                    id: 2,
                    text: "13",
                },
                {
                    id: 3,
                    text: "11",
                },
            ],
        },
        {
            id: 4,
            title: "Is the Company a member of the UN Global Compact?",
            correct: 2,
            wrongAnswerSectId: 1,
            items: [
                {
                    id: 1,
                    text: "Yes",
                },
                {
                    id: 2,
                    text: "Yes, PhosAgro is a Global Compact LEAD company",
                },
                {
                    id: 3,
                    text: "No",
                },
            ],
        },
        {
            id: 5,
            title: "What is the key message of The Limits to Growth report?",
            correct: 1,
            wrongAnswerSectId: 1,
            items: [
                {
                    id: 1,
                    // !?
                    text: "The planet’s resources are finite; we must use them responsibly",
                },
                {
                    id: 2,
                    text: "Environmental protection comes first",
                },
                {
                    id: 3,
                    text: "Humans are destroying the environment",
                },
            ],
        },
    ],
    3: [
        {
            id: 1,
            title: "What is PhosAgro’s mission?",
            correct: 1,
            wrongAnswerSectId: 1,
            items: [
                {
                    id: 1,
                    text: "Supplying safe and eco-efficient fertilizers for the agricultural industry to ensure food security in Russia and across world",
                },
                {
                    id: 2,
                    text: "Producing safe fertilizers along the value chain from mine to plate",
                },
                {
                    id: 3,
                    text: "Complying with Russian and international standards",
                },
            ],
        },
        {
            id: 2,
            title: "PhosAgro runs the Scientific Research Institute for Fertilizers and Insectofungicides (NIUIF). What kind of research does it carry on?",
            correct: 4,
            wrongAnswerSectId: 3,
            items: [
                {
                    id: 1,
                    text: "Development of new fertilizer grades",
                },
                {
                    id: 2,
                    text: "Development of technical solutions for the production of sulphuric and phosphoric acids ",
                },
                {
                    id: 3,
                    text: "Development of solutions to make production operations more environmentally friendly",
                },
                {
                    id: 4,
                    text: "All of the above",
                },
            ],
        },
        {
            id: 3,
            title: "As we seek to embrace circular economy, we have launched a project to use industrial waste as a chemical ameliorant agent in agriculture and a road building material. What is the name of the industrial waste product used for this purpose?",
            correct: 3,
            wrongAnswerSectId: 4,
            items: [
                {
                    id: 1,
                    text: "Apatite-nepheline ore",
                },
                {
                    id: 2,
                    text: "Overburden",
                },
                {
                    id: 3,
                    text: "Phosphogypsum",
                },
            ],
        },
        {
            id: 4,
            title: "In 2013, UNESCO, the International Union of Pure and Applied Chemistry (IUPAC) and PhosAgro signed a partnership agreement establishing a grant programme for scientists. What is the name of the programme?",
            correct: 5,
            wrongAnswerSectId: 7,
            items: [
                {
                    id: 1,
                    text: "Green Farming Solutions",
                },
                {
                    id: 2,
                    text: "Chemistry for Life of Earth",
                },
                {
                    id: 3,
                    text: "Green Crops",
                },
                {
                    id: 4,
                    text: "Green Fertilizers for Growth",
                },
                {
                    id: 5,
                    text: "Green Chemistry For Life",
                },
            ],
        },
        {
            id: 5,
            title: "How many new fertilizer grades does PhosAgro plan to develop and market by 2030?",
            correct: 3,
            wrongAnswerSectId: 6,
            items: [
                {
                    id: 1,
                    text: "50",
                },
                {
                    id: 2,
                    text: "20",
                },
                {
                    id: 3,
                    text: "70",
                },
                {
                    id: 4,
                    text: "40",
                },
            ],
        },
    ],
    4: [
        {
            id: 1,
            title: "What federal project does PhosAgro take part in?",
            correct: 1,
            wrongAnswerSectId: 4,
            items: [
                {
                    id: 1,
                    text: "Clean Air",
                },
                {
                    id: 2,
                    text: "Clean Water",
                },
                {
                    id: 3,
                    text: "Forest Preservation",
                },
                {
                    id: 4,
                    text: "Hazardous Waste Neutralisation",
                },
            ],
        },
        {
            id: 2,
            title: "Which PhosAgro document sets out careful use of natural resources and reduction of the environmental footprint as a key priority for the Company?",
            correct: [2, 3],
            wrongAnswerSectId: "intro",
            items: [
                {
                    id: 1,
                    text: "Regulations on the Sustainable Development Committee",
                },
                {
                    id: 2,
                    text: "Environmental Policy",
                },
                {
                    id: 3,
                    text: "Strategy to 2025",
                },
                {
                    id: 4,
                    text: "Water Strategy",
                },
            ],
        },
        {
            id: 3,
            title: "What is the name of Russia’s only certificate that is internationally recognised by the Global Ecolabelling Network (GEN)?",
            correct: 3,
            wrongAnswerSectId: 7,
            items: [
                {
                    id: 1,
                    text: "Green Standard",
                },
                {
                    id: 2,
                    text: "Green Leaf",
                },
                {
                    id: 3,
                    text: "Vitality Leaf",
                },
                {
                    id: 4,
                    text: "Green Label",
                },
                {
                    id: 5,
                    text: "Green One",
                },
            ],
        },
        {
            id: 4,
            title: "Which two PhosAgro production facilities have zero waste water discharges?",
            correct: [1, 4],
            wrongAnswerSectId: 5,
            items: [
                {
                    id: 1,
                    text: "Volkhov Branch of Apatit",
                },
                {
                    id: 2,
                    text: "Apatit (Vologda Region)",
                },
                {
                    id: 3,
                    text: "Kirovsk Branch of JSC Apatit",
                },
                {
                    id: 4,
                    text: "Balakovo Branch of Apatit",
                },
            ],
        },
        {
            id: 5,
            title: "What UN Sustainable Development Goals (SDGs) is PhosAgro’s environmental strategy aligned with?",
            correct: 1,
            wrongAnswerSectId: 1,
            items: [
                {
                    id: 1,
                    text: "3, 6, 9, 12, 13, 15, 17",
                },
                {
                    id: 2,
                    text: "3, 12, 17",
                },
                {
                    id: 3,
                    text: "12, 13, 15, 17",
                },
                {
                    id: 4,
                    text: "None",
                },
                {
                    id: 5,
                    text: "All UN Sustainable Development Goals",
                },
            ],
        },
    ],
    5: [
        {
            id: 1,
            title: "What is the radiation that is converted by the Earth from solar energy and emitted into space?",
            correct: 2,
            wrongAnswerSectId: 1,
            items: [
                {
                    id: 1,
                    text: "radio waves",
                },
                {
                    id: 2,
                    text: "infrared radiation",
                },
                {
                    id: 3,
                    text: "visible light",
                },
                {
                    id: 4,
                    text: "ultraviolet radiation",
                },
                {
                    id: 5,
                    text: "ionising radiation",
                },
            ],
        },
        {
            id: 2,
            title: "Who and when discovered the greenhouse effect and found that “the Earth’s atmosphere keeps the planet warmer than the sun would do in a vacuum”?",
            correct: 3,
            wrongAnswerSectId: 1,
            items: [
                {
                    id: 1,
                    text: "André-Marie Ampère in 1775",
                },
                {
                    id: 2,
                    text: "Carl David Anderson in 1905",
                },
                {
                    id: 3,
                    text: "Jean-Baptiste Joseph Fourier in 1824",
                },
                {
                    id: 4,
                    text: "Joseph-Louis Lagrange in 1824",
                },
            ],
        },
        {
            id: 3,
            title: "Highlight the key factors of anthropogenic global warming",
            correct: 3,
            wrongAnswerSectId: 2,
            items: [
                {
                    id: 1,
                    text: "mass livestock production; waste processing; forest burning",
                },
                {
                    id: 2,
                    text: "deforestation; mass livestock production; use of chlorine fertilizers in agriculture",
                },
                {
                    id: 3,
                    text: "deforestation of large areas; mass livestock production; use of nitrogen fertilizers in agriculture",
                },
            ],
        },
        {
            id: 4,
            title: "What will be the global mean temperature by the end of the 21st century according to the estimate of the International Panel on Climate Change (IPCC)?",
            correct: 2,
            wrongAnswerSectId: 2,
            items: [
                {
                    id: 1,
                    text: "2 °C to 4.5 °C",
                },
                {
                    id: 2,
                    text: "2.5 °C to 4 °C",
                },
                {
                    id: 3,
                    text: "3 °C to 4.5°C",
                },
                {
                    id: 4,
                    text: "1.1 °C to 2 °C",
                },
            ],
        },
        {
            id: 5,
            title: "What is PhosAgro’s target for reducing greenhouse gas emissions by 2028 vs the 2018 base?",
            correct: 1,
            wrongAnswerSectId: 5,
            items: [
                {
                    id: 1,
                    text: "14%",
                },
                {
                    id: 2,
                    text: "14,5%",
                },
                {
                    id: 3,
                    text: "20%",
                },
                {
                    id: 4,
                    text: "35%",
                },
            ],
        },
    ],
    6: [
        {
            id: 1,
            title: "PhosAgro headcount",
            correct: 4,
            wrongAnswerSectId: 2,
            items: [
                {
                    id: 1,
                    text: "Under 5,000 employees",
                },
                {
                    id: 2,
                    text: "Over 1,000 employees",
                },
                {
                    id: 3,
                    text: "Under 50,000 employees",
                },
                {
                    id: 4,
                    text: "Over 18,000 employees",
                },
            ],
        },
        {
            id: 2,
            title: "Which programme helps to improve our reach to university students interested in working at PhosAgro?",
            correct: 3,
            wrongAnswerSectId: 2,
            items: [
                {
                    id: 1,
                    text: "Keen Graduates",
                },
                {
                    id: 2,
                    text: "DROZD",
                },
                {
                    id: 3,
                    text: "High-Potential Graduates",
                },
                {
                    id: 4,
                    text: "Targeted Assistance",
                },
                {
                    id: 5,
                    text: "Smart Students",
                },
            ],
        },
        {
            id: 3,
            title: "PhosAgro’s documents on human rights",
            correct: [3, 4, 5],
            wrongAnswerSectId: 1,
            items: [
                {
                    id: 1,
                    text: "Corporate Governance Code",
                },
                {
                    id: 2,
                    text: "Strategy to 2025",
                },
                {
                    id: 3,
                    text: "Personnel Management Policy",
                },
                {
                    id: 4,
                    text: "Code of Ethics",
                },
                {
                    id: 5,
                    text: "Transparency statement under the UK Modern Slavery Act",
                },
            ],
        },
        {
            id: 4,
            title: "PhosAgro puts a strong emphasis on safety. Which document is mandatory for all the employees of PhosAgro and its contractors, as well as for the Group’s visitors?",
            correct: 1,
            wrongAnswerSectId: 3,
            items: [
                {
                    id: 1,
                    text: "Golden Rules",
                },
                {
                    id: 2,
                    text: "Public Scrutiny",
                },
                {
                    id: 3,
                    text: "Code of Conduct for Counterparties",
                },
                {
                    id: 4,
                    text: "Vitality Leaf",
                },
            ],
        },
        {
            id: 5,
            title: "Which PhosAgro programme was launched in 2013 to build a future talent pipeline by supporting young people in their journey through school and university education to employment?",
            correct: 4,
            wrongAnswerSectId: 4,
            items: [
                {
                    id: 1,
                    text: "DROZD",
                },
                {
                    id: 2,
                    text: "Connecting Generations",
                },
                {
                    id: 3,
                    text: "Spiritual Revival",
                },
                {
                    id: 4,
                    text: "PhosAgro Schools",
                },
                {
                    id: 5,
                    text: "Our Favourite Cities",
                },
            ],
        },
    ],
}

export default { finalData, testsQsData }
