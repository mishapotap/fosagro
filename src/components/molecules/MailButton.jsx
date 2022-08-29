import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { ModalStore } from "../../store"
import { AnimatedBlueButton, ReviewModal } from "../atoms"
import { Letter } from "../../assets/svg"

function MailButton() {
    return (
        <Wrapper>
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

const Wrapper = styled.div``

export default observer(MailButton)