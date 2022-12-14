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

function CourseContent({ setIds, onDisappear }) {
    const pageData = CourseProgressStore.activePageData
    const location = useLocation()

    const [key, setKey] = useState(1)

    const autoPausedRef = useRef(false)

    const [sliderDelay, setSliderDelay] = useState(5000)

    const audioColRef = useRef(null)
    const contentColRef = useRef(null)
    const mediaColRef = useRef(null)
    const titleColRef = useRef(null)
    const navColRef = useRef(null)

    const isFirstRender = useRef(true)
    const colsRef = useRef(null)

    const audioTmId = useRef(null)
    const videoTmId = useRef(null)
    const animTmId = useRef(null)

    const didAudioEnded = useRef(null)
    const wasFirstPlay = useRef(false)

    const [showSlide, setShowSlide] = useState(true)
    const [showNav, setShowNav] = useState(true)
    const [makeNavAnim, setMakeNavAnim] = useState(true)

    useEffect(() => {
        // if (showSlide && document.documentElement.clientWidth < 1024) {
        //     setMakeNavAnim(true)
        // } else {
        //     setShowNav(false)
        // }
        if (showSlide) {
            if (makeNavAnim) setShowNav(true)
        } else if (makeNavAnim) {
            setShowNav(false)
        }
    }, [showSlide])

    const [leftSlide, setLeftSlide] = useState(false)
    const [rightSlide, setRightSlide] = useState(false)
    const [animateNextBtn, setAnimateNextBtn] = useState(false)

    const [showPausedBtn, setShowPausedBtn] = useState(false)

    const [isNavBtnsDisabled, setIsNavBtnsDisabled] = useState(false)

    const [pauseAnim, setPauseAnim] = useState(true)
    const [restartAnim, _setRestartAnim] = useState(false)

    const [isVisible, _setIsVisible] = useState(null)
    const intObserver = useRef(null)
    const sectChanged = useRef(true)

    const showWhenVisible = useRef(false)
    const [sectWindowExited, setSectWindowExited] = useState(false)

    const [makeAudioEl, setMakeAudioEl] = useState(false)
    const [makeVideoEl, setMakeVideoEl] = useState(false)

    const clickSound = new Audio(Click2)

    function setIsVisible(val) {
        _setIsVisible(val)
        isVisibleRef.current = val
    }

    function makeObserve(el, rootMargin = "-20%") {
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

    // ???????????????????????? ?????????? ?????????? ???????????????? (??????????, ?????????? ???? ???????????????????? ?????????? ????????????)
    function setMediaDelay() {
        clearTimeouts()

        if (!sectChanged.current) {
            if (isAudioRef.current) {
                audioTmId.current = setTimeout(() => {
                    setTrue("audio")
                    sectChanged.current = false
                }, 1000)
            }

            if (isCircleSliderRef.current) {
                setTimeout(() => {
                    sectChanged.current = false
                }, 1000)
            }

            if (isVideoRef.current) {
                videoTmId.current = setTimeout(() => {
                    if (isVisibleRef.current) {
                        setTrue("video")
                    } else {
                        showWhenVisible.current = true
                    }
                    sectChanged.current = false
                }, 1000)
            }

            if (isAnimationRef.current || isCircleSliderRef.current) {
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

    // ???????????????????????? ???????? ?????????? ?????? ?????????? ????????????
    // (???????? ??????????/????????????????/?????????????? ?????? ?????????????? ??????????????????, ???? ?????? ??????????????????????????, ?????????? ???????????????? ?? ??????)
    function playMedia() {
        sectChanged.current = false

        if (isAudioRef.current) {
            setTrue("audio")
        }

        if (isVisibleRef.current) {
            if (isAnimationRef.current || isCircleSliderRef.current) {
                setPauseAnim(false)
            }

            if (isVideoRef.current) {
                setTrue("video")
            }
        } else {
            showWhenVisible.current = true
        }
    }

    const {
        media: { type: mediaType },
    } = pageData

    const isVisibleRef = useRef(null)

    const isAnimationRef = useRef(false)
    const isCircleSliderRef = useRef(false)
    const isVideoRef = useRef(false)
    const isAudioRef = useRef(false)

    useEffect(() => {
        switch (mediaType) {
            case "video":
                isVideoRef.current = true
                isAnimationRef.current = false
                isCircleSliderRef.current = false
                break

            case "animation":
                isAnimationRef.current = true
                isVideoRef.current = false
                isCircleSliderRef.current = false
                break

            case "circleSlider":
                isCircleSliderRef.current = true
                isVideoRef.current = false
                isAnimationRef.current = false
                break

            default:
                isCircleSliderRef.current = false
                isAnimationRef.current = false
                isVideoRef.current = false
                break
        }
    }, [mediaType])

    const { title } = pageData

    const [audioSrc, setAudioSrc] = useState("")

    useEffect(() => {
        setAudioSrc(pageData.audioSrc)

        if (pageData.audioSrc) {
            isAudioRef.current = true
        } else {
            isAudioRef.current = false
        }
    }, [pageData.audioSrc])

    useEffect(() => {
        if (ModalStore.userGoExtLink) {
            setTrue("paused-btn")
            ModalStore.setUserGoExtLink(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalStore.userGoExtLink])

    // ???????????????????? ???????????????? ?????? ???????????????? ????????????????, ?????????? ?????? ?????????????????????????????? ?????????? ??????????
    function handleAudioLoaded({ target }) {
        const { duration } = target
        const delay = (duration * 1000) / 3
        setSliderDelay(delay)
    }

    // ?????????? ???????????????????????? ???????????????????? ???????? ???????????????? ??????????
    useEffect(() => {
        if (sectWindowExited) {
            playMedia()
            setSectWindowExited(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectWindowExited])

    // ?????? ?????????????? - ???????????????? ?????????? ??????????, ?????????? ?????? ?????????????? ?? ?????????????? ??????????????????
    useEffect(() => {
        if (isVisible) {
            const video = document.querySelector(".video-player video")
            if (showWhenVisible.current) {
                showWhenVisible.current = false

                if (video && video.paused) {
                    video.play()
                }

                if (
                    (isAnimationRef.current || isCircleSliderRef.current) &&
                    pauseAnim
                ) {
                    setPauseAnim(false)
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible])

    const setFalse = (type) => {
        if (type === "audio") {
            const audio = document.querySelector(".audio-player audio")
            if (audio && !audio.paused) {
                audio.pause()
            }
        } else if (type === "video") {
            const video = document.querySelector(".video-player video")
            if (video && !video.paused) {
                video.pause()
            }
        } else if (type === "paused-btn") {
            setShowPausedBtn(true)

            setTimeout(() => {
                setShowPausedBtn(false)
            }, 0)
        }
    }

    const setTrue = (type) => {
        // ???????? true ?? ???????? ???????????????? ???? true, ???? ???? ???????????? ??????????
        // ???? ?????? ?????? ?????? ?????? ???????? ?????? ?? ???????????
        if (type === "audio") {
            const audio = document.querySelector(".audio-player audio")
            if (audio && audio.paused) {
                audio.play()
            }
        } else if (type === "video") {
            const video = document.querySelector(".video-player video")
            if (video && video.paused) {
                video.play()
            }
        } else if (type === "paused-btn") {
            setShowPausedBtn(false)

            setTimeout(() => {
                setShowPausedBtn(true)
            }, 0)
        }
    }

    function makePause() {
        checkAutoPaused()
        if (isVideoRef.current) {
            setFalse("video")
        }
        if (isAnimationRef.current || isCircleSliderRef.current)
            setPauseAnim(true)
        if (isAudioRef.current) {
            setFalse("audio")
        }
    }

    function makePlay() {
        if (isVideoRef.current) {
            setTrue("video")
        }
        if (isAnimationRef.current || isCircleSliderRef.current)
            setPauseAnim(false)
        if (isAudioRef.current) {
            setTrue("audio")
        }
    }

    function checkAutoPaused() {
        const audio = document.querySelector(".audio-player audio")

        if (isAudioRef.current) {
            if (audio && !audio.paused) {
                autoPausedRef.current = true
            } else {
                autoPausedRef.current = false
            }
        } else if (isVideoRef.current) {
            const video = document.querySelector(".video-player video")
            if (video && !video.paused) {
                autoPausedRef.current = true
            } else {
                autoPausedRef.current = false
            }
        }
    }

    // ??????????????????/?????????????????????????????? ?????????? ?????? ???????????????? ?????????????????? ????????
    useEffect(() => {
        if (
            ModalStore.isVisible.mail ||
            ModalStore.isVisible.menu ||
            ModalStore.isVisible.extLinks
        ) {
            makePause()
        } else if (autoPausedRef.current) {
            if (!ModalStore.dontPlayOnClose) {
                setTimeout(() => {
                    makePlay()
                }, 200)
                autoPausedRef.current = false
            }
            autoPausedRef.current = false
            ModalStore.setDontPlayOnClose(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        ModalStore.isVisible.menu,
        ModalStore.isVisible.mail,
        ModalStore.isVisible.extLinks,
    ])

    function setRestartAnim() {
        _setRestartAnim(true)

        setTimeout(() => {
            _setRestartAnim(false)
        }, 200)
    }

    // ?????????????????????? ??????????????????
    function clearTimeouts() {
        if (audioTmId.current) clearTimeout(audioTmId.current)
        if (videoTmId.current) clearTimeout(videoTmId.current)
        if (animTmId.current) clearTimeout(animTmId.current)
    }

    useEffect(() => {
        CourseProgressStore.setIsTestActive(false)
        CourseProgressStore.setIsTimelinePageActive(false)
        SoundStore.setIsPlayingSound(false)

        const medColRef = mediaColRef.current
        if (document.documentElement.clientWidth < 1024) {
            setMakeNavAnim(true)
        }

        return () => {
            clearTimeouts()
            unObserve(medColRef)
            SoundStore.resetContentAudioEl()
            SoundStore.resetContentVideoEl()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setTimeout(() => {
            sectChanged.current = true
        }, 50)
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

        makePause()
        setAnimateNextBtn(false)

        sectChanged.current = false
        autoPausedRef.current = false
        clearTimeouts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    function pauseMedia() {
        setFalse("video")
        setFalse("audio")
    }

    useEffect(() => {
        if (SoundStore.makeAudioPlayerOutEl) {
            setMakeAudioEl(true)
        } else {
            setMakeAudioEl(false)
        }

        if (SoundStore.makeVideoPlayerOutEl) {
            setMakeVideoEl(true)
        } else {
            setMakeVideoEl(false)
        }

        SoundStore.setMakeAudioPlayerOutEl(false)
        SoundStore.setMakeVideoPlayerOutEl(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key])

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
        pauseMedia()
        setFalse("paused-btn")
        setIsNavBtnsDisabled(true)

        CourseProgressStore.setNextPrevMediaEl("next")
        CourseProgressStore.setNewSectAudioFromContent("next")
    }

    function handleBackClick() {
        setRightSlide(false)
        setLeftSlide(true)
        setShowSlide(false)

        pauseMedia()
        clickSound.play()
        setFalse("paused-btn")
        setIsNavBtnsDisabled(true)

        CourseProgressStore.setNextPrevMediaEl("prev")
        CourseProgressStore.setNewSectAudioFromContent("prev")
    }

    function handleExited() {
        setIds()
        CourseProgressStore.setVisitedPage()

        const slideContent = document.querySelector(".slide-content")
        if (slideContent) {
            slideContent.scrollTop = 0
        }
        setTimeout(() => {
            setKey((prevKey) => prevKey + 1)
            setShowSlide(true)
        }, 5)
    }

    function handleEntered() {
        // setTimeout(() => {

            setLeftSlide(false)
            setRightSlide(false)
            setIsNavBtnsDisabled(false)
        // }, 10);
    }

    function onAudioPlay() {
        setFalse("paused-btn")

        if (isVisibleRef.current || isCircleSliderRef.current)
            setPauseAnim(false)
        if (!wasFirstPlay.current) {
            wasFirstPlay.current = true
        }

        if (didAudioEnded.current) {
            // ?????????????????? ???????????????? ????????????
            if (isAnimationRef.current || isCircleSliderRef.current)
                setRestartAnim(true)
            didAudioEnded.current = false
        }
    }

    function onAudioPause() {
        if (wasFirstPlay.current) {
            setPauseAnim(true)
        }
    }

    function onAudioEnded() {
        didAudioEnded.current = true
        setPauseAnim(false)
        setAnimateNextBtn(true)
    }

    function onVideoEnded() {
        setAnimateNextBtn(true)
    }

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
                classNames="slide"
                nodeRef={audioColRef}
            >
                <AudioColumn ref={audioColRef} className="slide" key={key}>
                    {audioSrc && (
                        <StyledAudioPlayer
                            src={audioSrc}
                            isPlaying={false}
                            onPlay={onAudioPlay}
                            onPause={onAudioPause}
                            onEnded={onAudioEnded}
                            onLoaded={handleAudioLoaded}
                            showPausedBtn={showPausedBtn}
                            makePausedBtn
                            onPausedBtnClick={() => makePlay()}
                            makeOutsideAudioEl={makeAudioEl}
                            outsideAudioEl={SoundStore.contentAudioEl}
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
                <ContentColumn
                    ref={contentColRef}
                    className="slide content-col"
                >
                    <Content />
                </ContentColumn>
            </CSSTransition>

            <CSSTransition
                // in={showSlide}
                in={showNav}
                timeout={500}
                classNames="slide"
                nodeRef={navColRef}
            >
                <NavColumn className="nav-col slide" ref={navColRef}>
                    <Nav
                        onNextClick={handleNextClick}
                        onBackClick={handleBackClick}
                        animateNextBtn={animateNextBtn}
                        isBtnsDisabled={isNavBtnsDisabled}
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
                        videoPlaying={false}
                        key={key}
                        restartAnim={restartAnim}
                        sliderDelay={sliderDelay}
                        makeOutsideVideoEl={makeVideoEl}
                        outsideVideoEl={SoundStore.contentVideoEl}
                        onVideoEnded={onVideoEnded}
                    />
                </MediaColumn>
            </CSSTransition>

            <NewSectWindow onExited={() => setSectWindowExited(true)} />
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
        margin-top: 0;
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
        padding-bottom: 30px;
    }
`

const MediaColumn = styled.div`
    grid-area: 1 / 3 / 4 / 4;
    overflow: hidden;
    padding-top: 2.5vh;

    @media ${DEVICE.laptopS} {
        padding-top: 20px;
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

        .audio-player {
            margin-bottom: 300px;
        }
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

const slideLeftExit = keyframes`
    0% {
        transform: none;
        opacity: 1;
    }
    100% {
        transform: translate(25vw);
        opacity: 0;
    }
`

const slideLeftEnter = keyframes`
    0% {
        transform:  translate(-25vw);
        opacity: 0;
    }
    100% {
        transform: none;
        opacity: 1;
    }
`

const Columns = styled.div`
    display: grid;
    grid-template: 18vh auto 105px / 7% 40% 53%;
    height: 100%;
    @media ${DEVICE.laptopM} {
        grid-template: 16.6vh auto 105px / 7% 40% 53%;
    }
    @media ${DEVICE.laptopS} {
        grid-template: repeat(5, auto) / 100%;
    }
    .slide {
        animation-duration: 0.5s;
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;

        &.no-anim {
            animation: none !important;
        }
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
            animation-name: ${slideLeftEnter}!important;
        }
        .slide-exit-active {
            animation-name: ${slideLeftExit}!important;
        }
        @media ${DEVICE.laptopS} {
            .slide-enter-active {
                animation-name: ${appear}!important;
            }
            .slide-exit-active {
                animation-name: ${appear}!important;
                animation-direction: reverse;
            }
            .nav-col {
                animation-name: ${appear}!important;
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
        opacity: 0 !important;
    }
    .title {
        max-width: 43vw;
        height: 14vh;
        @media ${DEVICE.laptopM} {
            max-width: 34vw;
        }
        @media ${DEVICE.laptop} {
            max-width: 410px;
        }
        @media ${DEVICE.laptopS} {
            max-width: none;
            height: auto;
        }
    }
`