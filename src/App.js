import React from "react"
import styled from "styled-components"
import * as routes from "./constants/routes"
import "./assets/fonts/index.css"
import { SpaceShip, MksIcon } from "./assets/images"
import {
    SendButton,
    NextQuestionButton,
    BackToChapterButton,
    Timer,
} from "./components/atoms"
import {
    MailButton,
    CourseProgressButton,
    SoundButton,
    CourseStepButton,
    CourseStepPoint,
    MenuButton,
} from "./components/molecules"
import { Flower, Close, Arrow, Next, Prev, Headphones } from "./assets/svg"
import { COLORS, FONTS } from "./constants"
import { HeadphonesIcon, TimerIcon } from "./assets/svg/static"
// eslint-disable-next-line import/named
import { menuButtonData, courseStepButtonData1 } from "./data"

function App() {
    return (
        <Wrapper>
            <Title>Hello World!</Title>
            <Subtitle>Start</Subtitle>
            <span>{routes.HOME}</span>
            <ButtonContainer>
                {courseStepButtonData1.map((item) => (
                    <CourseStepButton
                        key={item.rotate}
                        title={item.title}
                        description={item.description}
                        time={item.time}
                        bgColor={item.bgColor}
                        image={item.image}
                        rotate={item.rotate}
                    />
                ))}
            </ButtonContainer>
            {/*  */}
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
            <CourseProgressButton />
            <MailButton />
            <SoundButton />
            <CourseStepPoint color="rgba(218, 170, 0)" />
            <ButtonContainer>
                {menuButtonData.map((item) => (
                    <MenuButton
                        key={item.index}
                        index={item.index}
                        text={item.text}
                        bgColor={item.bgColor}
                        bgAnimateColor={item.bgAnimateColor}
                        rotate={item.rotate}
                    />
                ))}
            </ButtonContainer>
        </Wrapper>
    )
}
const ButtonContainer = styled.div`
    display: flex;
`

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

export default App
