import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { menuButtonData } from "../../data"
import MenuButton from "./MenuButton"
import { MenuProgressBar } from "../atoms"
import { ModalStore, SoundStore, CourseProgressStore } from "../../store"
import { Click1 } from "../../assets/audio"
import { DEVICE } from "../../constants"

export default function MenuButtons({ className }) {
    const clickSound = new Audio(Click1)

    const closeModal = () => {
        ModalStore.closeModal("menu")
        SoundStore.setIsPlayingSound(true)
        // eslint-disable-next-line no-unused-expressions
        SoundStore.getIsPlaying() && clickSound.play()
    }

    return (
        <MenuWrap className={className}>
            {menuButtonData.map((item) => (
                <MenuButtonContainer key={item.index}>
                    <Link to={item.href} onClick={() => closeModal()}>
                        <MenuButton
                            index={item.index}
                            text={item.text}
                            bgColor={item.bgColor}
                            bgAnimateColor={item.bgAnimateColor}
                            rotate={item.rotate}
                        />
                        <MenuProgressBarContainer className="progress-bar-cont">
                            <MenuProgressBar
                                max={100}
                                value={CourseProgressStore.chapterProgressPercent(
                                    item.id
                                )}
                                color={item.bgColor}
                            />
                        </MenuProgressBarContainer>
                    </Link>
                </MenuButtonContainer>
            ))}
        </MenuWrap>
    )
}

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
