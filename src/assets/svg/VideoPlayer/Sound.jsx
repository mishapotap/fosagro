import React from "react"
import styled from "styled-components"
import { COLORS } from "../../../constants"

export default function Sound({width, height}) {
    return (
        <Wrapper
            width={width}
            height={height}
            viewBox="0 0 25 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M3.13476 15.8233L7.76555 15.8233L15.3264 21.3706C16.1239 21.917 16.7055 21.1503 16.7496 20.6833L16.7496 0.882338C16.7804 0.358015 16.0446 -0.346956 15.2823 0.19499L7.71709 5.69378L3.13477 5.69377C1.39436 5.69377 0.0196679 7.11694 0.0196678 8.85734L0.0196674 12.6598C0.0152613 14.4046 1.43842 15.8233 3.13476 15.8233ZM14.9166 18.8944L8.91114 14.5324L8.91114 7.07728L14.9166 2.67121L14.9166 18.8944ZM1.76007 8.9014C1.76007 8.12152 2.31083 7.5267 3.04224 7.5267L7.07821 7.5267L7.07821 14.0829L3.04664 14.0829C2.35929 14.0829 1.76447 13.4881 1.76447 12.7083L1.76447 8.9014L1.76007 8.9014Z" />
            <path
                d="M21.5596 5.20374C24.3156 10.0452 23.9802 12.4309 21.5596 16.3552"
                id="arc"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <defs>
                <clipPath id="clip0_657_5">
                    <rect
                        width="21.5595"
                        height="21.5595"
                        transform="translate(21.5596 21.5594) rotate(-180)"
                    />
                </clipPath>
            </defs>
        </Wrapper>
    )
}
const Wrapper = styled.svg`
    cursor: pointer;

    path,
    rect {
        fill: ${COLORS.white};
    }

    #arc {
        stroke: ${COLORS.white};
        fill: none;
    }
`
