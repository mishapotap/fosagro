/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"

import {
    CourseTestStore,
    CourseProgressStore,
    SoundStore,
    ModalStore,
} from "../../../store"
import SendButton from "../SendButton"
import { Text, Label, Block, StyledTitle } from "./styledAtoms"
import { COLORS, DEVICE,ISENG } from "../../../constants"
import { Click2 } from "../../../assets/audio"
import PrevButton from "../PrevButton"

const engText = {
    title: "Test",
    label: "We have prepared a short quiz to test your knowledge of the section.",
    text: "Try growing your tree by answering each question correctly.",
    // !перевод
    // от меня, не нашла
    backBtnText: "Back",
    startBtnText: "Start",
}

const ruText = {
    title: "Тест",
    label: "Мы подготовили для Вас небольшой тест на знание пройденного раздела.",
    text: "Попробуйте вырастить Ваше дерево, правильно ответив на все вопросы.",
    backBtnText: "Назад",
    startBtnText: "Начать",
}

const textData = ISENG ? engText : ruText

function StartBlock() {
    const startRef = useRef(null)
    const autoPausedAudio = useRef(null)
    const clickSound = new Audio(Click2)

    function handleStartClick() {
        CourseTestStore.setShowStart(false)
        CourseTestStore.setShowTreeInit(false)
        CourseTestStore.setShowTreeStart(true)
        // eslint-disable-next-line no-unused-expressions
        SoundStore.getIsPlaying() && clickSound.play()
    }

    function handleBackClick() {
        // установить аудио для пред страницы?
        CourseProgressStore.setNewSectAudioFromTest()
    }

    useEffect(
        () => () => {
            if (SoundStore.testStartAudio) {
                SoundStore.testStartAudio.pause()
            }
        },
        []
    )

    useEffect(() => {
        if (ModalStore.isVisible.menu || ModalStore.isVisible.mail) {
            if (
                SoundStore.testStartAudio &&
                !SoundStore.testStartAudio.paused
            ) {
                autoPausedAudio.current = SoundStore.testStartAudio
                SoundStore.testStartAudio.pause()
            }
        } else if (autoPausedAudio.current) {
            autoPausedAudio.current.play()
            autoPausedAudio.current = null
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalStore.isVisible.menu || ModalStore.isVisible.mail])

    useEffect(() => {
        if (CourseTestStore.showStart) {
            setTimeout(() => {
                if (SoundStore.testStartAudio) {
                    SoundStore.testStartAudio.currentTime = 0
                    SoundStore.testStartAudio.play()
                }
            }, 200)
        } else {
            // eslint-disable-next-line no-lonely-if
            if (SoundStore.testStartAudio) {
                SoundStore.testStartAudio.pause()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CourseTestStore.showStart])

    return (
        <CSSTransition
            in={CourseTestStore.showStart}
            nodeRef={startRef}
            timeout={300}
            classNames="start"
            unmountOnExit
            onExited={() => CourseTestStore.setShowTest(true)}
        >
            <StartStyledBlock ref={startRef} className="start">
                <StyledTitle color={COLORS.blue}>{textData.title}</StyledTitle>
                <Label>
                    {textData.label}
                </Label>
                <Text>
                    {textData.text}
                </Text>
                <SendButton text={textData.startBtnText} onClick={handleStartClick} />
                <Link
                    to={CourseProgressStore.prevPageLink}
                    className="prev-btn"
                    onClick={handleBackClick}
                >
                    <StyledPrevBtn text={textData.backBtnText} />
                </Link>
            </StartStyledBlock>
        </CSSTransition>
    )
}

const StartStyledBlock = styled(Block)`
    @media ${DEVICE.laptopS} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .prev-btn {
        display: inline-block;
    }
`

const StyledPrevBtn = styled(PrevButton)`
    margin-top: 10vh;
    margin-left: 5px;

    @media ${DEVICE.laptopS} {
        margin-top: 50px;
        align-self: flex-start;
    }
`

export default observer(StartBlock)
