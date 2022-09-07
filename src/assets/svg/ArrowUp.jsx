import React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"

export default function ArrowUp({ className }) {
    return (
        <Wrapper
            width="10"
            height="28"
            className={className}
            viewBox="0 0 10 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.75 27C5.75 27.4142 5.41421 27.75 5 27.75C4.58579 27.75 4.25 27.4142 4.25 27L5.75 27ZM5 0L9.33013 7.5L0.669874 7.5L5 0ZM4.25 27L4.25 6.75L5.75 6.75L5.75 27L4.25 27Z"
                fill={COLORS.blue}
            />
        </Wrapper>
    )
}

const Wrapper = styled.svg``
