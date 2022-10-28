import { makeAutoObservable } from "mobx"
import {
    TestStart,
    Test0Right,
    Test12Right,
    Test34Right,
    Test5Right,
    Instruction1,
    Instruction2,
    FinalAudio,
} from "../assets/audio"
import CourseTestStore from "./courseTest"

class Sound {
    play = {
        isPlayingUser: false,
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

    newSectAudio = null

    testStartAudio = null

    testFinalAudio = null

    finalAudio = null

    finalTestAudios = {}

    introAudioEls = []

    instructionAudioEls = []

    contentAudioEl = null

    contentVideoEl = null

    // makePlayerOutMediaEl = false

    makeVideoPlayerOutEl = false

    makeAudioPlayerOutEl = false

    constructor() {
        makeAutoObservable(this)
    }

    getIsPlaying() {
        return this.play.isPlayingUser && this.play.isPlayingSound
    }

    setIsPlayingUser(value) {
        this.play.isPlayingUser = value
    }

    setContentAudioEl(el) {
        this.contentAudioEl = el
    }

    setContentVideoEl(el) {
        this.contentVideoEl = el
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

    setNewSectAudio(value) {
        this.newSectAudio = value
    }

    setIntroAudioEls(els) {
        this.introAudioEls = els
    }

    resetNewSectAudio() {
        this.newSectAudio = null
    }

    resetContentAudioEl() {
        this.contentAudioEl = null
    }

    resetContentVideoEl() {
        this.contentVideoEl = null
    }

    resetIntroAudios() {
        this.introAudioEls = []
    }

    setTestStartAudio() {
        if (!this.testStartAudio) {
            this.testStartAudio = new Audio(TestStart)
        }
    }

    setTestFinalAudio() {
        this.testFinalAudio =
            this.finalTestAudios[CourseTestStore.rightAnswersCount]
    }

    setTestFinalsAudio() {
        const audio0 = new Audio(Test0Right)
        const audio5 = new Audio(Test5Right)
        const audio12 = new Audio(Test12Right)
        const audio34 = new Audio(Test34Right)

        this.finalTestAudios = {
            0: audio0,
            1: audio12,
            2: audio12,
            3: audio34,
            4: audio34,
            5: audio5,
        }
    }

    resetInstructionEls() {
        this.instructionAudioEls = []
    }

    restartInstructionEls() {
        if (this.instructionAudioEls) {
            this.instructionAudioEls.forEach((el) => {
                // eslint-disable-next-line no-param-reassign
                el.currentTime = 0
            })
        }
    }

    restartFinalAudio() {
        if (this.finalAudio) {
            this.finalAudio.currentTime = 0
        }
    }

    setFinalAudio() {
        this.finalAudio = new Audio(FinalAudio)
    }

    setInstructionAudioEls() {
        this.instructionAudioEls = [
            new Audio(Instruction1),
            new Audio(Instruction2),
        ]
    }

    setMakeAudioPlayerOutEl(val) {
        this.makeAudioPlayerOutEl = val
    }

    setMakeVideoPlayerOutEl(val) {
        this.makeVideoPlayerOutEl = val
    }
}

export default new Sound()
