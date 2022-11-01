/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { observer } from "mobx-react-lite"
import CourseStepButton from "../CourseStepButton"
import { CourseProgressStore, SoundStore } from "../../../store"
import { DEVICE } from "../../../constants"

function NewSectWindow({ onExited }) {
    const newSectWindowRef = useRef(null)
    const [showNewSectW, setShowNewSectW] = useState(false)

    const sectBtnData = CourseProgressStore.activeSectBtnData
    const audioRef = useRef(null)
    const reserveTmId = useRef(null)
    const noAudioTmId = useRef(null)

    useEffect(() => {
        setShowNewSectW(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CourseProgressStore.activeSectId])

    function handleAudioEnded(e) {
        e.target.addEventListener("ended", handleAudioEnded)
        setShowNewSectW(false)
        SoundStore.resetNewSectAudio()
    }

    function handleEntered() {
        if (SoundStore.newSectAudio) {
            SoundStore.newSectAudio.play()
            SoundStore.newSectAudio.addEventListener("ended", handleAudioEnded)
        } else if (audioRef.current) {
            audioRef.current.src = sectBtnData.audio
            audioRef.current.autoplay = true
        }

        reserveTmId.current = setTimeout(() => {
            setShowNewSectW(false)
        }, 4300)
    }

    function handleExited() {
        onExited()
        clearTimeout(reserveTmId.current)
        if (noAudioTmId.current) clearTimeout(noAudioTmId.current)
    }

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
                {sectBtnData.audio && (
                    <audio
                        ref={audioRef}
                        src={sectBtnData.audio}
                        onEnded={handleAudioEnded}
                        preload="metadata"
                    />
                )}
                <CourseStepButton isActive data={sectBtnData.value} />
            </Container>
        </CSSTransition>
    )
}

export default observer(NewSectWindow)

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
        transition: 0.5s;

        @media ${DEVICE.laptop} {
            width: 100px;

            .course-step-btn-title {
                font-size: 13px;
            }
        }
    }

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        transition: 0.5s;
        background: rgba(248, 250, 253, 0.5);
        content: "";
    }

    &.new-sect {
        &:after {
            opacity: 0;
        }

        .course-step-btn {
            opacity: 0;
            transform: scale(1.75);
        }
    }

    &.new-sect-enter-done {
        &:after {
            opacity: 1;
        }

        .course-step-btn {
            opacity: 1;
            transform: scale(2.3);
        }
    }

    &.new-sect-exit-done {
        &:after,
        .course-step-btn {
            display: none;
        }
    }
`
