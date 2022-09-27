/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-array-index-key */
import React from "react"
import styled from "styled-components"
import Modal from "./Modal"
import SendButton from "./SendButton"
import { COLORS, DEVICE } from "../../constants"

export default function CookieModal({ isOpen, onClose }) {

    function withCookie() {
        onClose()
    }

    function withOutCookie() {
        onClose()
    }

    return (
        <StyledModal
            isOpen={isOpen}
            onClose={onClose}
            className="modal-cookie"
            type="cookie"
        >
            <ModalContent>
                <Text>Данный курс использует файлы cookie для подсчета и формирования визуализации прогресса изучения курса. Cookie хранятся в течение 30 дней.
                    Время изучения курса  - 60 минут.
                </Text>
                <SendButton text="Начать изучение курса" onClick={withCookie} className="cookie"/>
                <WithOutCookie onClick={withOutCookie}>Начать изучение курса без подсчета прогресса изучения</WithOutCookie>
            </ModalContent>
        </StyledModal>
    )
}

const StyledModal = styled(Modal)`
    &.modal-cookie {
        top: calc(100vh - 20vw);
        left: calc(50vw - 19vw);

        width: 100%;
        max-width: 38vw;
        height: 15.6vw;

        border-radius: 30px;

        overflow: hidden;

        @media ${DEVICE.laptopS} {
            height: 18vw;
            top: calc(100vh - 22vw);
        }

        @media ${DEVICE.tablet} {
            top: calc(100vh - 26vw);
            left: calc(50vw - 25vw);

            max-width: 50vw;
            height: 22vw;
        }

        @media ${DEVICE.mobile} {
            top: calc(100vh - 55vw);
            left: calc(50vw - 45vw);

            max-width: 90vw;
            height: 50vw;
        }
    }
`
      
const ModalContent = styled.div`
    position: relative;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    padding: 2.25vw;

    text-align: center;

    @media ${DEVICE.mobile} {
        padding: 4vw;
    }
`

const Text = styled.div`
    font-family: 'CalibriRegular';
    font-weight: 300;
    font-size: 0.94vw;
    line-height: 1.4vw;

    color: ${COLORS.black};
    
    @media ${DEVICE.laptopS} {
        font-size: 1.2vw;
        line-height: 1.6vw;
    }

    @media ${DEVICE.tablet} {
        font-size: 1.6vw;
        line-height: 2vw;
    }

    @media ${DEVICE.mobile} {
        font-size: 3.5vw;
        line-height: 4.2vw;
    }
`

const WithOutCookie = styled.div`
    font-family: 'CalibriRegular';
    font-weight: 300;
    font-size: 0.83vw;
    line-height: 1.25vw;

    color: ${COLORS.black};

    border-bottom: 1px solid rgba(0, 82, 155, 0.84);
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid rgba(0, 82, 155, 1);
    }

    @media ${DEVICE.laptopS} {
        font-size: 1.1vw;
        line-height: 1.3vw;
    }

    @media ${DEVICE.tablet} {
        font-size: 1.4vw;
        line-height: 1.6vw;
    }

    @media ${DEVICE.mobile} {
        font-size: 3vw;
        line-height: 3.4vw;
    }
`