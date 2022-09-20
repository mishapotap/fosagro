import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { AnimatedBlueButton } from "../atoms"
import { COLORS, DEVICE } from "../../constants"
import { CourseProgressStore } from "../../store"

function CourseProgressBar({ max = 100, color = COLORS.blue}) {

  const value = CourseProgressStore.activeCourseProgressPer

  return(
    <Container color={color}>
        <Button size="m" value={value}>
            {value}%
        </Button>
        <Progress value={value} max={max} />
    </Container>
  )
}

export default observer(CourseProgressBar)

const Container = styled.div`
    position: relative;
    height: 100%;
    padding-left: 40px;
    margin-right: 40px;
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

        @media ${DEVICE.laptopM} {
            height: 3px;
        }
    }
    /* Полоска прогресса */
    progress[value]::-webkit-progress-value {
        height: 5px;
        border-radius: 50px;
        background-color: ${props => props.color};
        transition: all 0.3s;

        @media ${DEVICE.laptopM} {
            height: 3px;
        }
    }
`
// Кнопка с %
const Button = styled(AnimatedBlueButton)`
    position: absolute;
    top: 8px;
    left: ${(props) => `${props.value}%`};
    z-index: 1;
    pointer-events: none;
`
// Полоска прогресса
const Progress = styled.progress`
    position: relative;
    top: 50%;
    @media ${DEVICE.tablet} {
        display: none;
    }
`