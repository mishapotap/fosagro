/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react"
import { CSSTransition } from "react-transition-group"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { COLORS } from "../../constants"

export default function Modal({ children, isOpen }) {
    const nodeRef = useRef(null)

    return createPortal(
        <CSSTransition
            in={isOpen}
            timeout={200}
            unmountOnExit
            classNames="modal"
            nodeRef={nodeRef}
        >
            <Container className="modal" ref={nodeRef}>
                это тест ${children}
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

    width: 100%;
    height: 100%;

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

const ModalWindow = styled.div`
    background-color: ${COLORS.white};
`
