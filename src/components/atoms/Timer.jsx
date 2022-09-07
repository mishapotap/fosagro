import React from "react"
import styled, { css, keyframes } from "styled-components"
import { COLORS, DEVICE } from "../../constants"
import { TimerNumberBg, TimerNumberBgTop } from "../../assets/svg/static"

export default function Timer({ makeAnim = false }) {
    function getDayOfYear() {
        const now = new Date()
        const start = new Date(now.getFullYear(), 0, 0)
        const diff =
            now -
            start +
            (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000
        const oneDay = 1000 * 60 * 60 * 24
        const day = Math.floor(diff / oneDay)
        return day.toString()
    }

    const day = getDayOfYear()
    const numbers = day
        .split("")
        .map((item, index) => ({ number: item, id: index }))

    // TODO Сделать чтобы компонент был observable (следили за состоянием дня) Не обновляется в 00:00
    return (
        <Container className="timer" makeAnim={makeAnim}>
            <TimerTitle>День года:</TimerTitle>
            <TimerNumbers>
                {numbers.map(({ number, id }) => (
                    <NumberContainer key={id}>
                        <Number>{number}</Number>
                    </NumberContainer>
                ))}
            </TimerNumbers>
        </Container>
    )
}

const TimerNumbers = styled.div`
    display: flex;

    > div {
        margin-right: 2px;

        &:last-child {
            margin-right: 0;
        }
    }
`

const Appear = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const TimerTitle = styled.div`
    font-family: "FocoBold", sans-serif;
    font-size: 1.5vw;
    color: ${COLORS.blue};
    text-align: center;

    margin-bottom: 20px;

    @media ${DEVICE.laptop} {
        font-size: 20px;
    }
`

const Container = styled.div`
    ${({ makeAnim }) =>
        makeAnim &&
        css`
            ${TimerTitle} {
                animation: ${Appear} 1s both;
            }

            ${TimerNumbers} {
                animation: ${Appear} 1s both 1s;
            }
        `}
`

const Number = styled.div`
    font-size: 70px;
    font-weight: bold;
    color: ${COLORS.white};
    z-index: 1;

    @media ${DEVICE.laptopM} {
        font-size: 55px;
    }
`

const NumberContainer = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 53px;
    height: 77px;

    background: url(${TimerNumberBg}) no-repeat center/contain;

    @media ${DEVICE.laptopM} {
        width: 40px;
        height: 58px;
    }

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
        z-index: 4;
    }

    &::before {
        position: absolute;
        top: 0;
        left: 0;

        height: 50%;
        width: 100%;

        content: "";
        background: url(${TimerNumberBgTop}) no-repeat center/contain;
        z-index: 3;
    }
`
