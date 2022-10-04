import React from "react"
import styled from "styled-components"
import { Lamp } from "../../../assets/svg"
import { COLORS, DEVICE } from "../../../constants"

// синее примечание с лампочкой
export default function Note({ data, className }) {
    const { text } = data

    return (
        <Container className={className}>
            <StyledLamp makeAnim />
            <Text>{text}</Text>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    padding-top: 5px;
    padding-left: 5px;
`

const StyledLamp = styled(Lamp)`
    width: 2.5vw;
    margin-right: 12px;
    flex-shrink: 0;

    @media ${DEVICE.laptopS} {
        width: 30px;
    }
`

const Text = styled.p`
    padding-top: 22px;

    font-family: "FocoBold", sans-serif;
    font-size: 1.3vw;
    color: ${COLORS.blue};
    line-height: 1.36;

    @media ${DEVICE.laptopM} {
        font-size: 1.15vw;
    }

    @media ${DEVICE.laptop} {
        font-size: 20.5px;
    }

    @media ${DEVICE.mobile} {
        font-size: 16px;
    }
`
