import React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"
import { DEVICE } from "../../constants/theme"

export default function SendButton({ text, size = "s" }) {
    return <Container size={size}>{text}</Container>
}

const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.85em 3.1em;
    border-radius: 2.7em;
    border: 1px solid ${COLORS.blue};
    background-color: ${COLORS.blue};

    /* text */
    font-family: "CalibriRegular";
    text-align: center;
    color: ${COLORS.white};
    line-height: 1;

    /* transition */
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        transition: all 0.3s;
        background-color: ${COLORS.white};
        color: ${COLORS.blue};
    }

    @media ${DEVICE.mobileS} {
        font-size: 15.5px;
    }

    @media ${DEVICE.laptopS} {
        font-size: 16px;
    }

    @media ${DEVICE.laptopM} {
        font-size: ${({ size }) => (size === "s" ? "18px" : "23px")};
    }
`
