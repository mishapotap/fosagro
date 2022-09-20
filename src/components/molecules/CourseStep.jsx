import React, { useState } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"
import { ModalStore, SoundStore } from "../../store"
import { IntroModal, CourseStepButton, CourseStepPoint } from "../atoms"
import { Click2 } from "../../assets/audio"

function CourseStep({button, points, dataModal, className}) {
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

    return(
        <Container >
            {
                button.value.modal 
                ? <>
                    <Button onClick={() => openIntroModal()}>
                        <CourseStepButton data={button.value} 
                            className={`${className}-button`} 
                            isActive={isActive} 
                            handleMouseOver={() => setIsАсtive(true)}
                            handleMouseOut={() => setIsАсtive(false)}/>
                    </Button>
                    <IntroModal
                        isOpen={ModalStore.isVisible.intro}
                        onClose={() => closeIntroModal()}
                        // TODO прописать data (картинки и аудио)
                        items={dataModal}/>
                    </>
                : <Link to={ button.link }>
                    <CourseStepButton data={button.value} 
                        className={`${className}-button`} 
                        isActive={isActive}
                        handleMouseOver={() => setIsАсtive(true)}
                        handleMouseOut={() => setIsАсtive(false)}/>
                </Link>
            }
            {points && points.map((item) => 
                <CourseStepPoint 
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
