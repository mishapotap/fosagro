import React, { useState } from "react"
import styled, { css } from "styled-components"
import { StepProgressBarImages } from "../atoms"
import { COLORS, DEVICE } from "../../constants"

export default function StepProgressBar({
        // width это ширина всего контейнера с прогрессом (включая проценты)
        width = "50%", 
        slidesAmount, 
        color = COLORS.blue, 
        type = "grass"}) {

    const oneSlideValue = 100 / slidesAmount

    // TODO Перенести состояние в Mobx
    const [progressSlides, setProgressSlides] = useState(1)
    const [progressWidth, setProgressWidth] = useState(oneSlideValue)

    // инициализая и заполнение массива точек прогресса
    const pointArray = [];
    // eslint-disable-next-line no-plusplus
    for(let i = 0; i < slidesAmount; i++) {
        pointArray.push({key: i + 1, position: oneSlideValue*(i + 1), colorPoint: i === 0 ? color : "" })
    }

    const [points, setPoints] = useState(pointArray);

    const increaseProgress = () => { 
        const colorTest = color;
        if(progressSlides <= slidesAmount - 1) {
            setProgressSlides(progressSlides + 1);
            setProgressWidth(oneSlideValue * (progressSlides + 1));
            const newPoints = points.map((point) => (
                point.key === progressSlides + 1
                  ? { ...point, colorPoint: colorTest }
                  : point
            ));
            setPoints(newPoints);
        }
    }

    return (
        <>
            <StepProgressBarWrap width={width}>
                <ProgressPercent color={color}>{Math.round(progressWidth)}%</ProgressPercent>
                <StepProgressBarContainer>
                    <StepProgressBarImages 
                        type={type}
                        progressWidth={progressWidth}
                    />
                    <ProgressPoints>
                        {
                            points.map(item => <Point position={item.position} key={item.key} colorPoint={item.colorPoint}/>)
                        }
                    </ProgressPoints>
                    <ProgressLine color={color} progressWidth={progressWidth}/>
                </StepProgressBarContainer>
            </StepProgressBarWrap>
            <Button type="button" onClick={() => increaseProgress()}>Увеличить!</Button>
        </>
    )
}

const Button = styled.button`
    display: block;
`

const StepProgressBarWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: ${(props) => props.width};

    @media ${DEVICE.mobile} {
        width: 100%;
    }
`

const ProgressPercent = styled.span`
    padding-bottom: 17px;
    font-family: 'CalibriRegular';
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;

    color: ${(props) => props.color};
`

const StepProgressBarContainer = styled.div`
    position: relative;
    width: calc(100% - 45px);
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
        content: '';
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