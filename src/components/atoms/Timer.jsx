import React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"
import { TimerNumberBg, TimerNumberBgTop } from "../../assets/svg/static"

export default function Timer() {
    function getDayOfYear() {
        const now = new Date()
        const start = new Date(now.getFullYear(), 0, 0)
        const diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000
        const oneDay = 1000 * 60 * 60 * 24
        const day = Math.floor(diff / oneDay)
        return day.toString()
    }

    const day = getDayOfYear()
    const numbers = day.split('').map((item, index) => ({number: item, id: index}))

    return (
        <Container>
            {numbers.map(({ number, id }) => (
                <NumberContainer key={id}>
                    <Number>{number}</Number>
                </NumberContainer>
            ))}
        </Container>
    )
}

const Container = styled.div`
    display: flex;

    > div {
        margin-right: 2px;

        &:last-child {
            margin-right: 0;
        }
    }
`

const Number = styled.div`
    font-size: 70px;
    font-weight: bold;
    color: ${COLORS.white};
    z-index: 1;
`

const NumberContainer = styled.div`
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

