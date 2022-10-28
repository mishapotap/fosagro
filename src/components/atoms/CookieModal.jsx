/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-array-index-key */
import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import Modal from "./Modal"
import SendButton from "./SendButton"
import { COLORS, DEVICE, ISENG } from "../../constants"
import { getFullCourseDuration } from "../../utils"
import { ModalStore, CookiesStore } from "../../store"

const courseTime = getFullCourseDuration()

// !перевод
// нужен норм англ перевод
const engText = {
    startCourseBtn: "Start the course",
    startNoProgressBtn: "Start the course without calculating learning progress",
    aboutCookiesBtn: "About cookies",
    text: "This course uses cookies to calculate and visualize course progress. Cookies are stored for 30 days.",
    textTime: `Course learning time - ${courseTime} minutes.`

}

const ruText = {
    startCourseBtn: "Начать изучение курса",
    startNoProgressBtn: "Начать изучение курса без подсчета прогресса изучения",
    aboutCookiesBtn: "Подробнее о cookies",
    text: "Данный курс использует файлы cookie для подсчета и формирования визуализации прогресса изучения курса. Cookie хранятся в течение 30 дней.",
    textTime: `Время изучения курса - ${courseTime} минуты.`
}

const textData = ISENG ? engText : ruText

function CookieModal() {
    function handleClose() {
        ModalStore.closeModal("cookie")
    }

    function withCookie() {
        handleClose()
        CookiesStore.setUserAcceptedCookies()
    }

    function withOutCookie() {
        handleClose()
    }

    return (
        <StyledModal
            isOpen={ModalStore.isVisible.cookie}
            onClose={handleClose}
            className="modal-cookie"
            noCloseBtn
            dontCloseOnEsc
            dontCloseOnMaskClick
        >
            <ModalContent>
                <TextWrapper>
                    <Text>
                        {textData.text}
                    </Text>
                    <Text>
                        {textData.textTime}
                    </Text>
                </TextWrapper>
                <Buttons>
                    <SendButton
                        text={textData.startCourseBtn}
                        onClick={withCookie}
                        className="cookie"
                    />
                    <Button onClick={withOutCookie}>
                        {textData.startNoProgressBtn}
                    </Button>
                    <Button onClick={() => ModalStore.showModal("cookiesInfo")}>
                        {textData.aboutCookiesBtn}
                    </Button>
                </Buttons>
            </ModalContent>
        </StyledModal>
    )
}

export default observer(CookieModal)

const StyledModal = styled(Modal)`
    .modal-cookie {
        display: block;
    }

    .modal-window {
        position: absolute;
        bottom: 12%;

        width: 100%;
        height: auto;
        max-width: 38vw;
        border-radius: 30px;

        @media ${DEVICE.laptopM} {
            bottom: 13%;
        }

        @media ${DEVICE.tablet} {
            left: calc(50vw - 25vw);
            max-width: 50vw;
            bottom: 15%;
        }

        @media ${DEVICE.mobile} {
            left: calc(50vw - 45vw);
            max-width: 90vw;
            bottom: 10%;
        }
    }
`

const ModalContent = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    padding: 2.25vw;

    text-align: center;

    @media ${DEVICE.mobile} {
        padding: 4vw;
    }
`

const Text = styled.div`
    font-family: "CalibriRegular";
    font-weight: 300;
    font-size: 0.94vw;
    line-height: 1.4vw;

    color: ${COLORS.black};

    @media ${DEVICE.laptopS} {
        font-size: 1.2vw;
        line-height: 1.6vw;
    }

    @media ${DEVICE.tablet} {
        font-size: 1.6vw;
        line-height: 2vw;
    }

    @media ${DEVICE.mobile} {
        font-size: 3.5vw;
        line-height: 4.2vw;
    }
`

const Button = styled.div`
    font-family: "CalibriRegular";
    font-weight: 300;
    font-size: 0.83vw;
    line-height: 1.25vw;

    color: ${COLORS.black};

    border-bottom: 1px solid rgba(0, 82, 155, 0.84);
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid rgba(0, 82, 155, 1);
    }

    @media ${DEVICE.laptopS} {
        font-size: 1.1vw;
        line-height: 1.3vw;
    }

    @media ${DEVICE.tablet} {
        font-size: 1.4vw;
        line-height: 1.6vw;
    }

    @media ${DEVICE.mobile} {
        font-size: 3vw;
        line-height: 3.4vw;
    }
`

const TextWrapper = styled.div`
    margin-bottom: 23px;

    ${Text} {
        margin-bottom: 4px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
        margin-bottom: 8px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`
