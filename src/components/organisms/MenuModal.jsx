import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { Layout, Modal } from "../atoms"
import { DEVICE } from "../../constants"
import { MenuBackground } from "../../assets/images"
import MenuButtons from "../molecules/MenuButtons"

function MenuModal({ isOpen, onClose }) {
    return (
        <StyledModal isOpen={isOpen} onClose={onClose}>
            <StyledLayout page="menu">
                <Wrapper>
                    <MenuContainer>
                        <MenuButtons />
                    </MenuContainer>
                </Wrapper>
            </StyledLayout>
        </StyledModal>
    )
}

export default observer(MenuModal)

observer(MenuModal)

const StyledLayout = styled(Layout)`
    height: 100%;

    .menu-button {
        @media ${DEVICE.mobile} {
            width: 34vw;
        }
    }
`

const Wrapper = styled.div`
    height: 100%;
    max-height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0;
    }
`

const StyledModal = styled(Modal)`
    height: 100%;

    .modal-window {
        background-color: transparent;
        background: url(${MenuBackground}) no-repeat center/cover;
    }

    .content {
        padding-top: 0;

        @media ${DEVICE.laptopS} {
            padding: 0 20px;
        }
    }
`

const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 2vw 2vw;
    overflow: hidden;
    @media ${DEVICE.laptopS} {
        padding: 5vw;
        height: auto;
    }

    @media ${DEVICE.mobile} {
        align-items: flex-start;
        padding: 4vw 6vw;
    }
`
