import React from "react"
import styled, { css } from "styled-components"

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
            position: absolute;
            top: 100px;
            left: 125px;
            max-width: 970px;
            width: 100%;
        }
    `}
`

const OverflowInteractive = styled.div`
    max-width: 1095px;
    max-height: 985px;
    height: 100%;
    overflow: hidden;
`

