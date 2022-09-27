/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-array-index-key */
import React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"
import Modal from "./Modal"
import SendButton from "./SendButton"
// import { COLORS, DEVICE } from "../../constants"

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
                <SendButton text="Начать изучение курса" onClick={withCookie}/>
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
`

const Text = styled.div`
    font-family: 'CalibriRegular';
    font-weight: 300;
    font-size: 0.94vw;
    line-height: 1.4vw;

    color: ${COLORS.black};
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
`