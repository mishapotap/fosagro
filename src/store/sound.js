import { makeAutoObservable } from "mobx"

class Sound {
    play = {
        isPlayingUser: true,
        isPlayingSound: false,
    }

    constructor() {
        makeAutoObservable(this)
    }

    getIsPlaying() {
        return this.play.isPlayingUser && this.play.isPlayingSound
    }

    setIsPlayingUser(value) {
        this.play.isPlayingUser = value
    }

    setIsPlayingSound(value) {
        this.play.isPlayingSound = value
    }
}

export default new Sound()
