import React from "react"
import styled from "styled-components"
import { DEVICE } from "../../../constants"

// TODO добавить такую штучку, когда при наведении появляется кружочек с тестом

export default function Label({
    children = "ФосАгро следует международным стандартам раскрытия.",
}) {
    return <Container>{children}</Container>
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
