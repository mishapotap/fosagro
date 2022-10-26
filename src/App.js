/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import {
    Course,
    Error404,
    CourseTestPage,
    CourseContentPage,
    Final,
} from "./components/pages"
import { ExtLinkModal, InstructionModal, IntroModal } from "./components/atoms"
import { CookiesStore, SoundStore, ModalStore } from "./store"
import PausedBtn from "./components/atoms/CourseContent/PausedBtn"

function App() {

    function handleDocClick2() {
        SoundStore.setTestStartAudio()
        SoundStore.setTestFinalsAudio()
        SoundStore.setInstructionAudioEls()
        SoundStore.setFinalAudio()
        document.removeEventListener('click', handleDocClick2)
    }

    useEffect(() => {
        document.addEventListener('click', handleDocClick2)

        return () => {
            document.removeEventListener('click', handleDocClick2)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="instruction" element={<InstructionModal />} />
                </Route>
                <Route path="course:id" element={<Course />}>
                    <Route path="instruction" element={<InstructionModal />} />
                    <Route path="intro" element={<IntroModal />} />
                </Route>
                <Route path="course:id/test" element={<CourseTestPage />} />
                <Route
                    path="course:id/topic:sectId/point:pageId"
                    element={<CourseContentPage />}
                />
                <Route path="final" element={<Final />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <ExtLinkModal />
            <PausedBtn/>
        </>
    )
}

function handleWindowUnload() {
    // e.preventDefault()
    CookiesStore.setDataInCookies()
    // eslint-disable-next-line no-return-assign
    // return e.returnValue = "Are you sure you want to exit?";
    // console.log('handleWindowUnload');
}

function handleDocLoad() {
    // console.log('handleDocLoad');
    CookiesStore.setDataFromCookies()
}

// открытие модалки ExtLinkModal, при клике на ссылку, ведущую на сторонний ресурс
function handleDocClick(e) {
    const { target } = e
    const link = target.tagName === "A" ? target : target.closest("a")

    if (link && link.hasAttribute("data-ext-link")) {
        e.preventDefault()
        const url = link.getAttribute("href")
        ModalStore.showModal("extLinks")
        ModalStore.setExtModalLink(url)
    }
}

// выключение/включение музыки при уходе со страницы/возвращении на нее
let autoPausedMediaEls = []

function handleVisChange() {
    const audioEls = document.querySelectorAll('audio')
    const videoEls = document.querySelectorAll('video')

    const mediaEls = [...audioEls, ...videoEls]
    if (document.visibilityState === "hidden") {
        mediaEls.forEach(el => {
            if (!el.paused) {
                el.pause()
                autoPausedMediaEls.push(el)
            }
        })
    } else {
        autoPausedMediaEls.forEach(el => el.play())
        autoPausedMediaEls = []
    }
}

document.addEventListener("visibilitychange", handleVisChange)
document.addEventListener("DOMContentLoaded", handleDocLoad)
window.addEventListener("beforeunload", handleWindowUnload)
window.addEventListener("unload", handleWindowUnload)
document.addEventListener("click", handleDocClick)

export default App
