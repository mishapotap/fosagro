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
import { CourseProgressStore, SoundStore, ModalStore } from "../../../store"
import { Click2 } from "../../../assets/audio"

import Nav from "./Nav"
import Content from "./Content"
import Media from "./Media"
import NewSectWindow from "./NewSectWindow"

// TODO сделать плавное переключение получше?

// TODO сделать чтобы анимация включалась и без аудио?

function CourseContent({ setIds, onDisappear }) {
    const pageData = CourseProgressStore.activePageData
    const location = useLocation()

    const [key, setKey] = useState(1)
    const [audioPlaying, setAudioPlaying] = useState(false)
    const [videoPlaying, setVideoPlaying] = useState(false)
    const [makeSliderAutoplay, setMakeSliderAutoplay] = useState(false)

    const [sliderDelay, setSliderDelay] = useState(5000)

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

    const [isVisible, _setIsVisible] = useState(null)
    const intObserver = useRef(null)
    const sectChanged = useRef(true)

    const showWhenVisible = useRef(false)
    const [sectWindowExited, setSectWindowExited] = useState(false)

    const clickSound = new Audio(Click2)

    function setIsVisible(val) {
        _setIsVisible(val)
        isVisibleRef.current = val
    }

    function makeObserve(el, rootMargin = "-50%") {
        if (el) {
            intObserver.current = new IntersectionObserver(
                ([entry]) => {
                    setIsVisible(entry.isIntersecting)
                },
                { rootMargin }
            )
            intObserver.current.observe(el)
        }
    }

    function unObserve(el) {
        if (el) {
            if (intObserver.current) {
                intObserver.current.unobserve(el)
                setIsVisible(false)
            }
        }
    }

    function setMediaDelay() {
        clearTimeout(videoTmId.current)
        clearTimeout(audioTmId.current)
        clearTimeout(animTmId.current)

        if (!sectChanged.current) {
            if (audioSrc) {
                audioTmId.current = setTimeout(() => {
                    setAudioPlaying(true)
                    sectChanged.current = false
                }, 1000)
            }

            if (isCircleSlider) {
                setTimeout(() => {
                    setMakeSliderAutoplay(true)
                    sectChanged.current = false
                }, 1000)
            }

            if (isVideo) {
                videoTmId.current = setTimeout(() => {
                    if (isVisibleRef.current) {
                        setVideoPlaying(true)
                    } else {
                        showWhenVisible.current = true
                    }
                    sectChanged.current = false
                }, 1000)
            }

            if (isAnimation) {
                animTmId.current = setTimeout(() => {
                    if (isVisibleRef.current) {
                        setPauseAnim(false)
                    } else {
                        showWhenVisible.current = true
                    }
                    sectChanged.current = false
                }, 1000)
            }
        }
    }

    function playMedia() {
        sectChanged.current = false

        if (isAnimation) {
            if (isVisibleRef.current) {
                setPauseAnim(false)
            } else {
                showWhenVisible.current = true
            }
        }

        if (audioSrc) {
            setAudioPlaying(true)
        }

        if (isCircleSlider) {
            setMakeSliderAutoplay(true)
        }

        if (isVideo) {
            if (isVisibleRef.current) {
                setVideoPlaying(true)
            } else {
                showWhenVisible.current = true
            }
            sectChanged.current = false
        }
    }

    const {
        media: { type: mediaType },
    } = pageData

    const isVisibleRef = useRef(null)
    const isVideo = mediaType === "video"
    const isAnimation = mediaType === "animation"
    const isCircleSlider = mediaType === "circleSlider"

    function handleAudioLoaded({target}) {
        const { duration } = target
        const delay = duration * 1000 / 3
        setSliderDelay(delay)
    }

    useEffect(() => {
        if (sectWindowExited) {
            playMedia()
            setSectWindowExited(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectWindowExited])

    useEffect(() => {
        if (isVisible) {
            const video = document.querySelector("video")
            if (showWhenVisible.current) {
                showWhenVisible.current = false

                if (video && video.paused) {
                    video.play()
                }

                if (isAnimation && pauseAnim) {
                    setPauseAnim(false)
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible])

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        if (ModalStore.isVisible.mail || ModalStore.isVisible.menu) {
            setAudioPlaying(false)
            setVideoPlaying(false)
            setPauseAnim(true)
            onAudioPause()
        } else {
            setAudioPlaying(true)
            setVideoPlaying(true)
            setPauseAnim(false)
            onAudioPlay()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalStore.isVisible.mail, ModalStore.isVisible.menu])

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

        const medColRef = mediaColRef.current

        return () => {
            if (audioTmId.current) clearTimeout(audioTmId.current)
            if (videoTmId.current) clearTimeout(videoTmId.current)
            if (animTmId.current) clearTimeout(animTmId.current)
            unObserve(medColRef)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setTimeout(() => {
            sectChanged.current = true
        }, 50);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CourseProgressStore.activeSectId])

    useEffect(() => {
        didAudioEnded.current = false
        wasFirstPlay.current = false

        unObserve(mediaColRef.current)

        setTimeout(() => {
            makeObserve(mediaColRef.current)
        }, 50)

        setTimeout(() => {
            setMediaDelay()
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
        setVideoPlaying(false)

        sectChanged.current = false
        clearTimeout(videoTmId.current)
        clearTimeout(audioTmId.current)
        clearTimeout(animTmId.current)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    function stopMedia() {
        const audio = document.querySelector(".audio-player audio")
        const video = document.querySelector(".audio-player video")

        if (audio) audio.pause()
        if (video) video.pause()
    }

    function handleBackClick() {
        stopMedia()
        setLeftSlide(true)
        setRightSlide(false)
        setShowSlide(false)
        clickSound.play()
    }

    function handleNextClick(e) {
        if (CourseProgressStore.isSlideBeforeTest) {
            e.preventDefault()
            onDisappear()
        } else {
            setLeftSlide(false)
            setRightSlide(true)
            setShowSlide(false)
            clickSound.play()
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
                            onLoaded={handleAudioLoaded}
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
                        makeSliderAutoplay={makeSliderAutoplay}
                        key={key}
                        restartAnim={restartAnim}
                        sliderDelay={sliderDelay}
                    />
                </MediaColumn>
            </CSSTransition>
            <NewSectWindow onExited={() => setSectWindowExited(true)}/>
        </Columns>
    )
}

export default observer(CourseContent)

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
        padding-bottom: 20px;
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
        animation-timing-function: ease-in-out;

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
