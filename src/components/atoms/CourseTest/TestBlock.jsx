/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { CSSTransition } from "react-transition-group"

import { Pagination, Navigation, EffectFade } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
// eslint-disable-next-line
import "swiper/css"
// eslint-disable-next-line
import "swiper/css/effect-fade"

import { Label, Text } from "./styledAtoms"
import NextButton from "../NextButton"
import { DEVICE, COLORS } from "../../../constants"
import { CourseProgressStore, CourseTestStore } from "../../../store"
import { renderCustom } from "../../../utils"
import { Click1 } from "../../../assets/audio"

function TestBlock() {
    const testRef = useRef(null)
    const clickBtnSound = new Audio(Click1)
    const [radioAnswId, setRadioAnswId] = useState(null)
    const [chbAnswIds, setChbAnswIds] = useState([])

    const [activeQId, setActiveQId] = useState(1)

    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    useEffect(() => {
        if (CourseTestStore.activeQInputType === "checkbox") {
            if (chbAnswIds.length > 0) {
                setNextBtnDisabled(false)
            } else {
                setNextBtnDisabled(true)
            }
        }

        if (CourseTestStore.activeQInputType === "radio") {
            if (radioAnswId) {
                setNextBtnDisabled(false)
            } else {
                setNextBtnDisabled(true)
            }
        }
    }, [chbAnswIds, radioAnswId])

    // можно переключиться, даже если не отмечено ничего
    // надо по-другому проверять
    function handleInputChange({target}, qId, aId) {
        const { type } = target

        if (type === "radio") {
            setRadioAnswId(aId)
        } else {
            // eslint-disable-next-line no-lonely-if
            if (target.checked) {
                setChbAnswIds((prevAnswIds) => ([...prevAnswIds, aId]))
            } else {
                setChbAnswIds((prevAnswIds) => prevAnswIds.filter(i => i !== aId))
            }
        }
    }

    function handleSlideChange(swiper) {
        const { activeIndex } = swiper

        const actQId = CourseTestStore.testQsData[activeIndex].id
        setActiveQId(actQId)
    }

    function handleNextClick() {
        clickBtnSound.play()

        if (CourseTestStore.activeQInputType === "checkbox") {
            CourseTestStore.setUserAnswers(CourseTestStore.activeQId, chbAnswIds)
            setChbAnswIds([])
        } else {
            CourseTestStore.setUserAnswers(CourseTestStore.activeQId, radioAnswId)
            setRadioAnswId(null)
        }

        CourseTestStore.setActiveQId(activeQId)

        // если последний слайд, прячем тест и устанавливаем его пройденным
        if (CourseTestStore.isLastSlide) {
            CourseTestStore.setShowTest(false)

            setTimeout(() => {
                CourseTestStore.setUserPassedTest(true)
                CourseProgressStore.setTestPassed()
            }, 500)
        }

        // обновляем состояние дерева
        CourseTestStore.setTreeRightAnswCount()
    }

    function handleReachEnd() {
        CourseTestStore.setShowEndTestBtn(true)

        setTimeout(() => {
            CourseTestStore.setIsLastSlide(true)
        }, 500)
    }

    return (
        <CSSTransition
            in={CourseTestStore.showTest}
            nodeRef={testRef}
            timeout={300}
            classNames="test"
            onExited={() => CourseTestStore.setShowFinal(true)}
            unmountOnExit
            mountOnEnter
        >
            <Test ref={testRef} className="test">
                <TestSlider>
                    <Swiper
                        modules={[Pagination, Navigation, EffectFade]}
                        onSlideChange={handleSlideChange}
                        onReachEnd={handleReachEnd}
                        navigation={{
                            nextEl: ".button-next",
                        }}
                        pagination={{
                            type: "custom",
                            renderCustom,
                        }}
                        allowTouchMove={false}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        speed={400}
                    >
                        {CourseTestStore.testQsData.map(
                            ({ id: qId, title, items, correct }) => (
                                <SwiperSlide key={qId}>
                                    <SlideContent>
                                        <Question>{title}</Question>
                                        <Answers>
                                            {items.map(
                                                ({ id: itemId, text }) => (
                                                    <AnswerLabel key={itemId}>
                                                        {typeof correct ===
                                                        "object" ? (
                                                            <Input
                                                                type="checkbox"
                                                                name={`q-${qId}`}
                                                                onChange={(e) =>
                                                                    handleInputChange(
                                                                        e,
                                                                        qId,
                                                                        itemId
                                                                    )
                                                                }
                                                            />
                                                        ) : (
                                                            <Input
                                                                type="radio"
                                                                name={`q-${qId}`}
                                                                value={itemId}
                                                                onChange={(e) =>
                                                                    handleInputChange(
                                                                        e,
                                                                        qId,
                                                                        itemId
                                                                    )
                                                                }
                                                            />
                                                        )}

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
                            <StyledNextButton
                                text={
                                    CourseTestStore.showEndTestBtn
                                        ? "Завершить"
                                        : "Следующий вопрос"
                                }
                                inert={nextBtnDisabled}
                                className="button-next"
                                onClick={handleNextClick}
                            />
                        </TestNav>
                    </Swiper>
                </TestSlider>
            </Test>
        </CSSTransition>
    )
}

const StyledNextButton = styled(NextButton)`
    transition: 0.2s;

    &[inert] {
        opacity: 0.5;
    }
`

const Test = styled.div`
    max-height: 100%;
    height: 100%;
`

const TestNav = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 25px;
    right: 10px;
    z-index: 50;
`

const TestSlider = styled.div`
    max-height: 100%;
    height: 100%;

    .swiper-pagination {
        position: absolute;
        top: 0;
        left: 10px;
    }

    .swiper {
        max-height: 100%;
        height: 100%;
        padding: 8vh 15px 15px;
        padding-bottom: 60px;

        @media ${DEVICE.laptopM} {
            padding-top: 58px;
        }
    }

    .swiper-slide {
        overflow: auto;
        padding-left: 5px;

        &::-webkit-scrollbar {
            width: 3px;
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgba(0, 82, 155, 0.6);
            border-radius: 2em;
        }
    }

    .swiper-wrapper {
        margin-bottom: 30px;
        max-height: 100%;
        height: 100%;
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
    line-height: 1.18;
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
    text-align: left;

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

export default observer(TestBlock)
