import React, { useRef } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { DEVICE, COLORS } from "../../constants"

export default function Notification({
    text = "Уведомление",
    show = false,
    position = {},
}) {
    const notifRef = useRef(null)

    return (
        <CSSTransition
            in={show}
            nodeRef={notifRef}
            timeout={300}
            mountOnEnter
            appear
            unmountOnExit
            classNames="notif"
        >
            <Container
                style={position}
                className="notif-container"
            >
                <StyledNotification className="notif" ref={notifRef}>
                    {text}
                </StyledNotification>
            </Container>
        </CSSTransition>
    )
}

const StyledNotification = styled.div`
    width: 16.7vw;
    height: 100%;
    padding: 20px;

    border-radius: 1.15em;
    background-color: rgba(255, 255, 255, 0.85);

    font-family: CalibriLight, sans-serif;
    font-size: 0.95vw;
    color: ${COLORS.black};
    text-align: center;
    line-height: 1.38;

     @media ${DEVICE.laptopM} {
        width: 230px;
    }

    @media ${DEVICE.laptop} {
        font-size: 14px;
    }
`

const Container = styled.div`
    position: fixed;
    transform: translate(-50%, -100%);
    z-index: 150;
    cursor: auto;

    /* @media ${DEVICE.laptopM} {
        width: 230px;
    } */

    .notif {
        transition: 0.3s;
        opacity: 0;
        transform: scale(0.95);
    }

    .notif-enter-done {
        opacity: 1;
        transform: scale(1);
    }

    .notif-exit {
        opacity: 0;
        transform: scale(0.95);
    }
`
