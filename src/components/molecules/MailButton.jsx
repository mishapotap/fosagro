import React from "react"
import styled, { css } from "styled-components"
import { observer } from "mobx-react-lite"
import { ModalStore, CourseTestStore, SoundStore } from "../../store"
import { AnimatedBlueButton, ReviewModal } from "../atoms"
import { Letter } from "../../assets/svg"
import { Click1 } from "../../assets/audio"

function MailButton({ isTest }) {

    const clickSound = new Audio(Click1)

    const openMail = () => {
        ModalStore.showModal("mail");
        // eslint-disable-next-line no-unused-expressions
        SoundStore.getIsPlaying() && clickSound.play()
    }

    const closeMail = () => {
        ModalStore.closeModal("mail");
        // eslint-disable-next-line no-unused-expressions
        SoundStore.getIsPlaying() && clickSound.play()
    }

    return (
        <Wrapper hide={isTest && CourseTestStore.showFinal}>
            <AnimatedBlueButton
                size="s"
                rotate="20"
                onClick={() => openMail()}
            >
                <Letter />
            </AnimatedBlueButton>
            <ReviewModal
                isOpen={ModalStore.isVisible.mail}
                onClose={() => closeMail()}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    ${({ hide }) =>
        hide &&
        css`
            display: none;
        `}
`

export default observer(MailButton)
