/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"
import { useLocation } from "react-router"
import { ModalStore, SoundStore, CourseProgressStore } from "../../store"
import { IntroModal, CourseStepButton, CourseStepPoint } from "../atoms"
import { getElWindowPos } from "../../utils"

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
    const { pathname } = useLocation()

    const course = pathname.slice(1)

    const [isActive, setIsАсtive] = useState(false)

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

    function handleLinkClick(e) {

        if (!CourseProgressStore.isSectAvailable(stepButtonParam)) {
            e.preventDefault()
            CourseProgressStore.setNotifTimeout()
            // eslint-disable-next-line no-unused-expressions
            SoundStore.getIsPlaying() && soundButton.current.play() && wrapRef.current.classList.add('active')

            soundButton.current.addEventListener('ended', () => {
                wrapRef.current.classList.remove('active')
            })

            const stepBtn = e.currentTarget.querySelector(".course-step-btn")
            if (stepBtn) {
                const { left, top } = getElWindowPos(stepBtn)
                CourseProgressStore.setNotifPos({
                    left: `${left - 10}px`,
                    top: `${top - 150}px`,
                })
            }
        }
    }

    return (
        <Container>
            {button.value.modal ? (
                <>
                    <Link to="intro">
                        <Button onClick={() => openIntroModal()}>
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
                        </Button>
                    </Link>
                    <IntroModal
                        isOpen={ModalStore.isVisible.intro}
                        onClose={() => closeIntroModal()}
                        // TODO прописать data (картинки и аудио)
                        items={dataModal}
                    />
                </>
            ) : (
                // eslint-disable-next-line react/jsx-no-bind
                <Link to={ CourseProgressStore.timelineBtnLink(sectId, test) } onClick={handleLinkClick}>
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
            <Audio src={button.audio} ref={soundButton} />
            <Wrap ref={wrapRef}/>
        </Container>
    )
}

export default observer(CourseStep)

const Container = styled.div``

const Button = styled.button``

const Audio = styled.audio`
    display: none;
`

const Wrap = styled.div`
    transition: all 0.3s;

    &.active {
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;

        width: 100vw;
        height: 100vh;
    }
`
