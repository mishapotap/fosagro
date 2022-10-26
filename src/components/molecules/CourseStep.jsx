/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"
import { createPortal } from "react-dom"

import { ModalStore, SoundStore, CourseProgressStore } from "../../store"
import { IntroModal, CourseStepButton, CourseStepPoint } from "../atoms"
import { getElWindowPos, isTouchDevice } from "../../utils"

function CourseStep({
    button,
    points,
    dataModal,
    className,
    sectId,
    test,
    intro,
}) {
    const soundButton = useRef(null)
    const wrapRef = useRef(null)
    const [isActive, setIsАсtive] = useState(false)

    useEffect(() => {
        if (
            isTouchDevice() &&
            button.value.modal &&
            !ModalStore.isVisible.intro
        ) {
            setIsАсtive(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalStore.isVisible.intro])

    const openIntroModal = () => {
        // eslint-disable-next-line no-unused-expressions
        SoundStore.getIsPlaying() && soundButton.current.play()

        setTimeout(() => {
            ModalStore.showModal("intro")
            SoundStore.setIsPlayingSound(false)
        }, soundButton.current.duration * 1000)
    }

    const closeIntroModal = () => {
        ModalStore.closeModal("intro")
        SoundStore.setIsPlayingSound(true)
    }
    let stepButtonParam

    if (test) {
        stepButtonParam = "test"
    } else if (intro) {
        stepButtonParam = "intro"
    } else {
        stepButtonParam = sectId
    }

    const onIntroLinkClick = () => {
        if (intro) {
            CourseProgressStore.setIntroAudioEls()
        }
    }

    function handleLinkClick(e) {
        if (!CourseProgressStore.isSectAvailable(stepButtonParam)) {
            e.preventDefault()
            CourseProgressStore.setNotifTimeout()
            // eslint-disable-next-line no-unused-expressions
            SoundStore.getIsPlaying() &&
                soundButton.current.play() &&
                wrapRef.current.classList.add("active")

            soundButton.current.addEventListener("ended", () => {
                wrapRef.current.classList.remove("active")
                if (isTouchDevice()) {
                    setIsАсtive(false)
                }
            })

            const stepBtn = e.currentTarget.querySelector(".course-step-btn")
            if (stepBtn) {
                const { leftCenter, top, right, left } = getElWindowPos(stepBtn)
                if (left < 0) {
                    CourseProgressStore.setNotifPos({
                        left: `0`,
                        top: `${top - 20}px`,
                        transform: "translateY(-100%)",
                    })
                } else if (right > document.documentElement.clientWidth - 115) {
                    CourseProgressStore.setNotifPos({
                        right: `0`,
                        top: `${top - 20}px`,
                        transform: "translateY(-100%)",
                    })
                } else {
                    CourseProgressStore.setNotifPos({
                        left: `${leftCenter}px`,
                        top: `${top - 20}px`,
                    })
                }
            }
        } else if (!test) {
            CourseProgressStore.setNewSectWindowAudio(sectId)
            // установить видео для проигрывания
            CourseProgressStore.setMediaElFromTl(sectId)
        }
    }

    return (
        <Container>
            {button.value.modal ? (
                <>
                    <Link to="intro" onClick={onIntroLinkClick}>
                        <Button onClick={() => openIntroModal()}>
                            <CourseStepButton
                                data={button.value}
                                className={`${className}-button course-intro-btn`}
                                isActive={isActive}
                                isCompleted={CourseProgressStore.isSectCompleted(
                                    stepButtonParam
                                )}
                                handleMouseOver={() => setIsАсtive(true)}
                                handleMouseOut={() => setIsАсtive(false)}
                            />
                        </Button>
                    </Link>
                    <IntroModal
                        isOpen={ModalStore.isVisible.intro}
                        onClose={() => closeIntroModal()}
                        items={dataModal}
                    />
                </>
            ) : (
                <Link
                    to={CourseProgressStore.timelineBtnLink(sectId, test)}
                    onClick={handleLinkClick}
                >
                    <CourseStepButton
                        data={button.value}
                        className={`${className}-button`}
                        isActive={isActive}
                        isCompleted={CourseProgressStore.isSectCompleted(
                            stepButtonParam
                        )}
                        handleMouseOver={() => setIsАсtive(true)}
                        handleMouseOut={() => setIsАсtive(false)}
                    />
                </Link>
            )}
            {points &&
                points.map((item) => (
                    <CourseStepPoint
                        isCompleted={CourseProgressStore.isPageCompleted(
                            sectId,
                            item.id
                        )}
                        key={item.id}
                        data={item.value}
                        className={`${className}-point`}
                        isActiveParent={isActive}
                    />
                ))}
            <AudioEl src={button.audio} ref={soundButton} />
            {createPortal(<Wrap ref={wrapRef} />, document.body)}
        </Container>
    )
}

export default observer(CourseStep)

const Container = styled.div``

const Button = styled.button``

const AudioEl = styled.audio`
    display: none;
`

const Wrap = styled.div`
    transition: all 0.3s;

    &.active {
        z-index: 400;
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: 100vh;
    }
`
