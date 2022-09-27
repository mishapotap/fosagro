/* eslint-disable react/jsx-no-bind */
import React, { useRef, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import { useNavigate } from "react-router-dom"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../constants"
import { Close } from "../../assets/svg"

// type для всех дефолтный, для модалки cookie - type = "cookie"
export default function Modal({
    children,
    isOpen,
    onClose,
    closeBtnColor = COLORS.blue,
    className,
    onOpenAnimEnd = () => {},
    navigateBack = false,
    type = ""
}) {
    const modalRef = useRef(null)
    const navigate = useNavigate()

    const isOpenRef = useRef(null)

    useEffect(() => {
        isOpenRef.current = isOpen
    }, [isOpen])

    function handleClose() {
        if (navigateBack) navigate(".")
        // if (isOpenRef.current) onClose()
        onClose()
    }

    function handleKeyDown({ key }) {
        if (key === "Escape") {
            handleClose()
        }
    }

    function makeBodyChildrenInert(el) {
        Array.from(document.body.children).forEach((child) => {
            if (child !== el) {
                // eslint-disable-next-line no-param-reassign
                child.inert = true
            }
        })
    }

    function resetBodyChildrenInert(el) {
        Array.from(document.body.children).forEach((child) => {
            // eslint-disable-next-line no-param-reassign
            if (child !== el) child.inert = false
        })
    }

    function handleOpenModal() {
        makeBodyChildrenInert(modalRef.current)
        document.body.classList.add("lock")
    }

    function handleCloseModal() {
        resetBodyChildrenInert(modalRef.current)
        document.body.classList.remove("lock")
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            handleCloseModal()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return createPortal(
        <CSSTransition
            in={isOpen}
            timeout={500}
            mountOnEnter
            appear
            unmountOnExit
            classNames="modal"
            nodeRef={modalRef}
            onEnter={handleOpenModal}
            onEntered={onOpenAnimEnd}
            onExited={handleCloseModal}
        >
            <Container className={`${className} modal`} ref={modalRef}>
                <ModalWindow className="modal-window" ref={modalRef}>
                    { type === "" &&
                        <CloseBtn className="modal-close-btn" onClick={handleClose}>
                            <Close color={closeBtnColor} />
                        </CloseBtn>
                    }
                    {children}
                </ModalWindow>
                <ModalMask className="modal-mask" onClick={handleClose} />
            </Container>
        </CSSTransition>,
        document.body
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    z-index: 200;
    transition: 0.5s;

    &.modal {
        opacity: 0;
        transform: scale(0.8);
    }

    &.modal-enter-done {
        opacity: 1;
        transform: scale(1);
    }

    &.modal-exit {
        opacity: 0;
        transform: scale(0.8);
    }
`

const CloseBtn = styled.div`
    position: absolute;
    top: 3.5%;
    right: 2%;
    z-index: 110;

    @media ${DEVICE.laptopS} {
        top: 20px;
        right: 20px;
    }
`

const ModalWindow = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    z-index: 20;
    background-color: ${COLORS.white};
`

const ModalMask = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
`
