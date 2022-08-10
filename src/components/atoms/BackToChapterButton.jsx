import React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"
import { Prev } from "../../assets/svg"

export default function BackToChapterButton() {
    return (
        <Container>
            <Prev />
            <Text>Вернуться в раздел</Text>
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
        margin-right: -20px;
    }
    &:hover svg{
        transition: all 0.3s;
        transform: scale(1.3);
    }
`

const Text = styled.span`
    /* TODO Заменить font-family */
    /* text */
    font-family: Calibri, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: ${COLORS.blue};
`
