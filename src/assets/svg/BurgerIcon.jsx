import React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"

export default function BurgerIcon({ colored }) {
    return (
        <Wrapper
            colored={colored}
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M21 16C19.3431 16 18 17.3431 18 19C18 20.6569 19.3431 22 21 22C22.6569 22 24 20.6569 24 19C24 17.3431 22.6569 16 21 16Z" />
            <rect width="24" height="4" rx="2" />
            <rect x="11" y="8" width="13" height="4" rx="2" />
        </Wrapper>
    )
}

const Wrapper = styled.svg`
    fill: ${({ colored }) => (colored ? COLORS.blue : COLORS.white)};
`
