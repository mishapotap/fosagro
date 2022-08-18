import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../../constants"
import { DEVICE } from "../../constants/theme"

export default function ArrowLeft({ color }) {
    return (
        <Wrapper
            color={color}
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Circle cx="26" cy="26" r="25.25" stroke-width="1.5" />
            <Path d="M11 27.0297L18.5048 31.3516L18.4952 22.6913L11 27.0297ZM37.9992 26.25L17.7492 26.2723L17.7508 27.7723L38.0008 27.75L37.9992 26.25Z" />
        </Wrapper>
    )
}
const Path = styled.path``
const Circle = styled.circle``
const Wrapper = styled.svg`
    cursor: pointer;
    transition: all 0.3s;

    @media ${DEVICE.mobileS} {
        width: 40px;
    }

    @media ${DEVICE.laptopL} {
        width: 52px;
    }

    ${({ color }) =>
        color &&
        css`
            ${Circle} {
                stroke: ${color};
                stroke-width: 1.5;
            }

            ${Path} {
                fill: ${color};
            }

            &:hover {
                ${Circle} {
                    fill: ${color};
                }

                ${Path} {
                    transition: all 0.3s;
                    fill: ${COLORS.white};
                }
            }
        `}
`
