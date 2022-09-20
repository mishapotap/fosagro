import React, { useRef, useEffect} from "react"
import styled from "styled-components";
import { observer } from "mobx-react-lite"
import { FonAudio } from "../../assets/audio"
import { SoundStore } from "../../store"

function BackgroundSound () {
    const backSound = useRef(null);

    useEffect(() => {
        function playSound() {
            SoundStore.setIsPlayingSound(true);
            backSound.current.volume = 0.01;
            backSound.current.play();
            window.removeEventListener("click", playSound)
        }
        window.addEventListener("click", playSound, { ones: true})
    }, [])

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        SoundStore.getIsPlaying() 
            ? backSound.current.play() 
            : backSound.current.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [SoundStore.getIsPlaying()]);

    return(
        <Audio ref={backSound} src={FonAudio} loop/>
    )
}

export default observer(BackgroundSound)

const Audio = styled.audio``