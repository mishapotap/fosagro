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
    Slider,
    VideoPlayer,
    // eslint-disable-next-line import/named
    InstructionModal,
    DocsLink,
    Modal,
    CurvedModal,
    Layout,
    ReviewModal,
    IntroModal,
    AudioPlayer,
    ObjectSlider,
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
    Ecology,
    AnimateScience,
    AnimateMap,
    AnimateEarth,
    AnimateChart,
    AnimateGlobalContract,
    AnimateLine
} from "../../assets/svg"
import { COLORS, FONTS } from "../../constants"
import { HeadphonesIcon } from "../../assets/svg/static"
import { TepkVideo } from "../../assets/video"
import { SpeakerAudio } from "../../assets/audio"
import { testData, introModalData } from "../../data"

export default function Test() {
    const [isInstrOpened, setIsInstrOpened] = useState(false)
    const [isCurvedModalOpened, setIsCurvedModalOpened] = useState(false)
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [isReviewModalOpened, setIsReviewModalOpened] = useState(false)
    const [isIntroModalOpened, setIsIntroModalOpened] = useState(false)

    return (
        <Layout page="section">
            <AnimateLine color={COLORS.red}/>
            <div style={{marginBottom: "150px"}}/>
            <VideoPlayer src={TepkVideo} />
            <div style={{marginBottom: "150px"}}/>
            <ObjectSlider color={COLORS.orange}/>
            <ObjectSlider color={COLORS.red} type="fosagro"/>
            <div style={{marginBottom: "150px"}}/>
            <AnimateGlobalContract/>
            <AnimateChart/>
            <AnimateEarth/>
            <Ecology />
            <div style={{marginBottom: "150px"}}/>
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
            {/* <Tree /> */}
            {/* <InteractiveCircle color={COLORS.green_circle} /> */}
            <div style={{marginBottom: "150px"}}/>
            <AnimateScience />
            <div style={{marginBottom: "150px"}}/>
            <AnimateMap />
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
