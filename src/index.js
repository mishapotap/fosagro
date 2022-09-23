/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import {
    Tutorial,
    Test,
    Course,
    Error404,
    CourseTestPage,
    CourseContentPage
} from "./components/pages"
import GlobalStyle from "./globalStyles"
import { BackgroundSound, InstructionModal, IntroModal } from "./components/atoms"
import { CourseProgressStore, CourseTestStore } from "./store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
        <BrowserRouter>
            <GlobalStyle />
            <BackgroundSound />
            <Routes>
                <Route path="/" element={<App />} />
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
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
)

// TODO позже раскомментировать можетт изменить
// взять данные из store, установить в ls
function handleWindowUnload() {
    // const testsVal = JSON.stringify(CourseTestStore.dataForLS)
    // localStorage.setItem('courseTests', testsVal)

    const progressVal = JSON.stringify(CourseProgressStore.dataForLS)
    localStorage.setItem('courseProgress', progressVal)
}

// взять данные из ls, установить в store
function handleDocLoad() {
    const testsLsData = localStorage.getItem('courseTests')
    const progressLsData = localStorage.getItem('courseProgress')

    // if (testsLsData) {
    //     CourseTestStore.setTestsData(JSON.parse(testsLsData))
    // }

    if (progressLsData) {
        CourseProgressStore.setProgressDataFromLs(JSON.parse(progressLsData))
    }
}

document.addEventListener('DOMContentLoaded', handleDocLoad);
window.addEventListener('beforeunload', handleWindowUnload);

