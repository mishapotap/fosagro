/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { observer } from "mobx-react-lite"
import "wicg-inert"

import CurvedModal from "../CurvedModal"
import { Flower } from "../../../assets/svg"
import { COLORS, DEVICE } from "../../../constants"
import SendButton from "../SendButton"
// eslint-disable-next-line no-unused-vars
import { ReviewModalStore, SoundStore } from "../../../store"
import Rating from "./Rating"
import Form from "./Form"
import { FeedBack, Click2, FormSuccess } from "../../../assets/audio"

function ReviewModal({ isOpen, onClose }) {
    const successElRef = useRef(null)
    const contentElRef = useRef(null)
    const feedBackAudioRef = useRef(null)
    const soundPlayed = useRef(false)
    const successAudioRef = useRef(false)

    // думаю это состояние должно быть локальным, чтобы когда компонент будет создан заново,
    // нам не показывалось сообщение об успехе напр, а можно было снова отправить отзыв
    const [showSuccess, setShowSuccess] = useState(false)
    const [sucIsVisible, setSucIsVisible] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                if (feedBackAudioRef.current) {
                    feedBackAudioRef.current.play()
                }
            }, 500)
        } else {
            setTimeout(() => {
                setShowSuccess(false)
                setSucIsVisible(false)
                ReviewModalStore.resetState()
            }, 500);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])

    useEffect(() => {
        if (ReviewModalStore.isLoading) {
            if (feedBackAudioRef.current) feedBackAudioRef.current.pause()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ReviewModalStore.isLoading])

    useEffect(() => {
        if (ReviewModalStore.isSuccess) {
            const audio = new Audio(Click2)
            audio.play()
            setTimeout(() => {
                if (successAudioRef.current) successAudioRef.current.play()
            }, 200);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ReviewModalStore.isSuccess])

    useEffect(
        () => () => {
            ReviewModalStore.resetState()
        },
        []
    )

    function handleAudioPlay() {
        soundPlayed.current = true
    }

    function closeModal() {
        if (!ReviewModalStore.isLoading) {
            onClose()
            if (feedBackAudioRef.current) {
                feedBackAudioRef.current.pause()
            }
        }
    }

    return (
        <CurvedModal isOpen={isOpen} onClose={closeModal} type="review">
            <audio src={FeedBack} ref={feedBackAudioRef} onPlay={handleAudioPlay} />
            <audio src={FormSuccess} ref={successAudioRef} />
            <Container>
                <ModalContent
                    className={`${ReviewModalStore.isError ? "error" : ""} ${
                        ReviewModalStore.isSuccess ? "success" : ""
                    }`}
                >
                    {ReviewModalStore.isError && (
                        <ErrorMessage>Ошибка отправки</ErrorMessage>
                    )}
                    <CSSTransition
                        in={showSuccess}
                        classNames="success"
                        unmountOnExit
                        onEntered={() => setSucIsVisible(true)}
                        timeout={100}
                        nodeRef={successElRef}
                    >
                        <Success
                            ref={successElRef}
                            style={{ opacity: `${sucIsVisible ? "1" : "0"}` }}
                        >
                            <StyledFlower active />
                            <Title>Спасибо!</Title>
                            <Text>Ваш отзыв успешно отправлен.</Text>
                            <SendButton text="Закрыть" onClick={closeModal} />
                        </Success>
                    </CSSTransition>

                    <CSSTransition
                        in={!ReviewModalStore.isSuccess}
                        classNames="content"
                        unmountOnExit
                        timeout={100}
                        nodeRef={contentElRef}
                        onExited={() => setShowSuccess(true)}
                    >
                        <Content ref={contentElRef} className="content">
                            <Title>Ваше мнение очень важно для нас!</Title>
                            <Text>
                                Оцените, пожалуйста, ваш опыт взаимодействия с
                                нашим проектом.
                            </Text>
                            <StyledRating />
                            <Text>
                                Устойчивое развитие похоже на спорт: сегодня это
                                было хорошо, а что можно сделать еще лучше? Нам
                                очень важен ваш взгляд, так формируется
                                устойчивый подход к работе и жизни.
                            </Text>
                            <Form />
                        </Content>
                    </CSSTransition>
                </ModalContent>
            </Container>
        </CurvedModal>
    )
}

const StyledRating = styled(Rating)`
    margin-bottom: 2.3vh;

    @media ${DEVICE.laptop} {
        margin-bottom: 16px;
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    width: 100%;
    height: 100%;
    padding: 30px 40px 40px;

    @media ${DEVICE.laptopS} {
        padding: 65px 0 10px;
    }

    @media ${DEVICE.mobile} {
        padding-top: 60px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: 0.2s;

    &.content-exit {
        opacity: 0;
    }
`

const StyledFlower = styled(Flower)``

const Title = styled.div`
    font-family: "FocoBold";
    color: ${COLORS.blue};
    font-size: 2vw;
    line-height: 1.3;
    text-align: center;

    margin-bottom: 2vh;

    @media ${DEVICE.laptopM} {
        font-size: 1.7vw;
    }

    @media ${DEVICE.laptop} {
        font-size: 25px;
    }

    @media ${DEVICE.mobile} {
        font-size: 23px;
    }
`

const ErrorMessage = styled.p`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    font-family: CalibriRegular, sans-serif;
    font-size: 1.3vw;
    color: ${COLORS.red};

    @media ${DEVICE.laptop} {
        font-size: 16px;
    }
`

const Text = styled.p`
    font-family: CalibriLight, sans-serif;
    color: ${COLORS.black};
    font-size: 1.2vw;
    line-height: 1.3;
    text-align: center;

    margin-bottom: 3vh;

    @media ${DEVICE.laptop} {
        margin-bottom: 18px;
        font-size: 16px;
    }
`

const Success = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: 0.2s;
    opacity: 0;

    ${StyledFlower} {
        width: 8vw;
        margin-bottom: 8.2vh;
        cursor: auto;

        @media ${DEVICE.laptopS} {
            width: 70px;
        }
    }

    ${Title} {
        margin-bottom: 3vh;
    }

    ${Text} {
        margin-bottom: 6.57vh;
    }

    &.success-enter {
        opacity: 0;
    }

    &.success-enter-done {
        opacity: 1;
    }
`

const ModalContent = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 74%;
    max-height: 100%;
    margin: 0 auto;
    padding-top: 25px;
    overflow: auto;

    @media ${DEVICE.laptopS} {
        max-width: 80%;
        padding-left: 20px;
        padding-right: 20px;
    }

    @media ${DEVICE.mobile} {
        padding-top: 20px;
        max-width: none;
    }

    &::-webkit-scrollbar {
        width: 0;
    }

    &.error {
        .textarea-wrapper {
            border-color: ${COLORS.red};
        }
    }
`

export default observer(ReviewModal)
