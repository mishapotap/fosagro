import React from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../constants"

export default function MenuProgressBar({ value, max, color, width = "15vw" }) {
    // TODO Проверка на if > 100

    return (
        <Container className="progress" color={color} width={width}>
            <Persent className="progress-number" color={color}>{value}%</Persent>
            <Progress value={value} max={max} />
        </Container>
    )
}

const Container = styled.div`
    /* width: fit-content; */
    /* height: fit-content; */
    progress {
        color: ${props => props.color};
    }

    width: 15vw;

    @media ${DEVICE.laptopS} {
        width: 23vw;
    }
    @media ${DEVICE.mobile} {
        width: 33vw;
    }
    /* Значение  */
    progress[value]{

        /* width: ${props => props.width}; */
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        /* @media ${DEVICE.laptopS} {
            width: 23vw;
        }
        @media ${DEVICE.mobile} {
            width: 33vw;
        } */
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
    font-size: 1.3vw;
    line-height: 1.28;
    /* font-size: 5.3vw;
    line-height: 5.67vw; */
    color: ${props => props.color};

    @media ${DEVICE.laptopS} {
        font-size: 2.3vw;
    }
    @media ${DEVICE.tablet} {
        font-size: 3.8vw;
    }
`
const Progress = styled.progress`
`