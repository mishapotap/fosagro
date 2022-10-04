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
import { InstructionModal, IntroModal } from "./components/atoms"
import { CookiesStore, SoundStore } from "./store"

function App() {
    return (
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
    )
}

function handleWindowUnload() {
    CookiesStore.setDataInCookies()
}

function handleDocLoad() {
    CookiesStore.setDataFromCookies()
}

// выключение/включение музыки при уходе со страницы/возвращении на нее
// let soundAutoPaused = false

// function handleVisChange() {
//     if (document.visibilityState === "visible") {
//         if (soundAutoPaused) {
//             SoundStore.setIsPlayingSound(true)
//             soundAutoPaused = false
//         }
//     } else if (SoundStore.getIsPlaying()) {
//         SoundStore.setIsPlayingSound(false)
//         soundAutoPaused = true
//     }
// }

// document.addEventListener("visibilitychange", handleVisChange)
document.addEventListener("DOMContentLoaded", handleDocLoad)
window.addEventListener("beforeunload", handleWindowUnload)

export default App
