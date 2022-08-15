import React, { useState } from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// eslint-disable-next-line
import 'swiper/css';
// eslint-disable-next-line
import 'swiper/css/pagination';

import { CourseSlider1, CourseSlider2, CourseSlider3 } from "../../assets/images"

export default function Slider({count = 3}) {

    const [paginationRef, setPaginationRef] = useState(null);

    // const pagination = {
    //     "clickable": true,
    //     // eslint-disable-next-line
    //     "renderBullet": function (index, className) {
    //         // eslint-disable-next-line
    //         return `<span class=${className}>${(index + 1)}</span>`;
    //     }
    // }
    return(
        <SwiperContainer>
            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    el: paginationRef,
                }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                count={count}
            >
                <SwiperSlide><img src={CourseSlider1} alt="image1"/></SwiperSlide>
                <SwiperSlide><img src={CourseSlider2} alt="image1"/></SwiperSlide>
                <SwiperSlide><img src={CourseSlider3} alt="image1"/></SwiperSlide>
            </Swiper>
            <div ref={(node) => setPaginationRef(node)} className='pagination'/>

        </SwiperContainer>
    )
}

const SwiperContainer = styled.div`
    .swiper-pagination-bullet {
      display: block;
    }
`