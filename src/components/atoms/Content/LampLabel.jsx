import React from "react"
import styled from "styled-components"
import { Lamp } from "../../../assets/svg/static"
import { COLORS, DEVICE } from "../../../constants"
import Text from "./Text"

export default function LampLabel({ text = "" }) {
    return (
        <Container>
            <LampIcon src={Lamp} />
            <StyledText>{text}</StyledText>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: flex-start;
`

const LampIcon = styled.img`
    width: 2.5vw;
    margin-right: 12px;

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
