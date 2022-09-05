import React from "react"
import styled from "styled-components"
import { DEVICE, COLORS } from "../../../constants"

export default function Title({ children, className, color }) {
    return (
        <Container className={className} color={color}>
            {children}
        </Container>
    )
}

const Container = styled.div`
    font-family: "FocoBold";
    font-size: 2.6vw;
    color: ${({ color }) => color || COLORS.orange};

    @media ${DEVICE.laptopM} {
        font-size: 2.1vw;
    }

    @media ${DEVICE.laptop} {
        font-size: 30px;
    }

    @media ${DEVICE.mobile} {
        font-size: 26px;
    }
`
