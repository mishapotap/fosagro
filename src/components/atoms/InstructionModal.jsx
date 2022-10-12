/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-bind */
import "wicg-inert"
import React, { useState, useEffect, useRef } from "react"
import styled, { css, keyframes } from "styled-components"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"
import { Pagination, Navigation, EffectFade } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import {
    IconAttention,
    IconBlueBtnMail,
    IconOpenCourseBtn,
    IconOpenCourseBtnMob,
    IconBlueBtnSound,
    IconBlueBtnInstraction,
    IconLinksPc,
    IconLinksMob,
    Chapter1BtnImg,
    Chapter2BtnImg,
    Chapter3BtnImg,
    Chapter4BtnImg,
    Chapter5BtnImg,
    Chapter6BtnImg,
    NextPageBtnImg,
    PrevPageBtnImg,
    TimelineBtnNextImg,
    TimelineBtnPrevImg,
    TimelineImg,
} from "../../assets/svg/static/InstructionModal"

import { Headphones, ArrowRight, ArrowLeft } from "../../assets/svg"
import { COLORS, DEVICE } from "../../constants"
import { MenuBackground } from "../../assets/images"
import SendButton from "./SendButton"
import Modal from "./Modal"
import Layout from "./Layout"
import { CourseProgressStore, ModalStore, SoundStore } from "../../store"
import { renderCustom } from "../../utils"
import { Click1, Instruction1, Instruction2 } from "../../assets/audio"
import AudioPlayer from "./AudioPlayer"

// eslint-disable-next-line
import "swiper/css"
// eslint-disable-next-line
import "swiper/css/effect-fade"

function InstructionModal({ isOpen, onClose, makeAnim = true }) {
    // const baseUrl = "http://localhost:3000/course01/"
    // const instructionUrl = new URL("instruction", baseUrl)
    // console.log(instructionUrl.href)

    const clickSound = new Audio(Click1)

    const [pauseAnims, setPauseAnims] = useState({ 0: false, 1: false })
    const [playAudio, setPlayAudio] = useState({ 0: false, 1: false })

    const activeSlideIdxRef = useRef(0)
    const autoPausedRef = useRef(false)

    const isAudioPlayingRef = useRef({ 0: false, 1: false })

    const closeInstructionModal = () => {
        ModalStore.closeModal("instruction")
        // eslint-disable-next-line no-unused-expressions
        SoundStore.getIsPlaying() && clickSound.play()
    }

    function handleModalAnimEnd() {
        setTimeout(() => {
            setPlayAudio({ 0: true, 1: false })
        }, 1000)
    }

    function handleSlideChange(swiper) {
        const { activeIndex } = swiper
        activeSlideIdxRef.current = activeIndex

        if (activeIndex === 0) {
            if (makeAnim) {
                setPauseAnims({ 0: false, 1: true })
            }
            setPlayAudio({ 0: true, 1: false })
        } else {
            if (makeAnim) {
                setPauseAnims({ 0: true, 1: false })
            }
            setPlayAudio({ 0: false, 1: true })
        }
    }

    function handleClose() {
        setPlayAudio({ 0: false, 1: false })
        setPauseAnims({ 0: true, 1: true })
        onClose()
    }

    function handleAudioEnded(index) {
        setPauseAnims((pauseAnimsVal) => ({ ...pauseAnimsVal, [index]: false }))
    }

    function handleInit() {
        setPauseAnims({ 0: false, 1: true })
    }

    function handleAudioPlay(index) {
        isAudioPlayingRef.current = {
            ...isAudioPlayingRef.current,
            [index]: true,
        }
        setPauseAnims((pauseAnimsVal) => ({ ...pauseAnimsVal, [index]: false }))
    }

    function handleAudioPause(index) {
        isAudioPlayingRef.current = {
            ...isAudioPlayingRef.current,
            [index]: false,
        }
        setPauseAnims((pauseAnimsVal) => ({ ...pauseAnimsVal, [index]: true }))
    }

    const isVisible = (ele, container) => {
        const { bottom, height, top } = ele.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()

        return top <= containerRect.top
            ? containerRect.top - top <= height
            : bottom - containerRect.bottom <= height
    }

    // проскроллить элемент, который анимируется, в область видимости (для моб)
    function handleContainerAnimStart(e) {
        const container = e.target.closest(".slide-inner")
        if (container && !isVisible(e.target, container)) {
            e.target.scrollIntoView({ behavior: "smooth" })
        }
    }

    // надо врубать звук заново при закрытии
    function onCookiesInfoClick() {
        ModalStore.showModal("cookiesInfo")
    }

    useEffect(() => {
        // проверить не будет ли багов
        // выключить звук при открытии модалки с информацией о куки
        if (ModalStore.isVisible.cookiesInfo) {
            if (isAudioPlayingRef.current[activeSlideIdxRef.current]) {
                setPlayAudio((prevPlayAudio) => ({
                    ...prevPlayAudio,
                    [activeSlideIdxRef.current]: true,
                }))

                setTimeout(() => {
                    setPlayAudio((prevPlayAudio) => ({
                        ...prevPlayAudio,
                        [activeSlideIdxRef.current]: false,
                    }))
                }, 100)

                autoPausedRef.current = true
            }
            // включить звук при закрытии модалки с информацией о куки
            // (если он был остановлен автоматически, а не самим пользователем)
        } else if (autoPausedRef.current) {
            setPlayAudio((prevPlayAudio) => ({
                ...prevPlayAudio,
                [activeSlideIdxRef.current]: false,
            }))

            setTimeout(() => {
                setPlayAudio((prevPlayAudio) => ({
                    ...prevPlayAudio,
                    [activeSlideIdxRef.current]: true,
                }))
            }, 800)

            autoPausedRef.current = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalStore.isVisible.cookiesInfo])

    return (
        <StyledModal
            isOpen={isOpen}
            onClose={handleClose}
            navigateBack
            onOpenAnimEnd={handleModalAnimEnd}
        >
            <StyledLayout page="instruction">
                <Container onAnimationStart={handleContainerAnimStart}>
                    <SliderContainer makeAnim={makeAnim}>
                        <Swiper
                            modules={[Pagination, Navigation, EffectFade]}
                            navigation={{
                                prevEl: ".button-prev",
                                nextEl: ".button-next",
                            }}
                            pagination={{ type: "custom", renderCustom }}
                            effect="fade"
                            fadeEffect={{ crossFade: true }}
                            speed={400}
                            onSlideChange={handleSlideChange}
                            onInit={handleInit}
                        >
                            <SwiperSlide>
                                <SlideInner className="slide-inner">
                                    <SlideContentWrapper>
                                        <Slide1Cols
                                            className={
                                                pauseAnims[0]
                                                    ? "anim-paused"
                                                    : ""
                                            }
                                        >
                                            <SlideColsInner>
                                                <Column className="col-title">
                                                    <Title>
                                                        Инструкция по
                                                        прохождению курса
                                                        <TitleAccent>
                                                            «Устойчивое
                                                            развитие»
                                                        </TitleAccent>
                                                    </Title>
                                                </Column>
                                                <Column>
                                                    <ChaptersRow>
                                                        <Text className="text-chapters">
                                                            Уважаемые
                                                            пользователи, в
                                                            нашем курсе 6
                                                            разделов, каждый из
                                                            которых поделен на
                                                            темы. Вы можете
                                                            выбрать какой раздел
                                                            изучать, вне
                                                            зависимости от их
                                                            последовательности.
                                                        </Text>
                                                        <ChaptersImages>
                                                            <ChaptersImagesInner>
                                                                <ChapterImgWrapper>
                                                                    <img
                                                                        src={
                                                                            Chapter1BtnImg
                                                                        }
                                                                        className="chapter1-img"
                                                                        alt="кнопка, ведущая на раздел 1"
                                                                    />
                                                                </ChapterImgWrapper>
                                                                <ChapterImgWrapper>
                                                                    <img
                                                                        src={
                                                                            Chapter2BtnImg
                                                                        }
                                                                        className="chapter2-img"
                                                                        alt="кнопка, ведущая на раздел 2"
                                                                    />
                                                                </ChapterImgWrapper>
                                                                <ChapterImgWrapper>
                                                                    <img
                                                                        src={
                                                                            Chapter3BtnImg
                                                                        }
                                                                        className="chapter3-img"
                                                                        alt="кнопка, ведущая на раздел 3"
                                                                    />
                                                                </ChapterImgWrapper>
                                                                <ChapterImgWrapper>
                                                                    <img
                                                                        src={
                                                                            Chapter4BtnImg
                                                                        }
                                                                        className="chapter4-img"
                                                                        alt="кнопка, ведущая на раздел 4"
                                                                    />
                                                                </ChapterImgWrapper>
                                                                <ChapterImgWrapper>
                                                                    <img
                                                                        src={
                                                                            Chapter5BtnImg
                                                                        }
                                                                        className="chapter5-img"
                                                                        alt="кнопка, ведущая на раздел 5"
                                                                    />
                                                                </ChapterImgWrapper>
                                                                <ChapterImgWrapper>
                                                                    <img
                                                                        src={
                                                                            Chapter6BtnImg
                                                                        }
                                                                        className="chapter6-img"
                                                                        alt="кнопка, ведущая на раздел 6"
                                                                    />
                                                                </ChapterImgWrapper>
                                                            </ChaptersImagesInner>
                                                        </ChaptersImages>
                                                    </ChaptersRow>
                                                    <Slide1Center>
                                                        <Text className="text-timeline">
                                                            Меню разделов
                                                            выполнено в виде
                                                            таймлайна,
                                                            переключаться по
                                                            разделам можно с
                                                            помощью компьютерной
                                                            мыши, предварительно
                                                            необходимо
                                                            зафиксировать левую
                                                            кнопку мыши в
                                                            области таймлайна и
                                                            перемещать мышь по
                                                            горизонтали или с
                                                            помощью стрелок,
                                                            расположенных внизу.
                                                        </Text>

                                                        <TimelineImgWrapper>
                                                            <img
                                                                src={
                                                                    TimelineImg
                                                                }
                                                                alt="меню раздела"
                                                                className="timeline-img"
                                                            />
                                                            <img
                                                                src={
                                                                    TimelineBtnPrevImg
                                                                }
                                                                className="tl-prev-btn"
                                                                alt="кнопка прокрутки таймлайна влево"
                                                            />
                                                            <img
                                                                src={
                                                                    TimelineBtnNextImg
                                                                }
                                                                className="tl-next-btn"
                                                                alt="кнопка прокрутки таймлайна вправо"
                                                            />
                                                        </TimelineImgWrapper>
                                                        <Row>
                                                            <AttentionImage
                                                                src={
                                                                    IconAttention
                                                                }
                                                                alt="внимание"
                                                                className="icon-attention"
                                                            />
                                                            <Text className="text-attention">
                                                                Прохождение
                                                                курса внутри
                                                                раздела идет
                                                                последовательно,
                                                                Вы не можете
                                                                перейти к
                                                                следующей теме,
                                                                не изучив
                                                                предыдущую.
                                                            </Text>
                                                        </Row>
                                                    </Slide1Center>
                                                    <TestTextWrapper>
                                                        <Text className="text-test">
                                                            В конце каждого
                                                            раздела Вас ждет
                                                            простой тест на
                                                            несколько вопросов
                                                            для проверки
                                                            усвоенных знаний.
                                                        </Text>
                                                    </TestTextWrapper>
                                                </Column>
                                            </SlideColsInner>
                                        </Slide1Cols>
                                    </SlideContentWrapper>
                                    <CookiesInfoLink
                                        onClick={() => onCookiesInfoClick(0)}
                                    >
                                        Информация о cookies
                                    </CookiesInfoLink>
                                    <StyledAudioPlayer
                                        src={Instruction1}
                                        isPlaying={playAudio[0]}
                                        onPause={() => handleAudioPause(0)}
                                        onPlay={() => handleAudioPlay(0)}
                                        onEnded={() => handleAudioEnded(0)}
                                    />
                                </SlideInner>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideInner className="slide-inner">
                                    <SlideContentWrapper>
                                        <Slide2Cols
                                            className={
                                                pauseAnims[1]
                                                    ? "anim-paused"
                                                    : ""
                                            }
                                        >
                                            <SlideColsInner>
                                                <Column className="col-title">
                                                    <Title>
                                                        Краткая справка по
                                                        навигации
                                                    </Title>
                                                </Column>
                                                <Column>
                                                    <ColBlock>
                                                        <Text className="text-nav">
                                                            Переход между
                                                            страницами
                                                            осуществляется
                                                            нажатием на данные
                                                            элементы.
                                                        </Text>
                                                        <NavBtnsImgsRow>
                                                            <img
                                                                src={
                                                                    PrevPageBtnImg
                                                                }
                                                                alt="кнопка назад"
                                                                className="prev-page-btn"
                                                            />
                                                            <img
                                                                src={
                                                                    NextPageBtnImg
                                                                }
                                                                alt="кнопка вперед"
                                                                className="next-page-btn"
                                                            />
                                                        </NavBtnsImgsRow>
                                                    </ColBlock>
                                                    <ColBlock>
                                                        <CourseImage />
                                                        <Text className="text-open-menu-btn">
                                                            Кнопка открытия меню
                                                            курса.
                                                        </Text>
                                                    </ColBlock>
                                                    <ColBlock>
                                                        <LinksImage />
                                                        <Text className="text-links">
                                                            Ссылки на
                                                            дополнительные
                                                            материалы вынесены в
                                                            виде такого
                                                            элемента.
                                                        </Text>
                                                    </ColBlock>
                                                </Column>
                                                <Column>
                                                    <IconRow>
                                                        <IconHeadphones inert="">
                                                            <Headphones />
                                                        </IconHeadphones>
                                                        <Text className="text-audioguide">
                                                            В нашем курсе
                                                            предполагается
                                                            звуковое
                                                            сопровождение,
                                                            аудиогид, управление
                                                            им осуществляется
                                                            при нажатии на
                                                            данный элемент.
                                                        </Text>
                                                    </IconRow>
                                                    <IconRow>
                                                        <ElIcon className="icon-sound">
                                                            <img
                                                                src={
                                                                    IconBlueBtnSound
                                                                }
                                                                alt="звук"
                                                            />
                                                        </ElIcon>
                                                        <Text className="text-sound-btn">
                                                            Элемент
                                                            включения/отключения
                                                            фонового голосового
                                                            и музыкального
                                                            сопровождения курса.
                                                        </Text>
                                                    </IconRow>
                                                    <IconRow>
                                                        <ElIcon className="icon-mail">
                                                            <img
                                                                src={
                                                                    IconBlueBtnMail
                                                                }
                                                                alt="письмо"
                                                            />
                                                        </ElIcon>
                                                        <Text className="text-mail-btn">
                                                            Элемент обратной
                                                            связи, будем рады
                                                            вашим отзывам и
                                                            предложениям по
                                                            улучшению контента!
                                                        </Text>
                                                    </IconRow>
                                                    <IconRow>
                                                        <ElIcon className="icon-instruction">
                                                            <img
                                                                src={
                                                                    IconBlueBtnInstraction
                                                                }
                                                                alt="инструкция"
                                                            />
                                                        </ElIcon>
                                                        <Text className="text-instruction-btn">
                                                            Элемент вызова
                                                            данной инструкции.
                                                        </Text>
                                                    </IconRow>
                                                </Column>
                                            </SlideColsInner>
                                        </Slide2Cols>
                                        <StartLearn>
                                            <Link
                                                to={
                                                    CourseProgressStore.instructionModalLink
                                                }
                                                onClick={() =>
                                                    closeInstructionModal()
                                                }
                                            >
                                                <SendButton
                                                    text="Начать обучение"
                                                    size="m"
                                                />
                                            </Link>
                                        </StartLearn>
                                    </SlideContentWrapper>
                                    <CookiesInfoLink
                                        onClick={() => onCookiesInfoClick(1)}
                                    >
                                        Информация о cookies
                                    </CookiesInfoLink>
                                    <StyledAudioPlayer
                                        src={Instruction2}
                                        isPlaying={playAudio[1]}
                                        onPause={() => handleAudioPause(1)}
                                        onPlay={() => handleAudioPlay(1)}
                                        onEnded={() => handleAudioEnded(1)}
                                    />
                                </SlideInner>
                            </SwiperSlide>
                            <CircleBtn className="button-prev">
                                <ArrowLeft color={COLORS.blue} />
                            </CircleBtn>
                            <CircleBtn className="button-next">
                                <ArrowRight color={COLORS.blue} />
                            </CircleBtn>
                            {/* {activeSlideIdx === 1 && (
                                <StartLearn>
                                    <Link
                                        to={
                                            CourseProgressStore.instructionModalLink
                                        }
                                        onClick={() => closeInstructionModal()}
                                    >
                                        <SendButton
                                            text="Начать обучение"
                                            size="m"
                                        />
                                    </Link>
                                </StartLearn>
                            )} */}
                        </Swiper>
                    </SliderContainer>
                </Container>
            </StyledLayout>
        </StyledModal>
    )
}

export default observer(InstructionModal)

const CookiesInfoLink = styled.button`
    position: absolute;
    bottom: 5vh;
    left: 50%;

    transform: translate(-50%);
    z-index: 50;

    font-size: 1.16vw;
    color: ${COLORS.blue};
    border-bottom: 1px solid ${COLORS.blue};

    @media ${DEVICE.laptopM} {
        bottom: 4.6vh;
    }

    @media ${DEVICE.laptop} {
        font-size: 17px;
    }

    @media ${DEVICE.laptopS} {
        position: static;
        transform: none;
        margin-bottom: 20px;
    }
`

const StyledLayout = styled(Layout)`
    height: 100%;

    .content {
        padding-left: 5px;
        padding-bottom: 0;

        @media ${DEVICE.laptopS} {
            padding-left: 20px;
        }
    }
`

const StyledAudioPlayer = styled(AudioPlayer)`
    position: absolute;
    left: 0;
    top: 0;

    @media ${DEVICE.laptopS} {
        position: relative;
    }
`

const SlideInner = styled.div`
    height: 100%;
    overflow: auto;
`

const NavBtnsImgsRow = styled.div`
    display: flex;

    > * {
        width: 4.7vw;

        &:first-child {
            margin-right: 2.5vw;

            @media ${DEVICE.laptopS} {
                margin-right: 30px;
            }
        }

        @media ${DEVICE.laptopS} {
            width: 60px;
        }
    }
`

const StyledModal = styled(Modal)`
    height: 100%;
    transition: 0.7s;

    .modal-window {
        background-color: transparent;
        background: url(${MenuBackground}) no-repeat center/cover;
    }

    .content {
        padding-top: 0;

        @media ${DEVICE.laptopS} {
            padding-bottom: 0;
        }
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 3vh;

    height: 100%;

    @media ${DEVICE.laptopM} {
        padding-top: 0;
        padding-bottom: 2vh;
    }

    @media ${DEVICE.laptopS} {
        align-items: flex-end;
        padding-top: 0;
        padding-bottom: 0;
    }

    .swiper {
        height: 100%;
    }

    .swiper-wrapper {
        padding-top: 4vh;
    }

    .cur-slide-number {
        display: inline-block;

        font-family: "FocoBold";
        color: ${COLORS.blue};
        font-size: 3.15vw;

        @media ${DEVICE.laptopM} {
            font-size: 2.5vw;
        }

        @media ${DEVICE.laptop} {
            font-size: 28px;
        }
    }

    .total-slides-number {
        font-family: "FocoBold";
        color: ${COLORS.white};
        display: inline-block;

        font-size: 2.1vw;

        @media ${DEVICE.laptopM} {
            font-size: 1.7vw;
        }

        @media ${DEVICE.laptop} {
            font-size: 24px;
        }
    }

    .separator {
        display: inline-block;
        margin-right: 2px;

        color: ${COLORS.white};
        font-size: 2.1vw;

        @media ${DEVICE.laptopM} {
            font-size: 1.7vw;
        }

        @media ${DEVICE.laptop} {
            font-size: 24px;
        }
    }

    .swiper-pagination {
        position: absolute;
        right: 9%;
        top: 0;

        @media ${DEVICE.laptopS} {
            right: 0;
        }
    }

    .swiper-slide {
        padding: 2vh 0;

        @media ${DEVICE.laptopS} {
            padding-bottom: 80px;
            padding-top: 8px;
        }
    }

    .button-next {
        position: absolute;
        bottom: 2px;
        right: 10%;
        z-index: 20;

        @media ${DEVICE.laptopS} {
            right: 0;
            bottom: 0;
        }
    }

    .button-prev {
        position: absolute;
        bottom: 2px;
        left: 10%;
        z-index: 20;

        @media ${DEVICE.laptopS} {
            bottom: 0;
        }
    }

    a {
        display: block;
    }
`

const SlideColsInner = styled.div`
`

const SlideContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    max-width: 82%;
    margin: 0 auto;

    @media ${DEVICE.laptopM} {
        max-width: 85%;
    }

    @media ${DEVICE.laptopS} {
        height: auto;
        margin-bottom: 15px;
    }

    @media ${DEVICE.mobile} {
        max-width: 100%;
    }
`

const LinksImage = styled.div`
    background: url(${IconLinksPc}) no-repeat left center/contain;
    height: 5vh;

    @media ${DEVICE.laptopS} {
        height: 32px;
        background: url(${IconLinksMob}) no-repeat center/contain;
    }
`

const CourseImage = styled.div`
    max-width: 311px;
    height: 28px;

    background: url(${IconOpenCourseBtn}) no-repeat left/contain;

    @media ${DEVICE.laptopS} {
        max-width: 24px;
        height: 22px;
        margin: 0 auto;

        background: url(${IconOpenCourseBtnMob}) no-repeat center/contain;
    }
`

const StartLearn = styled.div`
    position: absolute;
    right: 9%;
    bottom: 5vh;
    z-index: 50;

    @media ${DEVICE.laptopM} {
        bottom: 4.6vh;
    }

    @media ${DEVICE.laptopS} {
        right: 20px;
        bottom: 35px;
    }
`

const Text = styled.p`
    width: 100%;

    font-family: "CalibriLight", sans-serif;
    line-height: 1.2;
    font-size: 1.25vw;
    color: ${COLORS.black};

    @media ${DEVICE.laptopM} {
        font-size: 1.15vw;
    }

    @media ${DEVICE.laptop} {
        font-size: 16px;
    }
`

const CircleBtn = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    &:disabled {
        display: none;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media ${DEVICE.laptopS} {
        flex-direction: column;
        align-items: center;
    }
`

const Column = styled.div`
    @media ${DEVICE.laptopS} {
        display: block;
        height: auto;

        margin-bottom: 30px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const TitleAccent = styled.span`
    display: inline-block;
    margin-left: 10px;
    color: ${COLORS.white};
`

const Title = styled.div`
    display: inline-block;

    font-family: "FocoBold";
    color: ${COLORS.blue};
    font-size: 2.24vw;
    line-height: 1.3;

    @media ${DEVICE.laptopM} {
        font-size: 1.8vw;
    }

    @media ${DEVICE.laptop} {
        font-size: 23px;
    }

    .accent {
        color: ${COLORS.white};
    }
`

const SlideCols = styled.div`
    width: 100%;
    height: 100%;
`

const Slide1Cols = styled(SlideCols)`
    ${Column} {
        &.col-title {
            margin-bottom: 3vh;

            @media ${DEVICE.laptopM} {
                margin-bottom: 8px;
            }
        }

        &:nth-child(2) {
            &:last-child {
                margin-bottom: 10px;
            }

            & > * {
                &:first-child {
                    margin-bottom: 7px;

                    @media ${DEVICE.laptopS} {
                        margin-bottom: 30px;
                    }
                }

                &:nth-child(2) {
                    margin-bottom: 7px;

                    @media ${DEVICE.laptopS} {
                        margin-bottom: 30px;
                    }
                }
            }
        }
    }
`

const Slide2Cols = styled(SlideCols)`
    ${Text} {
        max-width: 31.6vw;

        @media ${DEVICE.laptopS} {
            max-width: none;
        }
    }

    ${SlideColsInner} {
        height: 100%;
        display: grid;
        grid-template: 70px auto / repeat(2, 1fr);

        @media ${DEVICE.laptopS} {
            display: block;
        }
    }

    ${Column} {
        &:nth-child(1) {
            grid-area: 1 / 1 / 2 / 2;
        }

        &:nth-child(2),
        &:last-child {
            display: flex;
            flex-direction: column;
            justify-content: center;

            padding-bottom: 9vh;

            @media ${DEVICE.laptopS} {
                padding-top: 0;
            }
        }

        &:nth-child(2) {
            grid-area: 2 / 1 / 3 / 2;
        }

        &:nth-child(3) {
            grid-area: 2 / 2 / 3 / 3;
        }

        & > * {
            margin-bottom: 3vh;

            &:last-child {
                margin-bottom: 0;
            }

            @media ${DEVICE.laptopS} {
                margin-bottom: 30px;
            }
        }
    }
`

const ChaptersImagesInner = styled.div`
    display: flex;

    @media ${DEVICE.laptopS} {
        flex-wrap: wrap;
    }

    > * {
        flex: 0 1 16.6%;

        @media ${DEVICE.laptopS} {
            flex: 0 1 33%;
        }

        @media ${DEVICE.mobile} {
            flex: 0 1 50%;
        }
    }
`

const ChaptersImages = styled.div`
    padding: 0 10px;
`

const ChapterImgWrapper = styled.div``

const ChaptersRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${DEVICE.laptopS} {
        flex-direction: column;
    }

    ${Text} {
        flex: 0 1 43%;

        @media ${DEVICE.laptopS} {
            margin-bottom: 25px;
        }
    }

    ${ChaptersImages} {
        flex: 0 1 53%;
        padding-left: 2.6vw;
    }
`

const TimelineImgWrapper = styled.div`
    position: relative;
    padding-bottom: 20px;

    margin: 0 auto;
    max-width: 90%;
    overflow: hidden;

    @media ${DEVICE.laptopS} {
        max-width: 100%;
    }

    .timeline-img {
        @media ${DEVICE.laptopS} {
            max-width: none;
            height: 100%;
        }
    }

    &::-webkit-scrollbar {
        width: 0;
    }

    @media ${DEVICE.laptopS} {
        padding-bottom: 30px;
        height: 240px;
        max-width: 100%;
    }

    .tl-prev-btn,
    .tl-next-btn {
        position: absolute;
        bottom: 0;
    }

    .tl-prev-btn {
        left: 0;
    }

    .tl-next-btn {
        right: 0;
    }
`

const AttentionImage = styled.img`
    width: 4.6vw;
    margin-right: 1.3vw;
    margin-left: -4%;

    @media ${DEVICE.laptopM} {
        width: 3.9vw;
    }

    @media ${DEVICE.laptopS} {
        width: 60px;
        margin-bottom: 15px;
        margin-right: 0;
        margin-left: 0;
    }
`

const Slide1Center = styled.div`
    display: grid;
    grid-template: repeat(2, auto) / 43% 50%;
    justify-content: space-between;
    row-gap: 10px;

    @media ${DEVICE.laptopS} {
        grid-template: repeat(3, auto) / 1fr;
    }

    ${TimelineImgWrapper} {
        grid-area: 2 / 1 / 3 / 3;

        @media ${DEVICE.laptopS} {
            grid-area: 2 / 1 / 3 / 2;
        }
    }

    & > ${Text} {
        grid-area: 1 / 1 / 2 / 2;

        @media ${DEVICE.laptopS} {
            grid-area: 1 / 1 / 2 / 2;
        }
    }

    & > ${Row} {
        grid-area: 1 / 2 / 2 / 3;

        @media ${DEVICE.laptopS} {
            grid-area: 3 / 1 / 4 / 2;
        }
    }
`

const TestTextWrapper = styled.div`
    display: flex;
    justify-content: center;

    ${Text} {
        width: auto;
    }
`

const ElIcon = styled.div`
    flex-shrink: 0;

    width: 60px;
    margin-right: 2.5vw;

    @media ${DEVICE.laptopM} {
        width: 55px;
    }

    @media ${DEVICE.mobile} {
        width: 55px;
        margin-right: 0;
        margin-bottom: 15px;
    }
`

const IconHeadphones = styled(ElIcon)`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 70%;
    }
`

const IconRow = styled.div`
    display: flex;
    align-items: center;

    @media ${DEVICE.laptopS} {
        flex-direction: column;
        justify-content: center;
    }
`

const ColBlock = styled.div`
    > *:first-child {
        margin-bottom: 8px;
    }

    > *:last-child {
        margin-bottom: 0;
    }
`

const appear = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const appearScale = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.6);
    }

    100% {
        opacity: 1;
        transform: none;
    }
`

const fadeInDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: none;
    }
`

const iconAppear = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-20px) translateY(15px);
    }

    100% {
        opacity: 1;
        transform: none;
    }
`

const fadeInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(45px);
    }

    100% {
        opacity: 1;
        transform: none;
    }
`

const fadeInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-45px);
    }

    100% {
        opacity: 1;
        transform: none;
    }
`

const SliderContainer = styled.div`
    margin: 0 auto;
    height: 100%;
    max-width: 100%;

    ${({ makeAnim }) =>
        makeAnim &&
        css`
            ${Slide1Cols} {
                .col-title,
                .text-chapters,
                .text-attention,
                .text-test,
                .text-timeline,
                .icon-attention,
                .tl-prev-btn,
                .tl-next-btn,
                .chapter1-img,
                .chapter2-img,
                .chapter3-img,
                .chapter4-img,
                .chapter5-img,
                .chapter6-img,
                .timeline-img {
                    animation: ${appear} 1.3s ease-in-out both;
                }

                .col-title {
                    animation-delay: 1s;
                }

                .text-chapters {
                    animation-delay: 6s;
                    animation-name: ${appear};
                }

                .chapter1-img {
                    animation-delay: 7s;
                }

                .chapter2-img {
                    animation-delay: 8.2s;
                }

                .chapter3-img {
                    animation-delay: 9.5s;
                }

                .chapter4-img {
                    animation-delay: 10.2s;
                }

                .chapter5-img {
                    animation-delay: 11.5s;
                }

                .chapter6-img {
                    animation-delay: 12.8s;
                }

                /* примерное время, установить норм когда будет аудио */
                .text-timeline {
                    animation-delay: 16.6s;
                }

                .timeline-img {
                    animation-delay: 18s;
                }

                .tl-prev-btn {
                    animation-name: ${fadeInRight};
                    animation-delay: 30s;
                }

                .tl-next-btn {
                    animation-name: ${fadeInLeft};
                    animation-delay: 31s;
                }

                .icon-attention {
                    animation-delay: 33s;
                    animation-name: ${appearScale};
                }

                .text-attention {
                    animation-delay: 34s;
                }

                .text-test {
                    animation-delay: 42s;
                    animation-name: ${appear};
                }
            }

            ${Slide2Cols} {
                .col-title,
                .text-nav,
                .text-open-menu-btn,
                .text-links,
                .text-audioguide,
                .text-sound-btn,
                .text-mail-btn,
                .text-instruction-btn,
                .icon-mail,
                .icon-instruction,
                .icon-sound,
                .prev-page-btn,
                .next-page-btn,
                ${CourseImage}, ${LinksImage}, ${IconHeadphones} {
                    animation: ${appear} 1.3s ease-in-out both;
                }

                .icon-mail,
                .icon-instruction,
                .icon-sound,
                ${IconHeadphones} {
                    animation-name: ${iconAppear};
                }

                .text-audioguide,
                .text-sound-btn,
                .text-mail-btn,
                .text-instruction-btn {
                    animation-name: ${fadeInRight};
                }

                .col-title {
                    animation-delay: 0.3s;
                }

                .text-nav {
                    animation-delay: 3.5s;
                }

                .prev-page-btn {
                    animation-delay: 5s;
                }

                .next-page-btn {
                    animation-delay: 6s;
                }

                ${CourseImage} {
                    animation-delay: 8.5s;
                }

                .text-open-menu-btn {
                    animation-delay: 9.5s;
                    animation-name: ${fadeInDown};
                }

                ${LinksImage} {
                    animation-delay: 12s;
                }

                .text-links {
                    animation-delay: 13s;
                    animation-name: ${fadeInDown};
                }

                ${IconHeadphones} {
                    animation-delay: 18s;
                }

                .text-audioguide {
                    animation-delay: 19s;
                }

                .icon-sound {
                    animation-delay: 27s;
                }

                .text-sound-btn {
                    animation-delay: 28s;
                }

                .icon-mail {
                    animation-delay: 34.5s;
                }

                .text-mail-btn {
                    animation-delay: 35.5s;
                }

                .icon-instruction {
                    animation-delay: 40.5s;
                }

                .text-instruction-btn {
                    animation-delay: 41.5s;
                }
            }
        `}
`
