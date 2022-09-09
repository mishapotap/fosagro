/* eslint-disable react/jsx-no-bind */
import "wicg-inert"
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Pagination, Navigation, EffectFade } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { ModalStore } from "../../store"
import {
    IconAttention,
    IconBlueBtnMail,
    IconOpenCourseBtn,
    IconOpenCourseBtnMob,
    IconBlueBtnSound,
} from "../../assets/svg/static/InstructionModal"

import { Headphones, ArrowRight, ArrowLeft } from "../../assets/svg"
import { COLORS, DEVICE } from "../../constants"
import { MenuBackground } from "../../assets/images"
import SendButton from "./SendButton"
import * as routes from "../../constants/routes"
import DocsLink from "./DocsLink"
import Modal from "./Modal"
import Layout from "./Layout"

// eslint-disable-next-line
import "swiper/css"
// eslint-disable-next-line
import "swiper/css/effect-fade"

export default function InstructionModal({ isOpen, onClose }) {
    function renderCustom(swiper, current, total) {
        const getFormattedNumber = (number) =>
            number < 10 ? `0${number}` : `${number}`

        return /* html */ `
            <span class="cur-slide-number">${getFormattedNumber(current)}</span>
            <span class="separator">/</span>
            <span class="total-slides-number">${getFormattedNumber(
                total
            )}</span>
        `
    }

    // const baseUrl = "http://localhost:3000/course01/"
    // const instructionUrl = new URL("instruction", baseUrl)
    // console.log(instructionUrl.href)

    return (
        <StyledModal isOpen={isOpen} onClose={onClose}>
            <StyledLayout page="instruction">
                <Container>
                    <SliderContainer>
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
                        >
                            <SwiperSlide>
                                <SlideInner>
                                    <Slide1Cols>
                                        <SlideColsInner>
                                            <Column>
                                                <Title>
                                                    Инструкция по прохождению
                                                    курса
                                                    <TitleAccent>
                                                        «Устойчивое развитие»
                                                    </TitleAccent>
                                                </Title>
                                            </Column>
                                            <Column>
                                                <Text>
                                                    Уважаемые пользователи, в
                                                    нашем курсе 6 разделов,
                                                    каждый из которых поделен на
                                                    темы. Вы можете выбрать
                                                    какой раздел изучать, вне
                                                    зависимости от их
                                                    последовательности.
                                                </Text>
                                                <Row>
                                                    <AttentionImage
                                                        src={IconAttention}
                                                        alt="внимание"
                                                    />
                                                    <Text>
                                                        Однако прохождение курса
                                                        внутри раздела идет
                                                        последовательно, Вы не
                                                        можете перейти к
                                                        следующей теме, не
                                                        изучив предыдущую.
                                                    </Text>
                                                </Row>
                                                <Text>
                                                    В конце каждого раздела Вас
                                                    ждет простой тест на
                                                    несколько вопросов для
                                                    проверки усвоенных знаний.
                                                </Text>
                                            </Column>
                                        </SlideColsInner>
                                    </Slide1Cols>
                                </SlideInner>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SlideInner>
                                    <Slide2Cols>
                                        <SlideColsInner>
                                            <Column>
                                                <Title>
                                                    Краткая справка по навигации
                                                </Title>
                                            </Column>
                                            <Column>
                                                <ColBlock>
                                                    <Text>
                                                        Переход между страницами
                                                        осуществляется
                                                        прокруткой мыши/тачпада.
                                                    </Text>
                                                </ColBlock>
                                                <ColBlock>
                                                    <CourseImage />
                                                    <Text>
                                                        Кнопка открытия меню
                                                        курса.
                                                    </Text>
                                                </ColBlock>
                                                <ColBlock inert="">
                                                    <DocsLink
                                                        showCursor={false}
                                                    />
                                                    <Text>
                                                        Ссылки на дополнительные
                                                        материалы вынесены в
                                                        виде такого элемента.
                                                    </Text>
                                                </ColBlock>
                                            </Column>
                                            <Column>
                                                <IconRow>
                                                    <IconHeadphones inert="">
                                                        <Headphones />
                                                    </IconHeadphones>
                                                    <Text>
                                                        В нашем курсе
                                                        предполагается звуковое
                                                        сопровождение, аудиогид,
                                                        управление им
                                                        осуществляется при
                                                        нажатии на данный
                                                        элемент.
                                                    </Text>
                                                </IconRow>
                                                <IconRow>
                                                    <ElIcon>
                                                        <img
                                                            src={
                                                                IconBlueBtnSound
                                                            }
                                                            alt="зыук"
                                                        />
                                                    </ElIcon>
                                                    <Text>
                                                        Элемент
                                                        отключения/включения
                                                        музыки в проекте.
                                                    </Text>
                                                </IconRow>
                                                <IconRow>
                                                    <ElIcon>
                                                        <img
                                                            src={
                                                                IconBlueBtnMail
                                                            }
                                                            alt="письмо"
                                                        />
                                                    </ElIcon>
                                                    <Text>
                                                        Элемент обратной связи,
                                                        будем рады ваши отзывам
                                                        и предложениям по
                                                        улучшению контента!
                                                    </Text>
                                                </IconRow>
                                            </Column>
                                        </SlideColsInner>
                                    </Slide2Cols>
                                    <StartLearn>
                                        <Link to={routes.COURSE01} onClick={() => ModalStore.closeModal("instruction")}>
                                            <SendButton
                                                text="Начать обучение"
                                                size="m"
                                            />
                                        </Link>
                                    </StartLearn>
                                </SlideInner>
                            </SwiperSlide>
                            <CircleBtn className="button-prev">
                                <ArrowLeft color={COLORS.blue} />
                            </CircleBtn>
                            <CircleBtn className="button-next">
                                <ArrowRight color={COLORS.blue} />
                            </CircleBtn>
                        </Swiper>
                    </SliderContainer>
                </Container>
            </StyledLayout>
        </StyledModal>
    )
}

// мне здесь не подходит min-height, поэтому чтобы работало корректно, перезаписываю
const StyledLayout = styled(Layout)`
    height: 100%;
`

const StyledModal = styled(Modal)`
    height: 100%;

    .modal-window {
        background-color: transparent;
        background: url(${MenuBackground}) no-repeat center/cover;
    }

    .content {
        padding-top: 0;
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;

    height: 100%;
    padding-top: 5vh;
    padding-bottom: 3vh;

    @media ${DEVICE.laptopS} {
        align-items: flex-end;
        padding-top: 0;
        padding-bottom: 0;
    }

    .swiper {
        height: 100%;
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
        right: 0;
        top: 0;
    }

    .button-next {
        position: absolute;
        bottom: 2px;
        right: 2px;
        z-index: 20;
    }

    .button-prev {
        position: absolute;
        bottom: 2px;
        left: 2px;
        z-index: 20;
    }

    a {
        display: block;
    }
`

const SliderContainer = styled.div`
    margin: 0 auto;
    height: 100%;
    max-width: 81.8%;

    @media ${DEVICE.laptopM} {
        max-width: 85%;
    }

    @media ${DEVICE.mobile} {
        max-width: 100%;
    }
`

const SlideColsInner = styled.div`
    overflow: auto;
    max-height: 100%;

    &::-webkit-scrollbar {
        width: 0;
    }
`

const SlideInner = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CourseImage = styled.div`
    max-width: 311px;
    height: 28px;

    font-size: 1.3vw;
    background: url(${IconOpenCourseBtn}) no-repeat center/contain;

    @media ${DEVICE.laptopS} {
        max-width: 24px;
        height: 22px;
        margin: 0 auto;

        background: url(${IconOpenCourseBtnMob}) no-repeat center/contain;
    }
`

const StartLearn = styled.div`
    position: absolute;
    right: 2px;
    bottom: 2px;
`

const Text = styled.p`
    width: 100%;

    font-family: "CalibriLight", sans-serif;
    line-height: 1.64;
    font-size: 1.3vw;
    color: ${COLORS.black};

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
    align-items: normal;

    @media ${DEVICE.laptopS} {
        flex-direction: column;
        align-items: center;
    }
`

const Column = styled.div`
    @media ${DEVICE.laptopS} {
        display: block;
        height: auto;

        margin-bottom: 40px;

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
    padding: 9vh 0;

    @media ${DEVICE.laptopM} {
        padding-top: 8vh;
    }

    @media ${DEVICE.laptopS} {
        padding-bottom: 9vh;
        padding-top: 8vh;
    }
`

const Slide1Cols = styled(SlideCols)`
    ${SlideColsInner} {
        display: flex;
        align-items: center;
        height: 100%;

        @media ${DEVICE.laptopS} {
            display: block;
        }
    }

    ${Column} {
        &:first-child {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 7vw;

            @media ${DEVICE.laptopS} {
                margin-right: 0;
            }
        }

        &:last-child {
            max-width: 42vw;

            @media ${DEVICE.laptopS} {
                max-width: none;
            }
        }

        & > * {
            &:first-child {
                margin-bottom: 4.16vh;

                @media ${DEVICE.laptopS} {
                    margin-bottom: 40px;
                }
            }

            &:nth-child(2) {
                margin-bottom: 5.09vh;

                @media ${DEVICE.laptopS} {
                    margin-bottom: 40px;
                }
            }

            &:last-child {
                margin-bottom: 0;
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
        grid-template: repeat(2, auto) / repeat(2, 1fr);

        @media ${DEVICE.laptopS} {
            display: block;
        }
    }

    ${Column} {
        &:nth-child(1) {
            grid-area: 1 / 1 / 2 / 2;
            margin-bottom: 2vh;
        }

        &:nth-child(2) {
            grid-area: 2 / 1 / 3 / 2;
        }

        &:nth-child(3) {
            grid-area: 2 / 2 / 3 / 3;
        }

        & > * {
            margin-bottom: 4vh;

            &:last-child {
                margin-bottom: 0;
            }

            @media ${DEVICE.laptopS} {
                margin-bottom: 40px;
            }
        }
    }
`

const AttentionImage = styled.img`
    width: 4.6vw;
    margin-right: 1.3vw;
    margin-left: -4%;

    @media ${DEVICE.laptopS} {
        width: 60px;
        margin-bottom: 15px;
        margin-right: 0;
        margin-left: 0;
    }
`

const ElIcon = styled.div`
    flex-shrink: 0;

    width: 60px;
    margin-right: 2.5vw;

    @media ${DEVICE.laptopM} {
        width: 55px;
    }

    @media ${DEVICE.mobileS} {
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
