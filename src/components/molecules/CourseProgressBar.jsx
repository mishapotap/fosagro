import React from "react"
import styled from "styled-components"
import { AnimatedBlueButton } from "../atoms"
import { COLORS, DEVICE } from "../../constants"

export default function CourseProgressBar({value = 20, max = 100, color = COLORS.blue}) {
  // TODO перенести состояние в mobX
  return(
    <Container color={color}>
        <Button size="m" value={value}>
            {value}%
        </Button>
        <Progress value={value} max={max} />
    </Container>
  )
}

const Container = styled.div`
    position: relative;
    height: 100%;
    margin: 0 40px;
    progress {
        min-width: 100%;
        color: ${props => props.color};
    }
    /* Значение  */
    progress[value]{
        -webkit-appearance: none;
        appearance: none;
    }
    /* Задний фон */
    progress[value]::-webkit-progress-bar {
        height: 5px;
        border-radius: 50px;
        background-color: ${COLORS.white};
    }
    /* Полоска прогресса */
    progress[value]::-webkit-progress-value {
        height: 5px;
        border-radius: 50px;
        background-color: ${props => props.color};
        transition: all 0.3s;
    }
`
// Кнопка с %
const Button = styled(AnimatedBlueButton)`
    margin-left: -40px;
    position: absolute;
    top: 8px;
    left: ${(props) => `${props.value}%`};
    z-index: 1;
`
// Полоска прогресса
const Progress = styled.progress`
    position: relative;
    top: 50%;
    @media ${DEVICE.tablet} {
        display: none;
    }
`