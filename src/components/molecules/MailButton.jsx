import React from "react"
import styled, { css } from "styled-components"
import { observer } from "mobx-react-lite"
import { ModalStore, CourseTestStore } from "../../store"
import { AnimatedBlueButton, ReviewModal } from "../atoms"
import { Letter } from "../../assets/svg"

function MailButton({ isTest }) {
    return (
        <Wrapper hide={isTest && CourseTestStore.showFinal}>
            <AnimatedBlueButton
                size="s"
                rotate="20"
                onClick={() => ModalStore.showModal("mail")}
            >
                <Letter />
            </AnimatedBlueButton>
            <ReviewModal
                isOpen={ModalStore.isVisible.mail}
                onClose={() => ModalStore.closeModal("mail")}
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
