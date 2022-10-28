import React from "react"
import styled, { keyframes } from "styled-components"
import { COLORS, DEVICE, ISENG } from "../../constants"
import { borderAnimationM } from "../../constants/animations"
import { ArrowDown } from "../../assets/svg/static"

export default function MenuButton({
    rotate = 0,
    bgColor = COLORS.white,
    bgAnimateColor = COLORS.white,
    index,
    text,
    duration = "",
    activeChapter = false,
    className = "",
}) {
    return (
        <Wrapper className={`${className} ${activeChapter ? "active" : ""} menu-button-wrapper`}>
            <Container className="menu-button">
                <Inner>
                    <Circle bgColor={bgColor}>
                        <CircleContetnt
                            style={{ color: COLORS.white }}
                            className="menu-btn-content"
                        >
                            <IndexContainer>
                                <Index className="menu-btn-index">
                                    {index}
                                </Index>
                                <Duration className="menu-btn-duration">
                                    {duration}
                                </Duration>
                            </IndexContainer>
                            <Text className="menu-btn-text">{text}</Text>
                        </CircleContetnt>
                    </Circle>
                    <AnimateCircle
                        rotate={rotate}
                        bgAnimateColor={bgAnimateColor}
                    />
                </Inner>
            </Container>
            {activeChapter && (
                <ActiveChapter>
                    <ActiveChapterMessage>
                        {ISENG ? "You are learning" : "Вы сейчас изучаете"}
                    </ActiveChapterMessage>
                    <ActiveChapterIcon src={ArrowDown} alt={ISENG ? "arrow down" : "стрелка вниз"} />
                </ActiveChapter>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;

    width: 13.4vw;

    @media ${DEVICE.laptopS} {
        width: 21vw;
    }
    @media ${DEVICE.mobile} {
        width: 34vw;
    }

    &.with-active-chapter {
        &.active {
            padding-top: 100px;

            @media ${DEVICE.laptopM} {
                padding-top: 78px;
            }
        }
    }
`

const ActiveChapter = styled.div`
    position: absolute;
    top: 0;
    transform: translate(-50%);
    left: 50%;

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ActiveChapterMessage = styled.div`
    margin-bottom: 17px;

    font-family: FocoBold, sans-serif;
    font-size: 1.1vw;
    color: ${COLORS.white};
    text-align: center;

    @media ${DEVICE.laptopS} {
        font-size: 16px;
    }
`

const arrowAnim = keyframes`
    30% {
        transform: translateY(6px);
    }

    55% {
        transform: none;
    }
`

const ActiveChapterIcon = styled.img`
    width: 1.7vw;
    animation: ${arrowAnim} 3s both infinite;

    @media ${DEVICE.laptopS} {
        width: 20px;
    }
`

const AnimateCircle = styled.div`
    z-index: 1;
    position: absolute;
    top: -1%;
    left: -3%;
    width: 106.4%;
    height: 100%;
    background: ${(props) => props.bgAnimateColor || null};
    animation: ${borderAnimationM} 10s linear infinite;
    transform: rotate(${(props) => `${props.rotate}deg` || 0});
    transition: all 0.3s;
`

const Circle = styled.div`
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: ${(props) => props.bgColor};
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
`

const CircleContetnt = styled.div`
    margin-top: 1.3vw;
    margin-left: 0.25vw;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 75%;

    @media ${DEVICE.laptopS} {
        margin-top: 3vw;
    }

    @media ${DEVICE.mobile} {
        margin-top: 6vw;
    }
`

const IndexContainer = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: start;
`

const Duration = styled.div`
    margin-left: 5px;
    font-size: 0.94vw;
    line-height: 3.82;
    text-transform: lowercase;

    @media ${DEVICE.laptopS} {
        font-size: 1.8vw;
    }

    @media ${DEVICE.mobile} {
        font-size: 2.5vw;
    }
`

const Index = styled.div`
    font-weight: 800;
    font-size: 3.6vw;
    line-height: 1.27;

    @media ${DEVICE.laptopS} {
        font-size: 6vw;
    }

    @media ${DEVICE.mobile} {
        font-size: 8.1vw;
    }
`

const Text = styled.div`
    width: 100%;
    font-weight: 700;
    font-size: 0.94vw;
    line-height: 1.3;
    text-align: left;
    text-transform: uppercase;

    @media ${DEVICE.laptopS} {
        font-size: 1.42vw;
    }

    @media ${DEVICE.mobile} {
        font-size: 2.4vw;
    }
`

const Inner = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
`

const Container = styled.div`
    position: relative;
    transition: all 0.3s;
    width: 100%;

    &:after {
        display: block;
        padding-top: 100%;
        content: "";
    }

    &:hover {
        z-index: 2;
        transform: scale(1.15);
    }
`
