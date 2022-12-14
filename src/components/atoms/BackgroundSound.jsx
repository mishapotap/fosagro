import React, { useRef, useEffect} from "react"
import styled from "styled-components";
import { observer } from "mobx-react-lite"
import { FonAudio } from "../../assets/audio"
import { CourseProgressStore, SoundStore } from "../../store"

function BackgroundSound () {
    const backSound = useRef(null);

    useEffect(() => {
        function playSound() {
            if (!CourseProgressStore.isContentPage) {
                if (backSound.current) backSound.current.play();
                SoundStore.setIsPlayingSound(true);
            }

            if (backSound.current) backSound.current.volume = 0.1;
            SoundStore.setIsPlayingUser(true);
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