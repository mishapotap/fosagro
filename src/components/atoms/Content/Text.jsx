import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { COLORS, DEVICE } from "../../../constants"

// текст с акцентом (синий толстый шрифт) или без
export default function Text({ children, className }) {
    // парсим html текста, чтобы сделать акцент в нем
    // (в качестве children должна поступать html строка, в которой слова,
    // которые надо выделить, обернуты в тег span)
    // или просто строка с текстом, если без акцента
    return <Container className={className}>{parse(children)}</Container>
}

const Container = styled.p`
    font-family: "CalibriLight", sans-serif;
    font-size: 1.3vw;
    line-height: 1.56;
    color: ${COLORS.black};

    @media ${DEVICE.laptopM} {
        font-size: 1.25vw;
    }

    @media ${DEVICE.laptop} {
        font-size: 22px;
    }

    @media ${DEVICE.mobile} {
        font-size: 18px;
    }

    span {
        font-family: "FocoBold", sans-serif;
        color: ${COLORS.blue};
    }
`
