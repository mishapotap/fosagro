import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { COLORS, DEVICE } from "../../../constants"

// текст с акцентом (синий толстый шрифт) или без
export default function Text({ data: { text }, className }) {
    return <Container className={className}>{parse(text)}</Container>
}

const Container = styled.p`
    font-family: "CalibriLight", sans-serif;
    font-size: 1.2vw;
    line-height: 1.25;
    color: ${COLORS.black};

    @media ${DEVICE.laptopM} {
        font-size: 1.18vw;
        line-height: 1.2;
    }

    @media ${DEVICE.laptop} {
        font-size: 18px;
    }

    span {
        font-family: "FocoBold", sans-serif;
        color: ${COLORS.blue};
    }

    sub {
        font-size: 0.7em;
    }
`
