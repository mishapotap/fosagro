import React, { useState } from "react"
import styled from "styled-components"
// import { COLORS } from "../../constants"
import { StepProgressBarJsx } from "../../assets/svg"

export default function StepProgressBar({width, slidesAmount}) {
    // TODO Перенести состояние в Mobx
    const oneSlideValue = width / slidesAmount
    const [progressWidth, setProgressWidth] = useState(oneSlideValue)

    const increaseProgress = () => (progressWidth >= width) ? null : setProgressWidth(progressWidth + oneSlideValue)

    return (
        <>
            <StepProgressBarJsx
            width={width}
            slidesAmount={slidesAmount}
            progressWidth={progressWidth}
        />
        <div>oneSlideValue:{oneSlideValue}</div>
        <div>progressWidth:{progressWidth}</div>
        <Button type="button" onClick={() => increaseProgress()}>Увеличить!</Button>
        </>
    )
}

const Button = styled.button`
    display: block
`