/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useRef, useEffect, useState } from "react"
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
import { COLORS, DEVICE } from "../../../constants"
import { Click2 } from "../../../assets/audio"
import PrevButton from "../PrevButton"
import { TestTitle, TestText } from "../../../assets/audio/test"

function StartBlock() {
    const startRef = useRef(null)
    const audioTitleRef = useRef(null)
    const audioTextRef = useRef(null)
    const [textAudioPlayed, setTextAudioPlayed] = useState(false)
    const [textAudioEnded, setTextAudioEnded] = useState(false)

    const clickSound = new Audio(Click2)

    function handleStartClick() {
        CourseTestStore.setShowStart(false)
        CourseTestStore.setShowTreeInit(false)
        CourseTestStore.setShowTreeStart(true)
        // eslint-disable-next-line no-unused-expressions
        SoundStore.getIsPlaying() && clickSound.play()
    }

    function onTitleEnded() {
        setTimeout(() => {
            audioTextRef.current.play()
        }, 300)
    }

    useEffect(() => {
        if (ModalStore.someModalShown) {
            audioTextRef.current.pause()
            audioTitleRef.current.pause()
        } else if (audioTextRef.current && textAudioPlayed && !textAudioEnded) {
            setTimeout(() => {
                audioTextRef.current.play()
            }, 100);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalStore.someModalShown])

    useEffect(() => {
        if (CourseTestStore.showStart) {
            setTimeout(() => {
                audioTitleRef.current.play()
            }, 200);
        } else {
            audioTitleRef.current.pause()
            audioTextRef.current.pause()
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
                <audio
                    src={TestTitle}
                    ref={audioTitleRef}
                    onEnded={onTitleEnded}
                />
                <audio
                    src={TestText}
                    ref={audioTextRef}
                    onPlay={() => setTextAudioPlayed(true)}
                    onEnded={() => setTextAudioEnded(true)}
                />
                <StyledTitle color={COLORS.blue}>Тест</StyledTitle>
                <Label>
                    Мы подготовили для Вас небольшой тест на знание пройденного
                    раздела.
                </Label>
                <Text>
                    Попробуйте вырастить Ваше дерево, правильно ответив на все
                    вопросы.
                </Text>
                <SendButton text="Начать" onClick={handleStartClick} />
                <Link
                    to={CourseProgressStore.prevPageLink}
                    className="prev-btn"
                >
                    <StyledPrevBtn text="Назад" />
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
