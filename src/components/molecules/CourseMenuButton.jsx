import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { CourseProgressStore, ModalStore, SoundStore } from "../../store"
import { COLORS, DEVICE, ISENG } from "../../constants"
import { BurgerIcon } from "../../assets/svg"
import { MenuModal } from "../organisms"
import { Click1 } from "../../assets/audio"

function CourseMenuButton({ colored }) {
    const clickSound = new Audio(Click1)

    const openMenu = () => {
        ModalStore.showModal("menu")
        // eslint-disable-next-line no-unused-expressions
        SoundStore.getIsPlaying() && clickSound.play()
        SoundStore.setIsPlayingSound(true)
    }

    const closeMenu = () => {
        ModalStore.closeModal("menu")
        // eslint-disable-next-line no-unused-expressions
        SoundStore.getIsPlaying() && clickSound.play()

        if (!CourseProgressStore.isTimelinePageActive) {
            SoundStore.setIsPlayingSound(false)
        }
    }

    return (
        <Wrapper>
            <CourseLink onClick={() => openMenu()}>
                <CourseLinkText colored={colored}>

                    {ISENG ? "Sustainable Development course" : "Курс “Устойчивое развитие”"}
                </CourseLinkText>
                <BurgerIcon colored={colored} />
            </CourseLink>
            <MenuModal
                isOpen={ModalStore.isVisible.menu}
                onClose={() => closeMenu()}
            />
        </Wrapper>
    )
}

export default observer(CourseMenuButton)

const Wrapper = styled.div`
    cursor: pointer;
    flex-shrink: 0;
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
