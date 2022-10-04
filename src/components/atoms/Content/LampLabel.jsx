/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"
import { Lamp } from "../../../assets/svg"
import { COLORS, DEVICE } from "../../../constants"
import Text from "./Text"

export default function LampLabel({ text = "" }) {
    return (
        <Container>
            <StyledLamp/>
            <StyledText data={{ text }} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: flex-start;
`

const StyledLamp = styled(Lamp)`
    width: 2.5vw;
    margin-right: 12px;
    flex-shrink: 0;

    @media ${DEVICE.laptopM} {
        width: 2vw;
    }

    @media ${DEVICE.laptopS} {
        width: 30px;
    }
`

const StyledText = styled(Text)`
    line-height: 1.3;
    padding-top: 0.5vh;

    span {
        font-family: CalibriBold, sans-serif;
        color: ${COLORS.black};
    }
`
