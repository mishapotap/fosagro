import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { Mute, UnMute } from "../../assets/svg"
import { AnimatedBlueButton } from "../atoms"
import { SoundStore } from "../../store"

function SoundButton() {
    // TODO перенести состояние в mobX

    return (
        <Wrapper>
            <AnimatedBlueButton
                size="s"
                rotate="60"
                onClick={() => SoundStore.setIsPlayingUser(!SoundStore.getIsPlaying())}
            >
                {SoundStore.getIsPlaying() ? <Mute /> : <UnMute />}
            </AnimatedBlueButton>
        </Wrapper>
    )
}

export default observer(SoundButton)

const Wrapper = styled.div``
