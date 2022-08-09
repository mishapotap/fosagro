import React from "react"
import styled, { keyframes } from "styled-components"

export default function TimelineCircle({ text }) {
    return (
        <Container>
            <Circle>
                <Text>{text}</Text>
            </Circle>
        </Container>
    )
}

const borderAnimation = keyframes`
    0% {
        border-radius: 71% 29% 26% 74% / 49% 56% 44% 51%;
    }
    25% {
        border-radius: 51% 49% 60% 40% / 73% 77% 23% 27%;
    }
    50% {
        border-radius: 31% 69% 68% 32% / 48% 60% 40% 52%;
    }
    75% {
        border-radius: 59% 41% 49% 51% / 23% 24% 76% 77%;
    }
    100% {
        border-radius: 71% 29% 26% 74% / 49% 56% 44% 51%;
    }
`

const Container = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 30px;
`

const Circle = styled.div`
    z-index: 2;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        transition: all 0.3s;
        transform: scale(1.6);
        background: red;
        :after {
            background: yellow;
        }
    }
    &:after {
        z-index: -1;
        content: "";
        position: absolute;
        top: -2px;
        left: -7px;
        width: 164px;
        height: 154px;
        background: rgba(255, 255, 255, 0.5);
        transform: rotate(45deg);
        animation: ${borderAnimation} 10s linear infinite;
    }
`
const Text = styled.span`
    z-index: 3;
    max-width: 138px;
    text-align: center;
    /* text */
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #004a93;
`