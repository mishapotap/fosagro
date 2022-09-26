import React from "react"
import styled, { css } from "styled-components"
import { TimeIcon } from "../../assets/svg/static"
import { COLORS, DEVICE } from "../../constants"
import { borderAnimationM } from "../../constants/animations"
import { Click2 } from "../../assets/audio"

export default function CourseStepButton({
    data,
    className,
    isActive,
    handleMouseOut = () => {},
    handleMouseOver = () => {},
    isCompleted = false,
}) {
    const { title, bgColor, image, time, rotate, top, left } = data

    const clickSound = new Audio(Click2)

    const handleClick = () => {
        clickSound.play()
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
            onClick={() => handleClick()}
        >
            <ContainerInner>
                <Circle>
                    {isActive ? (
                        <CircleContent style={{ color: COLORS.white }}>
                            <Title className="course-step-btn-title">{title}</Title>
                            <Time>
                                <img src={TimeIcon} alt="timeIcon" />
                                <TimeText>{time}</TimeText>
                            </Time>
                        </CircleContent>
                    ) : (
                        <Text
                            style={
                                isCompleted === true
                                    ? { color: COLORS.white }
                                    : { color: COLORS.blue_text }
                            }
                        >
                            {title}
                        </Text>
                    )}
                </Circle>
                <AnimateCircle rotate={rotate} />
                {data.modal &&
                    data.modal.map((item, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Point key={index} top={item.top} left={item.left} />
                    ))}
            </ContainerInner>
        </Container>
    )
}

const ContainerInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const AnimateCircle = styled.div`
    z-index: 1;
    position: absolute;
    top: -1%;
    left: -3%;
    width: 106.4%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    animation: ${borderAnimationM} 10s linear infinite;
    transform: rotate(${(props) => `${props.rotate}deg`});
    transition: all 0.3s;
`

const Circle = styled.div`
    z-index: 2;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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
    width: 150px;
    transition: all 0.3s;

    @media ${DEVICE.laptopM} {
        width: 135px;
    }

    &:after {
        display: block;
        padding-top: 100%;
        content: "";
    }

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
                position: absolute;
                margin-top: 20px;
                width: 160%;
                transform: scale(0.6);
                justify-content: center;
            }
            ${Point} {
                background-color: ${props.bgColor};
                opacity: 0.5;
            }
        `}
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
            }
        `}
`

const Text = styled.span`
    max-width: 89.6%;
    text-align: center;
    /* text */
    font-family: "FocoBold";
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    text-align: center;

    @media ${DEVICE.laptopM} {
        font-size: 14px;
    }
`

const Title = styled.div`
    max-width: 89.6%;
    margin-bottom: 13px;
    font-family: "FocoBold";
    font-size: 1.1vw;
    line-height: 1.09;
    font-weight: 700;
    text-align: center;

    @media ${DEVICE.laptopM} {
        font-size: 17px;
    }
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
    font-family: "FocoBold";
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;

    @media ${DEVICE.laptopM} {
        font-size: 13px;
    }
`
