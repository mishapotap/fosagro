import React from "react"
import styled from "styled-components"

function App() {
    return (
        <Wrapper>
            <Title>Hello World!</Title>
            <Subtitle>Start</Subtitle>
        </Wrapper>
    )
}

const Title = styled.h1`
    font-size: calc(10px + 2vmin);
    text-align: center;
    color: palevioletred;
`

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`

const Subtitle = styled.div`
    font-size: calc(10px + 2vmin);
`

export default App
