import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { menuButtonData } from "../../data"
import { MenuButton } from "../molecules"
import { MenuProgressBar, Layout, Modal } from "../atoms"
import { DEVICE } from "../../constants"
import { MenuBackground } from "../../assets/images"

export default function MenuModal({isOpen, onClose}) {
    
    return (
        <StyledModal isOpen={isOpen} onClose={onClose}>
            <StyledLayout page="menu">
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
            </StyledLayout>
        </StyledModal> 
    )
}

observer(MenuModal)

const StyledLayout = styled(Layout)`
    height: 100%;
`

const StyledModal = styled(Modal)`
    height: 100%;

    .modal-window {
        background-color: transparent;
        background: url(${MenuBackground}) no-repeat center/cover;
    }

    .content {
        padding-top: 0;
    }
`

const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 2vw;
    overflow: hidden;
    @media ${DEVICE.laptopS} { 
        padding: 0 5vw;
    }

    @media ${DEVICE.mobile} {
        align-items: flex-start;
        padding: 4vw 6vw;
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
