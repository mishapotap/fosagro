import React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"

export default function Button({ text }) {
    return <Container>{text}</Container>
}

const Container = styled.button`
    box-sizing: border-box;
    width: 216px;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: ${COLORS.blue};
    border: 1px solid ${COLORS.blue};
    /* text */
    font-family: Calibri, sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: ${COLORS.white};
    /* transition */
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        transition: all 0.3s;
        background-color: ${COLORS.white};
        color: ${COLORS.blue};
    }
`