import React from "react"
import styled from "styled-components"
import { COLORS } from "../../../constants"

export default function Play({ width = '20px' }) {
    return (
        <Wrapper
            width={width}
            viewBox="0 0 20 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19 9.76795C20.3333 10.5378 20.3333 12.4623 19 13.2321L3.25 22.3253C1.91667 23.0951 0.250001 22.1329 0.250001 20.5933L0.250002 2.40673C0.250002 0.867131 1.91667 -0.0951184 3.25 0.674682L19 9.76795Z" />
        </Wrapper>
    )
}
const Wrapper = styled.svg`
    cursor: pointer;
    fill: ${COLORS.white};
`
