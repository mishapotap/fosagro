import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { Mute, UnMute } from "../../assets/svg"
import { AnimatedBlueButton } from "../atoms"
import { SoundStore } from "../../store"

function SoundButton({background, color}) {

    return (
        <Wrapper>
            <AnimatedBlueButton
                background={background}
                color={color}
                size="s"
                rotate="60"
                onClick={() => SoundStore.setIsPlayingUser(!SoundStore.getIsPlaying())}
            >
                {SoundStore.getIsPlaying() ? <Mute color={color}/> : <UnMute color={color}/>}
            </AnimatedBlueButton>
        </Wrapper>
    )
}

export default observer(SoundButton)

const Wrapper = styled.div``
