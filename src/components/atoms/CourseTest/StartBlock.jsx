/* eslint-disable react/jsx-no-bind */
import React, { useRef } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { observer } from "mobx-react-lite"
import { CourseTestStore } from "../../../store"
import SendButton from "../SendButton"
import { Text, Label, Block, StyledTitle } from "./styledAtoms"
import { COLORS, DEVICE } from "../../../constants"

function StartBlock() {
    const startRef = useRef(null)

    function handleStartClick() {
        CourseTestStore.setShowStart(false)
        CourseTestStore.setShowTreeInit(false)
        CourseTestStore.setShowTreeStart(true)
    }

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
                <StyledTitle color={COLORS.blue}>Тест</StyledTitle>
                <Label>
                    Мы подготовили для Вас небольшой тест на знание пройденного
                    раздела.
                </Label>
                <Text>
                    Попробуйте вырастить Ваше дерево, правильно ответив на все
                    вопросы.
                </Text>
                <SendButton
                    text="Начать"
                    onClick={handleStartClick}
                />
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

export default observer(StartBlock)
