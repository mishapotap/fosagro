import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { observer } from "mobx-react-lite"
import { StepProgressBarImages } from "../atoms"
import { COLORS, DEVICE } from "../../constants"
import { CourseProgressStore } from "../../store"

function StepProgressBar({
    // width это ширина всего контейнера с прогрессом (включая проценты)
    width = "50%",
}) {
    const slidesAmount = CourseProgressStore.activeSectPagesCount
    const { activeSectColor, progressType } = CourseProgressStore

    const progressSlides = CourseProgressStore.activeSectPageId
    const oneSlideValue = 100 / slidesAmount

    const [progressWidth, setProgressWidth] = useState(oneSlideValue)

    function getPointsArr() {
        const arr = []

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < slidesAmount; i++) {
            arr.push({
                key: i + 1,
                position: oneSlideValue * (i + 1),
                colorPoint: i === 0 ? activeSectColor : "",
            })
        }

        return arr
    }

    const pointArray = getPointsArr()
    const [points, setPoints] = useState(pointArray)

    useEffect(() => {
        const newArr = getPointsArr()
        const newPoints = newArr.map((point) =>
            point.key <= progressSlides
                ? { ...point, colorPoint: activeSectColor }
                : point
        )

        setProgressWidth(oneSlideValue * progressSlides)
        setPoints(newPoints)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CourseProgressStore.activeSectId, CourseProgressStore.activeSectPageId])

    return (
        <Container width={width} className="step-progress-bar">
                <StepProgressBarImages
                    type={progressType}
                    progressWidth={progressWidth}
                />
                <ProgressPoints>
                    {points.map((item) => (
                        <Point
                            position={item.position}
                            key={item.key}
                            colorPoint={item.colorPoint}
                        />
                    ))}
                </ProgressPoints>
                <ProgressLine
                    color={activeSectColor}
                    progressWidth={progressWidth}
                />
                <ProgressPercent
                    color={activeSectColor}
                    progressWidth={progressWidth}
                >
                    {Math.round(progressWidth)}%
                </ProgressPercent>
            </Container>
    )
}

export default observer(StepProgressBar)

const Container = styled.div`
    position: relative;
    max-width: fit-content;
    width: ${(props) => props.width};

    @media ${DEVICE.mobile} {
        width: 100%;
    }
`

const ProgressPoints = styled.div`
    z-index: 2;
    position: absolute;
    bottom: 34px;
    max-width: 607px;
    width: 100%;
`

const ProgressLine = styled.div`
    position: absolute;
    left: 0;
    bottom: 28px;
    max-width: 607px;
    width: 100%;
    height: 1px;
    background: ${COLORS.grey};

    &:after {
        content: "";
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        max-width: 607px;
        width: ${(props) => props.progressWidth}%;
        height: 1px;
        background: ${(props) => props.color};
        transition: all 0.3s;
    }
`

const Point = styled.div`
    position: absolute;
    top: 0;
    left: calc(${(props) => props.position}% - 10px);
    width: 10px;
    height: 10px;
    background: ${COLORS.color_animate};
    border: 1px solid ${COLORS.grey};
    border-radius: 50%;
    transition: all 0.3s;

    ${(props) =>
        props.colorPoint !== "" &&
        css`
            border: 1px solid ${props.colorPoint};
        `}
`

const ProgressPercent = styled.span`
    position: absolute;
    bottom: 0;
    left: calc(${(props) => props.progressWidth}% - 19px);
    ${(props) =>
        props.progressWidth === 100 &&
        css`
            left: unset;
            right: 0;
        `}

    font-family: 'CalibriRegular';
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;

    color: ${(props) => props.color};
`
