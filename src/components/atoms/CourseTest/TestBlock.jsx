/* eslint-disable react/jsx-no-bind */
import React, { useRef } from "react"
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

function TestBlock() {
    const testRef = useRef(null)

    function handleInputChange(qId, aId) {
        CourseTestStore.setUserAnswers(qId, aId)
    }

    function handleSlideChange(swiper) {
        const { activeIndex } = swiper

        const actQId = CourseTestStore.testQsData[activeIndex].id
        CourseTestStore.setActiveQId(actQId)
    }

    function handleNextClick() {
        if (CourseTestStore.isLastSlide) {
            CourseTestStore.setShowTest(false)
            setTimeout(() => {
                CourseTestStore.setUserPassedTest(true)
                CourseProgressStore.setTestPassed()
            }, 500);
        }
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
                        {CourseTestStore.testQsData.map(({ id: qId, title, items }) => (
                            <SwiperSlide key={qId}>
                                <SlideContent>
                                    <Question>{title}</Question>
                                    <Answers>
                                        {items.map(({ id: itemId, text }) => (
                                            <AnswerLabel key={itemId}>
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
                                                <AnswerText>{text}</AnswerText>
                                            </AnswerLabel>
                                        ))}
                                    </Answers>
                                </SlideContent>
                            </SwiperSlide>
                        ))}

                        <TestNav>
                            <NextButton
                                text={
                                    CourseTestStore.showEndTestBtn
                                        ? "Завершить"
                                        : "Следующий вопрос"
                                }
                                inert={CourseTestStore.nextBtnDisabled}
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

const Test = styled.div``

const TestNav = styled.div`
    display: flex;
    justify-content: flex-end;
`

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
