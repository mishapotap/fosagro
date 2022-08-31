import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import { Tutorial, Test, Course01, Error404 } from "./components/pages"
import GlobalStyle from "./globalStyles"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="course/:id" element={<Course01 />} />
                <Route path="tutorial" element={<Tutorial />} />
                <Route path="test" element={<Test />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
