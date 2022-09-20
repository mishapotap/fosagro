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
} from "./components/pages"
import GlobalStyle from "./globalStyles"
import { CoursePageLayout, BackgroundSound, InstructionModal, IntroModal } from "./components/atoms"

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
                    element={<CoursePageLayout />}
                />
                <Route path="tutorial" element={<Tutorial />} />
                <Route path="test" element={<Test />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
)
