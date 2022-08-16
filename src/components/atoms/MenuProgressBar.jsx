import React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"

export default function MenuProgressBar({ value, max, color, width = "220px" }) {
    // TODO Проверка на if > 100
    return (
        <Container color={color} width={width}>
            <Persent color={color}>{(value/max) * 100}%</Persent>
            <Progress value={value} max={max} />
        </Container>
    )
}

const Container = styled.div`
    width: fit-content;
    height: fit-content;
    progress {
        color: ${props => props.color};
    }
    /* Значение  */
    progress[value]{
        width: ${props => props.width};
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
const Persent = styled.div`
    width: fit-content;
    font-family: 'FocoBold';
    font-size: 25px;
    line-height: 32px;
    color: ${props => props.color};
`
const Progress = styled.progress`
`