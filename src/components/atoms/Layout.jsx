import React from "react"
import styled from "styled-components"
import Header from "./Header"
import { COLORS, DEVICE } from "../../constants"

export default function Layout({ page = 'start', children }) {
    return (
        <Container>
            {/* страница с меню или инструкция */}
            {(page === "menu" || page === "instruction") && <Header />}
            {/* входная страница */}
            {page === "start" && <Header language />}
            {/* страница раздела с плавающими кружочками */}
            {page === "course" && <Header course />}
            {/* внутри темы раздела - где слайды с текстом, картинками, анимацией и пр */}
            {page === "section" && (
                <Header
                    colored
                    course
                    // TODO сделать чтобы у нас где-то хранились эти значения в store и брать оттуда
                    sectTitle="Суть концепции устойчивого развития"
                    sectTitleColor={COLORS.green_light}
                />
            )}
            <Content>
                {children}
            </Content>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;

    /* отступ на высоту хэдэра */
    padding-top: 92px;

    @media ${DEVICE.laptopM} {
        padding-top: 70px;
    }

    @media ${DEVICE.laptopS} {
        padding-top: 95px;
    }
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`
