import React, { useState } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"
import { ModalStore, SoundStore, CourseProgressStore } from "../../store"
import { IntroModal, CourseStepButton, CourseStepPoint } from "../atoms"
import { Click2 } from "../../assets/audio"
import { getElWindowPos } from "../../utils"

function CourseStep({button, points, dataModal, className, sectId, test, intro}) {
    const clickSound = new Audio(Click2)

    const [isActive, setIsАсtive] = useState(false);

    const openIntroModal = () => {
        ModalStore.showModal("intro");
        SoundStore.setIsPlayingSound(false);
    }

    const closeIntroModal = () => {
        ModalStore.closeModal("intro");
        SoundStore.setIsPlayingSound(true);
        clickSound.play();
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
        if (!CourseProgressStore.isSectAvailable(stepButtonParam)) {
            e.preventDefault()
            CourseProgressStore.setNotifTimeout()
            const stepBtn = e.currentTarget.querySelector('.course-step-btn')

            if (stepBtn) {
                const {left, top} = getElWindowPos(stepBtn)
                CourseProgressStore.setNotifPos({left: `${left}px`, top: `${top - 150}px`});
            }
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
        </Container>
    )
}

export default observer(CourseStep)

const Container = styled.div``

const Button = styled.button``
