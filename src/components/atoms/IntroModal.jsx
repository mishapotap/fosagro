/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { Pagination, Navigation, EffectFade } from "swiper"
import { observer } from "mobx-react-lite"
import { Swiper, SwiperSlide } from "swiper/react"
import { Link } from "react-router-dom"
import CurvedModal from "./CurvedModal"
import { ArrowLeft, ArrowRight } from "../../assets/svg"
import Slider from "./Slider"
import { COLORS, DEVICE } from "../../constants"
import { ContentBlock, Title, Text, Note } from "./Content"
import AudioPlayer from "./AudioPlayer"
import ExtLinks from "./ExtLinks"
import { CourseProgressStore, ModalStore, SoundStore } from "../../store"
import SendButton from "./SendButton"

function IntroModal({ isOpen, onClose, items }) {
    function renderCustom(swiper, current, total) {
        return /* html */ `
            <span class="cur-slide-number">${current}</span>
            <span class="decor"></span>
            <span class="total-slides-number">${total}</span>
        `
    }

    const [slidesPauseAnim, setSlidesPauseAnim] = useState({})
    const [slidersAudio, setSlidersAudio] = useState({})
    const [slidersDelay, _setSlidersDelay] = useState({})
    const [restartSliderAnim, setRestartSliderAnim] = useState({})

    const [makePausedBtn, setMakePausedBtn] = useState(true)
    const [showPausedBtn, setShowPausedBtn] = useState(false)

    const [dontPlayOnClose, setDontPlayOnClose] = useState(false)

    const activeSlideIdx = useRef(0)

    const modalContentRef = useRef(null)
    const swiperRef = useRef(null)
    const slidersDelayRef = useRef(null)

    const autoPausedAudio = useRef([])

    const audiosEndedRef = useRef(false)

    function setSlidersDelay(val) {
        slidersDelayRef.current = val
        _setSlidersDelay(val)
    }

    function setInitialState() {
        const initSlidesPauseAnim = {}
        const initAudiosState = {}
        const initDelayState = {}
        const initAudioEndedState = {}

        items.forEach((i, index) => {
            initSlidesPauseAnim[index] = true
            initAudiosState[index] = false
            initAudioEndedState[index] = false
            initDelayState[index] = 5000
        })

        setSlidersAudio(initAudiosState)
        setSlidesPauseAnim(initSlidesPauseAnim)
        setSlidersDelay(initDelayState)
        audiosEndedRef.current = initAudioEndedState
    }

    useEffect(() => {
        setInitialState()

        return () => {
            // ! неправильно
            // console.log('сбросить аудио интро');
            // SoundStore.resetIntroAudios()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (isOpen) {
            setInitialState()
            setMakePausedBtn(true)
        } else {
            setMakePausedBtn(false)
            if (modalContentRef.current) {
                const audios = modalContentRef.current.querySelectorAll("audio")
                setTimeout(() => {
                    SoundStore.resetIntroAudios()
                }, 700)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])

    useEffect(() => {
        if (ModalStore.userGoExtLink) {
            // показать на активном
            // setShowPausedBtn(true)
            // setShowPausedBtn((prevState) => ({...prevState, [activeSlideIdx.current]: true}))
            ModalStore.setUserGoExtLink(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalStore.userGoExtLink])

    function handleOpenAnimEnd() {
        setTimeout(() => {
            setSlidesPauseAnim(() => ({ ...slidesPauseAnim, 0: false }))
            setSlidersAudio(() => ({ ...slidersAudio, 0: true }))
        }, 1000)
    }

    // при смене слайда
    function handleSlideChange(swiper) {
        const { activeIndex, previousIndex } = swiper

        activeSlideIdx.current = activeIndex

        setShowPausedBtn(true)
        setTimeout(() => {
            setShowPausedBtn(false)
        }, 50)

        setSlidesPauseAnim((prevState) => ({
            ...prevState,
            // ставим новому круглому слайдеру автоплэй
            [activeIndex]: false,
            // убираем у старого круглого слайдера автоплэй
            [previousIndex]: true,
        }))

        setSlidersAudio((prevState) => ({
            ...prevState,
            // включаем аудио у нового слайда
            [activeIndex]: true,
            // выключаем аудио у старого слайда
            [previousIndex]: false,
        }))
    }

    function handleStartClick() {
        CourseProgressStore.setMediaElFromIntro()
        CourseProgressStore.setNewSectAudioFromIntro()
    }

    function handleClose() {
        CourseProgressStore.setIntroPassed()
        onClose()
        handleStartClick()
    }

    function handleAudioEnded(index) {
        if (index === 0 && swiperRef.current) {
            swiperRef.current.slideNext()
        }
        audiosEndedRef.current = { ...audiosEndedRef.current, [index]: true }
        setSlidesPauseAnim((prev) => ({ ...prev, [index]: false }))
    }

    function handleInit(swiper) {
        swiperRef.current = swiper
    }

    function handleAudioLoaded({ target }, index) {
        const delayTime = (target.duration * 1000) / 3
        setSlidersDelay({ ...slidersDelayRef.current, [index]: delayTime })
    }

    function handleAudioPause(index) {
        setSlidesPauseAnim((prevVal) => ({ ...prevVal, [index]: true }))
    }

    function handleAudioPlay(index) {
        if (audiosEndedRef.current[index]) {
            setRestartSliderAnim((prev) => ({ ...prev, [index]: true }))
            setTimeout(() => {
                setRestartSliderAnim((prev) => ({ ...prev, [index]: false }))
            }, 100)
            audiosEndedRef.current = {
                ...audiosEndedRef.current,
                [index]: false,
            }
        }
        setSlidesPauseAnim((prevVal) => ({ ...prevVal, [index]: false }))
    }

    useEffect(() => {
        if (ModalStore.isVisible.extLinks) {
            if (modalContentRef.current) {
                const audios = modalContentRef.current.querySelectorAll("audio")
                audios.forEach((a) => {
                    if (!a.paused) {
                        a.pause()
                        autoPausedAudio.current.push(a)
                    }
                })
            }
        } else if (autoPausedAudio.current) {
            if (!ModalStore.dontPlayOnClose) {
                autoPausedAudio.current.forEach((a) => {
                    a.play()
                })
                autoPausedAudio.current = []
            }
            setDontPlayOnClose(false)
            ModalStore.setDontPlayOnClose(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalStore.isVisible.extLinks])

    return (
        <StyledModal
            isOpen={isOpen}
            onClose={handleClose}
            onOpenAnimEnd={handleOpenAnimEnd}
            navigateBack
        >
            <ModalContent ref={modalContentRef}>
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
                        onInit={handleInit}
                    >
                        {items.map(
                            ({ text, audio, images, note, links }, index) => (
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
                                                        onEnded={() =>
                                                            handleAudioEnded(
                                                                index
                                                            )
                                                        }
                                                        onLoaded={(e) =>
                                                            handleAudioLoaded(
                                                                e,
                                                                index
                                                            )
                                                        }
                                                        onPause={() =>
                                                            handleAudioPause(
                                                                index
                                                            )
                                                        }
                                                        onPlay={() =>
                                                            handleAudioPlay(
                                                                index
                                                            )
                                                        }
                                                        makePausedBtn={
                                                            makePausedBtn
                                                        }
                                                        // showPausedBtn={showPausedBtn[index]}
                                                        showPausedBtn={
                                                            showPausedBtn
                                                        }
                                                        makeOutsideAudioEl
                                                        outsideAudioEl={
                                                            SoundStore
                                                                .introAudioEls
                                                                .length >=
                                                            index + 1
                                                                ? SoundStore
                                                                      .introAudioEls[
                                                                      index
                                                                  ]
                                                                : null
                                                        }
                                                    />
                                                )}
                                            </SlideCol>

                                            <SlideCol className="title">
                                                <StyledTitle
                                                    color={COLORS.orange}
                                                >
                                                    Введение
                                                </StyledTitle>
                                            </SlideCol>

                                            <SlideCol
                                                className="content"
                                                hasControls={items.length > 1}
                                            >
                                                <StyledContentBlock
                                                    color={COLORS.orange}
                                                >
                                                    <Text data={{ text }} />
                                                    {note && (
                                                        <Note
                                                            data={{
                                                                text: note,
                                                            }}
                                                        />
                                                    )}
                                                </StyledContentBlock>
                                                {index === items.length - 1 && (
                                                    <Link
                                                        to={
                                                            CourseProgressStore.introStartLink
                                                        }
                                                        onClick={handleClose}
                                                        className="start-link start-link-1"
                                                    >
                                                        <SendButton
                                                            text="Начать изучение курса"
                                                            color={
                                                                COLORS.orange
                                                            }
                                                        />
                                                    </Link>
                                                )}
                                            </SlideCol>

                                            <SlideCol className="slider">
                                                <StyledCircleSlider
                                                    size="s"
                                                    sliderColor={COLORS.orange}
                                                    data={images}
                                                    pauseAnim={
                                                        slidesPauseAnim[index]
                                                    }
                                                    delayTime={
                                                        slidersDelay[index]
                                                    }
                                                    restartAnim={
                                                        restartSliderAnim[index]
                                                    }
                                                    index={index}
                                                />
                                                {links && links.length > 0 && (
                                                    <ExtLinks links={links} />
                                                )}
                                            </SlideCol>
                                            <StartLinkCol>
                                                {index === items.length - 1 && (
                                                    <Link
                                                        to={
                                                            CourseProgressStore.introStartLink
                                                        }
                                                        onClick={handleClose}
                                                        className="start-link start-link-2"
                                                    >
                                                        <SendButton
                                                            text="Начать изучение раздела"
                                                            color={
                                                                COLORS.orange
                                                            }
                                                        />
                                                    </Link>
                                                )}
                                            </StartLinkCol>
                                        </SlideCols>
                                    </SlideInner>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                </SliderWrapper>
            </ModalContent>
        </StyledModal>
    )
}

export default observer(IntroModal)

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
            padding: 90px 0 0;
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
    flex: 0 1 100%;

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

    @media ${DEVICE.laptopS} {
        padding: 0 20px;
    }

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
    position: relative;
    display: grid;
    grid-template: 11vh auto / 7% 41% 52%;

    @media ${DEVICE.laptopS} {
        grid-template: auto auto auto auto auto / 100%;
    }

    .start-link-1 {
        margin-right: -20px;

        @media ${DEVICE.laptopS} {
            display: none;
        }
    }
`

const StartLinkCol = styled.div`
    display: none;

    @media ${DEVICE.laptopS} {
        display: flex;
        justify-content: center;
        grid-area: 4 / 1 / 5 / 2;
        margin-bottom: 30px;
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
            grid-area: 5 / 1 / 6 / 2;
            margin-bottom: 300px;
        }
    }

    &.content {
        grid-area: 2 / 2 / 3 / 3;
        padding-right: 23px;
        padding-bottom: ${({ hasControls }) => (hasControls ? "17vh" : "6vh")};

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        @media ${DEVICE.laptopS} {
            grid-area: 2 / 1 / 3 / 2;
            margin-bottom: 50px;
            padding-bottom: 0;
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

        .ext-links {
            bottom: 5px;
            right: 12%;
            z-index: 50;
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
