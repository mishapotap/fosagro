import { makeAutoObservable } from "mobx"

class Sound {
    play = {
        isPlayingUser: true,
        isPlayingSound: false,
    }

    titleSound = {
        title: false,
        corse1: false,
        corse2: false,
        corse3: false,
        corse4: false,
        corse5: false,
        corse6: false,
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

    getPlayedTitleSound(key) {
        return this.titleSound[key]
    }

    setPlayedTitleSound(key, value) {
        this.titleSound[key] = value
    }
}

export default new Sound()
