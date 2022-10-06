/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { CSSTransition } from "react-transition-group"
import { observer } from "mobx-react-lite"
import CourseStepButton from "../CourseStepButton"
import { CourseProgressStore } from "../../../store"
import { showContent } from "../../../constants/animations"
import { DEVICE } from "../../../constants"

function NewSectWindow({onExited}) {
    const newSectWindowRef = useRef(null)
    const [showNewSectW, setShowNewSectW] = useState(false)

    const sectBtnData = CourseProgressStore.activeSectBtnData
    const audioEl = useRef(null)
    const reserveTmId = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setShowNewSectW(true)
        }, 100)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CourseProgressStore.activeSectId])

    function handleEntered() {
        if (!audioEl.current) {
            setTimeout(() => {
                setShowNewSectW(false)
            }, 2300)
        }

        reserveTmId.current = setTimeout(() => {
            setShowNewSectW(false)
        }, 3800)
    }

    function handleExited() {
        onExited()
        clearTimeout(reserveTmId.current)
    }

    function handleAudioEnded() {
        setTimeout(() => {
            setShowNewSectW(false)
        }, 300)
    }

    useEffect(() => {
        if (showNewSectW && sectBtnData.audio) {
            audioEl.current = new Audio(sectBtnData.audio)
            audioEl.current.play()
            audioEl.current.addEventListener("ended", handleAudioEnded)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showNewSectW])

    useEffect(() => () => {
            if (audioEl.current) audioEl.current.pause()
        }, [])

    return (
        <CSSTransition
            in={showNewSectW}
            timeout={500}
            classNames="new-sect"
            nodeRef={newSectWindowRef}
            appear
            mountOnEnter
            unmountOnExit
            onEntered={handleEntered}
            onExited={handleExited}
        >
            <Container ref={newSectWindowRef} className="new-sect">
                <CourseStepButton isActive data={sectBtnData.value} />
            </Container>
        </CSSTransition>
    )
}

export default observer(NewSectWindow)

const scaleBtn = keyframes`
    0% {
        opacity: 0;
        transform: scale(1.75);
    }

    100% {
        opacity: 1;
        transform: scale(2.3);
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    width: 100vw;
    height: 100vh;

    .course-step-btn {
        position: static;
        pointer-events: none;
        width: 10vw;

        @media ${DEVICE.laptop} {
            width: 100px;

            .course-step-btn-title {
                font-size: 14px;
            }
        }
    }

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background: rgba(248, 250, 253, 0.5);
        content: "";
    }

    &.new-sect-enter-active {
        &:after {
            animation: ${showContent} 0.5s both;
        }

        .course-step-btn {
            animation: ${scaleBtn} 0.5s ease-in-out both;
        }
    }

    &.new-sect-exit-active {
        &:after {
            animation: ${showContent} 0.5s both reverse !important;
        }

        .course-step-btn {
            animation: ${scaleBtn} 0.5s ease-in-out both reverse !important;
        }
    }

    &.new-sect-enter-done,
    &.new-sect-exit {
        &:after {
            opacity: 1;
        }

        .course-step-btn {
            transform: scale(2.3);
            opacity: 1;
        }
    }

    &.new-sect-exit-done {
        &:after,
        .course-step-btn {
            display: none;
        }
    }
`
