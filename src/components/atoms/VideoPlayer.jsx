/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"
import VideoControls from "./VideoControls"
import Loader from "./Loader"

// TODO сделать исчезновение контролсов при отстутвии движения мыши, и появление при движении
// TODO сделать автоматический выход из полноэкранного режима при окончании видео?
// TODO сделать плавное появление самого элемента видео при загрузке
// TODO сделать плавное появление сообщения об ошибке?
// TODO добавить возможность управления видеоплеером с помощью клавиш?

export default function VideoPlayer({
    src,
    width = "914px",
    height = "585px",
    loop = false,
}) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isStart, setIsStart] = useState(true)

    const [isBigBtnShown, setIsBigBtnShown] = useState(true)

    const [progressTime, setProgressTime] = useState(0)
    const [fullTime, setFullTime] = useState(0)
    const [tooltipTime, setTooltipTime] = useState(0)
    const [progressTimePer, setProgressTimePer] = useState(0)

    const [formattedTooltipTime, setFormattedTooltipTime] = useState("00:00")
    const [formattedProgressTime, setFormattedProgressTime] = useState("00:00")
    const [formattedFullTime, setFormattedFullTime] = useState("00:00")

    const [videoContStyle, setVideoContStyle] = useState({})
    const startVideoStyle = useRef(null)

    const videoEl = useRef(null)
    const videoPlayerContEl = useRef(null)
    const intervalId = useRef(null)

    const errorText = "Произошла ошибка при загрузке видео"

    // TODO вынести в utils?
    function formatTime(time) {
        const isoString = new Date(time * 1000).toISOString()
        if (time >= 3600) {
            return isoString.slice(11, 19)
        }
        return isoString.slice(14, 19)
    }

    // устанавливаем форматированное время длительности фидео при изменении времени tooltip
    useEffect(() => {
        if (fullTime) {
            const formatted = formatTime(fullTime)
            setFormattedFullTime(formatted)
        }
    }, [fullTime])

    // устанавливаем форматированное время для tooltip при изменении всего времени видео
    useEffect(() => {
        if (tooltipTime) {
            const formatted = formatTime(tooltipTime)
            setFormattedTooltipTime(formatted)
        }
    }, [tooltipTime])

    // устанавливаем форматированное время прогресса видео при изменении времени прогресса видео
    useEffect(() => {
        if (progressTime) {
            const formatted = formatTime(progressTime)
            setFormattedProgressTime(formatted)

            const per = (progressTime / fullTime) * 100
            setProgressTimePer(per)
        }
    }, [progressTime, fullTime])

    // TODO вынести в utils?
    // получение положения элемента относительно окна
    function getElPos(el) {
        const rect = el.getBoundingClientRect()
        return {
            left: rect.left,
            top: rect.top,
        }
    }

    // записываем стили для VideoContainer перед началом анимации fullscreen
    function setVideoAnimStartStyle() {
        const videoWidth = videoPlayerContEl.current.offsetWidth
        const videoHeight = videoPlayerContEl.current.offsetHeight

        const { left, top } = getElPos(videoPlayerContEl.current)

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
            videoPlayerContEl.current.style.transition = "0.5s"
            setVideoContStyle(fullScrStyle)
        }, 10)
    }

    // анимация выхода из полноэкранного режима
    function exitFull() {
        function handleTrend({ target }) {
            if (target !== this) return

            document.body.classList.remove("lock")
            setVideoContStyle({})

            startVideoStyle.current = null
            videoPlayerContEl.current.style.transition = ""
            videoPlayerContEl.current.removeEventListener(
                "transitionend",
                handleTrend
            )
        }

        videoPlayerContEl.current.addEventListener("transitionend", handleTrend)
        setVideoContStyle(startVideoStyle.current)
    }

    // устанавливаем прогресс видео
    function handleTimeChange() {
        const curTime = videoEl.current.currentTime
        setProgressTime(curTime)
    }

    // обработка события play видео
    function handleVideoPlay() {
        setIsPlaying(true)
        if (isStart) {
            setIsStart(false)
        }
        setIsBigBtnShown(false)

        intervalId.current = setInterval(() => {
            handleTimeChange()
        }, 50)
    }

    // обработка события pause видео
    function handleVideoPause() {
        setIsPlaying(false)
        setIsBigBtnShown(true)
        clearInterval(intervalId.current)
    }

    // обработка события end видео
    function handleVideoEnd() {
        setIsPlaying(false)
        handleVideoPause()
        setIsStart(true)
    }

    // при загрузке видео устанавливаем его длительность и убираем лоадер
    function handleVideoLoad() {
        const fullVideoTime = videoEl.current.duration
        if (fullVideoTime) setFullTime(fullVideoTime)
        setIsLoading(false)
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
        videoEl.current.currentTime = progressSec
    }

    // обаботка ошибка загрузки видео
    function handleVideoError() {
        setIsError(true)
        setIsLoading(false)
    }

    // показываем подсказку со временем при движении мыши по линии прогресса видео
    function handleTimelineMouseOver(
        { nativeEvent: { offsetX } },
        timelineWidth
    ) {
        const timeTooltip = getProgressSec(offsetX, timelineWidth)
        setTooltipTime(timeTooltip)
    }

    // остановка видео
    function pause() {
        videoEl.current.pause()
    }

    // запуск видео
    function play() {
        videoEl.current.play()
    }

    // остановка/запуск видео
    function togglePlay() {
        if (isPlaying) {
            pause()
        } else {
            play()
        }
    }

    // выключение/включение звука видео
    function toggleMuted() {
        if (isMuted) {
            videoEl.current.muted = false
            setIsMuted(false)
        } else {
            videoEl.current.muted = true
            setIsMuted(true)
        }
    }

    // смена полноэкранного режима
    function toggleFullscreen() {
        if (isFullscreen) {
            exitFull()
            setIsFullscreen(false)
        } else {
            makeFull()
            setIsFullscreen(true)
        }
    }

    return (
        <Container
            className={isFullscreen && "fullscreen"}
            width={width}
            height={height}
        >
            <Overlay />
            <VideoPlayerContainer
                onClick={togglePlay}
                style={videoContStyle}
                ref={videoPlayerContEl}
            >
                {isLoading && <Loader />}
                {isError ? (
                    <VideoError>
                        <VideoErrorText>{errorText}</VideoErrorText>
                    </VideoError>
                ) : (
                    <>
                        <VideoControls
                            isPlaying={isPlaying}
                            isMuted={isMuted}
                            isFullscreen={isFullscreen}
                            isBigBtnShown={isBigBtnShown}
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
                            onPause={handleVideoPause}
                            onPlay={handleVideoPlay}
                            onLoadedData={handleVideoLoad}
                            onEnded={handleVideoEnd}
                            onError={handleVideoError}
                            ref={videoEl}
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
    object-fit: cover;
    transition: 0.5s;
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const VideoPlayerContainer = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 30px;
`

const Container = styled.div`
    position: relative;

    width: ${({width}) => width};
    height: ${({height}) => height};

    overflow: hidden;
    transition: 0.3s;
    border-radius: 30px;
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
    font-size: 18px;
    color: ${COLORS.blue};
`
