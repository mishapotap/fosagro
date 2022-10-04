import React, { useRef } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { observer } from "mobx-react-lite"
import { DEVICE, COLORS } from "../../constants"
import { CourseProgressStore } from "../../store"

function Notification({
    text = "Эта тема станет доступной после изучения предыдущих",
}) {
    const notifRef = useRef(null)

    return (
        <CSSTransition
            in={CourseProgressStore.showNotification}
            nodeRef={notifRef}
            timeout={300}
            mountOnEnter
            appear
            unmountOnExit
            classNames="notif"
        >
            <Container
                ref={notifRef}
                className="notif"
                style={CourseProgressStore.notifPos}
            >
                {text}
            </Container>
        </CSSTransition>
    )
}

export default observer(Notification)

const Container = styled.div`
    position: fixed;
    max-width: 16.7vw;
    padding: 20px;

    font-family: CalibriLight, sans-serif;
    font-size: 0.95vw;
    color: ${COLORS.black};
    text-align: center;
    line-height: 1.38;

    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 1.15em;

    transform: translate(-50%);
    z-index: 150;

    @media ${DEVICE.laptopM} {
        max-width: 230px;
    }

    @media ${DEVICE.laptop} {
        font-size: 14px;
    }

    &.notif {
        transition: 0.3s;
        opacity: 0;
        transform: scale(0.95);
    }

    &.notif-enter-done {
        opacity: 1;
        transform: scale(1);
    }

    &.notif-exit {
        opacity: 0;
        transform: scale(0.95);
    }
`
