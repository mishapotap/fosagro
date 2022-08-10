import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../../constants"

export default function Arrow({ color }) {
    return (
        <Wrapper
            color={color}
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Circle
                cx="26"
                cy="26"
                r="25.25"
                stroke={color}
                stroke-width="1.5"
            />
            <Path
                d="M39 27L31.5 22.6699V31.3301L39 27ZM12 27.75H32.25V26.25H12V27.75Z"
                fill={color}
            />
        </Wrapper>
    )
}
const Path = styled.path``
const Circle = styled.circle``
const Wrapper = styled.svg`
    cursor: pointer;
    transition: all 0.3s;
    ${({ color }) =>
        color &&
        css`
            &:hover {
                ${Circle} {
                    transition: all 0.3s;
                    fill: ${color};
                }
                ${Path} {
                    transition: all 0.3s;
                    fill: ${COLORS.white};
                }
            }
        `}
`
