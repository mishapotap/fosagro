import React from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../../constants"

export default function LittleTitle({ text }) {
    return <Container>{text}</Container>
}

const Container = styled.div`
    font-family: "FocoBold", sans-serif;
    color: ${COLORS.blue};
    font-size: 1.3vw;

    margin-bottom: 2.1vh;

    @media ${DEVICE.laptopM} {
        font-size: 1.25vw;
        margin-bottom: 15px;
    }

    @media ${DEVICE.laptop} {
        font-size: 18px;
    }
`
