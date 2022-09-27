import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { Layout, Modal } from "../atoms"
import { DEVICE } from "../../constants"
import { MenuBackground } from "../../assets/images"
import MenuButtons from "../molecules/MenuButtons"

function MenuModal({isOpen, onClose}) {
    return (
        <StyledModal isOpen={isOpen} onClose={onClose}>
            <StyledLayout page="menu">
                <MenuContainer>
                    <MenuButtons/>
                </MenuContainer>
            </StyledLayout>
        </StyledModal>
    )
}

export default observer(MenuModal)

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
    overflow: auto;
    @media ${DEVICE.laptopS} {
        padding: 0 5vw;
    }

    @media ${DEVICE.mobile} {
        align-items: flex-start;
        padding: 4vw 6vw;
    }
`
