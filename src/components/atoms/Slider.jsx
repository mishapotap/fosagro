import React, { useEffect, useState, useRef } from "react"
import styled, { css } from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectFade, Autoplay } from "swiper"
import { SliderCircleM, SliderCircleS } from "../../assets/svg"
// eslint-disable-next-line no-unused-vars
import { COLORS, DEVICE } from "../../constants"

// eslint-disable-next-line
import "swiper/css"
// eslint-disable-next-line
import "swiper/css/effect-fade"
import { CourseProgressStore } from "../../store"

export default function Slider({
    // size - это не про размер самого слайдера, слайдер занимает все пространство родителя
    // это про размер внешнего круга, s - маленький (такой как в введении), m - большой
    // (как в общем слайдере раздела)
    size = "s",
    sliderColor,
    data,
    makeAutoplay = true,
    className,
    delayTime = 10000,
    width = "100%",
}) {
    const [isActive, setIsActive] = useState(0)
    const swiperRef = useRef(null)

    const addActivePath = (swiper) => {
        setIsActive(swiper.realIndex + 1)
    }

    useEffect(() => {
        if (makeAutoplay) {
            swiperRef.current.autoplay.start()
            setIsActive(swiperRef.current.realIndex + 1)
        } else {
            swiperRef.current.autoplay.stop()
            setIsActive(0)
        }
    }, [makeAutoplay])

    const color = sliderColor || CourseProgressStore.activeSectColor

    // для автоплэя
    const onInit = (swiper) => {
        swiperRef.current = swiper
    }

    return (
        <Container width={width} className={`${className || ''} circle-slider`}>
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
                <SwiperContainer>
                    <Swiper
                        modules={[Pagination, EffectFade, Autoplay]}
                        effect="fade"
                        loop="true"
                        onInit={onInit}
                        autoplay={{
                            delay: delayTime,
                            disableOnInteraction: false,
                            waitForTransition: false,
                        }}
                        slidesPerView={1}
                        onSlideChange={(swiper) => addActivePath(swiper)}
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.alt}>
                                <img src={item.source} alt={item.alt} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperContainer>
            </SliderContainer>
        </Container>
    )
}

const Container = styled.div`
    max-width: ${({ width }) => width};
`

const SwiperContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-wrapper,
    .swiper-slide {
        height: 100%;
        width: 100%;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        display: block;
        border-radius: 50%;
        object-fit: contain;
    }

    @media ${DEVICE.mobile} {
        position: static;
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
            img {
                width: 83%;

                @media ${DEVICE.mobile} {
                    width: 95%;
                }
            }
        `}

    ${(props) =>
        props.size === "m" &&
        css`
            img {
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
