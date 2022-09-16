import React from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { InteractiveCircle, AnimateLine, ArrowUp } from "../../assets/svg"
import Layout from "./Layout"
import { MailButton } from "../molecules"
import { COLORS, DEVICE } from "../../constants"
import { CourseProgressStore } from "../../store"

export default function CourseSlideLayout({ className, type, children }) {

    const { activeSectColor, activeCourseId } = CourseProgressStore
    const color = type === 'test' ? COLORS.blue : activeSectColor

    const backChapterLink = `/course${activeCourseId}`

    return (
        <StyledLayout page={type === 'test' ? "test" : "section"} className={className} type={type}>
            <InterCircleCont>
                <StyledInterCircle color={color} />
            </InterCircleCont>
            <WavesContainer>
                <AnimateLine color={color} />
            </WavesContainer>
            <Content className="slide-content">
                <Link to={backChapterLink} className="back-to-chapter">
                    <BackToChapter>
                        <BackToChapterIcon>
                            <ArrowUp />
                        </BackToChapterIcon>
                        <BackToChapterText>
                            Вернуться в раздел
                        </BackToChapterText>
                    </BackToChapter>
                </Link>
                {children}
            </Content>
            <MailButtonContainer>
                <MailButton isTest={type === "test"} />
            </MailButtonContainer>
        </StyledLayout>
    )
}

const Content = styled.div`
    height: 100%;
`

const BackToChapterIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 10px;
    transition: 0.3s;

    svg {
        max-width: 100%;
    }

    @media ${DEVICE.laptopM} {
        width: 7px;
    }
`

const BackToChapter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        ${BackToChapterIcon} {
            transform: translateY(-8%);
        }
    }
`

const BackToChapterText = styled.div`
    font-family: "FocoRegular", sans-serif;
    font-size: 18px;
    color: ${COLORS.blue};

    @media ${DEVICE.laptopM} {
        font-size: 15px;
    }
`

const StyledLayout = styled(Layout)`
    .content {
        padding: ${({ type }) => (type === "test" ? "10vh 6.5vw 10px" : "0")};
        overflow: auto;
        ${({ type }) =>
            type === "test" &&
            css`
                padding: "10vh 6.5vw 10px";

                @media ${DEVICE.laptopS} {
                    padding: 20px;
                }
            `}
    }

    .back-to-chapter {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;

        @media ${DEVICE.laptopS} {
            position: static;
            transform: none;
            margin-bottom: 30px;
        }
    }
`

const InterCircleCont = styled.div`
    position: fixed;
    right: -8%;
    top: 5%;
    z-index: -1;

    max-height: 122%;
    height: 122%;
    max-width: 59%;

    @media ${DEVICE.laptopS} {
        display: none;
    }
`

const StyledInterCircle = styled(InteractiveCircle)`
    max-width: 100%;
    max-height: 100%;
`

const WavesContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;

    width: 100%;
    z-index: -1;
    min-height: 80px;
    overflow: hidden;

    svg {
        height: 100%;
        max-width: none;
    }
`

const MailButtonContainer = styled.div`
    position: fixed;
    bottom: 1.7vw;
    right: 2vw;
    z-index: 50;

    @media ${DEVICE.laptop} {
        right: 20px;
        bottom: 20px;
    }

    @media ${DEVICE.laptopS} {
        display: none;
    }
`
