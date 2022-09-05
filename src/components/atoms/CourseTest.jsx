/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import "wicg-inert"
import { Pagination, Navigation, EffectFade } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Link } from "react-router-dom"

import { Tree } from "../../assets/svg"
import NextQuestionButton from "./NextQuestionButton"
import { testData, courseStepButtonData1 } from "../../data"
import { Title } from "./Content"
import SendButton from "./SendButton"
import { MailButton } from "../molecules"
import { borderAnimationM } from "../../constants/animations"
import CourseSlideLayout from "./CourseSlideLayout"
import BackToChapterButton from "./BackToChapterButton"

// eslint-disable-next-line
import "swiper/css"
// eslint-disable-next-line
import "swiper/css/effect-fade"

import { COLORS, DEVICE } from "../../constants"

// TODO уточнить насчет модалки обратной связи, она открывается сама по себе,
// или при нажатии на кнопку?
// TODO сделать сохранение состояния в mobx (результаты теста)
// TODO сделать чтобы когда вернешься на тест было отрисовано состояние прогресса?
// (и возможность заново пройти? или он будет заново?)
// TODO получить и создать нормальные данные для тестов
// TODO решить проблему с модалкой с отзывом
// (когда две кнопки mail в шаблоне, при нажатии на одну из них, создается
// два модальных окна)
// TODO в courseStepButtonData добавить каждой теме id и ссылку? или создать
// данные где-то в другом месте? (для отрисовки секций, которые стоит пройти заново)
// TODO получать актуальную ссылку на следующий курс
// TODO убрать layout и встроить тест в общую логику
// TODO при resize при переходе из меньшего экрана в бОльший прогресс дерева не
// показывается, постараться поправить
// TODO брать id курса из store, а не из пропсов?
// TODO на финальном окне проскролливать левую часть, а дерево оставлять на месте?

export default function CourseTest({ courseId = 1 }) {
    const { courseTestProgressData } = testData
    // TODO получать реальные данные о курсе
    const courseTestData = testData.coursesTests[courseId]
    const { questions } = courseTestData

    const [finalContent, setFinalContent] = useState({})
    const [rightAnswCount, setRightAnswCount] = useState(0)
    const [allAnswersRight, setAllAnswersRight] = useState(false)

    const [showTest, setShowTest] = useState(false)
    const [showStart, setShowStart] = useState(true)
    const [showFinal, setShowFinal] = useState(false)

    const [isTablet, setIsTablet] = useState(false)

    const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(true)

    const [learnSectsIds, setLearnSectsIds] = useState([])
    const [learnSectsData, setLearnSectsData] = useState([])

    const [activeQId, setActiveQId] = useState(questions[0].id)

    const [showEndTestBtn, setShowEndTestBtn] = useState(false)
    const [isLastSlide, setIsLastSlide] = useState(false)

    const [treeRightAnsw, setTreeRightAnsw] = useState(0)

    const testRef = useRef(null)
    const startRef = useRef(null)
    const finalRef = useRef(null)

    // TODO нормальные получать значения
    const nextCourseLink = "/course/3"
    const chapterLink = "/"

    // (ключ - номер вопроса, значение - id инпута)
    const [userAnswers, setUserAnswers] = useState({})

    function handleInputChange(qId, aId) {
        setUserAnswers((prevState) => ({
            ...prevState,
            [qId]: aId,
        }))

        if (isNextBtnDisabled) {
            setIsNextBtnDisabled(false)
        }
    }

    function handleWindowResize() {
        const isT = document.documentElement.clientWidth <= 1024
        setIsTablet(isT)
    }

    useEffect(() => {
        if (document.documentElement.clientWidth <= 1024) {
            setIsTablet(true)
        }

        window.addEventListener("resize", handleWindowResize)

        return () => {
            window.removeEventListener("resize", handleWindowResize)
        }
    }, [])

    useEffect(() => {
        // TODO реализовать получение данных
        // тут находим данные о секциях с learnSectsIds для этого курса, и устанавливаем
        // их данные с setLearnSectsData
        // временно
        setLearnSectsData([...courseStepButtonData1])
    }, [learnSectsIds])

    useEffect(() => {
        let count = 0

        Object.entries(userAnswers).forEach(([qId, answId]) => {
            // eslint-disable-next-line eqeqeq
            const qData = questions.find(({ id }) => id == qId)

            const { wrongAnswerSectId, correct } = qData

            if (qData) {
                // eslint-disable-next-line eqeqeq
                if (answId == correct) {
                    count += 1
                } else {
                    setLearnSectsIds(() => [
                        ...learnSectsIds,
                        wrongAnswerSectId,
                    ])
                }
            }
        })

        setRightAnswCount(count)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userAnswers, questions])

    useEffect(() => {
        if (!userAnswers[activeQId]) {
            setIsNextBtnDisabled(true)
        }
    }, [activeQId, userAnswers])

    useEffect(() => {
        // если будет разное количество вопросов, то надо изменить логику
        const finCont = courseTestProgressData.find(({ rightAnswers }) =>
            rightAnswers.includes(rightAnswCount)
        )

        if (finCont) {
            setFinalContent(finCont.data)
        }

        if (rightAnswCount === questions.length) {
            setAllAnswersRight(true)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rightAnswCount])

    function handleSlideChange(swiper) {
        const { activeIndex } = swiper

        const actQId = questions[activeIndex].id
        setActiveQId(actQId)
    }

    function handleNextClick() {
        if (isLastSlide) {
            setShowTest(false)
        }
        setTreeRightAnsw(rightAnswCount)
    }

    function handleReachEnd() {
        setShowEndTestBtn(true)
        setTimeout(() => {
            setIsLastSlide(true)
        }, 500)
    }

    // TODO вынести отдельно? используется также в InstructionModal
    function renderCustom(swiper, current, total) {
        const getFormattedNumber = (number) =>
            number < 10 ? `0${number}` : `${number}`

        return /* html */ `
            <span class="cur-slide-number">${getFormattedNumber(current)}</span>
            <span class="separator">/</span>
            <span class="total-slides-number">${getFormattedNumber(
                total
            )}</span>
        `
    }

    return (
        <StyledLayout>
            <Columns>
                <FirstColumn>
                    <Link to={chapterLink} className="back-to-chapter">
                        <BackToChapterButton />
                    </Link>
                    <CSSTransition
                        in={showStart}
                        nodeRef={startRef}
                        timeout={300}
                        classNames="start"
                        unmountOnExit
                        onExited={() => setShowTest(true)}
                    >
                        <StartBlock ref={startRef} className="start">
                            <StyledTitle color={COLORS.blue}>Тест</StyledTitle>
                            <Label>
                                Мы подготовили для Вас небольшой тест на знание
                                пройденного раздела.
                            </Label>
                            <Text>
                                Попробуйте вырастить Ваше дерево, правильно
                                ответив на все вопросы.
                            </Text>
                            <SendButton
                                text="Начать"
                                onClick={() => setShowStart(false)}
                            />
                        </StartBlock>
                    </CSSTransition>

                    <CSSTransition
                        in={showTest}
                        nodeRef={testRef}
                        timeout={300}
                        classNames="test"
                        onExited={() => setShowFinal(true)}
                        unmountOnExit
                        mountOnEnter
                    >
                        <Test ref={testRef} className="test">
                            <TestSlider>
                                <Swiper
                                    modules={[
                                        Pagination,
                                        Navigation,
                                        EffectFade,
                                    ]}
                                    onSlideChange={handleSlideChange}
                                    onReachEnd={handleReachEnd}
                                    navigation={{
                                        nextEl: ".button-next",
                                    }}
                                    pagination={{
                                        type: "custom",
                                        renderCustom,
                                    }}
                                    effect="fade"
                                    fadeEffect={{ crossFade: true }}
                                    speed={400}
                                >
                                    {questions.map(
                                        ({ id: qId, title, items }) => (
                                            <SwiperSlide key={qId}>
                                                <SlideContent>
                                                    <Question>{title}</Question>
                                                    <Answers>
                                                        {items.map(
                                                            ({
                                                                id: itemId,
                                                                text,
                                                            }) => (
                                                                <AnswerLabel
                                                                    key={itemId}
                                                                >
                                                                    <Input
                                                                        type="radio"
                                                                        name={`q-${qId}`}
                                                                        onChange={() =>
                                                                            handleInputChange(
                                                                                qId,
                                                                                itemId
                                                                            )
                                                                        }
                                                                    />
                                                                    <RadioBox />
                                                                    <AnswerText>
                                                                        {text}
                                                                    </AnswerText>
                                                                </AnswerLabel>
                                                            )
                                                        )}
                                                    </Answers>
                                                </SlideContent>
                                            </SwiperSlide>
                                        )
                                    )}

                                    <TestNav>
                                        <NextQuestionButton
                                            text={
                                                showEndTestBtn
                                                    ? "Завершить"
                                                    : "Следующий вопрос"
                                            }
                                            inert={isNextBtnDisabled}
                                            className="button-next"
                                            onClick={handleNextClick}
                                        />
                                    </TestNav>
                                </Swiper>
                            </TestSlider>
                        </Test>
                    </CSSTransition>
                    <CSSTransition
                        in={showFinal}
                        nodeRef={finalRef}
                        timeout={300}
                        classNames="final"
                        mountOnEnter
                    >
                        <FinalBlock ref={finalRef} className="final">
                            <FinalContent>
                                <StyledTitle color={COLORS.blue}>
                                    {finalContent.title}
                                </StyledTitle>
                                <Label>{finalContent.label}</Label>
                                {isTablet && (
                                    <StyledMobileTree
                                        rightAnswers={treeRightAnsw}
                                        start={!showStart}
                                        end={showFinal}
                                        isMobile
                                    />
                                )}
                                <Text>{finalContent.text}</Text>
                                {allAnswersRight && (
                                    <Link
                                        to={nextCourseLink}
                                        className="next-chapter"
                                    >
                                        <SendButton text="Перейти к следующему разделу" />
                                    </Link>
                                )}
                                {!allAnswersRight && (
                                    <SectButtons>
                                        {/* TODO получать норм ссылку (если это будет ссылка) */}
                                        {learnSectsData.map(
                                            (
                                                { title, bgColor, link = "/" },
                                                index
                                            ) => (
                                                // TODO заменить index на id
                                                // eslint-disable-next-line react/no-array-index-key
                                                <Link to={link} key={index}>
                                                    <SectButton
                                                        color={bgColor}
                                                        rotate={index * 45}
                                                    >
                                                        <SectButtonInner>
                                                            <SectButtonCircle>
                                                                {title}
                                                            </SectButtonCircle>
                                                        </SectButtonInner>
                                                    </SectButton>
                                                </Link>
                                            )
                                        )}
                                    </SectButtons>
                                )}
                            </FinalContent>
                            <FinBottom>
                                <Feedback>
                                    <FeedbackText>
                                        Если у Вас есть предложения,
                                        воспользуйтесь формой обратной связи
                                    </FeedbackText>
                                    <MailButton />
                                </Feedback>
                                {!allAnswersRight && (
                                    <Link
                                        to={nextCourseLink}
                                        className="continue-learn"
                                    >
                                        <NextQuestionButton text="Продолжить изучение" />
                                    </Link>
                                )}
                            </FinBottom>
                        </FinalBlock>
                    </CSSTransition>
                </FirstColumn>
                <SecondColumn>
                    {!isTablet && (
                        <StyledTree
                            rightAnswers={treeRightAnsw}
                            start={!showStart}
                            end={showFinal}
                        />
                    )}
                </SecondColumn>
            </Columns>
        </StyledLayout>
    )
}

const Columns = styled.div`
    display: flex;
    height: 100%;
    max-height: 100%;

    @media ${DEVICE.laptopS} {
        flex-direction: column;
    }
`

const StyledMobileTree = styled(Tree)`
    max-width: 80%;
    margin: 0 auto 30px;

    @media ${DEVICE.mobile} {
        max-width: 90%;
    }
`

const SectButtonCircle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 90%;
    height: 90%;
    padding: 0.7em;
    border-radius: 50%;

    font-size: 0.75vw;
    font-family: "FocoBold", sans-serif;
    text-align: center;

    @media ${DEVICE.laptopM} {
        font-size: 11px;
    }

    @media ${DEVICE.laptop} {
        font-size: 14px;
    }

    @media ${DEVICE.mobile} {
        font-size: 12px;
    }
`

const SectButtons = styled.div`
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    max-width: 33vw;

    @media ${DEVICE.laptop} {
        max-width: none;
    }

    a {
        margin-bottom: 4vh;

        @media ${DEVICE.laptop} {
            margin-bottom: 20px;
        }
    }

    & > * {
        flex: 0 1 33%;
        padding-left: 20px;
        padding-right: 20px;

        @media ${DEVICE.tablet} {
            flex: 0 1 50%;
        }
    }
`

const SectButtonInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    &::after {
        position: absolute;
        top: 50%;
        left: 50%;

        width: 100%;
        height: 100%;

        content: "";
        animation: ${borderAnimationM} 10s linear infinite;
        opacity: 0.5;
        z-index: -1;
    }
`

const SectButton = styled.div`
    position: relative;

    width: 100%;
    max-width: 140px;
    margin: 0 auto;

    color: ${COLORS.white};
    transition: 0.3s;

    &:after {
        display: block;
        padding-top: 100%;
        content: "";
    }

    ${SectButtonCircle} {
        background-color: ${({ color }) => color || COLORS.brown_light};
    }

    ${SectButtonInner} {
        &::after {
            background-color: ${({ color }) => color || COLORS.brown_light};
            transform: translate(-50%, -50%)
                rotate(${({ rotate }) => `${rotate}deg`});
        }
    }

    &:hover {
        transform: scale(1.1);
    }
`

const StyledTitle = styled(Title)``

const StyledTree = styled(Tree)`
    max-height: 100%;
    height: 90%;
    padding-bottom: 2vh;
    padding-right: 25px;
`

const TextBase = styled.div`
    font-size: 1.3vw;
    color: ${COLORS.black};
    line-height: 1.5;

    @media ${DEVICE.laptop} {
        font-size: 20px;
    }

    @media ${DEVICE.mobile} {
        font-size: 18px;
    }
`

const Label = styled(TextBase)`
    font-family: "CalibriRegular", sans-serif;
`

const Text = styled(TextBase)`
    font-family: "CalibriLight", sans-serif;
`

const Test = styled.div``

const TestNav = styled.div`
    display: flex;
    justify-content: flex-end;
`

const FirstColumn = styled.div`
    max-width: 100%;
    height: 100%;
    flex: 0 1 50%;
    max-width: 50%;

    @media ${DEVICE.laptopS} {
        flex: 0 1 100%;
        max-width: 100%;
    }
`

const SecondColumn = styled.div`
    max-height: 100%;
    height: 100%;
    flex: 0 1 50%;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    @media ${DEVICE.laptopS} {
        display: none;
    }
`

const Block = styled.div`
    ${StyledTitle} {
        margin-bottom: 3.8vh;
        max-width: 32.5vw;

        @media ${DEVICE.laptop} {
            margin-bottom: 30px;
            max-width: 400px;
        }
    }

    ${Label} {
        margin-bottom: 20px;
        max-width: 33vw;

        @media ${DEVICE.laptop} {
            max-width: 450px;
        }
    }

    ${Text} {
        margin-bottom: 4.6vh;
        max-width: 28vw;

        @media ${DEVICE.laptop} {
            margin-bottom: 30px;
            max-width: 360px;
        }
    }
`

const StartBlock = styled(Block)``

const TestSlider = styled.div`
    .swiper-pagination {
        position: absolute;
        top: 0;
        left: 10px;
    }

    .swiper {
        padding: 8vh 15px 15px;

        @media ${DEVICE.laptopM} {
            padding-top: 58px;
        }
    }

    .swiper-wrapper {
        margin-bottom: 30px;
    }

    .cur-slide-number {
        font-family: "FocoBold", sans-serif;
        font-size: 2.6vw;
        color: ${COLORS.blue};

        @media ${DEVICE.laptop} {
            font-size: 30px;
        }
    }

    .separator,
    .total-slides-number {
        font-family: "FocoRegular", sans-serif;
        font-size: 1.6vw;
        color: ${COLORS.blue};

        @media ${DEVICE.laptop} {
            font-size: 20px;
        }
    }
`

const SlideContent = styled.div``

const Question = styled(Label)`
    line-height: 1.28;
    margin-bottom: 3.7vh;
    max-width: 33vw;

    @media ${DEVICE.laptop} {
        max-width: 450px;
        margin-bottom: 25px;
    }
`

const Answers = styled.div``

const AnswerText = styled(Text)`
    line-height: 1.28;
`

const AnswerLabel = styled.label`
    display: flex;
    align-items: center;

    max-width: 27vw;
    margin-bottom: 3.2vh;
    cursor: pointer;

    @media ${DEVICE.laptop} {
        max-width: 370px;
        margin-bottom: 20px;
    }
`

const RadioBox = styled.div`
    position: relative;
    width: 1.34vw;
    height: 1.34vw;

    flex-shrink: 0;
    margin-right: 13px;
    border: 1px solid ${COLORS.blue};
    border-radius: 50%;

    @media ${DEVICE.laptopM} {
        width: 18px;
        height: 18px;
    }

    &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 60%;
        height: 60%;
        border-radius: 50%;

        background: ${COLORS.blue};
        content: "";
        display: none;


        @media ${DEVICE.laptopM} {
            width: 10px;
            height: 10px;
        }
    }
`

const Input = styled.input`
    /* прячем настоящий инпут */
    position: absolute;
    width: 1px;
    height: 1px;

    overflow: hidden;
    clip: rect(0 0 0 0);

    &:checked + ${RadioBox}:after {
        display: block;
    }

    &:focus + ${RadioBox} {
        box-shadow: 0 0 0 2px #4a90e2;
    }
`

const FinalBlock = styled(Block)`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 20px;
`

const FinalContent = styled.div`
    margin-bottom: 3vh;

    @media ${DEVICE.laptop} {
        margin-bottom: 35px;
    }
`

const FinBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;

    @media ${DEVICE.mobile} {
        flex-direction: column;
    }
`

const Feedback = styled.div`
    display: flex;
    align-items: center;

    @media ${DEVICE.tablet} {
        margin-bottom: 30px;
    }
`

const FeedbackText = styled.p`
    font-family: "CalibriLight", sans-serif;
    font-size: 1vw;
    line-height: 1.3;

    max-width: 18.4vw;
    margin-right: 20px;

    @media ${DEVICE.laptop} {
        max-width: 250px;
        font-size: 18px;
    }
`

const StyledLayout = styled(CourseSlideLayout)`
    .back-to-chapter {
        margin-bottom: 6.8vh;

        @media ${DEVICE.laptop} {
            margin-bottom: 30px;
        }
    }

    .continue-learn {
        margin-right: -7.8vw;

        @media ${DEVICE.laptopS} {
            margin-right: 0;
        }
    }
    .test, .final {
        transition: 0.25s;
        opacity: 0;
    }

    .test-enter-done, .final-enter-done {
        opacity: 1;
    }

    .test-exit, .final-exit {
        opacity: 0;
    }

    .start {
        transition: 0.25s;
    }

    .start-enter-done {
        opacity: 1;
    }

    .start-exit {
        opacity: 0;
    }

    .right-col {
        display: flex;
        justify-content: flex-end;
    }
`
