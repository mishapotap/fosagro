import React from "react"
import styled from "styled-components"
import { Lamp } from "../../../assets/svg"
import { COLORS, DEVICE } from "../../../constants"

// синее примечание с лампочкой
export default function Note({ data, className, isIntro = false }) {
    const { text } = data

    return (
        <Container className={className}>
            <StyledLamp isIntro={isIntro} makeAnim />
            <Text>{text}</Text>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    padding-top: 3px;
    padding-left: 5px;
`

const StyledLamp = styled(Lamp)`
    width: 2vw;
    margin-right: 12px;
    flex-shrink: 0;

    @media ${DEVICE.laptopS} {
        width: 30px;
    }
`

const Text = styled.p`
    padding-top: 13px;

    font-family: "FocoBold", sans-serif;
    font-size: 1.2vw;
    color: ${COLORS.blue};
    line-height: 1.2;

    @media ${DEVICE.laptopM} {
        font-size: 1.12vw;
    }

    @media ${DEVICE.laptop} {
        font-size: 16px;
    }
`
