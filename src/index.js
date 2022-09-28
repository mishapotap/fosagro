/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cookies from "js-cookie"
import App from "./App"
import {
    Tutorial,
    Test,
    Course,
    Error404,
    CourseTestPage,
    CourseContentPage,
    Final
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
                <Route path="final" element={<Final />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
)

// TODO позже раскомментировать, может изменить
// взять данные из store, установить в куки
function handleWindowUnload() {
    // const testsVal = JSON.stringify(CourseTestStore.dataForLS)

    const progressVal = JSON.stringify(CourseProgressStore.dataForLS)
    localStorage.setItem('courseProgress', progressVal)
}

// взять данные из ls, установить в store
function handleDocLoad() {
    const progressLsData = localStorage.getItem('courseProgress')

    if (progressLsData) {
        CourseProgressStore.setProgressDataFromLs(JSON.parse(progressLsData))
    }
}

document.addEventListener('DOMContentLoaded', handleDocLoad);
window.addEventListener('beforeunload', handleWindowUnload);

