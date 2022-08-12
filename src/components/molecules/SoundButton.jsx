import React, { useState } from "react"
import { Mute, UnMute } from '../../assets/svg'
import { AnimatedBlueButton } from "../atoms"

export default function SoundButton() {
  // TODO перенести состояние в mobX
    const [isMute, setIsMute] = useState(false);

    return(
        <AnimatedBlueButton size="s" rotate="60" onClick={() => setIsMute(!isMute) }>
            {isMute
                ? <UnMute/>
                : <Mute/>
            }
        </AnimatedBlueButton>
    )
}