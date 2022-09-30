/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import GlobalStyle from "./globalStyles"
import { BackgroundSound } from "./components/atoms"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <GlobalStyle />
        <BackgroundSound />
        <App />
    </BrowserRouter>
)