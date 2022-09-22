import React from "react"
import styled, { css } from "styled-components"
import { TimeIcon } from "../../assets/svg/static";
import { COLORS } from '../../constants'
import { borderAnimationM } from "../../constants/animations";
import { Click2 } from "../../assets/audio";

export default function CourseStepButton({ data, className, isActive, handleMouseOut, handleMouseOver, isCompleted }) {
    const { title, bgColor, image, time, rotate, top, left } = data

    const clickSound = new Audio(Click2)

    const handleClick = () => {
        clickSound.play();
    }

    return (
        <Container
            className={`${className} course-step-btn`}
            isCompleted={isCompleted}
            isActive={isActive}
            bgColor={bgColor}
            image={image}
            top={top}
            left={left}
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseOver}
            onClick={() => handleClick()}>
            <Circle>
                {isActive
                    ? <CircleContent style={{color: COLORS.white}}>
                        <Title>{title}</Title>
                        <Time>
                            <img src={TimeIcon} alt="timeIcon"/>
                            <TimeText>{time}</TimeText>
                        </Time>
                    </CircleContent>
                    : <Text style={isCompleted === true ? {color: COLORS.white} : {color: COLORS.blue_text}}>{title}</Text>
                }
            </Circle>
            <AnimateCircle rotate={rotate}/>
            { data.modal &&
                // eslint-disable-next-line react/no-array-index-key
                data.modal.map((item, index) => <Point key={index} top={item.top} left={item.left}/>)
            }
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

const CircleContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

const Point = styled.div`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
`

const Container = styled.div`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    width: fit-content;
    height: fit-content;
    transition: all 0.3s;

    ${(props) =>
    props.isActive === true &&
        css`
        z-index: 3;
        transform: scale(1.75);
        ${AnimateCircle} {
            background-color: ${props.bgColor};
            opacity: 0.5;
        }
        ${Circle} {
            background-image: url(${props.image});
            background-repeat: no-repeat;
            background-size: contain;
            background-color: unset;
        }
        ${CircleContent} {
            bottom: -15px;
            position: absolute;
            min-height: 160px;
            width: 240px;
            transform: scale(0.6);
            justify-content: center;
        }
        ${Point} {
            background-color: ${props.bgColor};
            opacity: 0.5;
        }
        `
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
        }
        ${Point} {
            background-color: ${props.bgColor};
            opacity: 0.5;
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
    line-height: 23px;
    font-weight: 700;
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