import React, { useEffect, useState, useRef } from "react"
import styled, { css } from "styled-components"
import { SliderCircleM, SliderCircleS } from "../../assets/svg"
import { DEVICE } from "../../constants"

// eslint-disable-next-line
import "swiper/css"
// eslint-disable-next-line
import "swiper/css/effect-fade"
import { CourseProgressStore } from "../../store"
import { showContent } from "../../constants/animations"

// раньше это было реализовано с помощью слайдера (swiper), но я переделала его как анимацию,
// потому что нужно было делать его остановку при остановке аудио
// (с swiper были проблемы с этим - после остановки autoplay, когда заново включаешь его,
// сбрасывается время, которое прошло, а нам надо чтобы все картинки проходили за время аудио)

export default function Slider({
    // size - это не про размер самого слайдера, слайдер занимает все пространство родителя
    // это про размер внешнего круга, s - маленький (такой как в введении), m - большой
    // (как в общем слайдере раздела)
    size = "s",
    sliderColor,
    data,
    className,
    delayTime = 7000,
    width = "100%",
    restartAnim,
    pauseAnim,
}) {
    const [isActive, setIsActive] = useState(0)

    const slidesRef = useRef(null)
    const resetSettId = useRef(null)
    const containerRef = useRef(null)

    function resetAnimation(el) {
        el.classList.add("restart")

        resetSettId.current = setTimeout(() => {
            el.classList.remove("restart")
            resetSettId.current = null
        }, 200)
    }

    useEffect(() => {
        setIsActive(1)
        if (restartAnim && !resetSettId.current) {
            resetAnimation(containerRef.current)
        }
    }, [restartAnim])

    useEffect(() => {
        setIsActive(1)
    }, [])

    const color = sliderColor || CourseProgressStore.activeSectColor

    function handleAnimStart(index) {
        setIsActive(index + 1)
    }

    return (
        <Container
            width={width}
            ref={containerRef}
            className={`${className || ""} ${
                pauseAnim ? "anim-paused" : ""
            } circle-slider`}
        >
            <SliderContainer size={size}>
                {size === "s" ? (
                    <SliderCircleS
                        color={color}
                        time={delayTime}
                        activePathItem={isActive}
                    />
                ) : (
                    <SliderCircleM
                        color={color}
                        time={delayTime}
                        activePathItem={isActive}
                    />
                )}
                <SlidesWrapper>
                    <Slides ref={slidesRef}>
                        {data.map((item, index) => (
                            <Slide
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                                style={{
                                    animationDelay: `${
                                        ((index + 1) * delayTime) / 1000
                                    }s`,
                                    animationName:
                                        index + 1 === data.length && "d",
                                }}
                            >
                                <ImgWrapper
                                    style={{
                                        animationDelay: `${
                                            (index * delayTime) / 1000
                                        }s`,
                                        animationName: index === 0 && "m",
                                    }}
                                    onAnimationStart={() =>
                                        handleAnimStart(index)
                                    }
                                >
                                    <img src={item.source} alt={item.alt} />
                                </ImgWrapper>
                            </Slide>
                        ))}
                    </Slides>
                </SlidesWrapper>
            </SliderContainer>
        </Container>
    )
}

const Container = styled.div`
    max-width: ${({ width }) => width};
    transition: 0.5s;

    &.restart {
        animation: none !important;

        opacity: 0;

        * {
            animation: none !important;
        }
    }
`

const Slide = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    animation: ${showContent} 0.7s reverse forwards;
`

const SlidesWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    width: 83%;

    &::after {
        content: "";
        display: block;
        padding-top: 100%;
    }

    @media ${DEVICE.mobile} {
        position: relative;
        top: 0;
        left: 50%;
        transform: translate(-50%);
    }
`

const Slides = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
`

const ImgWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    animation: ${showContent} 0.6s both;

    img {
        display: block;
        border-radius: 50%;
        object-fit: contain;
    }
`

const SliderContainer = styled.div`
    position: relative;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    overflow: hidden;

    ${(props) =>
        props.size === "s" &&
        css`
            ${SlidesWrapper} {
                width: 83%;

                @media ${DEVICE.mobile} {
                    width: 95%;
                }
            }
        `}

    ${(props) =>
        props.size === "m" &&
        css`
            ${SlidesWrapper} {
                width: 76%;
                margin-top: -7%;
                margin-right: -6%;

                @media ${DEVICE.mobile} {
                    margin: 0;
                    width: 95%;
                }
            }
        `}
`
