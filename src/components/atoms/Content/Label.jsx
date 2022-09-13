import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { DEVICE } from "../../../constants"

export default function Label({ data }) {
    const { text = "" } = data

    return <Container>{parse(text)}</Container>
}

const Container = styled.div`
    font-family: "FocoBold", sans-serif;
    font-size: 1.2vw;
    line-height: 1.3;
    max-width: 36vw;

    @media ${DEVICE.laptopS} {
        font-size: 17px;
        max-width: none;
    }
`
