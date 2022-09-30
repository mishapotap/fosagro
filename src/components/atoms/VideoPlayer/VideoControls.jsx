/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState } from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../../constants"
import {
    Play,
    Pause,
    Sound,
    SoundMute,
    Fullscreen,
    Close,
} from "../../../assets/svg"

export default function VideoControls({
    progressTime,
    fullTime,
    progressTimePer,

    isPlaying,
    isFullscreen,
    isMuted,
    isLoaded,
    isStart,
    isBigBtnShown,
    isControlsShown,
    isBottomControlsShown,

    onTogglePlay,
    onToggleMuted,
    onToggleFullscreen,
    onTimelineClick,
    onTimelineMouseOver,
    onCloseFullscreen,

    tooltipTime,
}) {
    const timeLineEl = useRef(null)
    const [shouldShowTooltip, setShouldShowTooltip] = useState(false)
    const [tooltipPosLeft, setTooltipPosLeft] = useState(0)

    // при наводе на линию прогресса видео показываем подсказку со временем
    function handleTimelineMouseOver(e) {
        const {
            nativeEvent: { offsetX },
        } = e
        onTimelineMouseOver(e, timeLineEl.current.offsetWidth)
        setTooltipPosLeft(offsetX)
        setShouldShowTooltip(true)
    }

    // скрываем подсказку со временем при уходе курсора с линии прогресса видео
    function handleTimelineMouseLeave() {
        setShouldShowTooltip(false)
    }

    function onBigBtnClick(e) {
        e.stopPropagation()
        onTogglePlay()
    }

    return (
        <Container
            className={`${!isControlsShown ? "hide" : ""} ${
                isLoaded ? "loaded" : ""
            } ${isStart ? 'start' : ""}`}
        >
            <BigPlayBtn
                isFullscreen={isFullscreen}
                onClick={onBigBtnClick}
                className={!isBigBtnShown && "hide"}
            >
                <Play width="100%" />
            </BigPlayBtn>

            <PlayerTop
                className={!isFullscreen && "hide"}
                onClick={(e) => e.stopPropagation()}
            >
                <CloseFullscreenBtn onClick={onCloseFullscreen}>
                    <Close color={COLORS.white} />
                </CloseFullscreenBtn>
            </PlayerTop>

            <BottomControls
                onClick={(e) => e.stopPropagation()}
                className={(isStart || !isBottomControlsShown) && "hide"}
            >
                <ToggleMutedBtn
                    onClick={onToggleMuted}
                    isFullscreen={isFullscreen}
                >
                    {isMuted ? (
                        <SoundMute width="96%" />
                    ) : (
                        <Sound width="82%" />
                    )}
                </ToggleMutedBtn>

                <TogglePlayBtn
                    onClick={onTogglePlay}
                    isFullscreen={isFullscreen}
                >
                    {isPlaying ? <Pause width="54%" /> : <Play width="54%" />}
                </TogglePlayBtn>

                <PlayerProgress>
                    <TimeLineWrapper
                        ref={timeLineEl}
                        onClick={(e) =>
                            onTimelineClick(e, timeLineEl.current.offsetWidth)
                        }
                        onMouseOver={handleTimelineMouseOver}
                        onMouseLeave={handleTimelineMouseLeave}
                        onMouseMove={handleTimelineMouseOver}
                    >
                        <TimeLine>
                            <TimeLineProgress
                                style={{ width: `${progressTimePer}%` }}
                            />
                        </TimeLine>
                        <Tooltip
                            className={shouldShowTooltip && "active"}
                            style={{ left: `${tooltipPosLeft}px` }}
                        >
                            {tooltipTime}
                        </Tooltip>
                    </TimeLineWrapper>
                    {isFullscreen && (
                        <Time>
                            <ProgressTime>{progressTime}</ProgressTime>
                            <span />
                            <FullTime>{fullTime}</FullTime>
                        </Time>
                    )}
                </PlayerProgress>

                <FullscreenBtn
                    onClick={onToggleFullscreen}
                    isFullscreen={isFullscreen}
                >
                    <Fullscreen />
                </FullscreenBtn>
            </BottomControls>
        </Container>
    )
}

const VideoPlayerBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${({ width, isFullscreen }) => {
        if (width) return width
        return isFullscreen ? "40px" : "29px"
    }};

    background: transparent;

    @media ${DEVICE.laptopS} {
        width: 27px;
    }

    @media ${DEVICE.mobile} {
        width: 23px;
    }

    svg {
        max-width: 100%;
    }
`

const FullscreenBtn = styled(VideoPlayerBtn)`
    margin-left: 30px;
    width: ${({ isFullscreen }) => (isFullscreen ? "50px" : "54px")};

    @media ${DEVICE.laptopM} {
        width: ${({ isFullscreen }) => (isFullscreen ? "37px" : "38px")};
    }


    @media ${DEVICE.laptopS} {
        width: 45px;
        margin-left: 15px;
    }

    @media ${DEVICE.mobile} {
        width: 35px;
        margin-left: 15px;
    }
`

const ToggleMutedBtn = styled(VideoPlayerBtn)`
    justify-content: flex-start;
    margin-right: 10px;

    @media ${DEVICE.mobile} {
        margin-right: 5px;
    }
`

const TogglePlayBtn = styled(VideoPlayerBtn)`
    margin-right: 18px;

    @media ${DEVICE.mobile} {
        margin-right: 8px;
    }
`

const CloseFullscreenBtn = styled.button`
    position: absolute;
    right: 3%;
    top: 42%;

    width: 52px;
    height: 52px;
    border-radius: 50%;
`

const PlayerTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    height: 14.5%;
    width: 100%;

    background: linear-gradient(
        180deg,
        rgba(0, 82, 155, 0.6) 0%,
        rgba(217, 217, 217, 0) 100%
    );
`

const BottomControls = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 2.9%;
    height: 14.5%;

    background: linear-gradient(
        0deg,
        rgba(0, 82, 155, 0.6) 0%,
        rgba(217, 217, 217, 0) 100%
    );

    button {
        flex-shrink: 0;
    }

    @media ${DEVICE.laptopS} {
        height: 18%;
    }

    @media ${DEVICE.mobile} {
        height: 22%;
    }
`

const BigPlayBtn = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    width: ${({ isFullscreen }) => (isFullscreen ? "5.8%" : "7.7%")};

    background: transparent;
`

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    width: 100%;
    height: 100%;

    transition: 0.5s;

    opacity: 0;

    &:after {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        content: '';
        pointer-events: none;
        z-index: -1;

        opacity: 0;
        background: linear-gradient( 0deg, rgba(0,82,155,0.3) 0%, rgba(217,217,217,0) 100% );
        transition: 0.5s;
    }

    &.start {
        &:after {
            opacity: 1;
        }
    }

    &.loaded {
        opacity: 1;
    }

    &.hide,
    *.hide {
        opacity: 0;
        pointer-events: none;
        cursor: pointer;
    }

    ${PlayerTop},
    ${BottomControls},
    ${BigPlayBtn} {
        transition: 0.5s;
    }
`

const TimeLine = styled.div`
    width: 100%;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.3);
`

const Tooltip = styled.div`
    position: absolute;
    top: 0;
    transform: translateY(calc(-40%)) translateX(-50%);
    padding: 5px;

    font-size: 15px;
    color: ${COLORS.blue};

    border-radius: 3px;
    background-color: ${COLORS.white};
    transition: opacity 0.3s;
    opacity: 0;
    pointer-events: none;

    &.active {
        opacity: 1;
    }

    @media ${DEVICE.laptopS} {
        display: none;
    }
`

const PlayerProgress = styled.div`
    position: relative;

    flex: 0 1 100%;
    display: flex;
    align-items: center;
    height: 58px;
`

const Time = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;

    @media ${DEVICE.laptopS} {
        bottom: 5px;
    }

    span {
        display: inline-block;
        width: 13px;
        height: 4px;
        margin: 0 7px;

        border-radius: 5px;
        background-color: ${COLORS.white};
    }
`

const ProgressTime = styled.div`
    font-family: "FocoBold";
    font-size: 18px;
    font-weight: bold;
    color: ${COLORS.white};

    @media ${DEVICE.laptopS} {
        font-size: 16px;
    }
`

const FullTime = styled.div`
    font-family: "FocoLight";
    font-size: 18px;
    color: ${COLORS.white};

    @media ${DEVICE.laptopS} {
        font-size: 16px;
    }
`

const TimeLineWrapper = styled.div`
    padding: 5px 0;
    width: 100%;
    cursor: pointer;
`

const TimeLineProgress = styled.div`
    transition: 0.05s;
    height: 100%;
    background-color: ${COLORS.white};
`
