/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { Pagination, Navigation, EffectFade } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import CurvedModal from "./CurvedModal"
import { ArrowLeft, ArrowRight } from "../../assets/svg"
import Slider from "./Slider"
import { COLORS, DEVICE } from "../../constants"
import { ContentBlock, Title, Text, Note } from "./Content"
import AudioPlayer from "./AudioPlayer"

// TODO уточнить, как должно вести себя аудио при переключении слайдов, и добавить логику
// (может при возвращении на прошлые слайды не включать аудио автоматически?)

// TODO сделать ссылки как в CoursePage (нужно для 4 сценария)

export default function IntroModal({ isOpen, onClose, items }) {
    function renderCustom(swiper, current, total) {
        return /* html */ `
            <span class="cur-slide-number">${current}</span>
            <span class="decor"></span>
            <span class="total-slides-number">${total}</span>
        `
    }

    const [slidersAutoplay, setSlidersAutoplay] = useState({})
    const [slidersAudio, setSlidersAudio] = useState({})
    const modalContent = useRef(null)

    function setInitialState() {
        const initSliderAutoplState = {}
        const initAudiosState = {}

        // изначально выключить автоплэй у каждого круглого слайдера кроме того, что на первом слайде
        items.forEach((i, index) => {
            if (index === 0) {
                initSliderAutoplState[index] = true
            } else {
                initSliderAutoplState[index] = false
            }
        })

        // изначально выключить проигрывание аудио у всех слайдов, кроме первого
        items.forEach((i, index) => {
            if (index === 0) {
                initAudiosState[index] = true
            } else {
                initAudiosState[index] = false
            }
        })

        setSlidersAudio(initAudiosState)
        setSlidersAutoplay(initSliderAutoplState)
    }

    useEffect(() => {
        setInitialState()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (isOpen) {
            setInitialState()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])

    // при смене слайда
    function handleSlideChange(swiper) {
        const { activeIndex, previousIndex } = swiper

        setSlidersAutoplay((prevState) => ({
            ...prevState,
            // ставим новому круглому слайдеру автоплэй
            [activeIndex]: true,
            // убираем у старого круглого слайдера автоплэй
            [previousIndex]: false,
        }))

        setSlidersAudio((prevState) => ({
            ...prevState,
            // включаем аудио у нового слайда
            [activeIndex]: true,
            // выключаем аудио у старого слайда
            [previousIndex]: false,
        }))
    }

    return (
        <StyledModal isOpen={isOpen} onClose={onClose}>
            <ModalContent ref={modalContent}>
                {items.length > 1 && (
                    <Controls>
                        <div className="pagination" />
                        <SwiperBtnsContainer>
                            <CircleBtn className="button-prev">
                                <ArrowLeft color={COLORS.orange} />
                            </CircleBtn>
                            <CircleBtn className="button-next">
                                <ArrowRight color={COLORS.orange} />
                            </CircleBtn>
                        </SwiperBtnsContainer>
                    </Controls>
                )}
                <SliderWrapper>
                    <Swiper
                        modules={[Pagination, Navigation, EffectFade]}
                        navigation={{
                            prevEl: ".button-prev",
                            nextEl: ".button-next",
                        }}
                        pagination={{
                            el: ".pagination",
                            type: "custom",
                            renderCustom,
                        }}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        speed={600}
                        onSlideChange={handleSlideChange}
                        className="swiper-intro"
                        allowTouchMove={false}
                    >
                        {items.map(({ text, audio, images, note }, index) => (
                            <SwiperSlide
                                key={index}
                                className="swiper-slide-intro"
                            >
                                <SlideInner>
                                    <SlideCols>
                                        <SlideCol className="player">
                                            {audio && (
                                                <AudioPlayer
                                                    src={audio}
                                                    isPlaying={
                                                        slidersAudio[index]
                                                    }
                                                />
                                            )}
                                        </SlideCol>

                                        <SlideCol className="title">
                                            <StyledTitle color={COLORS.orange}>
                                                Введение
                                            </StyledTitle>
                                        </SlideCol>

                                        <SlideCol className="content">
                                            <StyledContentBlock color={COLORS.orange}>
                                                <Text data={{text}} />
                                                {note && (
                                                    <Note
                                                        data={{ text: note }}
                                                    />
                                                )}
                                            </StyledContentBlock>
                                        </SlideCol>

                                        <SlideCol className="slider">
                                            <StyledCircleSlider
                                                size="s"
                                                sliderColor={COLORS.orange}
                                                data={images}
                                                makeAutoplay={
                                                    slidersAutoplay[index]
                                                }
                                                index={index}
                                            />
                                        </SlideCol>
                                    </SlideCols>
                                </SlideInner>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SliderWrapper>
            </ModalContent>
        </StyledModal>
    )
}

const StyledModal = styled(CurvedModal)`
    .modal-content {
        align-items: flex-end;
        padding-bottom: 27px;
        padding-top: 14vh;

        @media ${DEVICE.laptopM} {
            padding-bottom: 20px;
            padding-top: 12vh;
        }

        @media ${DEVICE.laptop} {
            padding-bottom: 0;
        }

        @media ${DEVICE.laptopS} {
            padding: 90px 20px 0;
        }
    }

    .pagination {
        display: flex;
        align-items: center;

        font-size: 1.3vw;
        font-family: "FocoBold";
        color: ${COLORS.orange};

        @media ${DEVICE.laptopM} {
            font-size: 1.1vw;
        }

        @media ${DEVICE.laptop} {
            font-size: 16px;
        }

        .decor {
            display: inline-block;
            width: 2.6vw;
            height: 2px;
            background-color: ${COLORS.orange};
            margin: 0 8px;

            @media ${DEVICE.laptopS} {
                width: 25px;
            }
        }
    }
`

const StyledCircleSlider = styled(Slider)`
    @media ${DEVICE.laptopS} {
        max-width: 80%;
        margin: 0 auto;
    }
    @media ${DEVICE.mobile} {
        max-width: 100%;
        margin: 0 auto;
    }
`

const Controls = styled.div`
    position: absolute;
    left: 38%;
    bottom: 4%;
    z-index: 30;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;

    background-color: ${COLORS.white};
    border-radius: 20px;

    @media ${DEVICE.laptop} {
        bottom: 0;
    }

    @media ${DEVICE.laptopS} {
        bottom: 0;
        transform: translateY(-60%);
        left: auto;
        padding: 7px;
        right: 0;
    }

    .pagination {
        margin-bottom: 20px;

        @media ${DEVICE.laptopM} {
            margin-bottom: 10px;
        }
    }
`

const StyledContentBlock = styled(ContentBlock)`
    .content > * {
        margin-bottom: 23px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const StyledTitle = styled(Title)`
    margin-bottom: 5.5vh;

    @media ${DEVICE.laptopS} {
        margin-bottom: 30px;
    }
`

const CircleBtn = styled.button`
    border-radius: 50%;

    &.button-prev {
        margin-right: 1.45vw;

        @media ${DEVICE.laptop} {
            margin-right: 25px;
        }
    }

    &.swiper-button-disabled {
        opacity: 0.5;
        pointer-events: none;

        svg {
            cursor: auto;
        }
    }
`

const SlideInner = styled.div`
    height: 100%;
    max-width: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0;
    }
`

const SwiperBtnsContainer = styled.div`
    display: flex;

    @media ${DEVICE.laptopM} {
        svg {
            width: 35px;
        }
    }

    @media ${DEVICE.laptopS} {
        svg {
            width: 45px;
        }
    }
`

// решила использовать grid, чтобы можно переместить аудиоплеер в конец на мобилке
const SlideCols = styled.div`
    display: grid;
    grid-template: 11vh auto / 7% 41% 52%;

    @media ${DEVICE.laptopS} {
        grid-template: auto auto auto auto / 100%;
    }
`

const SlideCol = styled.div`
    &.title {
        grid-area: 1 / 2 / 2 / 3;

        @media ${DEVICE.laptopS} {
            grid-area: 1 / 1 / 2 / 2;
        }
    }

    &.player {
        grid-area: 2 / 1 / 3 / 2;
        justify-self: center;

        @media ${DEVICE.laptopS} {
            justify-self: flex-start;
            grid-area: 4 / 1 / 5 / 2;
            margin-bottom: 300px;
        }
    }

    &.content {
        grid-area: 2 / 2 / 3 / 3;
        padding-right: 23px;

        @media ${DEVICE.laptopS} {
            grid-area: 2 / 1 / 3 / 2;
            margin-bottom: 50px;
            padding-right: 0;
        }
    }

    &.slider {
        grid-area: 1 / 3 / 3 / 4;
        align-self: flex-end;
        padding-top: 24px;

        @media ${DEVICE.laptopS} {
            grid-area: 3 / 1 / 4 / 2;
            margin-bottom: 30px;
        }
    }
`

const SliderWrapper = styled.div`
    max-width: 100%;
    max-height: 100%;
    height: 100%;

    .swiper-intro,
    .swiper-wrapper,
    .swiper-slide-intro {
        height: 100%;
        max-height: 100%;
    }

    .swiper-slide-intro {
        display: flex;
        align-items: flex-end;
    }
`

const ModalContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
`
