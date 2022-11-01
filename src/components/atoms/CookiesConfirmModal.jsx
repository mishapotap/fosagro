/* eslint-disable react/jsx-no-bind */
import React, { useState, useRef } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { CSSTransition } from "react-transition-group"
import { Link } from "react-router-dom"

import Modal from "./Modal"
import { CookiesStore, ModalStore, CourseProgressStore, CourseTestStore } from "../../store"
import SendButton from "./SendButton"
import { COLORS, DEVICE, ISENG } from "../../constants"
import { SuccessIcon } from "../../assets/svg/static"

const engText = {
    confirmText: "Are you sure you want to delete cookies and reset your learning progress?",
    confirmBtnText: "Yes",
    rejectBtnText: "Cancel",
    successText: "Your cookies have been successfully deleted.",
    errorText1: "Sorry, there was an error.",
    errorText2: "Cookies were not deleted.",
    closeBtnText: "Cancel",
    iconSuccAlt: "success"
}

const ruText = {
    confirmText: "Вы уверены, что хотите удалить файлы cookies и сбросить ваш прогресс обучения?",
    confirmBtnText: "Да",
    rejectBtnText: "Отмена",
    successText: "Ваши cookies успешно удалены.",
    errorText1: "Произошла ошибка.",
    errorText2: "Не удалось удалить cookies.",
    closeBtnText: "Закрыть",
    iconSuccAlt: "успех"
}

const textData = ISENG ? engText : ruText

function CookiesConfirmModal() {
    const [loading, setIsLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    const [showStartContent, setShowStartContent] = useState(true)

    const successElRef = useRef(null)
    const errorElRef = useRef(null)
    const startContentElRef = useRef(null)

    function onClose() {
        ModalStore.closeModal("cookiesConfirm")

        setTimeout(() => {
            setShowSuccess(false)
            setShowError(false)
            setShowStartContent(true)
        }, 700);
    }

    function handleSuccessClose() {
        onClose()
        ModalStore.closeModal("cookiesInfo")
        ModalStore.closeModal("instruction")
        ModalStore.closeModal("welcomeBack")
        ModalStore.showModal("cookie")
    }

    function resetProgress() {
        CookiesStore.resetCookies()
        CourseProgressStore.resetProgress()
        CourseTestStore.resetProgress()
    }

    function handleConfirm() {
        setIsLoading(true)
        if (ModalStore.isVisible.welcomeBack) ModalStore.closeModal("welcomeBack")

        setTimeout(() => {
            resetProgress()
            setShowStartContent(false)
        }, 500);
    }

    function handleStartElExited() {
        setIsLoading(false)

        if (!CookiesStore.userAcceptedCookies) {
            setShowSuccess(true)
        } else {
            setShowError(true)
        }
    }

    return (
        <StyledModal
            isOpen={ModalStore.isVisible.cookiesConfirm}
            onClose={onClose}
            noCloseBtn
        >
            <CSSTransition
                in={showStartContent}
                timeout={500}
                appear
                mountOnEnter
                unmountOnExit
                classNames="start"
                nodeRef={startContentElRef}
                onExited={handleStartElExited}
            >
                <StartContent
                    inert={loading ? "" : undefined}
                    ref={startContentElRef}
                    className="start"
                >
                    <Text>
                        {textData.confirmText}
                    </Text>
                    <Buttons>
                        <ConfirmBtn
                            loading={loading}
                            text={textData.confirmBtnText}
                            onClick={handleConfirm}
                        />
                        <RejectBtn onClick={onClose}>{textData.rejectBtnText}</RejectBtn>
                    </Buttons>
                </StartContent>
            </CSSTransition>
            <CSSTransition
                in={showSuccess}
                timeout={500}
                appear
                mountOnEnter
                unmountOnExit
                classNames="success"
                nodeRef={successElRef}
            >
                <SuccessContent ref={successElRef} className="success">
                    <Icon src={SuccessIcon} alt={textData.iconSuccAlt} />
                    <Text>{textData.successText}</Text>
                    <Link to="/">
                        <SendButton text={textData.closeBtnText} onClick={handleSuccessClose} />
                    </Link>
                </SuccessContent>
            </CSSTransition>
            <CSSTransition
                in={showError}
                timeout={500}
                appear
                mountOnEnter
                unmountOnExit
                classNames="error"
                nodeRef={errorElRef}
            >
                <ErrorContent ref={errorElRef} className="error">
                    <Text>{textData.errorText1}</Text>
                    <Text>{textData.errorText2}</Text>
                    <SendButton text={textData.closeBtnText} onClick={onClose} />
                </ErrorContent>
            </CSSTransition>
        </StyledModal>
    )
}

export default observer(CookiesConfirmModal)

const StyledModal = styled(Modal)`
    .modal-window {
        width: 32vw;
        height: 15vw;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 30px;
        padding: 20px 3vw;
        background-color: rgb(248, 250, 253);

        @media ${DEVICE.laptop} {
            height: 17vw;
        }

        @media ${DEVICE.laptopS} {
            padding: 20px;
            width: 320px;
            height: 180px;
            max-width: 90%;
        }
    }

    .modal-mask {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .success,
    .error,
    .start {
        transition: 0.3s;
        opacity: 0;
    }

    .start {
        transition: 0.2s;
    }

    .success-enter-done,
    .error-enter-done,
    .start-enter-done {
        opacity: 1;
    }

    .success-exit,
    .error-exit,
    .start-exit {
        opacity: 0;
    }
`

const Icon = styled.img`
    width: 3vw;
    margin-bottom: 20px;

    @media ${DEVICE.laptop} {
        width: 40px;
    }
`

const SuccessContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ErrorContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StartContent = styled.div``

const Text = styled.p`
    margin-bottom: 20px;

    font-family: Calibri, sans-serif;
    font-size: 1.1vw;
    line-height: 1.3;
    text-align: center;

    @media ${DEVICE.laptop} {
        font-size: 16px;
    }
`

const ConfirmBtn = styled(SendButton)`
    padding: 0.6em 1.8em;
`

const RejectBtn = styled.button`
    font-size: 1.1vw;
    color: ${COLORS.blue};
    border-bottom: 1px solid ${COLORS.blue};

    @media ${DEVICE.laptop} {
        font-size: 16px;
    }
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 80%;
    margin: 0 auto;

    ${ConfirmBtn} {
        margin-right: 40px;
    }
`
