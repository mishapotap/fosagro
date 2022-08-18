import React from "react"
import styled, { css } from "styled-components"
import { DEVICE } from "../../constants"

import { InteractiveCircle } from "../../assets/svg"

export default function InteractiveContainer({children, type, color}) {
    return(
        <Container type={type}>
            <OverflowInteractive>
                <InteractiveCircle color={ color }/>
            </OverflowInteractive>
            <Content>
                {React.cloneElement(children, {sliderColor: color})}
            </Content>
        </Container>
    )
}

const Content = styled.div``

const Container = styled.div`
    position: relative;
    ${(props) => props.type === "slider" && css`
        ${ Content } {
            width: 100%;
            @media ${DEVICE.mobileL} {
                position: absolute;
                top: 5.2vw;
                left: 6.5vw;
                max-width: 50.5vw;
            }
        }
    `}
`

const OverflowInteractive = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    @media ${DEVICE.mobileL} {
        display: block;
        max-width: 57vw;
        max-height: 51.3vw;
    }
`

