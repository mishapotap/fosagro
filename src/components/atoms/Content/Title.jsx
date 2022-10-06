import React from "react"
import styled from "styled-components"
import { DEVICE, COLORS } from "../../../constants"

export default function Title({ children, className, color = COLORS.orange }) {
    return (
        <Container
            className={`${className || ""} title`}
            color={color}
        >
            {children}
        </Container>
    )
}

const Container = styled.div`
    font-family: "FocoBold";
    font-size: 1.9vw;
    color: ${({ color }) => color || COLORS.orange};
    line-height: 1.05;

    @media ${DEVICE.laptopM} {
        font-size: 1.6vw;
    }

    @media ${DEVICE.laptop} {
        font-size: 30px;
    }

    @media ${DEVICE.mobile} {
        font-size: 26px;
    }
`
