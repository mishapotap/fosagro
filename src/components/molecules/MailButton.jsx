import React, { useState } from "react"
import styled from "styled-components"
import { AnimatedBlueButton, CurvedModal } from "../atoms"
import { Letter } from "../../assets/svg"

export default function MailButton() {
    // TODO перенести состояние в mobX
    const [isCurvedModalOpened, setIsCurvedModalOpened] = useState(false)
    return (
        <Wrapper>
            <AnimatedBlueButton
                size="s"
                rotate="20"
                onClick={() => setIsCurvedModalOpened(true)}
            >
                <Letter />
            </AnimatedBlueButton>
            <CurvedModal
                type="review"
                isOpen={isCurvedModalOpened}
                onClose={() => setIsCurvedModalOpened(false)}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div``
