import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { ModalStore } from "../../store"
import { COLORS, DEVICE } from "../../constants"
import { BurgerIcon } from "../../assets/svg"
import { MenuModal } from "../organisms"

function CourseMenuButton({colored}) {
    return (
        <Wrapper>
            <CourseLink onClick={() => ModalStore.showModal("menu")}>
                <CourseLinkText colored={colored}>
                    Курс “Устойчивое развитие”
                </CourseLinkText>
                <BurgerIcon colored={colored} />
            </CourseLink>
            <MenuModal isOpen={ModalStore.isVisible.menu}
                onClose={() => ModalStore.closeModal("menu")}
            />
        </Wrapper>
    )
}

export default observer(CourseMenuButton)

const Wrapper = styled.div`
    cursor: pointer;
`


const CourseLink = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    width: max-content;
`

const CourseLinkText = styled.div`
    margin-right: 15px;

    font-family: "FocoBold", sans-serif;
    font-size: 18px;
    color: ${({ colored }) => (colored ? COLORS.blue : COLORS.white)};

    @media ${DEVICE.laptopM} {
        font-size: 16px;
    }

    @media ${DEVICE.laptopS} {
        display: none;
    }
`