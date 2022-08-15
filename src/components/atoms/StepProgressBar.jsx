import React, { useState } from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"
import { StepProgressBarJsx } from "../../assets/svg"

export default function StepProgressBar({width, slidesAmount, color = COLORS.green, max = 100}) {
    // TODO Перенести состояние в Mobx
    const oneSlideValue = width / slidesAmount
    const [progressWidth, setProgressWidth] = useState(oneSlideValue)
    const [value, setValue] = useState(progressWidth/width*100)


    function increaseProgress() {
        if (progressWidth < width) {
            // console.log("lf")
            setProgressWidth(progressWidth + oneSlideValue)
            setValue((progressWidth + oneSlideValue)/width*100)
        }
    }

    return (
        <>
            <StepProgressBarJsx
            width={width}
            slidesAmount={slidesAmount}
            progressWidth={progressWidth}
        />
        <Container color={color} width={width}>
            <Persent color={color}>{value}%</Persent>
            <Progress value={value} max={max} />
        </Container>
        {/* <Hr width={width}/> */}
        <div>oneSlideValue:{oneSlideValue}</div>
        <div>progressWidth:{progressWidth}</div>
        <div>value:{value}</div>
        <Button type="button" onClick={() => increaseProgress()}>Увеличить!</Button>
        </>
    )
}

const Container = styled.div`
    /* width: ${props => `${props.width}px`}; */
    /* height: fit-content; */
    progress {
        color: ${props => props.color};
    }
    /* Значение  */
    progress[value]{
        width: ${props => `${props.width}px`};
        -webkit-appearance: none;
        appearance: none;
    }
    /* Задний фон */
    progress[value]::-webkit-progress-bar {
        height: 5px;
        border-radius: 50px;
        background-color: ${COLORS.white};
    }
    /* Полоска прогресса */
    progress[value]::-webkit-progress-value {
        height: 5px;
        border-radius: 50px;
        background-color: ${props => props.color};
        transition: all 0.3s;
    }
`
const Persent = styled.div`
display: inline-block;
    width: fit-content;
    font-family: 'FocoBold';
    font-size: 25px;
    line-height: 32px;
    color: ${props => props.color};
`
const Progress = styled.progress`
`

const Button = styled.button`
    display: block;
`

// const Hr = styled.div`
//     display: block;
//     margin-top: 20px;
//     height: 5px;
//     background-color: ${COLORS.white};
//     width: ${props => `${props.width}px`};
//     position: relative;
// `

// const ProgressHr = styled.div`
    
// `
