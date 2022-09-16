import React from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../../constants"

// основной блок с контентом, в котором находится весь контент в левой половине слайда
// (не включая заголовок)
export default function ContentBlock({ children, color, className}) {
    return (
        <Container className={className}>
            <Decor color={color}/>
            <Content className="block-content">{children}</Content>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

const Content = styled.div``

const Decor = styled.div`
    flex-shrink: 0;
    width: 3.9vw;
    height: 2px;
    margin-top: 3px;
    margin-right: 20px;

    background-color: ${({ color }) => color || COLORS.orange};

    @media ${DEVICE.laptopM} {
        width: 2.7vw;
        margin-right: 10px;
    }

    @media ${DEVICE.laptopS} {
        display: none;
    }
`
