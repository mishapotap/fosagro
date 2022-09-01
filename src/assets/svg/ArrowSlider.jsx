import React from "react"
import styled, { css } from "styled-components"

export default function ArrowSlider({ color, position = "left" }) {
    return(
        <SVG position={position}
            width="58" height="58" 
            viewBox="0 0 58 58" fill="none">
            <g clipPath="url(#clip0_264_30756)">
                <path d="M40.596 3.91827L40.596 3.91829L22.0097 28.6994L21.7847 28.9994L22.0097 29.2994L40.5959 54.0816L40.596 54.0817C41.3039 55.0255 41.1125 56.3647 40.1687 57.0725L40.1686 57.0726C39.784 57.3611 39.335 57.5 38.889 57.5C38.238 57.5 37.5973 57.2046 37.1778 56.6452L17.4052 30.2811L17.4052 30.2811C16.8355 29.5215 16.8355 28.477 17.4052 27.7175L17.0052 27.4175L17.4052 27.7175L37.1778 1.35472C37.1778 1.35471 37.1778 1.3547 37.1778 1.35469C37.8859 0.410703 39.2247 0.219571 40.1687 0.927412L40.596 3.91827ZM40.596 3.91827C41.3039 2.97448 41.1127 1.63546 40.1687 0.927441L40.596 3.91827Z" fill={color} stroke="#F6FAFD"/>
            </g>
            <defs>
                <clipPath id="clip0_264_30756">
                    <rect width="58" height="58" fill="white" transform="matrix(-1 0 0 1 58 0)"/>
                </clipPath>
            </defs>
        </SVG>
    )
}

const SVG = styled.svg`
    ${(props) =>
        props.position === "right" &&
        css`
            transform: rotate(180deg);
        `}
`