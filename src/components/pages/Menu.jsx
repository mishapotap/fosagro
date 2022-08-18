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
            <TopNavigate>
                <Link to={routes.HOME}>
                    <Fosagro />
                </Link>
                <Link to={routes.HOME} onClick={() => removeClass()}>
                    <Close color={COLORS.white}/>
                </Link>
            </TopNavigate>
            <MenuContainer>
                <MenuWrap>
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
                </MenuWrap>
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

const TopNavigate = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 38px 45px 0 80px;

    @media ${DEVICE.laptopS} {
        padding: 32px 3vw 0 6vw;
    }
`

const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 3vw 7vw;
    overflow: hidden;
    @media ${DEVICE.laptopS} { 
        padding: 5vw 12vw;
    }

    @media ${DEVICE.mobile} {
        align-items: flex-start;
        padding: 3vw 8vw;
    }
`

const MenuWrap = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

const MenuButtonContainer = styled.div`
    @media ${DEVICE.laptopS} { 
        margin-bottom: 5vw;
    }
`

const MenuProgressBarContainer = styled.div`
    margin-top: 80px;
    
    @media ${DEVICE.laptopS} { 
        margin-top: 3vw;
    }

    @media ${DEVICE.mobile} {
        margin-top: 1vw;
    }
`

