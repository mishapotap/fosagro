import React, { useState } from "react"
import styled, { css } from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper';

// eslint-disable-next-line
import 'swiper/css';
// eslint-disable-next-line
import 'swiper/css/effect-fade';

export default function Slider({size, children, sliderColor, data}) {
    const [isActive, setIsActive] = useState(1);

    const addActivePath = ( swiper ) => {
        setIsActive(swiper.activeIndex + 1);
    };

    const delayTime = 10000;

    return(
        <SliderContainer size={size}>
            {React.cloneElement(children, {color: sliderColor, time: delayTime, activePathItem: isActive})}
            <SwiperContainer>
                <Swiper
                    modules={[Pagination, EffectFade, Autoplay]}
                    effect="fade"
                    autoplay={{
                        delay: delayTime,
                        disableOnInteraction: false,
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
    position: absolute;
    width: 100%;
    img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: contain;
    }
`;

const SliderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    ${(props) => props.size === "m" && css`
        max-width: 970px;
        max-height: 900px;
        overflow: hidden;
        ${SwiperContainer} {
            top: 45px;
            right: 96px;
            max-width: 732px;
            img {
                max-width: 732px;
                max-height: 732px;
            }
        }
  `}
  ${(props) => props.size === "s" && css`
        max-width: 795px;
        max-height: 790px;
        overflow: hidden;
        ${SwiperContainer} {
            top: 63px;
            right: 70px;
            max-width: 655px;
            img {
                max-width: 655px;
                max-height: 655px;
            }
        }
  `}
`