import React from "react"
import styled from "styled-components"
import * as routes from "./constants/routes"
import { SpaceShip, MksIcon } from "./assets/images"
import { TimelineCircle, Button, Timer } from "./components/atoms"
import { Flower } from "./assets/svg"

function App() {
    return (
        <Wrapper>
            <Title>Hello World!</Title>
            <Subtitle>Start</Subtitle>
            <span>{routes.HOME}</span>
            <TimelineCircle text="Суть концепции устойчивого развития" />
            <Button text="Отправить" />
            <img src={SpaceShip} alt="spaceship" />
            <img src={MksIcon} alt="mksicon" />
            <Flower />
            <Timer />
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
