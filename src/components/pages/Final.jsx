/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"

import { COLORS, DEVICE } from "../../constants"
import { Layout } from "../atoms"
import { MailButton } from "../molecules"
import { SuccessIcon } from "../../assets/svg/static"

import MenuButtons from "../molecules/MenuButtons"
import { MenuBackground } from "../../assets/images"
import { Title } from "../atoms/Content"
import { CourseProgressStore, ModalStore } from "../../store"
import Error404 from "./Error404"
import { FinalAudio } from "../../assets/audio"

function Final() {
    const audioRef = useRef(null)

    useEffect(() => {
        if (audioRef.current && audioRef.current.paused) audioRef.current.play()
    }, [])

    useEffect(() => {
        if (audioRef.current) {
            if (ModalStore.isVisible.mail) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalStore.isVisible.mail])

    if (!CourseProgressStore.userPassedFullCourse) return <Error404/>

    return (
        <StyledLayout page="final">
            <Container>
                <audio src={FinalAudio} ref={audioRef} />
                <Background />
                <ContentWrapper>
                    <Content>
                        <Icon src={SuccessIcon} />
                        <StyledTitle color={COLORS.blue}>
                            Поздравляем!
                        </StyledTitle>
                        <TextRow1>
                            <Text>
                                Вы завершили обучение курса “Устойчивое
                                развитие”.
                            </Text>
                            <Text>
                                Теперь Вы знакомы с Целями устойчивого развития
                                ООН и усилиями, которые вкладывает наша Компания
                                в их достижение.
                            </Text>
                        </TextRow1>
                        <TextRow2>
                            <LightText>
                                Следующий шаг за Вами! Ведь каждый из нас вносит
                                вклад в улучшение благосостояния и защиту нашей
                                планеты.
                            </LightText>
                            <LightText>
                                А мы будем рады Вашей обратной связи!
                            </LightText>
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
`

const Container = styled.div`
    max-height: 100%;
    height: 100%;

    .progress-bar-cont {
        margin-top: 30px;
    }
`

const StyledTitle = styled(Title)`
    margin-bottom: 20px;
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

    @media ${DEVICE.laptopS} {
        margin-bottom: 30px;
    }
`

const TextRow2 = styled(TextRow)`
    margin-bottom: 30px;
`

const Icon = styled.img`
    width: 4vw;
    margin-bottom: 20px;

    @media ${DEVICE.laptop} {
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
