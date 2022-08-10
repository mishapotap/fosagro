import React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"

export default function Prev({ color = COLORS.blue }) {
    return (
        <Wrapper
            color={color}
            width="62"
            height="54"
            viewBox="0 0 62 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <PathOne
                d="M61 45.7617C56.3284 50.2448 49.986 53 43 53C28.6406 53 17 41.3594 17 27C17 12.6406 28.6406 1 43 1C49.986 1 56.3284 3.75522 61 8.23829"
                stroke={color}
                strokeLinecap="round"
            />
            <PathTwo
                d="M27 26.25C27.4142 26.25 27.75 26.5858 27.75 27C27.75 27.4142 27.4142 27.75 27 27.75V26.25ZM0 27L7.5 22.6699V31.3301L0 27ZM27 27.75H6.75V26.25H27V27.75Z"
                fill={color}
            />
        </Wrapper>
    )
}
const PathOne = styled.path``
const PathTwo = styled.path``
const Wrapper = styled.svg``
