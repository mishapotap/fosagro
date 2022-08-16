import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../../constants"

export default function Close({ color }) {
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
                strokeWidth="1.5"
            />
            <Path
                d="M16.4418 36L25.5002 26.92L34.5587 36L34.9785 35.5802L25.9193 26.4998L34.9785 17.4192L34.5587 17L25.5002 26.0797L16.4418 17L16.022 17.4192L25.0811 26.4998L16.022 35.5802L16.4418 36Z"
                fill={color}
                stroke={color}
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
                    stroke: ${color === COLORS.white ? COLORS.blue : COLORS.white};
                }
            }
        `}
`
