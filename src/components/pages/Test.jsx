/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import * as routes from "../../constants/routes"
import "../../assets/fonts/index.css"
import {
    SendButton,
    NextButton,
    PrevButton,
    Timer,
    InstructionModal,
    DocsLink,
    Modal,
    CurvedModal,
    Layout,
    ReviewModal,
    IntroModal,
} from "../atoms"

import { StepProgressBar } from "../molecules";
import {
    Flower,
    Close,
    ArrowLeft,
    ArrowRight,
    Next,
    Prev,
    Headphones,
    Tree,
    InteractiveCircle,
    AnimateLine,
    Waves
} from "../../assets/svg"
import { AnimateDegrees } from "../../assets/Course5/Topic1"
import { AnimateGas } from "../../assets/Course5/Topic2/Point4"
import { COLORS, FONTS } from "../../constants"
import { HeadphonesIcon } from "../../assets/svg/static"
import { introModalData } from "../../data"
import AnimateHumanEffect from "../../assets/Course5/Topic2/Point3/AnimateHumanEffect"

export default function Test() {
    const [isInstrOpened, setIsInstrOpened] = useState(false)
    const [isCurvedModalOpened, setIsCurvedModalOpened] = useState(false)
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [isReviewModalOpened, setIsReviewModalOpened] = useState(false)
    const [isIntroModalOpened, setIsIntroModalOpened] = useState(false)

    return (
        <Layout page="section">
            <AnimateDegrees/>
            <AnimateHumanEffect/>
            <AnimateLine color={COLORS.red}/>
            <Waves color={COLORS.red}/>
            <AnimateGas/>
            <Text>СТРАНИЦА НЕ НАЙДЕНА! ЭТО 404 ОШИБКА</Text>
            <Title>Hello World!</Title>
            <Subtitle>Start</Subtitle>

            <button onClick={() => setIsModalOpened(true)}>
                Открыть modal
            </button>
            <Modal
                isOpen={isModalOpened}
                onClose={() => setIsModalOpened(false)}
            >
                Проверка Modal
            </Modal>

            <button onClick={() => setIsReviewModalOpened(true)}>
                Открыть ReviewModal
            </button>
            <ReviewModal
                isOpen={isReviewModalOpened}
                onClose={() => setIsReviewModalOpened(false)}
            />

            <button onClick={() => setIsCurvedModalOpened(true)}>
                Открыть curved modal
            </button>
            <CurvedModal
                isOpen={isCurvedModalOpened}
                onClose={() => setIsCurvedModalOpened(false)}
            >
                Проверка CurvedModal
            </CurvedModal>

            <button
                style={{
                    fontSize: "18px",
                    margin: "20px 0",
                }}
                onClick={() => setIsInstrOpened(true)}
            >
                Открыть инструкцию
            </button>
            <InstructionModal
                isOpen={isInstrOpened}
                onClose={() => setIsInstrOpened(false)}
            />

            <button
                style={{
                    fontSize: "18px",
                    margin: "20px 0",
                }}
                onClick={() => setIsIntroModalOpened(true)}
            >
                Открыть введение
            </button>
            <IntroModal
                isOpen={isIntroModalOpened}
                onClose={() => setIsIntroModalOpened(false)}
                items={introModalData.introModal1}
            />

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
            <NextButton />
            <PrevButton />
            <Headphones />
            <Timer />
            <StepProgressBar slidesAmount="2" color={COLORS.green_light}/>
            <StepProgressBar slidesAmount="3" type="canyons" color={COLORS.brown_light}/>
            <StepProgressBar slidesAmount="4" type="rocks" />
            <StepProgressBar slidesAmount="5" type="wave"/>
            <StepProgressBar slidesAmount="3" type="flowers"/>
            <StepProgressBar slidesAmount="5" type="tropics" color={COLORS.green}/>
            <StepProgressBar slidesAmount="4" type="desert"/>
            <StepProgressBar slidesAmount="3" type="planeWaves"/>
            <StepProgressBar slidesAmount="4" type="mountains"/>
            <StepProgressBar slidesAmount="4" type="ground"/>
            <Tree />
            <InteractiveCircle color={COLORS.green_circle} />

            {/* <VideoPlayer src={TepkVideo} /> */}
        </Layout>
    )
}

const Container = styled.div`
    /* padding: 20px; */
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
