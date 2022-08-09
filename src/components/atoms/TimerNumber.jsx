import React from "react"
import styled from "styled-components"
import { TimerNumberBg, TimerNumberBgTop } from "../../assets/images"
import { COLORS } from "../../constants"

export default function TimerNumber({ number }) {
    return (
        <Container>
            <Number>{number}</Number>
        </Container>
    )
}

const Number = styled.div`
    font-size: 70px;
    font-weight: bold;
    color: ${COLORS.white};
    z-index: 1;
`

const Container = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 53px;
    height: 77px;

    background: url(${TimerNumberBg}) no-repeat center/contain;

    &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 86%;
        height: 3px;

        border-radius: 5px;
        background-color: ${COLORS.blue};
        content: "";
        z-index:4;
    }

    &::before {
        position: absolute;
        top: 0;
        left: 0;

        height: 50%;
        width: 100%;

        content: '';
        background: url(${TimerNumberBgTop}) no-repeat center/contain;
        z-index: 3;
    }
`
