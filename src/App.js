import React from "react"
import styled from "styled-components"
import { Link, Outlet } from "react-router-dom"
import * as routes from "./constants/routes"
import { menuButtonData } from "./data"
import { MenuButton } from "./components/molecules"
import { IntroBackground } from "./assets/images"
import { SendButton } from "./components/atoms"
import { Fosagro } from "./assets/svg"

function App() {
    return (
        <Layout>
            <Link to={routes.HOME}>
                <Logo>
                    <Fosagro />
                </Logo>
            </Link>
            <Link to={routes.MENU}>
                <SendButton text="Перейти в меню" />
            </Link>
            <Text>Курс «Устойчивое развитие»</Text>
            <Text>
                Компания ФосАгро напрямую способствует достижению 11 целей
                устойчивого развития ООН
            </Text>
            <Text>ЭТО СТАРТОВАЯ СТРАНИЦА</Text>
            <MenuContainer>
                {menuButtonData.map((item) => (
                    <Link to={item.href}>
                        <MenuButton
                            key={item.index}
                            index={item.index}
                            text={item.text}
                            bgColor={item.bgColor}
                            bgAnimateColor={item.bgAnimateColor}
                            rotate={item.rotate}
                        />
                    </Link>
                ))}
            </MenuContainer>
            <Outlet />
        </Layout>
    )
}

const Layout = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100vh;
    background: url(${IntroBackground}) no-repeat center center / cover;
    overflow-x: hidden;
    overflow-y: hidden;
    button {
        position: absolute;
        right: 0;
        top: 0;
    }
`
const Logo = styled.div`
    position: absolute;
    left: 80px;
    top: 35px;
`
const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`
const Text = styled.div``

export default App
