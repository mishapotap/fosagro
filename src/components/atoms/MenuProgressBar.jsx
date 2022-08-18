import React from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../constants"

export default function MenuProgressBar({ value, max, color, width = "15vw" }) {
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
        width: 42vw;
        -webkit-appearance: none;
        appearance: none;
        @media ${DEVICE.tablet} { 
            width: 27vw;
        }
        @media ${DEVICE.laptopS} { 
            width: ${props => props.width};
        }
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
    font-size: 5.3vw;
    line-height: 5.67vw;
    color: ${props => props.color};
    @media ${DEVICE.tablet} { 
        font-size: 3.3vw;
        line-height: 3.67vw;
    }
    @media ${DEVICE.laptopS} { 
        font-size: 1.3vw;
        line-height: 1.67vw;
    }
`
const Progress = styled.progress`
`