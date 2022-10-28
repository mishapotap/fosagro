/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"

import { CookiesStore, ModalStore } from "../../store"
import { Title } from "./Content"
import Modal from "./Modal"

import { COLORS, DEVICE, ISENG } from "../../constants"
import SendButton from "./SendButton"
import { MenuBackground } from "../../assets/images"
import Layout from "./Layout"
import CookiesConfirmModal from "./CookiesConfirmModal"
import Notification from "./Notification"
import { getElWindowPos } from "../../utils"
import { CookiesAudio } from "../../assets/audio"
import AudioPlayer from "./AudioPlayer"
import { showContent } from "../../constants/animations"

const langText = {
    title1: 'About',
    title1Accent: 'cookies',
    text1: "This training course is designed as a website/application.",
    text2: "A cookie is a small piece of data sent by a web server to be stored on a user’s computer.",
    text3: "The web client (web browser) sends this data fragment to the web server as part of the HTTP request every time the user opens this project.",
    text4: "This file stores user data to track their session progress within this training course.",
    text5: "We also collect statistical data via the Yandex.Metrica online service.",
    text6: "The project does not collect or share any personal data of users.",
    text7: "In 30 days after receiving cookie consent, these files will be automatically deleted.",
    text8: "This training course uses cookies to improve the user’s learning experience and enable progress tracking.",
    text9: "By accepting cookies and continuing to use this training course, you consent to PhosAgro processing of the above data.",
    text10: "If you do not wish to use cookies, please select the cookie-less course option.",
    text11: "You can delete cookies by clicking the button below. Please note that by doing so all your progress in this course will be permanently lost.",
    // !перевод (от меня)
    title2: "How to delete ",
    title2Accent: "cookies",
    goToInstrBtn: "Go to instructions",
    deleteCookiesBtn: "Delete cookies",
    noCookiesText: "You do not have cookies",
}
const ruText = {
    title1: 'Информация о',
    title1Accent: '«cookies»',
    text1: "Данный учебный курс реализован в формате веб-сайта/приложения.",
    text2: "Файл «cookies» — небольшой фрагмент данных, отправленный веб-сервером и хранимый на компьютере пользователя.",
    text3: "Веб-клиент (веб-браузер) всякий раз при попытке открыть данный проект пересылает этот фрагмент данных веб-серверу в составе HTTP-запроса.",
    text4: "Файл применяется для сохранения следующих данных на стороне пользователя: - отслеживания состояния сеанса работы пользователя в учебном курсе.",
    text5: "Также для сбора статистических сведений используется интернет-сервис «Яндекс.Метрика».",
    text6: "Проект не собирает и не передает персональные данные пользователя.",
    text7: "Файл «cookies» автоматически удаляется через 30 дней, после согласия пользователя использовать файл.",
    text8: "Учебный курс использует файл «cookies» в целях повышения удобства изучения и отслеживания прогресса изучения пользователем курса.",
    text9: "Принимая файл «cookies» и продолжая работу с данным учебным курсом, вы даете свое согласие ПАО «ФосАгро» на обработку указанных выше данных.",
    text10: "Если вы не хотите использовать файл «cookies», воспользуйтесь вариантом курса без использования «cookies».",
    text11: "Чтобы удалить файлы «cookies», воспользуйтесь кнопкой ниже. Обращаем ваше внимание на то, что прогресс прохождения курса будет полностью потерян.",
    title2: "Как удалить",
    title2Accent: "«cookies»",
    goToInstrBtn: "Перейти в инструкцию",
    deleteCookiesBtn: "Удалить cookies",
    noCookiesText: "У вас нет файлов cookies",
}

// eslint-disable-next-line no-unused-vars
const textData = ISENG ? langText : ruText

function CookiesInfoModal() {
    const [showNotif, setShowNotif] = useState(false)
    const [notifPos, setNotifPos] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [makePausedBtn, setMakePausedBtn] = useState(true)
    const contentRef = useRef(null)
    const autoPausedAudio = useRef(null)

    useEffect(() => {
        if (ModalStore.isVisible.cookiesInfo) {
            setTimeout(() => {
                setIsPlaying(true)
            }, 1000)
            setMakePausedBtn(true)
        } else {
            setMakePausedBtn(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalStore.isVisible.cookiesInfo])

    const setIsPlayingFalse = () => {
        setIsPlaying(true)

        setTimeout(() => {
            setIsPlaying(false)
        }, 50)
    }

    const setIsPlayingTrue = () => {
        setIsPlaying(false)

        setTimeout(() => {
            setIsPlaying(true)
        }, 50)
    }

    useEffect(() => {
        if (ModalStore.isVisible.cookiesConfirm) {
            setIsPlayingFalse()
            if (contentRef.current) {
                const audio = contentRef.current.querySelector("audio")

                if (audio && !audio.paused) {
                    autoPausedAudio.current = audio
                }
            }
        } else {
            setTimeout(() => {
                if (
                    ModalStore.isVisible.cookiesInfo &&
                    autoPausedAudio.current
                ) {
                    setIsPlayingTrue()
                    autoPausedAudio.current = null
                }
            }, 600)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalStore.isVisible.cookiesConfirm])

    function checkCookies({ target }) {
        if (CookiesStore.userAcceptedCookies) {
            ModalStore.showModal("cookiesConfirm")
        } else {
            const { top, leftCenter } = getElWindowPos(target)
            const notificPos = { top: `${top - 20}px`, left: `${leftCenter}px` }

            setNotifPos(notificPos)
            setShowNotif(true)

            setTimeout(() => {
                setShowNotif(false)
            }, 1900)
        }
    }

    function onClose() {
        ModalStore.closeModal("cookiesInfo")
        setIsPlaying(false)
    }

    return (
        <>
            <StyledModal
                isOpen={ModalStore.isVisible.cookiesInfo}
                onClose={onClose}
            >
                <StyledLayout page="instruction">
                    <Content ref={contentRef}>
                        <Columns>
                            <Column1>
                                <StyledTitle color={COLORS.blue}>
                                    {textData.title1}{" "}
                                    <TitleAccent>{textData.title1Accent}</TitleAccent>
                                </StyledTitle>
                            </Column1>
                            <Column2>
                                <TextWrapper>
                                    <Text>
                                        {textData.text1}
                                    </Text>
                                    <Text>
                                        {textData.text2}
                                    </Text>
                                    <Text>
                                        {textData.text3}
                                    </Text>
                                    <Text>
                                        {textData.text4}
                                    </Text>
                                    <Text>
                                        {textData.text5}
                                    </Text>
                                    <Text>
                                        {textData.text6}
                                    </Text>
                                    <Text>
                                        {textData.text7}
                                    </Text>
                                </TextWrapper>
                            </Column2>

                            <Column3>
                                <TextWrapper className="text-wrapper info">
                                    <Text>
                                        {textData.text8}
                                    </Text>
                                    <Text>
                                        {textData.text9}
                                    </Text>
                                    <Text>
                                    {textData.text10}
                                    </Text>
                                </TextWrapper>
                                <StyledTitle color={COLORS.blue}>
                                {textData.title2}{" "}
                                    <TitleAccent>{textData.title2Accent}</TitleAccent>
                                </StyledTitle>
                                <TextWrapper className="text-wrapper remove">
                                    <Text>
                                        {textData.text11}
                                    </Text>
                                </TextWrapper>
                                <Buttons>
                                    <StyledSendButton
                                        text={textData.deleteCookiesBtn}
                                        onClick={checkCookies}
                                    />
                                    <Link to="instruction" onClick={onClose}>
                                        <GoToInstrBtn>
                                            {textData.goToInstrBtn}
                                        </GoToInstrBtn>
                                    </Link>
                                </Buttons>
                            </Column3>
                            <StyledAudioPlayer
                                src={CookiesAudio}
                                isPlaying={isPlaying}
                                makePausedBtn={makePausedBtn}
                            />
                        </Columns>
                    </Content>
                </StyledLayout>
                <Notification
                    text={textData.noCookiesText}
                    show={showNotif}
                    position={notifPos}
                />
            </StyledModal>
            <CookiesConfirmModal />
        </>
    )
}

export default observer(CookiesInfoModal)

const StyledLayout = styled(Layout)``

const StyledAudioPlayer = styled(AudioPlayer)`
    position: absolute;
    left: 10px;
    top: 20%;

    @media ${DEVICE.laptopS} {
        position: relative;
        margin-bottom: 300px;
    }
`

const StyledSendButton = styled(SendButton)`
    margin-right: 20px;

    @media ${DEVICE.laptopS} {
        margin-bottom: 15px;
    }
`

const TitleAccent = styled.span`
    color: ${COLORS.white};
`

const Buttons = styled(Title)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

const StyledTitle = styled(Title)`
    margin-bottom: 30px;

    @media ${DEVICE.laptopS} {
        margin-bottom: 24px;
    }
`

const GoToInstrBtn = styled.button`
    font-size: 18px;
    border-bottom: 1px solid ${COLORS.blue};
    color: ${COLORS.blue};

    @media ${DEVICE.laptopM} {
        font-size: 15px;
    }
`

const Column = styled.div``

const Text = styled.p`
    font-family: "CalibriLight", sans-serif;
    line-height: 1.25;
    font-size: 1.25vw;
    color: ${COLORS.black};

    @media ${DEVICE.laptopM} {
        font-size: 1.15vw;
    }

    @media ${DEVICE.laptop} {
        font-size: 16px;
    }
`

const TextWrapper = styled.div`
    ${Text} {
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const Column1 = styled(Column)`
    grid-area: 1 / 1 / 2 / 2;

    ${TextWrapper} {
        margin-bottom: 20px;
    }
`

const Column2 = styled(Column)`
    grid-area: 2 / 1 / 3 / 2;
`

const Column3 = styled(Column)`
    grid-area: 2 / 2 / 3 / 3;

    ${TextWrapper} {
        margin-bottom: 30px;
    }

    @media ${DEVICE.laptopS} {
        grid-area: 3 / 1 / 4 / 2;
    }
`

const Columns = styled.div`
    display: grid;
    grid-template: 9vh auto / repeat(2, 48%);
    justify-content: space-between;

    max-height: 100%;
    overflow: auto;
    padding-bottom: 4vh;

    &::-webkit-scrollbar {
        width: 0;
    }

    @media ${DEVICE.laptopS} {
        grid-template: repeat(3, auto) / 1fr;
        padding-right: 10px;
        padding-bottom: 5px;
    }

    max-width: 82vw;
    margin: 0 auto;

    @media ${DEVICE.laptopM} {
        max-width: 85%;
    }

    @media ${DEVICE.mobile} {
        max-width: 100%;
    }

    > ${Column} {
        flex: 0 1 48%;
    }

    ${Column1},
    ${Column2},
    ${Column3} {
        animation: ${showContent} 1.8s both;
    }

    ${Column1} {
        animation-delay: 1s;
    }

    ${Column2} {
        animation-delay: 2.7s;
    }

    ${Column3} {
        animation-delay: 4s;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;

    @media ${DEVICE.laptopS} {
        display: block;
    }
`

const StyledModal = styled(Modal)`
    .modal-window {
        background-color: transparent;
        background: url(${MenuBackground}) no-repeat center/cover;
    }
`
