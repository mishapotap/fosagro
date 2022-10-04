import React, { useRef } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { Play } from "../../../assets/svg"
import { COLORS, DEVICE } from "../../../constants"

export default function PausedBtn({
    onClick = () => {},
    show = false,
}) {
    const pausedBtnRef = useRef(null)

    return (
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
            >
                <Play color={COLORS.blue} />
            </Container>
        </CSSTransition>
    )
}

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4.3vw;
    height: 4.3vw;

    transition: 0.3s;
    z-index: 50;

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

    svg {
        width: 100%;
        opacity: 0.5;
        transition: 0.3s;

        &:hover {
            opacity: 1;
        }
    }
`
