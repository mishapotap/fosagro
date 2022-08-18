import React, { useState } from "react"
import styled, { css } from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectFade, Autoplay } from 'swiper'
import { DEVICE } from "../../constants"

// eslint-disable-next-line
import 'swiper/css';
// eslint-disable-next-line
import 'swiper/css/effect-fade';

export default function Slider({size, children, sliderColor, data}) {

    // TODO сделать адаптив
    const [isActive, setIsActive] = useState(1);

    const addActivePath = ( swiper ) => {
        setIsActive(swiper.realIndex + 1);
    };

    const delayTime = 10000;

    return(
        <SliderContainer size={size}>
            {React.cloneElement(children, {color: sliderColor, time: delayTime, activePathItem: isActive})}
            <SwiperContainer>
                <Swiper
                    modules={[Pagination, EffectFade, Autoplay]}
                    effect="fade"
                    loop="true"
                    autoplay={{
                        delay: delayTime,
                        disableOnInteraction: false,
                        waitForTransition: false
                    }}
                    slidesPerView={1}
                    onSlideChange={(swiper) => addActivePath(swiper)}
                >
                    { data.map(item => 
                        <SwiperSlide key={item.alt}>
                            <img src={item.source} alt={item.alt}/>
                        </SwiperSlide>)
                    }
                </Swiper>
            </SwiperContainer>
        </SliderContainer>
    )
}

const SwiperContainer = styled.div`
    position: static;
    width: 100%;
    img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: contain;
    }
    @media ${DEVICE.mobileL} {
        position: absolute;
    }
`;

const SliderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    ${(props) => props.size === "m" && css`
        @media ${DEVICE.mobileL} {
        max-width: 50vw;
        max-height: 47vw;
        overflow: hidden;
        ${SwiperContainer} {
            max-width: 38vw;
            top: 2.3vw;
            right: 5vw;
            img {
                max-width: 38vw;
                max-height: 38vw;
            }
        }
    }
  `}
  ${(props) => props.size === "s" && css`
        @media ${DEVICE.mobileL} {
            max-width: 41.4vw;
            max-height: 41.1vw;
            overflow: hidden;
            ${SwiperContainer} {
                top: 3.3vw;
                right: 3.65vw;
                max-width: 34vw;
                img {
                    max-width: 34vw;
                    max-height: 34vw;
                }
            }
        }
  `}
`