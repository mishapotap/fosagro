import React from "react"
import styled from "styled-components"
import { Spinner } from "../../assets/svg"

export default function Loader({
    bgColor = "transparent",
    spinnerSize,
    spinnerColor,
}) {
    return (
        <Container bgColor={bgColor}>
            <Spinner
                width={spinnerSize}
                color={spinnerColor}
            />
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 10;
    background-color: ${({bgColor}) => bgColor};
`
