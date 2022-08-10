import React from "react"
import styled from "styled-components"
import * as routes from "./constants/routes"
import "./assets/fonts/index.css"
import { SpaceShip, MksIcon, Introduction } from "./assets/images"
import {
    TimelineCircle,
    SendButton,
    NextQuestionButton,
    BackToChapterButton,
    Timer,
} from "./components/atoms"
import { Flower, Close, Arrow, Next, Prev, Headphones } from "./assets/svg"
import { COLORS, FONTS } from "./constants"
import { HeadphonesIcon, TimerIcon } from "./assets/svg/static"

function App() {
    return (
        <Wrapper>
            <Title>Hello World!</Title>
            <Subtitle>Start</Subtitle>
            <span>{routes.HOME}</span>
            <TimelineCircle
                text="Введение"
                description="Краткая выжимка в несколько слов о чем будет в разделе"
                time="50 сек"
                color="rgba(218, 170, 0)"
                image={Introduction}
                rotate={45}
            />
            <img src={SpaceShip} alt="spaceship" />
            <img src={MksIcon} alt="mksicon" />
            <img src={HeadphonesIcon} alt="mksicon" />
            <img src={TimerIcon} alt="mksicon" />
            <Testy style={FONTS.modalTitleWhite}>gfsjgfjdgbfsdjg</Testy>
            <SendButton text="Отправить" />
            <Flower />
            <Close color={COLORS.orange} />
            <Close color={COLORS.blue} />
            <Arrow color={COLORS.orange} />
            <Next />
            <Prev color={COLORS.orange} />
            <NextQuestionButton />
            <BackToChapterButton />
            <Headphones />
            <Timer />
        </Wrapper>
    )
}

const Testy = styled.div``

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
