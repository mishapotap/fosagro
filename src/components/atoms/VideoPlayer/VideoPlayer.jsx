/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../../constants"
import VideoControls from "./VideoControls"
import Loader from "../Loader"
import { formatTime, fullscreen, getElWindowPos } from "../../../utils"

export default function VideoPlayer({
    data: { src },
    width = "914px",
    loop = false,
    poster = null,
    isPlaying = true,
    className,
}) {
    const [isMuted, _setIsMuted] = useState(false)
    const [isFullscreen, _setIsFullscreen] = useState(false)
    const [isLoaded, _setIsLoaded] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isStart, setIsStart] = useState(true)
    const [isMob, setIsMob] = useState(false)

    const [isBigBtnShown, setIsBigBtnShown] = useState(true)
    const [isControlsShown, setIsControlsShown] = useState(true)
    const [isBottomControlsShown, setIsBottomControlsShown] = useState(true)

    const [progressTime, _setProgressTime] = useState(0)
    const [fullTime, _setFullTime] = useState(0)
    const [tooltipTime, setTooltipTime] = useState(0)
    const [progressTimePer, setProgressTimePer] = useState(0)

    const [formattedTooltipTime, setFormattedTooltipTime] = useState("00:00")
    const [formattedProgressTime, setFormattedProgressTime] = useState("00:00")
    const [formattedFullTime, setFormattedFullTime] = useState("00:00")

    const [videoContStyle, setVideoContStyle] = useState({})
    const startVideoStyle = useRef(null)

    const videoRef = useRef(null)
    const videoPlayerContRef = useRef(null)
    const intervalId = useRef(null)
    const mouseMoveTimeoutId = useRef(null)
    const isPlayingLocal = useRef(false)

    const isFullscreenRef = useRef(false)
    const isLoadedRef = useRef(false)
    const progressTimeRef = useRef(false)
    const fullTimeRef = useRef(0)
    const isMutedRef = useRef(false)

    const enteredMobFullscr = useRef(false)

    const errorText = "Произошла ошибка при загрузке видео"

    function setIsFullscreen(val) {
        isFullscreenRef.current = val
        _setIsFullscreen(val)
    }

    function setIsLoaded(val) {
        isLoadedRef.current = val
        _setIsLoaded(val)
    }

    function setProgressTime(val) {
        progressTimeRef.current = val
        _setProgressTime(val)
    }

    function setFullTime(val) {
        fullTimeRef.current = val
        _setFullTime(val)
    }

    function setIsMuted(val) {
        isMutedRef.current = val
        _setIsMuted(val)
    }

    // устанавливаем форматированное время длительности фидео при изменении всего времени видео
    useEffect(() => {
        if (fullTime) {
            const formatted = formatTime(fullTime)
            setFormattedFullTime(formatted)
        }
    }, [fullTime])

    useEffect(() => {
        isPlayingLocal.current = isPlaying
    }, [isPlaying])

    useEffect(() => {
        if (isLoaded) {
            // eslint-disable-next-line no-unused-expressions
            isPlaying ? play() : pause()
        }
    }, [isPlaying, isLoaded])

    // устанавливаем форматированное время для tooltip при изменении времени tooltip
    useEffect(() => {
        if (tooltipTime) {
            const formatted = formatTime(tooltipTime)
            setFormattedTooltipTime(formatted)
        }
    }, [tooltipTime])

    // устанавливаем форматированное время прогресса видео при изменении времени прогресса видео
    useEffect(() => {
        const formatted = formatTime(progressTime)
        setFormattedProgressTime(formatted)

        const per = (progressTime / fullTime) * 100
        setProgressTimePer(per)
    }, [progressTime, fullTime])

    // добавляем и удаляем обработчик keydown, определяем устройство по размеру экрана
    useEffect(() => {
        document.addEventListener("keydown", handleKeydown)
        setValIsMob()
        window.addEventListener("resize", setValIsMob)

        return () => {
            clearInterval(intervalId.current)
            document.removeEventListener("keydown", handleKeydown)
            window.removeEventListener("resize", setValIsMob)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function setValIsMob() {
        if (document.documentElement.clientWidth < 1024) {
            setIsMob(true)
        } else {
            setIsMob(false)
        }
    }

    // записываем стили для VideoContainer перед началом анимации fullscreen для пк
    function setVideoAnimStartStyle() {
        const videoWidth = videoPlayerContRef.current.offsetWidth
        const videoHeight = videoPlayerContRef.current.offsetHeight

        const { left, top } = getElWindowPos(videoPlayerContRef.current)

        const startStyle = {
            width: `${videoWidth}px`,
            height: `${videoHeight}px`,
            left: `${left}px`,
            top: `${top}px`,
            position: "fixed",
            zIndex: 200,
        }

        startVideoStyle.current = startStyle
    }

    // делаем анимацию перехода в полноэкранный режим для VideoContainer
    // (чтобы сделать fullscreen, нужно использовать position fixed, но это плохо анимируется
    // с обычной position, поэтому я сначала делаю VideoContainer fixed, а после анимирую)
    function makeFull() {
        setVideoAnimStartStyle()
        setVideoContStyle(startVideoStyle.current)

        const fullScrStyle = {
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
            borderRadius: 0,
            zIndex: 200,
        }

        document.body.classList.add("lock")

        setTimeout(() => {
            videoPlayerContRef.current.style.transition = "0.5s"
            setVideoContStyle(fullScrStyle)
        }, 10)
    }

    // анимация выхода из полноэкранного режима на пк
    function exitFull() {
        function handleTrend({ target }) {
            if (target !== this) return

            document.body.classList.remove("lock")
            setVideoContStyle({})

            startVideoStyle.current = null
            videoPlayerContRef.current.style.transition = ""
            videoPlayerContRef.current.removeEventListener(
                "transitionend",
                handleTrend
            )
        }

        videoPlayerContRef.current.addEventListener(
            "transitionend",
            handleTrend
        )
        setVideoContStyle(startVideoStyle.current)
    }

    // устанавливаем прогресс видео
    function handleTimeChange() {
        if (videoRef.current) {
            const curTime = videoRef.current.currentTime
            setProgressTime(curTime)
        } else {
            handleVideoPause()
        }
    }

    // обработка события play видео
    function handleVideoPlay() {
        isPlayingLocal.current = true
        if (isStart) {
            setIsStart(false)
        }

        if (!isBottomControlsShown) setIsBottomControlsShown(true)
        setIsBigBtnShown(false)

        handleMouseMove()
        intervalId.current = setInterval(() => {
            handleTimeChange()
        }, 50)
    }

    // обработка события pause видео
    function handleVideoPause() {
        isPlayingLocal.current = false
        setIsBigBtnShown(true)
        clearInterval(intervalId.current)
        if (!isControlsShown) setIsControlsShown(true)
        if (!isBottomControlsShown) setIsBottomControlsShown(true)
    }

    // обработка события end видео
    function handleVideoEnd() {
        setIsStart(true)
        if (!isBottomControlsShown) setIsBottomControlsShown(true)
        setProgressTime(0)
        if (isFullscreen) toggleFullscreen()
    }

    // при загрузке видео устанавливаем его длительность и убираем лоадер
    function handleVideoLoad() {
        const fullVideoTime = videoRef.current.duration
        if (fullVideoTime) setFullTime(fullVideoTime)
        setIsLoading(false)
        setTimeout(() => {
            setIsLoaded(true)
        }, 100)
    }

    // получение прогресса видео в секундах
    // (в зависимости от отступа события от левого края элемента(TimelineWrapper))
    function getProgressSec(offset, tlWidth) {
        const progressPer = (offset / tlWidth) * 100
        const progressSec = (fullTime * progressPer) / 100
        return progressSec
    }

    // переключение к нужному моменту видео при клике на линии прогресса
    function handleTimelineClick({ nativeEvent: { offsetX } }, timelineWidth) {
        const progressSec =
            offsetX < 0 ? 0 : getProgressSec(offsetX, timelineWidth)
        setProgressTime(progressSec)
        videoRef.current.currentTime = progressSec
    }

    // обаботка ошибка загрузки видео
    function handleVideoError() {
        setIsError(true)
        setIsLoading(false)
    }

    // управление видеоплеером с помощью клавиш
    // в обработчике событий используем рефы, чтобы получать актуальное значение
    function handleKeydown({ key, target, code }) {
        if (!isFullscreenRef.current) return

        if (key === " " && target === document.body) {
            togglePlay()
        } else if (key === "ArrowRight") {
            let newTime = progressTimeRef.current + 3
            if (newTime > fullTimeRef.current) {
                newTime = fullTimeRef.current
            }

            setProgressTime(newTime)
            videoRef.current.currentTime = newTime
        } else if (key === "ArrowLeft") {
            let newTime = progressTimeRef.current - 3
            if (newTime < 0) {
                newTime = 0
            }

            setProgressTime(newTime)
            videoRef.current.currentTime = newTime
        } else if (code === "KeyM") {
            toggleMuted()
        } else if (key === "Escape") {
            exitFull()
            setIsFullscreen(false)
        }
    }

    // показываем подсказку со временем при движении мыши по линии прогресса видео
    function handleTimelineMouseOver(
        { nativeEvent: { offsetX } },
        timelineWidth
    ) {
        const timeTooltip =
            offsetX < 0 ? 0 : getProgressSec(offsetX, timelineWidth)
        setTooltipTime(timeTooltip)
    }

    // исчезновение контролсов при отстутствии движения мыши
    function handleMouseMove() {
        if (!isControlsShown) {
            setIsControlsShown(true)
            setIsBottomControlsShown(true)
        }
        if (mouseMoveTimeoutId.current) {
            clearTimeout(mouseMoveTimeoutId.current)
            mouseMoveTimeoutId.current = null
        }

        // используем ref, чтобы было актуальное значение в settimeout
        if (isPlayingLocal.current && !videoRef.current.paused) {
            const timeoutId = setTimeout(() => {
                if (isControlsShown && isPlayingLocal.current) {
                    setIsControlsShown(false)
                    setIsBottomControlsShown(false)
                }
            }, 2000)

            mouseMoveTimeoutId.current = timeoutId
        }
    }

    // остановка видео
    function pause() {
        videoRef.current.pause()
    }

    // запуск видео
    function play() {
        videoRef.current.play()
    }

    // остановка/запуск видео
    function togglePlay() {
        if (!isLoadedRef.current) return

        if (isPlayingLocal.current && !videoRef.current.paused) {
            pause()
        } else {
            play()
        }
    }

    // выключение/включение звука видео
    function toggleMuted() {
        if (isMutedRef.current) {
            videoRef.current.muted = false
            setIsMuted(false)
        } else {
            videoRef.current.muted = true
            setIsMuted(true)
        }
    }

    // смена полноэкранного режима для мобилок
    function toggleFullscreenMob() {
        function goFullFunc() {
            setIsFullscreen(true)
            enteredMobFullscr.current = true
            window.screen.orientation.lock("landscape-primary")
        }

        function exitFullFunc() {
            enteredMobFullscr.current = false
            window.screen.orientation.unlock()
            setIsFullscreen(false)
        }

        fullscreen(videoPlayerContRef.current, goFullFunc, exitFullFunc)
    }

    // смена полноэкранного режима для пк
    function toggleFullscreenDesktop() {
        if (isFullscreen) {
            exitFull()
            setIsFullscreen(false)
        } else {
            makeFull()
            setIsFullscreen(true)
            const togglePlayBtn =
                videoPlayerContRef.current.querySelector("button")
            togglePlayBtn.focus()
        }
    }

    // смена полноэкранного режима
    function toggleFullscreen() {
        if (isMob || enteredMobFullscr.current) {
            toggleFullscreenMob()
        } else {
            toggleFullscreenDesktop()
        }
    }

    function toggleControls() {
        if (isControlsShown) {
            setIsControlsShown(false)
        } else {
            setIsControlsShown(true)
        }
    }

    function handleVideoContClick() {
        if (isMob) {
            if (isStart) {
                togglePlay()
            } else {
                toggleControls()
            }
        } else {
            togglePlay()
        }
    }

    return (
        <Container
            className={`${isFullscreen ? "fullscreen" : ""} ${
                className || ""
            } video-player`}
            maxWidth={width}
        >
            <VideoPlayerContainer
                onClick={handleVideoContClick}
                style={videoContStyle}
                ref={videoPlayerContRef}
                onMouseMove={handleMouseMove}
                className={`${isLoaded ? "loaded" : ""} ${
                    isError ? "error" : ""
                }`}
            >
                {isLoading && <Loader spinnerSize="22%" />}
                {isError ? (
                    <VideoError>
                        <VideoErrorText>{errorText}</VideoErrorText>
                    </VideoError>
                ) : (
                    <>
                        <VideoControls
                            isPlaying={isPlayingLocal.current}
                            isMuted={isMuted}
                            isLoaded={isLoaded}
                            isFullscreen={isFullscreen}
                            isBigBtnShown={isBigBtnShown}
                            isControlsShown={isControlsShown}
                            isBottomControlsShown={isBottomControlsShown}
                            isStart={isStart}
                            onToggleMuted={toggleMuted}
                            onToggleFullscreen={toggleFullscreen}
                            onTogglePlay={togglePlay}
                            onPlay={play}
                            onPause={pause}
                            onTimelineClick={handleTimelineClick}
                            onTimelineMouseOver={handleTimelineMouseOver}
                            onCloseFullscreen={toggleFullscreen}
                            progressTime={formattedProgressTime}
                            fullTime={formattedFullTime}
                            tooltipTime={formattedTooltipTime}
                            progressTimePer={progressTimePer}
                        />
                        <Video
                            src={src}
                            loop={loop}
                            poster={poster}
                            playsInline
                            onPause={handleVideoPause}
                            onPlay={handleVideoPlay}
                            preload="metadata"
                            onLoadedMetadata={handleVideoLoad}
                            onEnded={handleVideoEnd}
                            onError={handleVideoError}
                            ref={videoRef}
                            className={isLoaded && "loaded"}
                        />
                    </>
                )}
            </VideoPlayerContainer>
        </Container>
    )
}

const Video = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 100%;
    width: 100%;

    opacity: 0;
    transition: 0.4s;
`

const VideoError = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    background-color: ${COLORS.white};
`

const VideoErrorText = styled.div`
    font-size: 1.09vw;
    color: ${COLORS.blue};

    @media ${DEVICE.laptopS} {
        font-size: 16px;
    }
`

const VideoPlayerContainer = styled.div`
    overflow: hidden;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    border-radius: 30px;
    background-color: ${COLORS.white};

    @media ${DEVICE.laptopM} {
        border-radius: 20px;
    }

    @media ${DEVICE.mobile} {
        border-radius: 10px;
    }

    &.loaded {
        ${Video} {
            opacity: 1;
        }
    }
`

const Container = styled.div`
    position: relative;

    max-width: ${({ maxWidth }) => maxWidth};

    overflow: hidden;
    transition: 0.3s;

    &:after {
        display: block;
        padding-top: 56%;
        content: "";
    }
`
