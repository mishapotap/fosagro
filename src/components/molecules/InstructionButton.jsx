import React, { useState } from "react"
import styled from "styled-components"
import { AnimatedBlueButton, Instruction } from "../atoms"
import { InstructionIcon } from "../../assets/svg"

export default function InstructionButton() {
    // TODO перенести состояние в mobX
    const [isInstrOpened, setIsInstrOpened] = useState(false)
    return (
        <Wrapper>
            <AnimatedBlueButton
                size="s"
                rotate="40"
                onClick={() => setIsInstrOpened(true)}
            >
                <InstructionIcon />
            </AnimatedBlueButton>
            <Instruction
                isOpen={isInstrOpened}
                onClose={() => setIsInstrOpened(false)}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div``
