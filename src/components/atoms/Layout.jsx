import React from "react"
import styled, { css } from "styled-components"
import Header from "./Header"
import { DEVICE } from "../../constants"

export default function Layout({ page = "start", children, className }) {
    return (
        <Container className={`${className || ''} layout`} page={page}>
            {/* инструкция */}
            {page === "instruction" && <Header />}
            {/* меню */}
            {page === "menu" && <Header goBackToMain />}
            {/* входная страница */}
            {page === "start" && <Header language fosagroSite />}
            {/* страница раздела с плавающими кружочками */}
            {page === "course" && <Header course />}
            {/* страница ошибки */}
            {page === "error" || page === "test" && <Header colored course />}
            {/* внутри темы раздела - где слайды с текстом, картинками, анимацией и пр */}
            {page === "section" && (
                <Header
                    colored
                    course
                    sectTitle
                />
            )}
            {page === "final" && <Header goBackToMain fosagroSite />}
            <Content className="content">{children}</Content>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;

    /* отступ на высоту хэдэра */
    padding-top: 92px;

    /* фон для страницы error или страницы внутри курса */
    ${({ page }) =>
        (page === "error" || page === "section") &&
        css`
            background: linear-gradient(
                107.3deg,
                rgba(224, 195, 252, 0.05) -1.19%,
                rgba(141, 198, 255, 0.05) 100%
            );

            &:before {
                position: fixed;
                top: 0;
                left: 0;

                z-index: -1;
                width: 100%;
                height: 100%;

                content: '';
                background: linear-gradient(
                    72.99deg,
                    rgba(155, 211, 221, 0.05) 10.03%,
                    rgba(146, 204, 217, 0.05) 62.46%,
                    rgba(113, 178, 201, 0.05) 100.97%,
                    rgba(217, 217, 217, 0) 100.98%
                );
            }
        `}

    @media ${DEVICE.laptopM} {
        padding-top: 80px;
    }
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`
