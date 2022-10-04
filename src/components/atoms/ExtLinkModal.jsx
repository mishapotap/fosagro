/* eslint-disable react/jsx-no-bind */
import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"

import { COLORS, DEVICE } from "../../constants"
import Modal from "./Modal"
import SendButton from "./SendButton"
import { ModalStore } from "../../store"

function ExtLinkModal({ link = "#", onLeftSite = () => {} }) {
    function onClose () {
        ModalStore.closeModal('extLinks')
    }

    function handleGoClick () {
        onLeftSite()
        onClose()
    }
    return (
        <StyledModal isOpen={ModalStore.isVisible.extLinks} onClose={onClose} noCloseBtn>
            <Container>
                <TextWrapper>
                    <Text>Внимание!</Text>
                    <Text>
                        Сейчас будет выполнен переход на внешний ресурс.
                    </Text>
                </TextWrapper>
                <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleGoClick}
                >
                    <SendButton text="Перейти" />
                </Link>
                <StayBtn onClick={onClose}>Не переходить</StayBtn>
            </Container>
        </StyledModal>
    )
}

export default observer(ExtLinkModal)

const Text = styled.p`
    font-family: CalibriLight, sans-serif;
    font-size: 18px;
    color: ${COLORS.black};
    text-align: center;
    line-height: 1.2;

    @media ${DEVICE.laptopM} {
        font-size: 16px;
    }

    @media ${DEVICE.laptopS} {
        font-size: 15px;
    }
`

const TextWrapper = styled.div`
    ${Text} {
        margin-bottom: 13px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const Link = styled.a`
    margin-top: 4vh;
    margin-bottom: 2vh;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5.5vh 20px 3.6vh;

    @media ${DEVICE.laptopS} {
        padding: 30px 20px;
    }
`

const StyledModal = styled(Modal)`
    .modal-window {
        width: 37vw;
        height: auto;

        background-color: rgba(255, 255, 255, 0.84);
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='23' ry='23' stroke='%2300529BFF' stroke-width='2' stroke-dasharray='9%2c 7' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
        border-radius: 23px;

        @media ${DEVICE.laptop} {
            width: 380px;
            max-width: 90%;
        }
    }

    .modal-mask {
        background-color: rgba(248, 250, 253, 0.5);
    }
`

const StayBtn = styled.button`
    font-family: CalibriLight, sans-serif;
    font-size: 17px;
    position: relative;

    &:after {
        position: absolute;
        content: "";
        bottom: -2px;
        left: 0;

        width: 100%;
        height: 1px;
        background-color: ${COLORS.blue};
    }

    @media ${DEVICE.laptopM} {
        font-size: 16px;
    }

    @media ${DEVICE.laptopS} {
        font-size: 15px;
    }
`
