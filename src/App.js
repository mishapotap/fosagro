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
import { CourseProgressStore } from "./store"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="course:id" element={<Course />}>
                <Route path="instruction" element={InstructionModal} />
                <Route path="intro" element={IntroModal} />
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

// TODO позже раскомментировать, может изменить
// взять данные из store, установить в куки
function handleWindowUnload() {
    // const testsVal = JSON.stringify(CourseTestStore.dataForLS)

    const progressVal = JSON.stringify(CourseProgressStore.dataForLS)
    localStorage.setItem("courseProgress", progressVal)
}

// взять данные из ls, установить в store
function handleDocLoad() {
    const progressLsData = localStorage.getItem("courseProgress")

    if (progressLsData) {
        CourseProgressStore.setProgressDataFromLs(JSON.parse(progressLsData))
    }
}

document.addEventListener("DOMContentLoaded", handleDocLoad)
window.addEventListener("beforeunload", handleWindowUnload)

export default App
