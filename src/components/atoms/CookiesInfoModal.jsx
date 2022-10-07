/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
import React, { useState } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"

import { CookiesStore, ModalStore } from "../../store"
import { Title } from "./Content"
import Modal from "./Modal"

import { COLORS, DEVICE } from "../../constants"
import SendButton from "./SendButton"
import { MenuBackground } from "../../assets/images"
import Layout from "./Layout"
import CookiesConfirmModal from "./CookiesConfirmModal"
import Notification from "./Notification"
import { getElWindowPos } from "../../utils"

function CookiesInfoModal() {
    const [showNotif, setShowNotif] = useState(false)
    const [notifPos, setNotifPos] = useState(false)

    function checkCookies({ target }) {
        if (CookiesStore.userAcceptedCookies) {
            ModalStore.showModal("confirm")
        } else {
            const {top, leftCenter} = getElWindowPos(target)
            const notificPos = {top: `${top - 20}px`, left: `${leftCenter}px`}

            setNotifPos(notificPos)
            setShowNotif(true)

            setTimeout(() => {
                setShowNotif(false)
            }, 1900)
        }
    }

    return (
        <>
            <StyledModal
                isOpen={ModalStore.isVisible.cookiesInfo}
                onClose={() => ModalStore.closeModal("cookiesInfo")}
            >
                <StyledLayout page="instruction">
                    <Content>
                        <Columns>
                            <Column1>
                                <StyledTitle color={COLORS.blue}>
                                    Информация о{" "}
                                    <TitleAccent>«cookies»</TitleAccent>
                                </StyledTitle>
                            </Column1>
                            <Column2>
                                <TextWrapper>
                                    <Text>
                                        Файл «cookies» — небольшой фрагмент
                                        данных, отправленный веб-сервером и
                                        хранимый на компьютере пользователя.
                                    </Text>
                                    <Text>
                                        Веб-клиент (веб-браузер) всякий раз при
                                        попытке открыть данный проект пересылает
                                        этот фрагмент данных веб-серверу в
                                        составе HTTP-запроса.
                                    </Text>
                                    <Text>
                                        Файл применяется для сохранения
                                        следующих данных на стороне
                                        пользователя: - отслеживания состояния
                                        сеанса работы пользователя в проекте.
                                    </Text>
                                    <Text>
                                        Также для сбора статистических сведений
                                        используется интернет-сервис
                                        «Яндекс.Метрика».
                                    </Text>
                                    <Text>
                                        Проект не собирает и не передает
                                        персональные данные пользователя.
                                    </Text>
                                </TextWrapper>
                            </Column2>

                            <Column3>
                                <TextWrapper>
                                    <Text>
                                        Файл «cookies» автоматически удаляется
                                        через 30 дней, после согласия
                                        пользователя использовать файл.
                                    </Text>
                                    <Text>
                                        Образовательный проект
                                        (веб-сайт/приложение) использует файл
                                        «cookies» в целях повышения удобства
                                        изучения проекта и отслеживания
                                        прогресса изучения пользователем
                                        проекта.
                                    </Text>
                                    <Text>
                                        Продолжая работу с проектом, вы даете
                                        свое согласие ПАО «ФосАгро» на обработку
                                        указанных выше данных.
                                    </Text>
                                </TextWrapper>
                                <StyledTitle color={COLORS.blue}>
                                    Как удалить{" "}
                                    <TitleAccent>«cookies»</TitleAccent>
                                </StyledTitle>
                                <TextWrapper>
                                    <Text>
                                        Чтобы удалить файлы «cookies»,
                                        воспользуйтесь кнопкой ниже. Обращаем
                                        ваше внимание на то, что прогресс
                                        прохождения курса будет полностью
                                        потерян.
                                    </Text>
                                </TextWrapper>
                                <Buttons>
                                    <StyledSendButton
                                        text="Удалить cookies"
                                        onClick={checkCookies}
                                    />
                                    <Link to="instruction" onClick={() => ModalStore.closeModal("cookiesInfo")} >
                                        <GoToInstrBtn>
                                            Перейти в инструкцию
                                        </GoToInstrBtn>
                                    </Link>
                                </Buttons>
                            </Column3>
                        </Columns>
                    </Content>
                </StyledLayout>
                <Notification
                    text="У вас нет файлов cookies"
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

const Columns = styled.div`
    display: grid;
    grid-template: 11vh auto / repeat(2, 48%);
    justify-content: space-between;

    max-height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0;
    }

    @media ${DEVICE.laptopS} {
        grid-template: repeat(3, auto) / 1fr;
        padding-right: 10px;
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
`

const Text = styled.p`
    font-family: "CalibriLight", sans-serif;
    line-height: 1.33;
    font-size: 1.3vw;
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

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
`

const StyledModal = styled(Modal)`
    .modal-window {
        background-color: transparent;
        background: url(${MenuBackground}) no-repeat center/cover;
    }
`