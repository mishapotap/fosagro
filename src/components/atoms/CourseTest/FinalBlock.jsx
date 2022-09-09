/* eslint-disable react/jsx-no-bind */
import React, { useRef } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import { observer } from "mobx-react-lite"

import { ModalStore, CourseTestStore } from "../../../store"
import { COLORS, DEVICE } from "../../../constants"
import { borderAnimationM } from "../../../constants/animations"
import { Letter } from "../../../assets/svg"

import NextQuestionButton from "../NextQuestionButton"
import AnimatedBlueButton from "../AnimatedBlueButton"
import SendButton from "../SendButton"
import { Text, Label, Block, StyledTitle } from "./styledAtoms"

function FinalBlock() {
    const finalRef = useRef(null)

    function handleExited() {
        finalRef.current.style.opacity = 1
    }

    return (
        <CSSTransition
            in={CourseTestStore.showFinal}
            nodeRef={finalRef}
            timeout={300}
            classNames="final"
            onExited={handleExited}
            mountOnEnter
        >
            <FinalStyledBlock
                ref={finalRef}
                className={`${
                    CourseTestStore.userPassedTest && "visible"
                } final`}
            >
                <FinalContent>
                    <StyledTitle color={COLORS.blue}>
                        {CourseTestStore.finalContent.title}
                    </StyledTitle>
                    <Label>{CourseTestStore.finalContent.label}</Label>
                    <Text>{CourseTestStore.finalContent.text}</Text>
                    {CourseTestStore.allAnswersRight && (
                        <Link
                            to={CourseTestStore.nextCourseLink}
                            className="next-chapter"
                        >
                            <SendButton
                                text="Перейти к следующему разделу"
                            />
                        </Link>
                    )}
                    {!CourseTestStore.allAnswersRight && (
                        <SectButtons>
                            {/* TODO получать норм ссылку (если это будет ссылка) */}
                            {CourseTestStore.learnSectsData.map(
                                ({ title, bgColor, link = "/" }, index) => (
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
                            Если у Вас есть предложения, воспользуйтесь формой
                            обратной связи
                        </FeedbackText>
                        <AnimatedBlueButton
                            size="s"
                            rotate="20"
                            onClick={() => ModalStore.showModal("mail")}
                            className="final-mail-btn"
                        >
                            <Letter />
                        </AnimatedBlueButton>
                    </Feedback>
                    {!CourseTestStore.allAnswersRight && (
                        <Link
                            to={CourseTestStore.nextCourseLink}
                            className="continue-learn"
                        >
                            <NextQuestionButton
                                text="Продолжить изучение"
                            />
                        </Link>
                    )}
                </FinBottom>
            </FinalStyledBlock>
        </CSSTransition>
    )
}

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

const FinalContent = styled.div`
    margin-bottom: 3vh;

    @media ${DEVICE.laptop} {
        margin-bottom: 35px;
    }

    @media ${DEVICE.laptopS} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const FinBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 30px;

    @media ${DEVICE.laptop} {
        flex-direction: column;
        width: 100%;
    }
`

const Feedback = styled.div`
    display: flex;
    align-items: center;

    .final-mail-btn {
        flex-shrink: 0;
    }

    @media ${DEVICE.laptop} {
        margin-bottom: 30px;
        justify-content: space-around;
        width: 100%;
    }
`

const FeedbackText = styled.p`
    font-family: "CalibriLight", sans-serif;
    font-size: 1vw;
    line-height: 1.3;
    text-align: left;

    max-width: 18.4vw;
    margin-right: 20px;

    @media ${DEVICE.laptop} {
        max-width: 250px;
        font-size: 18px;
    }
`

const FinalStyledBlock = styled(Block)`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 20px;

    &.visible {
        opacity: 1!important;
    }

    @media ${DEVICE.laptopS} {
        align-items: center;
    }
`

export default observer(FinalBlock)
