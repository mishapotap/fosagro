import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { ModalStore } from "../../store"
import { AnimatedBlueButton, InstructionModal } from "../atoms"
import { InstructionIcon } from "../../assets/svg"

 function InstructionButton() {
    return (
        <Wrapper>
            <AnimatedBlueButton
                size="s"
                rotate="40"
                onClick={() => ModalStore.showModal("instruction")}
            >
                <InstructionIcon />
            </AnimatedBlueButton>
            <InstructionModal
                isOpen={ModalStore.isVisible.instruction}
                onClose={() => ModalStore.closeModal("instruction")}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default observer(InstructionButton)
