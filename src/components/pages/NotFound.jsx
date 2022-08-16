import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import * as routes from "../../constants/routes"
import "../../assets/fonts/index.css"
import {
    SendButton,
    NextQuestionButton,
    BackToChapterButton,
    Timer,
    StepProgressBar,
} from "../atoms"
import {
    Flower,
    Close,
    Arrow,
    Next,
    Prev,
    Headphones,
    Tree,
} from "../../assets/svg"
import { COLORS, FONTS } from "../../constants"
import { HeadphonesIcon, TimerIcon } from "../../assets/svg/static"

export default function NotFound() {
    return (
        <Container>
            <Text>СТРАНИЦА НЕ НАЙДЕНА! ЭТО 404 ОШИБКА</Text>
            <Wrapper>
                <Title>Hello World!</Title>
                <Subtitle>Start</Subtitle>
                <span>{routes.HOME}</span>
                <img src={HeadphonesIcon} alt="mksicon" />
                <img src={TimerIcon} alt="mksicon" />
                <Testy style={FONTS.modalTitleWhite}>gfsjgfjdgbfsdjg</Testy>
                <Link to="home">
                    <SendButton text="Перейти в home" />
                </Link>
                <Link to="menu">
                    <SendButton text="Перейти в меню" />
                </Link>
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
                <StepProgressBar width="608" slidesAmount="7" />
                <StepProgressBar width="608" slidesAmount="5" />
                <StepProgressBar width="608" slidesAmount="8" />
                <StepProgressBar width="608" slidesAmount="3" />
                <Tree />
            </Wrapper>
        </Container>
    )
}

const Container = styled.div``
const Text = styled.span``
const Testy = styled.div``

const Title = styled.h1`
    font-size: calc(10px + 2vmin);
    text-align: center;
    color: palevioletred;
`

const Wrapper = styled.section`
    padding: 4em;
    background: #99c4e7;
`

const Subtitle = styled.div`
    font-size: calc(10px + 2vmin);
`
