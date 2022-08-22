import React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"

export default function InstructionIcon({
    fill = COLORS.white,
    stroke = COLORS.blue,
}) {
    return (
        <Wrapper
            width="8"
            height="27"
            viewBox="0 0 8 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M3.06525 0C4.69646 0 6.01575 1.31929 6.01575 2.9505C6.01575 4.58171 4.69646 5.901 3.06525 5.901C1.43404 5.901 0.114748 4.58171 0.114748 2.9505C0.114748 1.31929 1.43404 0 3.06525 0ZM5.75496 9.83391C5.75496 9.78873 5.71833 9.7521 5.67314 9.7521H1.9278H1.75394C0.782369 9.7521 0 10.5396 0 11.506C0 12.4776 0.787482 13.26 1.75394 13.26H1.9278V23.487H0.999999C0.447715 23.487 0 23.9347 0 24.487V26C0 26.5523 0.447715 27 1 27H6.67253C7.22482 27 7.67253 26.5523 7.67253 26V24.487C7.67253 23.9347 7.22482 23.487 6.67253 23.487H5.75496V9.83391Z"
                fill={fill}
                stroke={stroke}
            />
        </Wrapper>
    )
}
const Path = styled.path`
    transition: all 0.3;
`
const Wrapper = styled.svg``
