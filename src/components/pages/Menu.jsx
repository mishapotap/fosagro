import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { menuButtonData } from "../../data"
import { MenuButton } from "../molecules"
import { MenuProgressBar } from "../atoms"
import { COLORS, DEVICE } from "../../constants"
import { Close, Fosagro } from "../../assets/svg"
import * as routes from "../../constants/routes"
import { MenuBackground } from "../../assets/images"

export default function Menu() {

    document.body.classList.add('lock');

    const removeClass = () => {
        document.body.classList.remove('lock');
    }

    return (
        <ModalLayout>
            <Link to={routes.HOME}>
                <Logo>
                    <Fosagro />
                </Logo>
            </Link>
            <Link to={routes.HOME} onClick={() => removeClass()}>
                <CloseWrapper>
                    <Close color={COLORS.white}/>
                </CloseWrapper>
            </Link>
            <MenuContainer>
                {menuButtonData.map((item) => (
                    <MenuButtonContainer  key={item.index}>
                        <Link to={item.href}>
                            <MenuButton
                                index={item.index}
                                text={item.text}
                                bgColor={item.bgColor}
                                bgAnimateColor={item.bgAnimateColor}
                                rotate={item.rotate}
                            />
                            <MenuProgressBarContainer>
                                <MenuProgressBar
                                    max={100}
                                    value={item.progress}
                                    color={item.bgColor}
                                />
                            </MenuProgressBarContainer>
                        </Link>
                    </MenuButtonContainer>
                ))}
            </MenuContainer>
        </ModalLayout>
    )
}

const ModalLayout = styled.div`
    position: fixed;
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
    left: 25px;
    top: 32px;
    @media ${DEVICE.tablet} { 
        left: 80px;
        top: 37px;
    }
`
const CloseWrapper = styled.div`
    position: absolute;
    right: 25px;
    top: 35px;
    @media ${DEVICE.tablet} { 
        right: 45px;
        top: 38px;
    }
`
const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 100px 5vw 10vw;
    overflow: hidden;
    @media ${DEVICE.tablet} { 
        padding: 160px 18vw 0;
    }
    @media ${DEVICE.laptopS} { 
        padding: 160px 45px 0;
    }
`

const MenuButtonContainer = styled.div`
    margin-bottom: 3vw;
    @media ${DEVICE.laptopS} { 
        margin-bottom: 0;
    }
`

const MenuProgressBarContainer = styled.div`
    margin-top: 10px;
    @media ${DEVICE.laptopS} { 
        margin-top: 80px;
    }
`

