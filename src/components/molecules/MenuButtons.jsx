/* eslint-disable react/jsx-no-bind */
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { observer } from "mobx-react-lite"

import { menuButtonData } from "../../data"
import MenuButton from "./MenuButton"
import { MenuProgressBar } from "../atoms"
import { CourseProgressStore } from "../../store"
import { DEVICE } from "../../constants"

// eslint-disable-next-line no-unused-vars
function MenuButtons({
    className,
    data = menuButtonData,
    markActiveChapter = false,
    onMenuBtnClick = () => {},
}) {
    return (
        <MenuWrap className={`${className || ""} menu-buttons`}>
            {data.map((item) => (
                <MenuButtonContainer
                    key={item.index}
                    className={`menu-button-cont ${
                        markActiveChapter ? "with-active-chapter" : ""
                    }`}
                >
                    <Link to={item.href} onClick={onMenuBtnClick}>
                        <MenuButton
                            index={item.index}
                            text={item.text}
                            bgColor={item.bgColor}
                            bgAnimateColor={item.bgAnimateColor}
                            rotate={item.rotate}
                            duration={item.duration}
                            activeChapter={
                                markActiveChapter &&
                                CourseProgressStore.activeChapterId === item.id
                            }
                            className={
                                markActiveChapter && "with-active-chapter"
                            }
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

export default observer(MenuButtons)

const MenuWrap = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
`

const MenuButtonContainer = styled.div`
    @media ${DEVICE.laptopS} {
        margin-bottom: 5vw;
    }

    &.with-active-chapter {
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
