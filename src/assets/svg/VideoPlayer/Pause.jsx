import React from "react"
import styled from "styled-components"
import { COLORS } from "../../../constants"

export default function Pause({ width = "22px", color = COLORS.white, className = "" }) {
    return (
        <Wrapper
            width={width}
            color={color}
            className={className}
            viewBox="0 0 22 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M6.74822 25.5807C6.74822 27.8371 5.93755 29.6663 3.37279 29.6663C0.808031 29.6663 0 27.8371 0 25.5807V4.41868C0 2.16227 0.808031 0.333008 3.37279 0.333008C5.93755 0.333008 6.74822 2.16227 6.74822 4.41868V25.5807ZM21.3333 25.5807C21.3333 27.8371 20.604 29.6663 18.0395 29.6663C15.4747 29.6663 14.7457 27.8371 14.7457 25.5807V4.41868C14.7457 2.16227 15.4747 0.333008 18.0395 0.333008C20.6043 0.333008 21.3333 2.16227 21.3333 4.41868V25.5807Z" />
        </Wrapper>
    )
}
const Wrapper = styled.svg`
    cursor: pointer;
    path {
        fill: ${({ color }) => color};
    }
`
