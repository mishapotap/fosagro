import React from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../constants"
import Modal from "./Modal"
import { CurvedModalBg } from "../../assets/svg"

// type:
// intro - то что на введении, оранжевое
// review - то что в модалке с отзывами, синее
export default function CurvedModal({
    children,
    type = "intro",
    isOpen,
    onClose,
    className,
    onOpenAnimEnd,
    navigateBack,
}) {
    const color = type === "intro" ? COLORS.orange : COLORS.blue

    return (
        <Container
            closeBtnColor={color}
            isOpen={isOpen}
            onClose={onClose}
            className={className}
            onOpenAnimEnd={onOpenAnimEnd}
            navigateBack={navigateBack}
        >
            <StyledBg borderColor={color} />
            <ModalContent className="modal-content">{children}</ModalContent>
        </Container>
    )
}

const Container = styled(Modal)`
    .modal-window {
        width: calc(92vh * 1.525);
        max-width: 90vw;
        height: auto;

        overflow: hidden;
        background-color: transparent;

        @media ${DEVICE.laptop} {
            width: 100vw;
            height: 100vh;
            max-width: none;
            background: ${COLORS.white};
        }
    }

    .modal-close-btn {
        top: 9.6%;
        right: 5%;

        @media ${DEVICE.laptop} {
            top: 20px;
            right: 20px;
        }
    }
`

const StyledBg = styled(CurvedModalBg)`
    @media ${DEVICE.laptop} {
        display: none;
    }
`

const ModalContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    z-index: 2;
`
