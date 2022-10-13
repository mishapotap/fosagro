import React from "react"
import styled, { keyframes } from "styled-components"
import { COLORS, DEVICE } from "../../constants"
import { Next } from "../../assets/svg"

export default function NextButton({
    className,
    text = "Следующий вопрос",
    onClick,
    inert,
    active = false,
}) {
    return (
        <Container
            className={`${className || ""} ${active ? "active" : ""}`}
            onClick={onClick}
            inert={inert ? "" : undefined}
        >
            <Text>{text}</Text>
            <Icon>
                <Next />
            </Icon>
        </Container>
    )
}

const animBtn = keyframes`
    0% {
        transform: scale(1);
    }

    10% {
        transform: scale(1);
    }

    20% {
        transform: scale(1.12);
    }

    30% {
        transform: scale(1);
    }
`

const Icon = styled.div`
    display: inline-block;
`

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    /* text */
    font-family: Calibri, sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: ${COLORS.blue};
    /* transition */
    /* transition: all 0.3s; */
    cursor: pointer;
    & svg {
        margin-left: -20px;
        transition: all 0.3s;

        @media ${DEVICE.laptopM} {
            width: 52px;
        }

        @media ${DEVICE.laptopS} {
            width: 60px;
        }
    }

    &.active {
        ${Icon} {
            animation: ${animBtn} 5s infinite;

            @media ${DEVICE.laptopS} {
                animation: none;
            }
        }
    }

    &:hover {
        ${Icon} {
            animation: none !important;
        }

        svg {
            transform: scale(1.15);

            @media ${DEVICE.laptopS} {
                transform: none;
            }
        }
    }
`

const Text = styled.span`
    /* margin-left: -20px; */
    /* TODO Заменить font-family */
    /* text */
    font-family: Calibri, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: ${COLORS.blue};

    @media ${DEVICE.laptopM} {
        font-size: 14px;
    }

    @media ${DEVICE.laptopS} {
        font-size: 16px;
    }
`
