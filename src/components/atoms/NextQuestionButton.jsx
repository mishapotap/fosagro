import React from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../constants"
import { Next } from "../../assets/svg"

export default function NextQuestionButton({
    className,
    text = "Следующий вопрос",
    onClick,
    inert,
}) {
    return (
        <Container
            className={className}
            onClick={onClick}
            inert={inert ? "" : undefined}
        >
            <Text>{text}</Text>
            <Next />
        </Container>
    )
}

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
    &:hover svg {
        transform: scale(1.15);
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
