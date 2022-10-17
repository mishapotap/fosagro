import React, { useRef } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { createPortal } from "react-dom"
import { Play } from "../../../assets/svg"
import { COLORS, DEVICE } from "../../../constants"

export default function PausedBtn({ onClick = () => {}, show = false }) {
    const pausedBtnRef = useRef(null)

    return createPortal(
        <CSSTransition
            in={show}
            timeout={300}
            classNames="paused-btn"
            nodeRef={pausedBtnRef}
        >
            <Container
                ref={pausedBtnRef}
                onClick={onClick}
                className="paused-btn"
                data-paused-btn
            >
                <Play color={COLORS.blue} />
            </Container>
        </CSSTransition>,
        document.body
    )
    // return (
    //     <CSSTransition
    //         in={show}
    //         timeout={300}
    //         classNames="paused-btn"
    //         nodeRef={pausedBtnRef}
    //     >
    //         <Container
    //             ref={pausedBtnRef}
    //             onClick={onClick}
    //             className="paused-btn"
    //             data-paused-btn
    //         >
    //             <Play color={COLORS.blue} />
    //         </Container>
    //     </CSSTransition>
    // )
}

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    width: 6.4vw;
    height: 6.4vw;

    transition: 0.3s;
    z-index: 200;
    cursor: pointer;

    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);

    svg {
        position: absolute;
        top: 50%;
        left: 54%;

        transform: translate(-50%, -50%);
        max-height: 100%;
        width: 46%;

        transition: 0.3s;
        opacity: 0.7;
    }

    &:hover {
        svg {
            opacity: 1;
        }
    }

    &.paused-btn {
        display: none;
    }

    &.paused-btn-enter-active {
        display: block;
        opacity: 0;
    }

    &.paused-btn-enter-done {
        opacity: 1;
        display: block;
    }

    &.paused-btn-exit {
        opacity: 0;
        display: block;
    }

    &.paused-btn-exit-done {
        display: none;
    }

    @media ${DEVICE.laptopS} {
        display: none !important;
    }
`
