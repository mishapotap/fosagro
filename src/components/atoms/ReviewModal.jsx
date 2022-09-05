/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import CurvedModal from "./CurvedModal"
import { Flower } from "../../assets/svg"
import { COLORS, DEVICE } from "../../constants"
import SendButton from "./SendButton"
import "wicg-inert"

// TODO сделать нормально обработку запроса

export default function ReviewModal({ isOpen, onClose }) {
    const [ratingVal, setRatingVal] = useState(0)
    const [hoverVal, setHoverVal] = useState(0)
    const [message, setMessage] = useState("")

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const successElRef = useRef(null)
    const contentElRef = useRef(null)

    const [showSuccess, setShowSuccess] = useState(false)
    const [sucIsVisible, setSucIsVisible] = useState(false)

    async function makeRequest(url, data) {
        // примерно как был бы запрос

        // const settings = {
        //     type: "POST",
        //     body: JSON.stringify(data),
        // }
        // const response = await fetch(url, settings)

        // if (!response.ok) {
        //     throw new Error(
        //         `Could not fetch ${url}, status: ${response.status}`
        //     )
        // }
        // return response.json()

        // ------ для проверки

        // console.log("data", data)

        // eslint-disable-next-line no-new
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // eslint-disable-next-line no-new
                // reject(new Error("Test error"))
                resolve("success")
            }, 3000)
        })
    }

    function handleSend(e) {
        e.preventDefault()

        if (!message.trim() && !ratingVal) {
            return
        }

        setLoading(true)
        setError(false)

        makeRequest("/test", {
            message: message.trim(),
            ratingVal,
        })
            .then(() => {
                setLoading(false)
                setError(false)
                setSuccess(true)
            })
            .catch(() => {
                setLoading(false)
                setError(true)
                setSuccess(false)
            })
    }

    return (
        <CurvedModal
            isOpen={isOpen}
            onClose={onClose}
            type="review"
        >
            <Container>
                <ModalContent
                    className={`${error ? "error" : ""} ${
                        success ? "success" : ""
                    }`}
                >
                    {error && <ErrorMessage>Ошибка отправки</ErrorMessage>}
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
                            <SendButton text="Закрыть" onClick={onClose} />
                        </Success>
                    </CSSTransition>

                    <CSSTransition
                        in={!success}
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
                            <Rating
                                onMouseLeave={() => setHoverVal(0)}
                                inert={loading ? "" : undefined}
                            >
                                {Array.from({ length: 5 }, (_, i) => i + 1).map(
                                    (i) => (
                                        <RatingItem
                                            key={i}
                                            value={i}
                                            onClick={() => setRatingVal(i)}
                                            onMouseEnter={() => setHoverVal(i)}
                                        >
                                            <Flower
                                                active={
                                                    (hoverVal &&
                                                        i <= hoverVal) ||
                                                    (!hoverVal &&
                                                        i <= ratingVal)
                                                }
                                            />
                                        </RatingItem>
                                    )
                                )}
                            </Rating>
                            <Text>
                                Устойчивое развитие похоже на спорт: сегодня это
                                было хорошо, а что можно сделать еще лучше? Нам
                                очень важен ваш взгляд, так формируется
                                устойчивый подход к работе и жизни.
                            </Text>
                            <FormWrapper>
                                <Form onSubmit={handleSend}>
                                    <TextareaWrapper>
                                        <Textarea
                                            value={message}
                                            onChange={({ target: { value } }) =>
                                                setMessage(value)
                                            }
                                            disabled={loading}
                                        />
                                    </TextareaWrapper>
                                    <SendButton
                                        text="Отправить"
                                        loading={loading}
                                        disabled={
                                            loading ||
                                            (!message.trim() && !ratingVal)
                                        }
                                    />
                                </Form>
                            </FormWrapper>
                        </Content>
                    </CSSTransition>
                </ModalContent>
            </Container>
        </CurvedModal>
    )
}

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
    font-size: 2.24vw;
    line-height: 1.3;
    text-align: center;

    margin-bottom: 3.7vh;

    @media ${DEVICE.laptopM} {
        font-size: 1.9vw;
    }

    @media ${DEVICE.laptop} {
        font-size: 25px;
    }

    @media ${DEVICE.mobile} {
        font-size: 23px;
    }
`

const FormWrapper = styled.div`
    width: 100%;
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
        font-size: 18px;
    }
`

const Text = styled.p`
    font-family: CalibriLight, sans-serif;
    color: ${COLORS.black};
    font-size: 1.2vw;
    line-height: 1.3;
    text-align: center;

    margin-bottom: 30px;

    @media ${DEVICE.laptop} {
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

// чтобы скрыть полосу скролла, которая выходит за пределы textarea
const TextareaWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 24.5vh;
    overflow: hidden;

    margin-bottom: 3.7vh;
    border: 1px solid ${COLORS.blue};
    border-radius: 30px;

    @media ${DEVICE.laptopM} {
        border-radius: 20px;
        font-size: 16px;
    }

    @media ${DEVICE.laptopS} {
        min-height: auto;
        max-width: 600px;
        height: 250px;
    }

    @media ${DEVICE.mobile} {
        border-radius: 10px;
        min-height: none;
        height: 170px;
        max-width: 500px;
    }
`

const Textarea = styled.textarea`
    width: 100%;
    position: absolute;
    height: 100%;
    padding: 15px;

    font-size: 20px;
    font-family: CalibriLight, sens-serif;

    border-radius: 30px;
    resize: none;

    &::-webkit-scrollbar {
        width: 3px;
        background-color: #cfd4da;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${COLORS.blue};
        border-radius: 2em;
    }

    @media ${DEVICE.laptopM} {
        border-radius: 20px;
        font-size: 16px;
    }

    @media ${DEVICE.mobile} {
        border-radius: 10px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 89.6%;
    margin: 0 auto;

    @media ${DEVICE.mobile} {
        max-width: none;
    }
`

const Rating = styled.div`
    display: flex;
    margin-bottom: 3.7vh;
`

const RatingItem = styled.div`
    cursor: pointer;
    padding: 0 0.99vw;

    @media ${DEVICE.laptopM} {
        padding: 0 10px;
    }
`

const ModalContent = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 70%;
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
        ${TextareaWrapper} {
            border-color: ${COLORS.red};
        }
    }
`
