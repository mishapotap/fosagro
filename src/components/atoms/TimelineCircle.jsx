import React, { useState } from "react"
import styled, { keyframes, css } from "styled-components"
import { TimeIcon } from "../../assets/images"
import { COLORS } from './../../constants/theme'

export default function TimelineCircle({ text, color, image, time, description, rotate }) {
    // перенести состояние в mobX
    const [isCompleted, setIsCompleted] = useState(false);
    return (
        <Container isCompleted={isCompleted} backgroundAnimate={color} circleImg={image} onClick={() => setIsCompleted(!isCompleted) }>
            <Circle>
                {isCompleted
                    ? <CircleContetnt style={{color: COLORS.white}}>
                        <Title>{text}</Title>
                        <Description>{description}</Description>
                        <Time>
                            <img src={TimeIcon} alt="timeIcon"/>
                            <TimeText>{time}</TimeText>
                        </Time>
                    </CircleContetnt>
                    : <Text style={{color: COLORS.blue_text}}>{text}</Text>
                }
            </Circle>
            <AnimateCircle rotate={rotate}/>
        </Container>
    )
}

const borderAnimation = keyframes`
    0% {
        border-radius: 68% 32% 26% 74% / 44% 52% 48% 56%;
    }
    25% {
        border-radius: 54% 46% 54% 46% / 76% 74% 26% 24%;
    }
    50% {
        border-radius: 31% 69% 68% 32% / 48% 60% 40% 52%;
    }
    75% {
        border-radius: 59% 41% 49% 51% / 23% 24% 76% 77%;
    }
    100% {
        border-radius: 68% 32% 26% 74% / 44% 52% 48% 56%;
    }
`

const Container = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    transition: all 0.3s;

    ${(props) => {
    switch (props.isCompleted) {
      case true:
        return css`
        transform: scale(1.75);
        ${AnimateCircle} {
            background-color: ${props => props.backgroundAnimate || null};
            opacity: 0.5;
        }
        ${Circle} {
            background-image: url(${props => props.circleImg || null});
            background-repeat: no-repeat;
            background-size: contain;
        }
        ${CircleContetnt} {
            top: 10px;
            position: absolute;
            width: 240px;
            transform: scale(0.6);
        }
        `;
      default:
        return;
    }
  }}
    
`;

const AnimateCircle = styled.div`
    z-index: 1;
    position: absolute;
    top: -2px;
    left: -7px;
    width: 164px;
    height: 154px;
    background: rgba(255, 255, 255, 0.5);
    animation: ${borderAnimation} 10s linear infinite;
    transform: rotate(${props => props.rotate + 'deg' || 0});
    transition: all 0.3s;
`;

const Circle = styled.div`
    z-index: 2;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
`
const Text = styled.span`
    max-width: 138px;
    text-align: center;
    /* text */
    font-family: 'FocoBold';
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
`

const CircleContetnt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    margin-bottom: 26px;
    font-family: 'FocoBold';
    font-size: 21px;
    line-height: 27px;
    font-weight: 700;
    text-align: center;
`

const Description = styled.div`
    margin-bottom: 20px;
    font-family: 'CalibriRegular';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
`

const Time = styled.div`
    display: flex;
    align-items: center;
    img {
        height: 30px;
    }
`

const TimeText = styled.span`
    margin-left: 20px;
    font-family: 'FocoBold';
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;