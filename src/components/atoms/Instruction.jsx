/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import "wicg-inert"
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Pagination, Navigation, EffectFade } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import {
    IconAttention,
    IconBlueBtnMail,
    IconOpenCourseBtn,
    IconOpenCourseBtnMob,
    IconBlueBtnSound,
} from "../../assets/svg/static/Instruction"

import {
    Headphones,
    ArrowRight,
    ArrowLeft,
    Fosagro,
    Close,
} from "../../assets/svg"
import { COLORS, DEVICE } from "../../constants"
import { MenuBackground } from "../../assets/images"
import SendButton from "./SendButton"
import * as routes from "../../constants/routes"
import DocsLink from "./DocsLink"

// eslint-disable-next-line
import "swiper/css"
// eslint-disable-next-line
import "swiper/css/effect-fade"
// eslint-disable-next-line

export default function Instruction({ onClose }) {
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

    return (
        <Container>
            <CloseBtn onClick={onClose}>
                <Close color={COLORS.blue} />
            </CloseBtn>
            <Logo>
                <Link to={routes.HOME}>
                    <Fosagro />
                </Link>
            </Logo>
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
                                <Column>
                                    <Title>
                                        Инструкция по прохождению курса
                                        <TitleAccent>
                                            «Устойчивое развитие»
                                        </TitleAccent>
                                    </Title>
                                </Column>
                                <Column>
                                    <Text>
                                        Уважаемые пользователи, в нашем курсе 6
                                        разделов, каждый из которых поделен на
                                        темы. Вы можете выбрать какой раздел
                                        изучать, вне зависимости от их
                                        последовательности.
                                    </Text>
                                    <Row>
                                        <AttentionImage
                                            src={IconAttention}
                                            alt="внимание"
                                        />
                                        <Text>
                                            Однако прохождение курса внутри
                                            раздела идет последовательно, Вы не
                                            можете перейти к следующей теме, не
                                            изучив предыдущую.
                                        </Text>
                                    </Row>
                                    <Text>
                                        В конце каждого раздела Вас ждет простой
                                        тест на несколько вопросов для проверки
                                        усвоенных знаний.
                                    </Text>
                                </Column>
                            </Slide1Cols>
                        </SlideInner>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideInner>
                            <Slide2Cols>
                                <Column>
                                    <Title>Краткая справка по навигации</Title>
                                </Column>
                                <Column>
                                    <ColBlock>
                                        <Text>
                                            Переход между страницами
                                            осуществляется прокруткой
                                            мыши/тачпада.
                                        </Text>
                                    </ColBlock>
                                    <ColBlock>
                                        <CourseImage />
                                        <Text>Кнопка открытия меню курса.</Text>
                                    </ColBlock>
                                    <ColBlock inert="true">
                                        <DocsLink showCursor={false} />
                                        <Text>
                                            Ссылки на дополнительные материалы
                                            вынесены в виде такого элемента.
                                        </Text>
                                    </ColBlock>
                                </Column>
                                <Column>
                                    <IconRow>
                                        <IconHeadphones inert="true">
                                            <Headphones />
                                        </IconHeadphones>
                                        <Text>
                                            В нашем курсе предполагается
                                            звуковое сопровождение, аудиогид,
                                            управление им осуществляется при
                                            нажатии на данный элемент.
                                        </Text>
                                    </IconRow>
                                    <IconRow>
                                        <ElIcon>
                                            <img
                                                src={IconBlueBtnSound}
                                                alt=""
                                            />
                                        </ElIcon>
                                        <Text>
                                            Элемент отключения/включения музыки
                                            в проекте.
                                        </Text>
                                    </IconRow>
                                    <IconRow>
                                        <ElIcon>
                                            <img src={IconBlueBtnMail} alt="" />
                                        </ElIcon>
                                        <Text>
                                            Элемент обратной связи, будем рады
                                            ваши отзывам и предложениям по
                                            улучшению контента!
                                        </Text>
                                    </IconRow>
                                </Column>
                            </Slide2Cols>
                            <StartLearn>
                                <Link to={routes.COURSE01}>
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
    )
}

const CloseBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
`

const SliderContainer = styled.div`
    margin: 0 auto;
    height: 100%;

    @media ${DEVICE.mobileS} {
        max-width: 100%;
        max-height: 88%;
    }

    @media ${DEVICE.mobileS} and (orientation: landscape) {
        max-height: 82%;
    }

    @media ${DEVICE.laptopS} {
        max-width: 85%;
        max-height: 90%;
    }

    @media ${DEVICE.laptopM} {
        max-height: 82%;
    }
`

const Logo = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;

    svg {
        max-width: 100%;
    }

    @media ${DEVICE.mobileS} {
        width: 150px;
    }

    @media ${DEVICE.laptopS} {
        width: 12.5vw;
    }
`

const SlideInner = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 400;

    display: flex;
    padding: 16px;

    width: 100%;
    height: 100%;

    background: url(${MenuBackground}) no-repeat center/cover;

    @media ${DEVICE.mobileS} {
        align-items: flex-end;
    }

    @media ${DEVICE.laptopS} {
        align-items: center;
    }

    .swiper {
        height: 100%;
    }

    .cur-slide-number {
        font-family: "FocoBold";
        color: ${COLORS.blue};
        display: inline-block;

        @media ${DEVICE.mobileS} {
            font-size: 28px;
        }

        @media ${DEVICE.laptopS} {
            font-size: 3.15vw;
        }
    }

    .total-slides-number {
        font-family: "FocoBold";
        color: ${COLORS.white};
        display: inline-block;

        @media ${DEVICE.mobileS} {
            font-size: 24px;
        }

        @media ${DEVICE.laptopS} {
            font-size: 2.1vw;
        }
    }

    .separator {
        display: inline-block;
        margin-right: 2px;

        color: ${COLORS.white};

        @media ${DEVICE.mobileS} {
            font-size: 24px;
        }

        @media ${DEVICE.laptopS} {
            font-size: 2.1vw;
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

const CourseImage = styled.div`
    @media ${DEVICE.mobileS} {
        max-width: 24px;
        height: 22px;
        margin: 0 auto;

        background: url(${IconOpenCourseBtnMob}) no-repeat center/contain;
    }

    /* TODO узнать на какой ширине меню будет сменяться на бургер, и написать правильный брейкпоинт  */
    @media ${DEVICE.laptopS} {
        max-width: 311px;
        height: 28px;
        margin: 0;

        font-size: 1.3vw;
        background: url(${IconOpenCourseBtn}) no-repeat center/contain;
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
    color: ${COLORS.black};

    @media ${DEVICE.mobileS} {
        font-size: 16px;
    }

    @media ${DEVICE.laptopS} {
        font-size: 1.3vw;
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

    @media ${DEVICE.mobileS} {
        flex-direction: column;
        align-items: center;
    }

    @media ${DEVICE.laptopS} {
        flex-direction: row;
        align-items: normal;
    }
`

const Column = styled.div`
    @media ${DEVICE.mobileS} {
        display: block;
        height: auto;

        margin-bottom: 40px;

        &:last-child {
            margin-bottom: 0;
        }

        & > * {
            margin-bottom: 40px;

            @media ${DEVICE.laptopS} {
                margin-bottom: 18px;
            }
        }

        & > *:last-child {
            margin-bottom: 0;
        }
    }

    @media ${DEVICE.laptopS} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        margin-bottom: 0;
        height: 100%;
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

    @media ${DEVICE.mobileS} {
        font-size: 23px;
    }

    @media ${DEVICE.laptopS} {
        font-size: 2.24vw;
    }

    .accent {
        color: ${COLORS.white};
    }
`

const SlideCols = styled.div`
    height: 100%;

    @media ${DEVICE.mobileS} {
        display: block;
        overflow: auto;
        max-width: 600px;
        max-height: 82%;

        margin-left: auto;
        margin-right: auto;
        padding-bottom: 30px;

        &::-webkit-scrollbar {
            width: 0;
        }
    }

    @media ${DEVICE.laptopS} {
        overflow: visible;
        max-width: none;
        padding-bottom: 0;
    }
`

const Slide1Cols = styled(SlideCols)`
    @media ${DEVICE.laptopS} {
        display: flex;
        align-items: center;

        max-height: 48.7%;
    }

    ${SlideInner} {
        height: 100%;
        display: flex;
        align-items: center;
    }

    ${Column} {
        &:first-child {
            justify-content: center;
            align-items: center;

            @media ${DEVICE.mobileS} {
                margin-right: 0;
            }

            @media ${DEVICE.laptopS} {
                margin-right: 7vw;
            }
        }

        &:last-child {
            @media ${DEVICE.mobileS} {
                max-width: none;
            }

            @media ${DEVICE.laptopS} {
                max-width: 42vw;
            }
        }
    }
`

const Slide2Cols = styled(SlideCols)`
    ${Text} {
        @media ${DEVICE.mobileS} {
            max-width: none;
        }

        @media ${DEVICE.laptopS} {
            max-width: 31.6vw;
        }
    }

    @media ${DEVICE.mobileS} {
        margin-top: 0;
    }

    @media ${DEVICE.laptopS} {
        display: grid;
        grid-template: repeat(2, auto) / repeat(2, 1fr);
        row-gap: 5vh;

        max-height: 70%;

        ${Column} {
            &:nth-child(1) {
                grid-area: 1 / 1 / 2 / 2;
            }

            &:nth-child(2) {
                grid-area: 2 / 1 / 3 / 2;
            }

            &:nth-child(3) {
                grid-area: 2 / 2 / 3 / 3;
            }
        }
    }

    @media ${DEVICE.laptopS} and (orientation: landscape) and (max-width: 1200px) {
        max-height: 54%;
    }

    @media ${DEVICE.laptopM} {
        max-height: 55.7%;
    }
`

const AttentionImage = styled.img`
    @media ${DEVICE.mobileS} {
        width: 60px;
        margin-bottom: 15px;
        margin-right: 0;
        margin-left: 0;
    }

    @media ${DEVICE.laptopS} {
        width: 4.6vw;
        margin-right: 1.3vw;
        margin-bottom: 0;
        margin-left: -4%;
    }
`

const ElIcon = styled.div`
    flex-shrink: 0;

    @media ${DEVICE.mobileS} {
        margin-right: 0;
        margin-bottom: 15px;
        width: 55px;
    }

    @media ${DEVICE.laptopS} {
        margin-right: 0;
        margin-bottom: 0;
        margin-right: 2.5vw;
        width: 60px;
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

    @media ${DEVICE.mobileS} {
        flex-direction: column;
        justify-content: center;
    }

    @media ${DEVICE.laptopS} {
        flex-direction: row;
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
