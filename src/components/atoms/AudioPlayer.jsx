/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useRef, useState } from "react"
import styled, { keyframes } from "styled-components"
import { CSSTransition } from "react-transition-group"
import {
    Play,
    Pause,
    SoundMute,
    Sound,
    Headphones,
    Spinner,
} from "../../assets/svg"
import { COLORS, DEVICE } from "../../constants"
import { AudioPlayerBg } from "../../assets/svg/static"
import { formatTime } from "../../utils"
import PausedBtn from "./CourseContent/PausedBtn"

export default function AudioPlayer({
    isPlaying = true,
    src,
    isOpened = true,
    className = "",
    onPlay = () => {},
    onPause = () => {},
    onEnded = () => {},
    onLoaded = () => {},
    onPauseByUser = () => {},
    onPlayByUser = () => {},
    makePausedBtn = false,
    showPausedBtn = false,
    onPausedBtnClick = () => {},
}) {
    const audioRef = useRef(null)
    const [isPlayingLocal, setIsPlayingLocal] = useState(false)
    const [isMuted, setIsMuted] = useState(false)

    const [progressTime, setProgressTime] = useState(false)
    const [fullTime, setFullTime] = useState(false)

    const [togglerDeg, setTogglerDeg] = useState(0)

    const [formattedProgressTime, setFormattedProgressTime] = useState("00:00")
    const [formattedFullTime, setFormattedFullTime] = useState("00:00")
    const [progressTimePer, setProgressTimePer] = useState(0)

    const [progressStroke, setProgressStroke] = useState(null)
    const [strokeLength, setStrokeLength] = useState(0)

    const [isLoaded, setIsLoaded] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [isOpenedLocal, setIsOpenedLocal] = useState(isOpened)

    const intervalId = useRef(null)
    const baseCircleRef = useRef(null)
    const progrContRef = useRef(null)
    const playerContRef = useRef(null)
    const controlsCircleRef = useRef(null)

    const [showPausedBtnLocal, setShowPausedBtnLocal] = useState(false)

    useEffect(() => {
        setIsPlayingLocal(isPlaying)
    }, [isPlaying])

    useEffect(() => {
        setIsOpenedLocal(isOpened)
    }, [isOpened])

    useEffect(() => {
        if (isLoaded) {
            if (isPlaying) {
                play()
            } else {
                pause()
            }
        }
    }, [isPlaying, isLoaded])

    useEffect(() => {
        setShowPausedBtnLocal(showPausedBtn)
    }, [showPausedBtn])

    function handleTimeChange() {
        if (audioRef.current) {
            const curTime = audioRef.current.currentTime
            setProgressTime(curTime)
        } else {
            handlePause()
        }
    }

    useEffect(() => {
        if (fullTime) {
            const formatted = formatTime(fullTime)
            setFormattedFullTime(formatted)
        }
    }, [fullTime])

    function setStrokeL() {
        setTimeout(() => {
            const length = baseCircleRef.current.getTotalLength()
            setStrokeLength(length)
        }, 400)
    }

    useEffect(() => {
        window.addEventListener("resize", setStrokeL)
        const length = baseCircleRef.current.getTotalLength()
        setStrokeLength(length)

        return () => {
            handlePause()
            window.removeEventListener("resize", setStrokeL)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (!progressStroke) {
            setProgressStroke(strokeLength)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [strokeLength])

    useEffect(() => {
        if (progressTimePer) {
            // устанавливаем градусы поворота для toggler
            const rotateDeg = (progressTimePer * 360) / 100 / 2
            setTogglerDeg(rotateDeg)

            // устанавливаем stroke-dashoffset для отображения прогресса
            const progStroke = (progressTimePer * strokeLength) / 100 / 2
            const newDashoff = strokeLength - progStroke
            setProgressStroke(newDashoff)
        }
    }, [progressTimePer, strokeLength])

    useEffect(() => {
        const formatted = formatTime(progressTime)
        setFormattedProgressTime(formatted)

        const per = (progressTime / fullTime) * 100
        setProgressTimePer(per)
    }, [progressTime, fullTime])

    function handlePlay() {
        intervalId.current = setInterval(() => {
            handleTimeChange()
        }, 50)

        setIsPlayingLocal(true)
        onPlay()
    }

    function handleError() {
        setIsError(true)
    }

    function handleEnd() {
        setProgressTime(fullTime)
        onEnded()
    }

    function play() {
        audioRef.current.play()
    }

    function pause() {
        audioRef.current.pause()
    }

    function handleLoaded(e) {
        const fullAudioTime = audioRef.current.duration
        if (fullAudioTime) setFullTime(fullAudioTime)

        setIsLoaded(true)
        setIsLoading(false)
        setIsError(false)
        if (isPlayingLocal) play()
        onLoaded(e)
    }

    function handlePause() {
        setIsPlayingLocal(false)
        clearInterval(intervalId.current)
        onPause()
    }

    function togglePlay() {
        if (isPlayingLocal && !audioRef.current.paused) {
            pause()
            onPauseByUser()
            setShowPausedBtnLocal(true)
        } else {
            play()
            onPlayByUser()
            setShowPausedBtnLocal(false)
        }
    }

    function toggleMuted() {
        if (isMuted) {
            audioRef.current.muted = false
            setIsMuted(false)
        } else {
            audioRef.current.muted = true
            setIsMuted(true)
        }
    }

    function toggleOpened() {
        if (isOpenedLocal) {
            setIsOpenedLocal(false)
        } else {
            setIsOpenedLocal(true)
        }
    }

    function radToDeg(radians) {
        const pi = Math.PI
        return radians * (180 / pi)
    }

    function handleProgressClick(e) {
        let offsX
        let offsY

        if (e.nativeEvent) {
            const {
                nativeEvent: { offsetX, offsetY },
            } = e

            offsX = offsetX
            offsY = offsetY
        } else {
            offsX = e.offsetX
            offsY = e.offsetY
        }

        const size = progrContRef.current.offsetWidth
        const center = size / 2

        // угол между центром и точкой события в радианах
        const rads = Math.atan2(center - offsY, center - offsX)
        const degs = radToDeg(rads)

        // приводим к виду, когда угол 0 - это верхняя точка круга, 180 - нижняя
        let newDeg

        if (degs > 0) {
            newDeg = degs - 90
        } else {
            newDeg = degs + 270
        }

        if (newDeg < 0) {
            newDeg = 0
        } else if (newDeg > 180) {
            newDeg = 180
        }

        // находим время, соответствующее данному углу
        const timePer = (newDeg * 100) / 180
        const newTime = (timePer * fullTime) / 100

        // переключаем аудио на это время
        audioRef.current.currentTime = newTime
        setProgressTime(newTime)
    }

    function handlePausedBtnClick() {
        setShowPausedBtnLocal(false)
        togglePlay()
        onPausedBtnClick()
    }

    return (
        <Container
            className={`${isError ? "error" : ""} ${
                className || ""
            } audio-player`}
        >
            <OpenPlayerBtn onClick={toggleOpened} isError={isError}>
                <Headphones />
            </OpenPlayerBtn>
            {isError && <Error>Ошибка загрузки аудио</Error>}
            <CSSTransition
                in={isOpenedLocal}
                nodeRef={playerContRef}
                appear
                timeout={300}
                classNames="player"
            >
                <PlayerContainer
                    style={{ display: isError && "none" }}
                    className="player"
                    ref={playerContRef}
                >
                    <Player>
                        <PlayerInner>
                            <Audio
                                src={src}
                                ref={audioRef}
                                muted={isMuted}
                                onPlay={handlePlay}
                                onPause={handlePause}
                                onError={handleError}
                                onEnded={handleEnd}
                                preload="metadata"
                                onLoadedMetadata={handleLoaded}
                            />
                            <Circle ref={controlsCircleRef}>
                                <Controls>
                                    <ProgressContainer ref={progrContRef}>
                                        <TogglerContainer
                                            style={{
                                                transform: `rotate(${togglerDeg}deg)`,
                                            }}
                                        >
                                            <Toggler />
                                        </TogglerContainer>

                                        <ProgressCircleContainer>
                                            <ProgressCircle className="progress-circle">
                                                <circle
                                                    cx="50%"
                                                    cy="50%"
                                                    fill="none"
                                                    r="50%"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeDashoffset={
                                                        progressStroke
                                                    }
                                                    strokeDasharray={
                                                        strokeLength
                                                    }
                                                />
                                            </ProgressCircle>
                                        </ProgressCircleContainer>
                                        <BaseCircle className="base-circle">
                                            <circle
                                                ref={baseCircleRef}
                                                cx="50%"
                                                cy="50%"
                                                fill="none"
                                                r="50%"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </BaseCircle>
                                        <ClickCircle
                                            className="test-circle"
                                            onClick={handleProgressClick}
                                        >
                                            <circle
                                                ref={baseCircleRef}
                                                cx="50%"
                                                cy="50%"
                                                fill="none"
                                                r="50%"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </ClickCircle>
                                    </ProgressContainer>
                                    <CenterControls>
                                        <CenterControlsInner>
                                            {isLoading ? (
                                                <StyledSpinner width="42px" />
                                            ) : (
                                                <>
                                                    <ToggleMutedBtn
                                                        onClick={toggleMuted}
                                                    >
                                                        {isMuted ? (
                                                            <SoundMute
                                                                color={
                                                                    COLORS.blue
                                                                }
                                                                width="96%"
                                                            />
                                                        ) : (
                                                            <Sound
                                                                color={
                                                                    COLORS.blue
                                                                }
                                                                width="84%"
                                                            />
                                                        )}
                                                    </ToggleMutedBtn>
                                                    <TogglePlayBtn
                                                        onClick={togglePlay}
                                                    >
                                                        {isPlayingLocal && !audioRef.current.paused ? (
                                                            <Pause
                                                                color={
                                                                    COLORS.blue
                                                                }
                                                                width="55%"
                                                            />
                                                        ) : (
                                                            <Play
                                                                color={
                                                                    COLORS.blue
                                                                }
                                                                width="68%"
                                                            />
                                                        )}
                                                    </TogglePlayBtn>
                                                </>
                                            )}
                                        </CenterControlsInner>
                                    </CenterControls>
                                    <ProgressTime>
                                        {formattedProgressTime}
                                    </ProgressTime>
                                    <FullTime>{formattedFullTime}</FullTime>
                                </Controls>
                            </Circle>
                            <Background />
                        </PlayerInner>
                    </Player>
                </PlayerContainer>
            </CSSTransition>
            {makePausedBtn && <PausedBtn show={showPausedBtnLocal} onClick={handlePausedBtnClick} />}
        </Container>
    )
}

const StyledSpinner = styled(Spinner)`
    margin-left: -10px;
`

const OpenPlayerBtn = styled.button``

const Container = styled.div`
    position: relative;

    &.error {
        ${OpenPlayerBtn} {
            pointer-events: none;
        }
    }
`

const Circle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 88%;
    height: 88%;

    background-color: ${COLORS.white};
    border-radius: 50%;
`

const Controls = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
`

const CenterControlsInner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(10px, -50%);
    display: flex;
`

const CenterControls = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 65%;
    height: 65%;
    border-radius: 50%;
    cursor: auto;
`

const Error = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(calc(100% + 10px));

    display: inline-block;
    padding: 3px;

    color: ${COLORS.blue};
    text-align: center;
    font-size: 14px;

    border-radius: 5px;
    background: ${COLORS.white};
`

const Audio = styled.audio``

const PlayerCircle = styled.svg`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    overflow: visible;

    circle {
        stroke-width: 2;
    }
`

const ClickCircle = styled(PlayerCircle)`
    z-index: 50;

    circle {
        stroke-width: 7;
        stroke: transparent;
    }
`

const BaseCircle = styled(PlayerCircle)`
    circle {
        stroke: rgba(0, 82, 155, 0.3);
    }
`

const ProgressCircleContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-90deg);

    width: 100%;
    height: 100%;
`

const ProgressCircle = styled(PlayerCircle)`
    circle {
        stroke: ${COLORS.blue};
        transition: 0.2s;
    }
`

const ProgressContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    width: 74%;
    height: 74%;

    transform: translate(-50%, -50%);
    border-radius: 50%;
    cursor: pointer;
`

const Player = styled.div`
    position: absolute;
    width: 200%;
    transform: translateX(-50%);

    &:after {
        display: block;
        padding-top: 100%;
        content: "";
    }
`

const PlayerInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
`

const playerAnim = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-6%);
    }

    100% {
        opacity: 1;
        transform: none;
    }
`

const PlayerContainer = styled.div`
    position: absolute;
    width: 130px;
    z-index: 10;

    display: none;
    margin-top: 2.1vh;
    margin-bottom: 30px;
    padding-bottom: 280px;

    overflow: hidden;
    opacity: 0;
    transition: 0.4s;

    @media ${DEVICE.laptopM} {
        width: 95px;
    }

    @media ${DEVICE.laptop} {
        margin-top: 15px;
    }

    @media ${DEVICE.laptopS} {
        width: 130px;
    }

    &.player {
        display: block;
    }

    &.player-enter-active {
        animation: ${playerAnim} 0.35s;
    }

    &.player-enter-done {
        opacity: 1;
        display: block;
    }

    &.player-exit-active {
        animation: ${playerAnim} 0.35s reverse;
    }

    &.player-exit-done {
        opacity: 0;
        display: none;
    }
`

const Background = styled.div`
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background: url(${AudioPlayerBg}) no-repeat center/contain;
`

const ControlsBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 23px;
    height: 23px;

    svg {
        max-width: 100%;
    }

    @media ${DEVICE.laptopM} {
        width: 19px;
        height: 19px;
    }

    @media ${DEVICE.laptopS} {
        width: 23px;
        height: 23px;
    }
`

const TogglePlayBtn = styled(ControlsBtn)``

const ToggleMutedBtn = styled(ControlsBtn)`
    justify-content: flex-start;
    margin-right: 7px;

    @media ${DEVICE.laptopM} {
        margin-right: 3px;
    }

    @media ${DEVICE.laptopS} {
        margin-right: 7px;
    }
`

const Toggler = styled.button`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;

    width: 16px;
    height: 16px;
    border: 2px solid ${COLORS.blue};
    border-radius: 50%;

    &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 60%;
        height: 60%;
        border-radius: 50%;

        background: ${COLORS.blue};
        content: "";
    }

    @media ${DEVICE.laptopM} {
        width: 12px;
        height: 12px;
    }

    @media ${DEVICE.laptopS} {
        width: 16px;
        height: 16px;
    }
`

const TogglerContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    border-radius: 50%;
    transition: 0.2s;
`

const PlayerTime = styled.span`
    position: absolute;
    display: inline-block;

    font-family: "FocoBold", sans-serif;
    font-size: 16px;
    color: ${COLORS.blue};

    @media ${DEVICE.laptopM} {
        font-size: 12px;
    }

    @media ${DEVICE.laptopS} {
        font-size: 16px;
    }
`

const ProgressTime = styled(PlayerTime)`
    top: 7px;
    left: 50%;
    transform: translateX(2px);

    @media ${DEVICE.laptopM} {
        top: 4px;
    }

    @media ${DEVICE.laptopS} {
        top: 7px;
    }
`

const FullTime = styled(PlayerTime)`
    bottom: 7px;
    left: 50%;
    transform: translateX(2px);

    @media ${DEVICE.laptopM} {
        bottom: 4px;
    }

    @media ${DEVICE.laptopS} {
        bottom: 7px;
    }
`
