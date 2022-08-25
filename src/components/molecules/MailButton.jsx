import React, { useState } from "react"
import styled from "styled-components"
import { AnimatedBlueButton, ReviewModal } from "../atoms"
import { Letter } from "../../assets/svg"

export default function MailButton() {
    // TODO перенести состояние в mobX
    const [isReviewModalOpened, setIsReviewModalOpened] = useState(false)
    return (
        <Wrapper>
            <AnimatedBlueButton
                size="s"
                rotate="20"
                onClick={() => setIsReviewModalOpened(true)}
            >
                <Letter />
            </AnimatedBlueButton>
            <ReviewModal
                isOpen={isReviewModalOpened}
                onClose={() => setIsReviewModalOpened(false)}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div``
