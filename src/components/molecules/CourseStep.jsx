import React, { useState, useRef } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"
import { ModalStore, SoundStore, CourseProgressStore } from "../../store"
import { IntroModal, CourseStepButton, CourseStepPoint } from "../atoms"
import { getElWindowPos } from "../../utils"

function CourseStep({button, points, dataModal, className, sectId, test, intro}) {
    const soundButton = useRef()

    const [isActive, setIsАсtive] = useState(false);

    const openIntroModal = () => {
        ModalStore.showModal("intro");
        SoundStore.setIsPlayingSound(false);
    }

    const closeIntroModal = () => {
        ModalStore.closeModal("intro");
        SoundStore.setIsPlayingSound(true);
    }
    let stepButtonParam;

    if (test) {
        stepButtonParam = 'test'
    } else if (intro) {
        stepButtonParam = 'intro'
    } else {
        stepButtonParam = sectId
    }

    function handleLinkClick(e) {
        const stepBtn = e.currentTarget.querySelector('.course-step-btn')

        // eslint-disable-next-line no-shadow
        function stepButton() {
            CourseProgressStore.setNotifTimeout()

            if (stepBtn) {
                const {left, top} = getElWindowPos(stepBtn)
                CourseProgressStore.setNotifPos({left: `${left - 50}px`, top: `${top - 150}px`});
            }
        }

        if (!CourseProgressStore.isSectAvailable(stepButtonParam)) {
            e.preventDefault()

            // eslint-disable-next-line no-inner-declarations
            function eventEnded() {
                stepButton()
                soundButton.current.removeEventListener("ended", eventEnded)
            }
            
            soundButton.current.play(); 
            soundButton.current.addEventListener("ended", eventEnded, { once: true })       
        }
    }

    return(
        <Container >
            {
                button.value.modal
                ? <>
                    <Link to="intro">
                      <Button onClick={() => openIntroModal()}>
                        <CourseStepButton data={button.value}
                            className={`${className}-button`}
                            isActive={isActive}
                            isCompleted={CourseProgressStore.isSectCompleted(stepButtonParam)}
                            handleMouseOver={() => setIsАсtive(true)}
                            handleMouseOut={() => setIsАсtive(false)}/>
                        </Button>
                    </Link>
                    <IntroModal
                        isOpen={ModalStore.isVisible.intro}
                        onClose={() => closeIntroModal()}
                        // TODO прописать data (картинки и аудио)
                        items={dataModal}/>
                    </>
                // eslint-disable-next-line react/jsx-no-bind
                : <Link to={ button.link } onClick={handleLinkClick}>
                    <CourseStepButton data={button.value}
                        className={`${className}-button`}
                        isActive={isActive}
                        isCompleted={CourseProgressStore.isSectCompleted(stepButtonParam)}
                        handleMouseOver={() => setIsАсtive(true)}
                        handleMouseOut={() => setIsАсtive(false)}/>
                </Link>
            }
            {points && points.map((item) =>
                <CourseStepPoint
                    isCompleted={CourseProgressStore.isPageCompleted(sectId, item.id)}
                    key={item.id} data={item.value}
                    className={`${className}-point`}
                    isActiveParent={isActive}/>
            )}
            <Audio src={button.audio} ref={soundButton}/>
        </Container>
    )
}

export default observer(CourseStep)

const Container = styled.div``

const Button = styled.button``

const Audio = styled.audio`
    display: none
`
