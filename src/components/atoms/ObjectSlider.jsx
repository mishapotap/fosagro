import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import { objectSliderData } from "../../data"
import { COLORS, DEVICE } from "../../constants"
import { ArrowSlider, SliderIcons } from "../../assets/svg"

// eslint-disable-next-line
import "swiper/css"
// eslint-disable-next-line
import 'swiper/css/navigation'

export default function ObjectSlider({type = "OOH", color}) {
    return(
        <Container>
            <Swiper
                modules={[Navigation]}
                loop="true"
                // onInit={onInit}
                slidesPerView={1}
                navigation={{
                    prevEl: ".button-prev",
                    nextEl: ".button-next",
                }}
                speed={400}
            >
                <SliderButton className="button-prev">
                    <ArrowSlider color={color}/>
                </SliderButton>
                {/* для слайдера ООН */}
                {type === "OOH" && objectSliderData.objectOOHSlider.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Slide >
                            {item.data.map(dataItem => 
                                <CustomLink href={dataItem.link} key={dataItem.alt} target='_blank' className="OOH">
                                    <img src={dataItem.source} alt={dataItem.alt} />
                                </CustomLink>
                            )}
                        </Slide>
                    </SwiperSlide>
                ))}

                {/* для слайдера fosagro */}
                {type === "fosagro" && objectSliderData.objectFosagroSlider.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Slide>
                            {item.data.map(dataItem => 
                                <CustomLink href={dataItem.link} key={dataItem.color} target='_blank' className="fosagro">
                                    <LinkContant color={dataItem.color} border={color}>
                                        <SliderIcons name={dataItem.icon} clas="icon"/>
                                        <Title>{dataItem.title}</Title>
                                        <Description>{dataItem.description}</Description>
                                    </LinkContant>
                                </CustomLink>
                            )}
                        </Slide>
                    </SwiperSlide>
                ))}
                <SliderButton className="button-next">
                    <ArrowSlider position="right" color={color}/>
                </SliderButton>
            </Swiper>
        </Container>
    )
}

const Container = styled.div`
    max-width: 50%;
    width: 100%;
    max-height: 23.5vw;
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
        justify-content: center;
        align-items: center;
    }

    img {
        display: block;
        width: 10.21vw;
        @media ${DEVICE.mobile} {
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


    @media ${DEVICE.mobile} {
        max-width: 100%;
        max-height: 50vw;
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
    &.OOH {
        &:hover {
            transform: scale(1.1);
            transition: all 0.3s linear;
        }
    }
`

const SliderButton = styled.button`
    width: 3vw;
    cursor: pointer;
    svg {
        width: 100%;
    }

    @media ${DEVICE.mobile} {
        width: 5vw;
    }
`

const Title = styled.h6`
    margin-top: 0.42vw;
    font-weight: 700;
    font-size: 1.1vw;
    line-height: 1.2vw;

    text-align: center;

    @media ${DEVICE.mobile} {
        font-size: 2.1vw;
        line-height: 2.4vw;
    }
`

const Description = styled.span`
    font-family: 'CalibriLight';
    font-weight: 300;
    font-size: 0.9vw;
    line-height: 1.1vw;
    text-align: center;

    color: ${COLORS.black};

    @media ${DEVICE.mobile} {
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

    ${ Title } {
        color: ${(props) => props.color};
    }

    &:hover {
        border: 2px solid ${(props) => props.color};
        background-color: ${(props) => props.color};

        ${ Title } {
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

    @media ${DEVICE.mobile} {
        width: 22vw;
        height: 22vw;
        padding: 1.1vw;
    }
`