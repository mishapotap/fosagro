/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-bind */
import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import { observer } from "mobx-react-lite"

import {
    ModalStore,
    CourseTestStore,
    SoundStore,
    CourseProgressStore,
} from "../../../store"
import { COLORS, DEVICE } from "../../../constants"
import { borderAnimationM } from "../../../constants/animations"
import { Letter } from "../../../assets/svg"

import NextButton from "../NextButton"
import AnimatedBlueButton from "../AnimatedBlueButton"
import SendButton from "../SendButton"
import { Text, Label, Block, StyledTitle } from "./styledAtoms"
import { Click1 } from "../../../assets/audio"

function FinalBlock() {
    const finalRef = useRef(null)
    const restartTest = useRef(false)
    const [ autoPausedAudio, setAutoPausedAudio] = useState(false)

    useEffect(() => {
        if (CourseTestStore.showFinal) {
            SoundStore.setTestFinalAudio()

            setTimeout(() => {
                if (SoundStore.testFinalAudio) {
                    SoundStore.testFinalAudio.currentTime = 0
                    SoundStore.testFinalAudio.play()
                } else {
                    const audio = new Audio(CourseTestStore.finalContent.audio)
                    audio.autoplay = true
                }
            }, 50)
        } else if (SoundStore.testFinalAudio) {
                SoundStore.testFinalAudio.pause()
                SoundStore.testFinalAudio.currentTime = 0
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CourseTestStore.showFinal])

    useEffect(() => {
        SoundStore.setTestFinalAudio()

        return () => {
            if (SoundStore.testFinalAudio) SoundStore.testFinalAudio.pause()
        }
    }, [])

    useEffect(() => {
        if (ModalStore.isVisible.menu || ModalStore.isVisible.mail) {
            if (
                SoundStore.testFinalAudio &&
                !SoundStore.testFinalAudio.paused
            ) {
                setAutoPausedAudio(true)
                SoundStore.testFinalAudio.pause()
            }
        } else if (autoPausedAudio) {
            SoundStore.testFinalAudio.play()
            setAutoPausedAudio(false)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalStore.isVisible.menu || ModalStore.isVisible.mail])

    const clickSound = new Audio(Click1)

    const openMailModal = () => {
        ModalStore.showModal("mail")
        // eslint-disable-next-line no-unused-expressions
        SoundStore.getIsPlaying() && clickSound.play()
    }

    const reset = () => {
        if (restartTest.current) {
            restartTest.current = false
            CourseTestStore.resetActiveTestProgress()
            CourseProgressStore.resetActiveTestProgress()
            CourseTestStore.setUserPassedTest(false)
        }
    }

    const handleRestartTest = () => {
        restartTest.current = true
        CourseTestStore.setShowFinal(false)

        setTimeout(() => {
            reset()
        }, 500)
    }

    const handleExited = () => {
        reset()
    }

    const handleLinkClick = (id) => {
        CourseProgressStore.setMediaElFromTest(id)
        CourseProgressStore.setNewSectWindowAudio(id)
    }

    return (
        <CSSTransition
            in={CourseTestStore.showFinal}
            nodeRef={finalRef}
            timeout={300}
            classNames="final"
            onExited={handleExited}
            mountOnEnter
            unmountOnExit
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
                        // eslint-disable-next-line react/jsx-no-useless-fragment
                        <>
                            {/* показываем кнопку завершить обучение, только если пользователь прошел курс, и либо
                            не видел еще финальную страницу
                            либо находится на шестом разделе */}
                            {(CourseProgressStore.userPassedFullCourse &&
                                !CourseProgressStore.userVisitedFinalPage) ||
                            (CourseProgressStore.userPassedFullCourse &&
                                CourseProgressStore.activeChapterId === 6) ? (
                                <Link
                                    to="/final"
                                    className="next-chapter"
                                    onClick={() =>
                                        SoundStore.setIsPlayingSound(true)
                                    }
                                >
                                    <SendButton text="Завершить обучение" />
                                </Link>
                            ) : (
                                <Link
                                    to={CourseTestStore.nextCourseLink}
                                    className="next-chapter"
                                    onClick={() =>
                                        SoundStore.setIsPlayingSound(true)
                                    }
                                >
                                    <SendButton text="Перейти к следующему разделу" />
                                </Link>
                            )}
                        </>
                    )}
                    {!CourseTestStore.allAnswersRight && (
                        <SectButtons>
                            {CourseTestStore.learnSectsData.map(
                                ({ title, color, link = "/", id }, index) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <Link to={link} key={id} onClick={() => handleLinkClick(id)}>
                                        <SectButton
                                            color={color}
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
                    <SendButton
                        text="Пройти тест снова"
                        onClick={handleRestartTest}
                    />
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
                            onClick={() => openMailModal()}
                            className="final-mail-btn"
                        >
                            <Letter />
                        </AnimatedBlueButton>
                    </Feedback>
                    {!CourseTestStore.allAnswersRight && (
                        // eslint-disable-next-line react/jsx-no-useless-fragment
                        <>
                            {(CourseProgressStore.userPassedFullCourse &&
                                !CourseProgressStore.userVisitedFinalPage) ||
                            (CourseProgressStore.userPassedFullCourse &&
                                CourseProgressStore.activeChapterId === 6) ? (
                                <Link to="/final" className="continue-learn">
                                    <NextButton text="Завершить обучение" />
                                </Link>
                            ) : (
                                <Link
                                    to={CourseTestStore.nextCourseLink}
                                    className="continue-learn"
                                >
                                    <NextButton text="Продолжить изучение" />
                                </Link>
                            )}
                        </>
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

        @media ${DEVICE.laptopM} {
            margin-bottom: 3vh;
        }

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
    max-height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0;
    }

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
    position: absolute;
    bottom: 0;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;

    @media ${DEVICE.laptopM} {
        padding: 0;
    }

    @media ${DEVICE.laptop} {
        flex-direction: column;
    }

    @media ${DEVICE.laptopS} {
        position: relative;
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
    position: relative;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 8vh;

    &.visible {
        opacity: 1 !important;
    }

    @media ${DEVICE.laptopS} {
        align-items: center;
        padding-bottom: 0;
        height: auto;
    }
`

export default observer(FinalBlock)
