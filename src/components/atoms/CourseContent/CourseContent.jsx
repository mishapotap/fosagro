/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router"
import styled, { keyframes } from "styled-components"
import { CSSTransition } from "react-transition-group"
import { observer } from "mobx-react-lite"

import { Title } from "../Content"
import { DEVICE } from "../../../constants"
import AudioPlayer from "../AudioPlayer"
import { CourseProgressStore, SoundStore } from "../../../store"

import Nav from "./Nav"
import Content from "./Content"
import Media from "./Media"

// TODO сделать чтобы плавно появлялись элементы
// (чтобы прошлое состояние не было видно)

// TODO сделать плавное переключение получше?

// TODO сделать чтобы переключение слайдера было по времени с аудио?
// (добавить доп поле в данных?)

function CoursePage({ setIds, onDisappear }) {
    const pageData = CourseProgressStore.activePageData
    const location = useLocation()

    const [key, setKey] = useState(1)
    const [audioPlaying, setAudioPlaying] = useState(false)
    const [videoPlaying, setVideoPlaying] = useState(false)

    const audioColRef = useRef(null)
    const contentColRef = useRef(null)
    const mediaColRef = useRef(null)
    const titleColRef = useRef(null)
    const isFirstRender = useRef(true)
    const colsRef = useRef(null)

    const audioTmId = useRef(null)
    const videoTmId = useRef(null)
    const animTmId = useRef(null)

    const didAudioEnded = useRef(null)
    const wasFirstPlay = useRef(false)

    const navColRef = useRef(null)

    const [showSlide, setShowSlide] = useState(true)
    const [leftSlide, setLeftSlide] = useState(false)
    const [rightSlide, setRightSlide] = useState(false)

    const [pauseAnim, setPauseAnim] = useState(true)
    const [restartAnim, _setRestartAnim] = useState(false)

    const [isVisible, _setIsVisible] = useState(false)
    const intObserver = useRef(null)

    function setIsVisible(val) {
        _setIsVisible(val)
        isVisibleRef.current = val
    }

    function makeObserve(el, rootMargin = "-50%") {
        intObserver.current = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { rootMargin }
        )
        intObserver.current.observe(el)
    }

    function unObserve(el) {
        if (intObserver.current) {
            intObserver.current.unobserve(el)
            setIsVisible(false)
        }
    }

    const {
        media: { type: mediaType },
    } = pageData

    const isVisibleRef = useRef(null)
    const isVideo = mediaType === "video"
    const isAnimation = mediaType === "animation"

    useEffect(() => {
        if (isVisible) {
            const video = document.querySelector("video")
            if (video && video.paused) {
                video.play()
            }

            if (isAnimation && pauseAnim) {
                setPauseAnim(false)
            }
        }
    }, [isVisible])

    function setRestartAnim() {
        _setRestartAnim(true)

        setTimeout(() => {
            _setRestartAnim(false)
        }, 200)
    }

    useEffect(() => {
        CourseProgressStore.setIsTestActive(false)
        CourseProgressStore.setIsTimelinePageActive(false)
        SoundStore.setIsPlayingSound(false)

        animTmId.current = setTimeout(() => {
            const audioEl = document.querySelector(".audio-player audio")

            if (
                (!audioSrc || (audioEl && audioEl.paused)) &&
                isVisibleRef.current
            ) {
                setPauseAnim(false)
            }
        }, 2000)

        return () => {
            if (audioTmId.current) clearTimeout(audioTmId.current)
            if (videoTmId.current) clearTimeout(videoTmId.current)
            if (animTmId.current) clearTimeout(animTmId.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        didAudioEnded.current = false
        wasFirstPlay.current = false

        unObserve(mediaColRef.current)

        setTimeout(() => {
            makeObserve(mediaColRef.current)
        }, 100)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CourseProgressStore.activePageData])

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            setIds()
        } else if (!leftSlide && !rightSlide) {
            setIds()
            setKey(key + 1)
        }

        setPauseAnim(true)

        setAudioPlaying(false)

        audioTmId.current = setTimeout(() => {
            setAudioPlaying(true)
        }, 1500)

        setVideoPlaying(false)

        // услеют ли тут новые данные продгрухиться?
        if (isVideo) {
            videoTmId.current = setTimeout(() => {
                if (isVisibleRef.current) {
                    setVideoPlaying(true)
                }
            }, 1600)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    function stopMedia() {
        const audio = document.querySelector("audio")
        const video = document.querySelector("video")

        if (audio) audio.pause()
        if (video) video.pause()
    }

    function handleBackClick() {
        stopMedia()
        setLeftSlide(true)
        setRightSlide(false)
        setShowSlide(false)
    }

    function handleNextClick(e) {
        if (CourseProgressStore.isSlideBeforeTest) {
            e.preventDefault()
            onDisappear()
        } else {
            setLeftSlide(false)
            setRightSlide(true)
            setShowSlide(false)
        }
        stopMedia()
    }

    function handleExited() {
        setKey(key + 1)
        setIds()
        CourseProgressStore.setVisitedPage()
        setShowSlide(true)

        const slideContent = document.querySelector(".slide-content")
        if (slideContent) {
            slideContent.scrollTop = 0
        }
    }

    function handleEntered() {
        setLeftSlide(false)
        setRightSlide(false)
    }

    function onAudioPlay() {
        if (isVisibleRef.current) setPauseAnim(false)

        if (!wasFirstPlay.current) wasFirstPlay.current = true

        if (didAudioEnded.current) {
            // запустить анимацию заново
            if (isAnimation) setRestartAnim(true)
        }
    }

    function onAudioPause() {
        if (wasFirstPlay.current && !leftSlide && !rightSlide) {
            setPauseAnim(true)
        }
    }

    function onAudioEnded() {
        didAudioEnded.current = true
        setPauseAnim(false)
    }

    const { audioSrc, title } = pageData

    return (
        <Columns
            className={`${leftSlide && "left-slide"} ${
                rightSlide && "right-slide"
            }`}
            ref={colsRef}
        >
            <CSSTransition
                in={showSlide}
                timeout={500}
                appear
                classNames="slide"
                nodeRef={audioColRef}
            >
                <AudioColumn ref={audioColRef} className="slide" key={key}>
                    {audioSrc && (
                        <StyledAudioPlayer
                            src={audioSrc}
                            isPlaying={audioPlaying}
                            onPlay={onAudioPlay}
                            onPause={onAudioPause}
                            onEnded={onAudioEnded}
                        />
                    )}
                </AudioColumn>
            </CSSTransition>
            <CSSTransition
                in={showSlide}
                timeout={500}
                classNames="slide"
                nodeRef={titleColRef}
            >
                <TitleColumn ref={titleColRef} className="slide">
                    <Title color={CourseProgressStore.activeSectColor}>
                        {title}
                    </Title>
                </TitleColumn>
            </CSSTransition>
            <CSSTransition
                in={showSlide}
                timeout={500}
                classNames="slide"
                nodeRef={contentColRef}
                onExited={handleExited}
                onEntered={handleEntered}
            >
                <ContentColumn ref={contentColRef} className="slide">
                    <Content />
                </ContentColumn>
            </CSSTransition>
            <CSSTransition
                in={showSlide}
                timeout={500}
                classNames="slide"
                nodeRef={navColRef}
            >
                <NavColumn className="nav-col slide" ref={navColRef}>
                    <Nav
                        onNextClick={handleNextClick}
                        onBackClick={handleBackClick}
                    />
                </NavColumn>
            </CSSTransition>

            <CSSTransition
                in={showSlide}
                timeout={500}
                classNames="slide"
                nodeRef={mediaColRef}
            >
                <MediaColumn ref={mediaColRef} className="slide">
                    <Media
                        pauseAnim={pauseAnim}
                        videoPlaying={videoPlaying}
                        key={key}
                        restartAnim={restartAnim}
                    />
                </MediaColumn>
            </CSSTransition>
        </Columns>
    )
}

export default observer(CoursePage)

const StyledAudioPlayer = styled(AudioPlayer)`
    padding-left: 2.2vw;
    margin-top: -1.2vh;

    .player {
        position: absolute;
        left: 0;
    }

    @media ${DEVICE.laptopS} {
        margin-top: -300px;
        margin-bottom: 300px;
    }
`

const ContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: 2 / 2 / 3 / 3;

    max-height: 100%;
    padding-right: 5px;
    overflow: hidden;
    height: 100%;
    padding-bottom: 20px;

    .bubble-container {
        display: flex;
        flex-direction: column;
    }

    .label {
        margin-bottom: 2.3vh;

        @media ${DEVICE.laptopS} {
            margin-bottom: 23px;
        }
    }

    @media ${DEVICE.laptopS} {
        grid-area: 2 / 1 / 3 / 2;
        overflow: visible;
        padding-right: 0;
        margin-bottom: 45px;
    }
`

const NavColumn = styled.div`
    grid-area: 3 / 1 / 4 / 3;
    padding-left: 2vw;

    @media ${DEVICE.laptopS} {
        grid-area: 4 / 1 / 5 / 2;
        padding-left: 0;
    }
`

const MediaColumn = styled.div`
    grid-area: 1 / 3 / 4 / 4;
    overflow: hidden;
    padding-top: 20px;

    @media ${DEVICE.laptopS} {
        grid-area: 3 / 1 / 4 / 2;
        overflow: visible;
        margin-bottom: 35px;
    }
`

const AudioColumn = styled.div`
    grid-area: 2 / 1 / 3 / 2;

    @media ${DEVICE.laptopS} {
        grid-area: 5 / 1 / 6 / 2;
        margin-left: -15px;
        margin-bottom: 300px;
    }
`

const TitleColumn = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    padding-top: 7vh;

    @media ${DEVICE.laptopM} {
        padding-top: 5vh;
    }

    @media ${DEVICE.laptopS} {
        grid-area: 1 / 1 / 2 / 2;
        margin-bottom: 30px;
        padding-top: 0;
    }
`

const slideRightEnter = keyframes`
    0% {
        transform: translate(25vw);
        opacity: 0;
    }

    100% {
        transform: none;
        opacity: 1;
    }
`

const appear = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const slideRightExit = keyframes`
    0% {
        transform: none;
        opacity: 1;
    }

    100% {
        transform:  translate(-25vw);
        opacity: 0;
    }
`

const Columns = styled.div`
    display: grid;
    grid-template: 22vh auto 105px / 7% 40% 53%;
    height: 100%;

    @media ${DEVICE.laptopM} {
        grid-template: 18vh auto 105px / 7% 40% 53%;
    }

    @media ${DEVICE.laptopS} {
        grid-template: repeat(5, auto) / 100%;
    }

    .slide {
        animation-duration: 0.5s;
        animation-fill-mode: both;

        @media ${DEVICE.laptopS} {
            animation-duration: 0.5s;
        }
    }

    .nav-col {
        animation: none;
    }

    &.right-slide {
        .slide-enter-active {
            animation-name: ${slideRightEnter};
        }

        .slide-exit-active {
            animation-name: ${slideRightExit};
        }

        @media ${DEVICE.laptopS} {
            .slide-enter-active {
                animation-name: ${appear};
            }

            .slide-exit-active {
                animation-name: ${appear};
                animation-direction: reverse;
            }

            .nav-col {
                animation-name: ${appear};
                animation-direction: reverse;
                animation-duration: 0.5s;
            }
        }
    }

    &.left-slide {
        .slide-enter-active {
            animation-name: ${slideRightExit};
            animation-direction: reverse;
        }

        .slide-exit-active {
            animation-name: ${slideRightEnter};
            animation-direction: reverse;
        }

        @media ${DEVICE.laptopS} {
            .slide-enter-active {
                animation-name: ${appear};
                animation-direction: reverse;
            }

            .slide-exit-active {
                animation-name: ${appear};
                animation-direction: reverse;
            }

            .nav-col {
                animation-name: ${appear};
                animation-direction: reverse;
                animation-duration: 0.5s;
            }
        }
    }

    .slide {
        opacity: 1;
    }

    .slide-enter-done {
        opacity: 1;
    }

    .slide-exit-done {
        opacity: 0;
    }

    .title {
        max-width: 43vw;
        height: 14vh;

        @media ${DEVICE.laptopM} {
            max-width: 34vw;
        }

        @media ${DEVICE.laptop} {
            max-width: 370px;
        }

        @media ${DEVICE.laptopS} {
            max-width: none;
            height: auto;
        }
    }
`
