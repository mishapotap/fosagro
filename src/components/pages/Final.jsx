/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"

import { COLORS, DEVICE, ISENG } from "../../constants"
import { Layout } from "../atoms"
import { MailButton } from "../molecules"
import { SuccessIcon } from "../../assets/svg/static"

import MenuButtons from "../molecules/MenuButtons"
import { MenuBackground } from "../../assets/images"
import { Title } from "../atoms/Content"
import { CourseProgressStore, ModalStore, SoundStore } from "../../store"
import Error404 from "./Error404"
import { FinalAudio } from "../../assets/audio"

const engText = {
    title: "Congratulations!",
    text1: "You have completed the Sustainable Development course!",
    text2: "You now have an understanding of the UN Sustainable Development Goals and PhosAgro’s contribution to achieving them.",
    text3: "The next step is up to you! It is only together that we can truly make a difference and protect our planet.",
    text4: "We would really appreciate your feedback.",
}

const ruText = {
    title: "Поздравляем!",
    text1: "Вы завершили обучение курса “Устойчивое развитие”.",
    text2: "Теперь Вы знакомы с Целями устойчивого развития ООН и усилиями, которые вкладывает наша Компания в их достижение.",
    text3: "Следующий шаг за Вами! Ведь каждый из нас вносит вклад в улучшение благосостояния и защиту нашей планеты.",
    text4: "А мы будем рады Вашей обратной связи!",
}

const textData = ISENG ? engText : ruText

function Final() {
    const audioRef = useRef(null)
    const finalContRef = useRef(null)
    const autoPausedRef = useRef(null)

    useEffect(() => {
        if (SoundStore.finalAudio) {
            audioRef.current = SoundStore.finalAudio
            if (finalContRef.current)
                finalContRef.current.append(audioRef.current)
        } else {
            audioRef.current = new Audio(FinalAudio)
        }

        if (audioRef.current && audioRef.current.paused) audioRef.current.play()
        CourseProgressStore.setUserVisitedFinalPage()

        return () => {
            SoundStore.restartFinalAudio()
        }
    }, [])

    useEffect(() => {
        if (audioRef.current) {
            if (ModalStore.isVisible.mail) {
                if (!audioRef.current.paused) {
                    audioRef.current.pause()
                    autoPausedRef.current = true
                }
            } else if (autoPausedRef.current) {
                autoPausedRef.current = false
                audioRef.current.play()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalStore.isVisible.mail])

    if (!CourseProgressStore.userPassedFullCourse) return <Error404 />

    return (
        <StyledLayout page="final">
            <Container ref={finalContRef}>
                <Background />
                <ContentWrapper>
                    <Content>
                        <Icon src={SuccessIcon} />
                        <StyledTitle color={COLORS.blue}>
                            {textData.title}
                        </StyledTitle>
                        <TextRow1>
                            <Text>{textData.text1}</Text>
                            <Text>{textData.text2}</Text>
                        </TextRow1>
                        <TextRow2>
                            <LightText>{textData.text3}</LightText>
                            <LightText>{textData.text4}</LightText>
                        </TextRow2>
                        <MailButton />
                    </Content>
                    <StyledMenuButtons />
                </ContentWrapper>
            </Container>
        </StyledLayout>
    )
}

export default observer(Final)

const StyledLayout = styled(Layout)`
    .content {
        padding: 7px 0 0;
    }
`

const StyledMenuButtons = styled(MenuButtons)`
    padding: 2.8vw 20px 10px;
    overflow: hidden;

    @media ${DEVICE.mobile} {
        max-width: 480px;
        margin: 0 auto;
    }
`

const ContentWrapper = styled.div`
    max-height: 100%;
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0;
    }

    @media ${DEVICE.laptopS} {
        padding-top: 16px;
    }
`

const Container = styled.div`
    max-height: 100%;
    height: 100%;

    .progress-bar-cont {
        margin-top: 30px;
    }

    @media ${DEVICE.laptopM} {
        .menu-button-wrapper {
            width: 11.8vw;

            @media ${DEVICE.laptopS} {
                width: 21vw;
            }
            @media ${DEVICE.mobile} {
                width: 34vw;
            }
        }

        .progress-bar-cont {
            margin-top: 20px;

            .progress {
                width: 100%;
            }
        }

        .menu-btn-index {
            font-size: 2.8vw;

            @media ${DEVICE.laptopS} {
                font-size: 6vw;
            }

            @media ${DEVICE.mobile} {
                font-size: 8.1vw;
            }
        }

        .menu-btn-text {
            font-size: 0.83vw;

            @media ${DEVICE.laptopS} {
                font-size: 1.42vw;
            }

            @media ${DEVICE.mobile} {
                font-size: 2.4vw;
            }
        }

        .menu-buttons {
            max-width: 94%;
            margin: 0 auto;
            justify-content: center;

            @media ${DEVICE.mobile} {
                max-width: 100%;
                justify-content: space-around;
            }

            .menu-button-cont {
                margin-left: 20px;
                margin-right: 20px;

                @media ${DEVICE.laptopS} {
                    margin-bottom: 40px;
                }

                @media ${DEVICE.mobile} {
                    margin-right: 7px;
                    margin-left: 7px;
                }
            }
        }

        .progress-number {
            font-size: 1.1vw;

            @media ${DEVICE.laptopS} {
                font-size: 2.3vw;
            }
            @media ${DEVICE.tablet} {
                font-size: 2.7vw;
            }
            @media ${DEVICE.mobile} {
                font-size: 3.8vw;
            }
        }
    }
`

const StyledTitle = styled(Title)`
    margin-bottom: 20px;

    @media ${DEVICE.laptopM} {
        margin-bottom: 15px;
    }
`

const TextRow = styled.div`
    & > * {
        margin-bottom: 8px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const TextRow1 = styled(TextRow)`
    margin-bottom: 3vh;

    @media ${DEVICE.laptopM} {
        margin-bottom: 12px;
    }

    @media ${DEVICE.laptopS} {
        margin-bottom: 30px;
    }
`

const TextRow2 = styled(TextRow)`
    margin-bottom: 30px;

    @media ${DEVICE.laptopM} {
        margin-bottom: 20px;
    }
`

const Icon = styled.img`
    width: 4vw;
    margin-bottom: 20px;

    @media ${DEVICE.laptopM} {
        width: 3.2vw;
        margin-bottom: 10px;
    }

    @media ${DEVICE.laptopS} {
        width: 40px;
    }
`

const TextBase = styled.p`
    line-height: 1.33;
    font-size: 1.3vw;
    color: ${COLORS.black};

    @media ${DEVICE.laptopM} {
        font-size: 1.25vw;
    }

    @media ${DEVICE.laptop} {
        font-size: 16px;
    }
`

const Text = styled(TextBase)`
    font-family: CalibriRegular, sans-serif;
`

const LightText = styled(TextBase)`
    font-family: CalibriLight, sans-serif;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 72%;
    margin: 0 auto;
    text-align: center;
    padding: 0 20px;

    @media ${DEVICE.laptopS} {
        max-width: 100%;
    }
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    background: url(${MenuBackground}) no-repeat center center / cover;
    z-index: -1;
`
