/* eslint-disable no-unused-vars */
import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import {
    Tutorial,
    Test,
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
                <Route path="tutorial" element={<Tutorial />} />
                <Route path="test" element={<Test />} />
                <Route path="final" element={<Final />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <ExtLinkModal />
            <PausedBtn/>
        </>
    )
}

function handleWindowUnload() {
    CookiesStore.setDataInCookies()
}

function handleDocLoad() {
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
document.addEventListener("click", handleDocClick)

export default App
