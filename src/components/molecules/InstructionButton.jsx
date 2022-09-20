import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"
import { ModalStore } from "../../store"
import { AnimatedBlueButton, InstructionModal } from "../atoms"
import { InstructionIcon } from "../../assets/svg"
import { Click1 } from "../../assets/audio"

 function InstructionButton() {

    const clickSound = new Audio(Click1)

    const openInstruction = () => {
        ModalStore.showModal("instruction");
        clickSound.play();
    }

    const closeInstruction = () => {
        ModalStore.closeModal("instruction");
        clickSound.play();
    }

    return (
        <Wrapper>
            <Link to="instruction">
                <AnimatedBlueButton
                    size="s"
                    rotate="40"
                    onClick={() => openInstruction()}
                >
                    <InstructionIcon />
                </AnimatedBlueButton>
            </Link>
            <InstructionModal
                isOpen={ModalStore.isVisible.instruction}
                onClose={() => closeInstruction()}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default observer(InstructionButton)
