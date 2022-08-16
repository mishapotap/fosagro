import React from "react"
import styled from "styled-components"
import { COLORS } from "../../../constants"

export default function Fullscreen({ width = '77px' }) {
    return (
        <Wrapper
            viewBox="0 0 77 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
        >
            <path
                d="M1 37V6C1 3.23858 3.23858 1 6 1L50.6132 1"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M75.7686 19L75.7686 50C75.7686 52.7614 73.53 55 70.7686 55L26.1553 55"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </Wrapper>
    )
}
const Wrapper = styled.svg`
    cursor: pointer;

    path {
        stroke: ${COLORS.white};
    }
`
