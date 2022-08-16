import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { menuButtonData } from "../../data"
import { MenuButton } from "../molecules"
import { MenuProgressBar } from "../atoms"
import { COLORS } from "../../constants"
import { Close, Fosagro } from "../../assets/svg"
import * as routes from "../../constants/routes"
import { MenuBackground } from "../../assets/images"

export default function Menu() {
    return (
        <ModalLayout>
            <Link to={routes.HOME}>
                <Logo>
                    <Fosagro />
                </Logo>
            </Link>
            <Link to={routes.HOME}>
                <CloseWrapper>
                    <Close color={COLORS.blue}/>
                </CloseWrapper>
            </Link>
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
                        <MenuProgressBar
                            max={100}
                            value={item.progress}
                            color={item.bgColor}
                        />
                    </Link>
                ))}
            </MenuContainer>
        </ModalLayout>
    )
}

const ModalLayout = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    background: url(${MenuBackground}) no-repeat center center / cover;
    overflow-x: hidden;
    overflow-y: hidden;
`
const Logo = styled.div`
    position: absolute;
    left: 80px;
    top: 35px;
`
const CloseWrapper = styled.div`
    position: absolute;
    right: 80px;
    top: 35px;
`
const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`
