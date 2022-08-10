import React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"

export default function Next({ color = COLORS.blue }) {
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
                d="M1 45.7617C5.67158 50.2448 12.014 53 19 53C33.3594 53 45 41.3594 45 27C45 12.6406 33.3594 1 19 1C12.014 1 5.67158 3.75522 1 8.23829"
                stroke={color}
                strokeLinecap="round"
            />
            <PathTwo
                d="M35 26.25C34.5858 26.25 34.25 26.5858 34.25 27C34.25 27.4142 34.5858 27.75 35 27.75V26.25ZM62 27L54.5 22.6699V31.3301L62 27ZM35 27.75H55.25V26.25H35V27.75Z"
                fill={color}
            />
        </Wrapper>
    )
}
const PathOne = styled.path``
const PathTwo = styled.path``
const Wrapper = styled.svg``
