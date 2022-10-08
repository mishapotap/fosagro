import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import { objectSliderData } from "../../data"
import { COLORS, DEVICE } from "../../constants"
// import { ArrowSlider, SliderIcons, LinkIcon } from "../../assets/svg"
import { ArrowSlider, SliderIcons } from "../../assets/svg"

// eslint-disable-next-line
import "swiper/css"
// eslint-disable-next-line
import "swiper/css/navigation"

export default function ObjectSlider({
    data: { type = "OOH" } = {},
    color = COLORS.green_dark
}) {
    return (
        <Container>
            <SliderTitle>
                Нажмите на интересующую цель, чтобы узнать подробнее на сайте{" "}
                {type === "OOH" ? "OOH" : "ФосАгро"}
            </SliderTitle>
            <Swiper
                modules={[Navigation]}
                loop="true"
                slidesPerView={1}
                navigation={{
                    prevEl: ".button-prev",
                    nextEl: ".button-next",
                }}
                speed={500}
            >
                <SliderButton className="button-prev">
                    <ArrowSlider color={color} />
                </SliderButton>
                {/* для слайдера ООН */}
                {type === "OOH" &&
                    objectSliderData.objectOOHSlider.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Slide>
                                {item.data.map((dataItem) => (
                                    <CustomLink
                                        href={dataItem.link}
                                        key={dataItem.alt}
                                        target="_blank"
                                        className="OOH"
                                        data-ext-link
                                    >
                                        <img
                                            src={dataItem.source}
                                            alt={dataItem.alt}
                                        />
                                        {/* <LinkIcon className="link-object"/> */}
                                    </CustomLink>
                                ))}
                            </Slide>
                        </SwiperSlide>
                    ))}

                {/* для слайдера fosagro */}
                {type === "fosagro" &&
                    objectSliderData.objectFosagroSlider.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Slide>
                                {item.data.map((dataItem) => (
                                    <CustomLink
                                        href={dataItem.link}
                                        key={dataItem.color}
                                        target="_blank"
                                        className="fosagro"
                                        data-ext-link
                                    >
                                        <LinkContant
                                            color={dataItem.color}
                                            border={color}
                                        >
                                            <SliderIcons
                                                name={dataItem.name}
                                                className="icon"
                                            />
                                            <Title>{dataItem.title}</Title>
                                            <Description>
                                                {dataItem.description}
                                            </Description>
                                        </LinkContant>
                                        {/* <LinkIcon className="link-object"/> */}
                                    </CustomLink>
                                ))}
                            </Slide>
                        </SwiperSlide>
                    ))}
                <SliderButton className="button-next">
                    <ArrowSlider position="right" color={color} />
                </SliderButton>
            </Swiper>
        </Container>
    )
}

const Container = styled.div`
    max-width: 50%;
    width: 100%;
    max-height: 30vw;
    height: 100%;

    .swiper {
        padding: 15px;
    }

    .swiper-wrapper,
    .swiper-slide {
        height: 100%;
        width: 100%;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        display: block;
        width: 10.21vw;
        @media ${DEVICE.laptopS} {
            width: 22vw;
        }
    }

    .button-next {
        position: absolute;
        bottom: calc(50% - 29px);
        right: 5px;
        z-index: 20;
    }

    .button-prev {
        position: absolute;
        bottom: calc(50% - 29px);
        left: 5px;
        z-index: 20;
    }

    @media ${DEVICE.laptopS} {
        max-width: 100%;
        max-height: 59vw;
    }
`

const SliderTitle = styled.div`
    font-family: "FocoRegular", sans-serif;
    color: ${COLORS.blue};
    font-size: 1.2vw;
    text-align: center;
    line-height: 1.4;

    max-width: 22vw;
    margin: 0 auto 5.5vh;

    @media ${DEVICE.laptopS} {
        font-size: 18px;
        max-width: none;
        margin-bottom: 30px;
    }

    @media ${DEVICE.mobile} {
        font-size: 16px;
    }
`

const Slide = styled.div`
    display: grid;
    max-width: fit-content;
    column-gap: 2.34vw;
    row-gap: 1.77vw;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
`

const CustomLink = styled.a`
    position: relative;
    background-color: ${COLORS.white};

    &.OOH {
        transition: all 0.3s linear;
        background-color: transparent;

        &:hover {
            transform: scale(1.1);

            @media ${DEVICE.laptopS} {
                transform: none;
            }
        }
    }

    /* .link-object {
        position: absolute;
        bottom: 5px;
        right: 5px;

        width: 1.5vw;
    } */
`

const SliderButton = styled.button`
    width: 3vw;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

    svg {
        width: 100%;
    }

    @media ${DEVICE.laptopS} {
        width: 5vw;
    }
`

const Title = styled.h6`
    margin-top: 0.42vw;
    font-weight: 700;
    font-size: 1.1vw;
    line-height: 1.2vw;
    text-transform: uppercase;

    text-align: center;

    @media ${DEVICE.laptopS} {
        font-size: 2.1vw;
        line-height: 2.4vw;
    }
`

const Description = styled.span`
    font-family: "CalibriLight";
    font-weight: 300;
    font-size: 0.9vw;
    line-height: 1.1vw;
    text-align: center;

    color: ${COLORS.black};

    @media ${DEVICE.laptopS} {
        font-size: 1.9vw;
        line-height: 2.3vw;
    }
`

const LinkContant = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10.21vw;
    height: 10.21vw;
    padding: 0.57vw;

    border: 2px solid ${(props) => props.border};
    border-radius: 12px;

    transition: all 0.3s linear;

    .icon {
        background-color: ${(props) => props.color};
    }

    ${Title} {
        color: ${(props) => props.color};
    }

    &:hover {
        border: 2px solid ${(props) => props.color};
        background-color: ${(props) => props.color};

        ${Title} {
            color: ${COLORS.white};
        }

        ${Description} {
            color: ${COLORS.white};
        }

        .icon {
            background-color: ${COLORS.white};
            svg {
                path {
                    fill: ${(props) => props.color};
                    stroke: ${(props) => props.color};
                }
            }
        }
    }

    @media ${DEVICE.laptopS} {
        width: 22vw;
        height: 22vw;
        padding: 1.1vw;
    }
`
