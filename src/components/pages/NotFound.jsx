/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react"
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
    Slider,
    VideoPlayer,
    Instruction,
    DocsLink, 
    Modal,
    CourseAnimateScience,
    Header,
} from "../atoms"
import {
    Flower,
    Close,
    ArrowLeft,
    ArrowRight,
    Next,
    Prev,
    Headphones,
    Tree,
    SliderCircleM,
    SliderCircleS,
    InteractiveCircle,
    Ecology
} from "../../assets/svg"
import { COLORS, FONTS } from "../../constants"
import { HeadphonesIcon } from "../../assets/svg/static"
import { TepkVideo } from "../../assets/video"
import { testData } from "../../data"

export default function NotFound() {
    const [isInstrModalOpened, setIsInstrModalOpened] = useState(false)

    return (
        <Container>
            {/* примеры как настроить хэдэр */}
            {/* по умолчанию - только с белым лого (как в меню и инструкции) */}
            {/* <Header /> */}

            {/* с белым лого и выбором языка (как на главной) */}
            {/* <Header language /> */}

            {/* с белыми лого и кнопкой Курс "Устойчивое развитие"
            (как на странице раздела с таймлайном, там где кружочки на волнах) */}
            {/* <Header course/> */}

            {/* с цветными лого, кнопкой Курс "Устойчивое развитие", и заголовком секции
            (как внутри темы раздела, где слайды с текстом, картинками, анимацией и пр) */}
            {/* <Header
                colored
                course
                sectTitle="Суть концепции устойчивого развития"
                sectTitleColor={COLORS.green_light}
            /> */}

            <Text>СТРАНИЦА НЕ НАЙДЕНА! ЭТО 404 ОШИБКА</Text>
            <Title>Hello World!</Title>
            <Subtitle>Start</Subtitle>
            <button
                style={{
                    fontSize: "18px",
                    margin: "20px 0",
                }}
                onClick={() => setIsInstrModalOpened(true)}
            >
                Открыть инструкцию
            </button>
            <Modal isOpen={isInstrModalOpened}>
                <Instruction onClose={() => setIsInstrModalOpened(false)} />
            </Modal>
            <DocsLink />
            <span>{routes.HOME}</span>
            <img src={HeadphonesIcon} alt="mksicon" />
            <Testy style={FONTS.modalTitleWhite}>gfsjgfjdgbfsdjg</Testy>
            <Link to={routes.HOME}>
                <SendButton text="Перейти в home" />
            </Link>
            <Link to={routes.MENU}>
                <SendButton text="Перейти в меню" />
            </Link>
            <Flower />
            <Close color={COLORS.orange} />
            <Close color={COLORS.blue} />
            <ArrowLeft color={COLORS.orange} />
            <ArrowRight color={COLORS.blue} />
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
            <InteractiveCircle color={COLORS.green_circle}/>
            <Slider size="m" data={testData} sliderColor={COLORS.green_circle}>
                <SliderCircleM />
            </Slider>
            <Slider size="s" sliderColor={COLORS.orange} data={testData}>
                <SliderCircleS />
            </Slider>
            <VideoPlayer src={TepkVideo} />
            <CourseAnimateScience/>
            <Ecology/>
        </Container>
    )
}

const Container = styled.div`
    padding: 20px;
`
const Text = styled.span``
const Testy = styled.div``

const Title = styled.h1`
    font-size: calc(10px + 2vmin);
    text-align: center;
    color: palevioletred;
`

const Subtitle = styled.div`
    font-size: calc(10px + 2vmin);
`
