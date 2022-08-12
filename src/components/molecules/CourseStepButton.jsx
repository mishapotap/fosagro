import React, { useState } from "react"
import styled, { css } from "styled-components"
import { TimeIcon } from "../../assets/svg/static";
import { COLORS } from '../../constants/theme'
import { borderAnimationM } from "../../constants/animations";

export default function CourseStepButton({ title, bgColor = COLORS.white, image = null, time, description, rotate = 0}) {
    // TODO перенести состояние в mobX
    const [isActive, setIsАсtive] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    return (
        <Container 
            isCompleted={isCompleted} 
            isActive={isActive}
            bgColor={bgColor} 
            image={image} 
            onMouseOver={() => setIsАсtive(true)}    
            onMouseOut={() => setIsАсtive(false)}
            onClick={() => setIsCompleted(!isCompleted)}>
            <Circle>
                {isActive
                    ? <CircleContetnt style={{color: COLORS.white}}>
                        <Title>{title}</Title>
                        <Description>{description}</Description>
                        <Time>
                            <img src={TimeIcon} alt="timeIcon"/>
                            <TimeText>{time}</TimeText>
                        </Time>
                    </CircleContetnt>
                    : <Text style={isCompleted === true ? {color: COLORS.white} : {color: COLORS.blue_text}}>{title}</Text>
                }
            </Circle>
            <AnimateCircle rotate={rotate}/>
        </Container>
    )
}


const AnimateCircle = styled.div`
    z-index: 1;
    position: absolute;
    top: -2px;
    left: -7px;
    width: 164px;
    height: 154px;
    background: rgba(255, 255, 255, 0.5);
    animation: ${borderAnimationM} 10s linear infinite;
    transform: rotate(${props => `${props.rotate}deg`});
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

const CircleContetnt = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

const Container = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    transition: all 0.3s;

    ${(props) => 
    props.isActive === true &&
        css`
        transform: scale(1.75);
        ${AnimateCircle} {
            background-color: ${props.bgColor};
            opacity: 0.5;
        }
        ${Circle} {
            background-image: url(${props.image});
            background-repeat: no-repeat;
            background-size: contain;
        }
        ${CircleContetnt} {
            bottom: -10px;
            position: absolute;
            min-height: 160px;
            width: 240px;
            transform: scale(0.6);
        }`
  }
  ${(props) => 
    props.isCompleted === true &&
        css`
        ${AnimateCircle} {
            background-color: ${props.bgColor};
            opacity: 0.5;
        }
        ${Circle} {
            background-color: ${props.bgColor};
        }`
    }
`;

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

const Title = styled.div`
    max-width: 215px;
    margin-bottom: 13px;
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