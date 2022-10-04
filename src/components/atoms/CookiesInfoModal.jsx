/* eslint-disable react/button-has-type */
import React from "react"
import styled from "styled-components"
import { CookiesStore, ModalStore } from "../../store"
import { Title } from "./Content"
import Modal from "./Modal"
import { COLORS, DEVICE } from "../../constants"
import SendButton from "./SendButton"
import { MenuBackground } from "../../assets/images"

export default function CookiesInfoModal() {
    return (
        <StyledModal
            isOpen={ModalStore.isVisible.cookieInfo}
            onClose={() => ModalStore.closeModal("cookieInfo")}
        >
            <Content>
                <Block1>
                    <button>Перейти на инструкцию</button>
                    <StyledTitle color={COLORS.blue}>
                        Информация о «cookies»
                    </StyledTitle>
                    <TextWrapper>
                        <Text>
                            Файл cookies» — небольшой фрагмент данных,
                            отправленный веб-сервером и хранимый на компьютере
                            пользователя. Веб-клиент (веб-браузер) всякий раз
                            при попытке открыть данный проект пересылает этот
                            фрагмент данных веб-серверу в составе HTTP-запроса.
                        </Text>
                        <Text>
                            Файл применяется для сохранения следующих данных на
                            стороне пользователя: - отслеживания состояния
                            сеанса работы пользователя в проекте.
                        </Text>
                        <Text>
                            Также для сбора статистических сведений используется
                            интернет-сервис «Яндекс.Метрика».
                        </Text>
                        <Text>
                            Проект не собирает и не передает персональные данные
                            пользователя. Файл «cookies» автоматически удалятеся
                            через 30 дней, после согласия пользователя
                            использовать файл.
                        </Text>
                        <Text>
                            Образовательный проект (веб-сайт/приложение)
                            использует файл «cookies» в целях повышения удобства
                            изучения проекта и отслеживания прогресса изучения
                            пользователем проекта.
                        </Text>
                        <Text>
                            Продолжая работу с проектом, вы даете свое согласие
                            ПАО «ФосАгро» на обработку указанных выше данных.
                        </Text>
                    </TextWrapper>
                </Block1>

                <Block2>
                    <StyledTitle color={COLORS.blue}>
                        Как удалить «cookies»
                    </StyledTitle>
                    <TextWrapper>
                    <Text>
                        Чтобы удалить файлы «cookies», воспользуйтесь кнопкой
                        ниже
                    </Text>
                    <Text>
                        Обращаем ваше внимание на то, что ваш прогресс
                        прохождения курса будет полностью потерян
                    </Text>
                    </TextWrapper>
                    <SendButton
                        text="Удалить cookies"
                        onClick={() => CookiesStore.resetCookies()}
                    />
                </Block2>
            </Content>
        </StyledModal>
    )
}

const StyledTitle = styled(Title)`
    margin-bottom: 20px;
`

const Block = styled.div``

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

const Block1 = styled(Block)`
    margin-bottom: 30px;
`

const Block2 = styled(Block)`
    ${TextWrapper} {
        margin-bottom: 30px;
    }
`

const Content = styled.div`
    max-width: 70vw;
    margin: 0 auto;
`

const StyledModal = styled(Modal)`
    .modal-window {
        background-color: transparent;
        background: url(${MenuBackground}) no-repeat center/cover;
    }
`
