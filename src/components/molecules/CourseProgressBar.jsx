import React from "react"
import styled from "styled-components"
import { AnimatedBlueButton } from "../atoms"
import { COLORS } from "../../constants"

export default function CourseProgressBar({value, max, color}) {
  // TODO перенести состояние в mobX
  return(
    <Wrapper>
        <Text>Прогресс обучения</Text>
        <AnimatedBlueButton size="m" rotate="135">
            {value}%
        </AnimatedBlueButton>
        <Container color={color}>
            <Progress value={value} max={max} />
        </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 1.5vw;
    align-items: center;
`

const Text = styled.div`
    font-family: "FocoRegular";
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${COLORS.blue_text};
`

const Container = styled.div`
    margin-left: -3vw;
    /* max-width: 100%; */
    /* height: 100%; */
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

const Progress = styled.progress`
    position: relative;
    top: 50%;
`