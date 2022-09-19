/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useRef, useState } from "react"
import { useParams, useLocation } from "react-router"
import styled, { css, keyframes } from "styled-components"
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import { observer } from "mobx-react-lite"

import BackToChapterButton from "./BackToChapterButton"
import NextQuestionButton from "./NextQuestionButton"
import CourseSlideLayout from "./CourseSlideLayout"
import { StepProgressBar } from "../molecules"
import { Title, ContentBlock, Label, BubbleContainer } from "./Content"

import { DEVICE } from "../../constants"
import AudioPlayer from "./AudioPlayer"
import ExtLinks from "./ExtLinks"
import coursePageComponents from "./coursePageComponents"
import { CourseProgressStore, SoundStore } from "../../store"
import { Error404 } from "../pages"

// TODO на мобилках сделать чтобы анимация начинала проигрываться только тогда,
// когда попадет в область видимости
// ! кстати то же самое с видео, оно не должно проигрываться, если находится
// вне области видимости

// TODO может стоит как-то поправить анимации некоторые на моб, или убрать их?
// (текст в AnmateGlobal и AnimateChart например получается очень маленький)

// TODO изменить расположение аудиоплеера? (также в IntroModal)

// TODO сделать чтобы плавно появлялись элементы
// (чтобы прошлое состояние не было видно)

// TODO сделать плавное переключение получше?

function CoursePage() {
    SoundStore.setIsPlayingSound(false)
    const { id: courseId, sectId, pageId } = useParams()
    const pageData = CourseProgressStore.activePageData
    const location = useLocation()

    const [key, setKey] = useState(1)

    const audioColRef = useRef(null)
    const contentColRef = useRef(null)
    const mediaColRef = useRef(null)
    const titleColRef = useRef(null)
    const isFirstRender = useRef(true)
    const colsRef = useRef(null)

    const [showSlide, setShowSlide] = useState(true)
    const [leftSlide, setLeftSlide] = useState(false)
    const [rightSlide, setRightSlide] = useState(false)

    const [makeBubbles, setMakeBubbles] = useState(false)

    function setIds() {
        CourseProgressStore.setActiveCourseId(courseId)
        CourseProgressStore.setActiveSectId(sectId)
        CourseProgressStore.setActivePageId(pageId)
    }

    useEffect(() => {
        if (pageData) {
            const bubbleComp = pageData.content.find(
                (i) => i.component === "Bubble"
            )
            if (bubbleComp) {
                // eslint-disable-next-line no-use-before-define
                setMakeBubbles(true)
            } else if (makeBubbles) {
                setMakeBubbles(false)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CourseProgressStore.activePageData])

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            setIds()
        } else if (!leftSlide && !rightSlide) {
            setIds()
            setKey(key + 1)
        }

        const slideContent = document.querySelector(".slide-content")
        if (slideContent) {
            setTimeout(() => {
                slideContent.scrollTop = 0
            }, 100)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    if (!pageData) {
        return <Error404 />
    }

    function stopMedia() {
        const audio = document.querySelector("audio")
        const video = document.querySelector("video")

        if (audio) audio.pause()
        if (video) video.pause()
    }

    function handleBackClick() {
        stopMedia()
        setLeftSlide(true)
        setRightSlide(false)
        setShowSlide(false)
    }

    function handleNextClick() {
        stopMedia()
        setLeftSlide(false)
        setRightSlide(true)
        setShowSlide(false)
    }

    function handleExited() {
        setKey(key + 1)
        setIds()
        setShowSlide(true)
    }

    function handleEntered() {
        setLeftSlide(false)
        setRightSlide(false)
    }

    const { component, data: mData, type: mediaType } = pageData.media
    const MediaComponent = coursePageComponents[component]
    const mediaData = mData || {}

    const { links, audioSrc, title, content } = pageData
    const labelComp = content.find((i) => i.component === "Label")

    const video = mediaType === "video"
    const circleSlider = mediaType === "circleSlider"
    const animation = mediaType === "animation"
    const objectSlider = mediaType === "objectSlider"

    return (
        <StyledLayout>
            <Columns
                className={`${leftSlide && "left-slide"} ${
                    rightSlide && "right-slide"
                }`}
                ref={colsRef}
            >
                <CSSTransition
                    in={showSlide}
                    timeout={500}
                    appear
                    classNames="slide"
                    nodeRef={audioColRef}
                >
                    <AudioColumn ref={audioColRef} className="slide" key={key}>
                        {audioSrc && <StyledAudioPlayer src={audioSrc} />}
                    </AudioColumn>
                </CSSTransition>
                <CSSTransition
                    in={showSlide}
                    timeout={500}
                    classNames="slide"
                    nodeRef={titleColRef}
                >
                    <TitleColumn ref={titleColRef}>
                        <Title color={CourseProgressStore.activeSectColor}>
                            {title}
                        </Title>
                    </TitleColumn>
                </CSSTransition>
                <CSSTransition
                    in={showSlide}
                    timeout={500}
                    classNames="slide"
                    nodeRef={contentColRef}
                    onExited={handleExited}
                    onEntered={handleEntered}
                >
                    <ContentColumn ref={contentColRef} className="slide">
                        <Content>
                            <BubbleContainer makeBubbles={makeBubbles}>
                                {labelComp && <Label data={labelComp.data} />}
                                <ContentWrapper>
                                    <StyledContentBlock
                                        color={
                                            CourseProgressStore.activeSectColor
                                        }
                                    >
                                        {content.map(
                                            (
                                                { component: compName, data },
                                                index
                                            ) => {
                                                const Component =
                                                    coursePageComponents[
                                                        compName
                                                    ]
                                                if (
                                                    Component &&
                                                    compName !== "Label"
                                                ) {
                                                    return (
                                                        <Component
                                                            data={data}
                                                            // eslint-disable-next-line react/no-array-index-key
                                                            key={index}
                                                        />
                                                    )
                                                }
                                                return null
                                            }
                                        )}
                                    </StyledContentBlock>
                                </ContentWrapper>
                            </BubbleContainer>
                        </Content>
                    </ContentColumn>
                </CSSTransition>
                <NavColumn>
                    <Nav>
                        <Link
                            to={CourseProgressStore.prevPageLink}
                            className="prev-btn"
                            onClick={handleBackClick}
                        >
                            <BackToChapterButton text="Назад" />
                        </Link>
                        <StepProgressBar />
                        <Link
                            to={CourseProgressStore.nextPageLink}
                            className="next-btn"
                            onClick={handleNextClick}
                        >
                            <NextQuestionButton text="Вперед" />
                        </Link>
                    </Nav>
                </NavColumn>

                <CSSTransition
                    in={showSlide}
                    timeout={500}
                    classNames="slide"
                    nodeRef={mediaColRef}
                >
                    <MediaColumn
                        video={video}
                        circleSlider={circleSlider}
                        animation={animation}
                        objectSlider={objectSlider}
                        ref={mediaColRef}
                    >
                        <MediaColInner>
                            <Media key={key}>
                                {MediaComponent && (
                                    <MediaComponent data={mediaData} />
                                )}
                            </Media>
                            {links && links.length > 0 && (
                                <StyledExtLinks links={links} />
                            )}
                        </MediaColInner>
                    </MediaColumn>
                </CSSTransition>
            </Columns>
        </StyledLayout>
    )
}

export default observer(CoursePage)

const ContentWrapper = styled.div`
    flex: 0 1 100%;
    overflow: hidden;
`

const StyledExtLinks = styled(ExtLinks)`
    bottom: 5px;
    right: 36%;
    z-index: 50;
`

const StyledContentBlock = styled(ContentBlock)`
    max-height: 100%;

    .block-content {
        overflow: auto;
        padding-right: 10px;

        & > * {
            margin-bottom: 2vh;

            &:last-child {
                margin-bottom: 0;
            }

            @media ${DEVICE.laptopS} {
                margin-bottom: 23px;
            }
        }

        &::-webkit-scrollbar {
            width: 3px;
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgba(0, 82, 155, 0.6);
            border-radius: 2em;
        }
    }
`
const appear = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const StyledLayout = styled(CourseSlideLayout)`
    opacity: 0;
    animation: ${appear} 0.2s both 0.2s;

    .slide-content {
        @media ${DEVICE.laptopS} {
            overflow: auto;
            padding: 0 15px;
        }
    }

    .content {
        overflow-x: hidden;

        @media ${DEVICE.laptopS} {
            padding: 0;
        }
    }
`

const StyledAudioPlayer = styled(AudioPlayer)`
    padding-left: 2.2vw;
    margin-top: -1.2vh;

    .player {
        position: absolute;
        left: 0;
    }

    @media ${DEVICE.laptopS} {
        margin-top: -300px;
        margin-bottom: 300px;
    }
`

const Nav = styled.div`
    display: flex;
    align-items: center;

    .step-progress-bar {
        width: 33vw;

        @media ${DEVICE.laptopS} {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
        }
    }

    .prev-btn {
        margin-right: 25px;
        z-index: 50;

        @media ${DEVICE.laptopS} {
            order: 2;
            margin: 200px 90px 15px 0;
        }
    }

    .next-btn {
        margin-left: 25px;
        z-index: 50;

        @media ${DEVICE.laptopS} {
            order: 3;
        }
    }

    @media ${DEVICE.laptopS} {
        flex-direction: column;
        align-items: flex-end;
    }
`

const MediaColInner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;

    overflow: auto;
`

const Media = styled.div`
    display: flex;
    max-height: 100%;
    max-width: 100%;

    .video-player {
        width: 94% !important;
        margin-left: auto;

        @media ${DEVICE.laptopS} {
            margin-left: 0;
        }
    }
`

const Content = styled.div`
    overflow: hidden;

    @media ${DEVICE.laptopS} {
        overflow: visible;
    }
`

const ContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: 2 / 2 / 3 / 3;

    max-height: 100%;
    padding-right: 5px;
    overflow: hidden;
    height: 100%;
    padding-bottom: 20px;

    .bubble-container {
        display: flex;
        flex-direction: column;
    }

    .label {
        margin-bottom: 2.3vh;

        @media ${DEVICE.laptopS} {
            margin-bottom: 23px;
        }
    }

    @media ${DEVICE.laptopS} {
        grid-area: 2 / 1 / 3 / 2;
        overflow: visible;
        padding-right: 0;
        margin-bottom: 45px;
    }
`

const NavColumn = styled.div`
    grid-area: 3 / 1 / 4 / 3;
    padding-left: 2vw;

    @media ${DEVICE.laptopS} {
        grid-area: 4 / 1 / 5 / 2;
        padding-left: 0;
    }
`

const MediaColumn = styled.div`
    grid-area: 1 / 3 / 4 / 4;
    overflow: hidden;
    padding-top: 20px;

    ${({ video }) =>
        video &&
        css`
            padding-right: 4vw;

            @media ${DEVICE.laptopS} {
                padding-right: 0;
                padding-bottom: 0;
            }

            ${MediaColInner} {
                justify-content: center;

                @media ${DEVICE.laptopS} {
                    max-width: 820px;
                    margin: 0 auto;
                }
            }

            ${Media} {
                padding-bottom: 7vh;

                @media ${DEVICE.laptopS} {
                    padding-bottom: 0;
                }
            }
        `}

    ${({ circleSlider }) =>
        circleSlider &&
        css`
            padding-top: 10px;

            ${MediaColInner} {
                justify-content: center;
            }

            ${Media} {
                justify-content: flex-end;
            }
        `}

    ${({ animation, objectSlider }) =>
        (animation || objectSlider) &&
        css`
            ${MediaColInner} {
                justify-content: center;
                align-items: flex-end;
            }
        `}


    ${({ objectSlider }) =>
        objectSlider &&
        css`
            ${Media} {
                margin-right: 1vw;
                margin-bottom: 14vh;
                justify-content: flex-end;

                @media ${DEVICE.laptopS} {
                    margin-right: 0;
                    margin-bottom: 0;
                }

                & > * {
                    max-width: 80%;
                    max-height: none;

                    @media ${DEVICE.laptopS} {
                        margin: 0;
                        max-width: 90%;
                    }

                    @media ${DEVICE.mobile} {
                        max-width: 100%;
                    }
                }
            }
        `}

    ${({ animation }) =>
        animation &&
        css`
            ${Media} {
                padding-bottom: 30px;
                padding-right: 10px;
                width: 100%;
                justify-content: flex-end !important;

                @media ${DEVICE.laptopS} {
                    width: 90%;
                    margin: 0 auto;
                    padding-right: 0;
                }

                @media ${DEVICE.mobile} {
                    width: 100%;
                }

                & > *,
                .anim-earth {
                    max-width: 100%;
                    height: auto;
                    max-height: 100%;

                    @media ${DEVICE.laptopS} {
                        width: 100%;
                    }
                }

                .anim-chart {
                    max-height: 95%;
                }

                .anim-earth-wrapper {
                    margin-right: 3vw;

                    @media ${DEVICE.laptopS} {
                        margin-right: 0;
                    }
                }

                .anim-sci {
                    margin-right: 6vw;

                    @media ${DEVICE.laptopS} {
                        margin-right: 0;
                    }
                }

                .anim-eco {
                    width: 80%;
                    margin-bottom: 10vh;

                    @media ${DEVICE.laptopS} {
                        width: 100%;
                        margin-bottom: 0;
                    }
                }
            }
        `}


    ${Media} {
        @media ${DEVICE.laptopS} {
            justify-content: center;
        }
    }

    @media ${DEVICE.laptopS} {
        grid-area: 3 / 1 / 4 / 2;
        overflow: visible;
        margin-bottom: 35px;
    }

    .video-player {
        width: 100%;
    }

    .circle-slider {
        width: 82%;

        @media ${DEVICE.laptopM} {
            width: 80%;
        }

        @media ${DEVICE.laptopS} {
            max-width: 660px;
            width: 90%;
        }

        @media ${DEVICE.mobile} {
            max-width: 660px;
            width: 100%;
        }

        & > * {
            overflow: auto;

            &::-webkit-scrollbar {
                width: 0;
            }
        }
    }
`

const AudioColumn = styled.div`
    grid-area: 2 / 1 / 3 / 2;

    @media ${DEVICE.laptopS} {
        grid-area: 5 / 1 / 6 / 2;
        margin-left: -15px;
        margin-bottom: 300px;
    }
`

const TitleColumn = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    padding-top: 7vh;

    @media ${DEVICE.laptopM} {
        padding-top: 5vh;
    }

    @media ${DEVICE.laptopS} {
        grid-area: 1 / 1 / 2 / 2;
        margin-bottom: 30px;
        padding-top: 0;
    }
`

const slideRightEnter = keyframes`
    0% {
        transform: translate(25vw);
        opacity: 0;
    }

    100% {
        transform: none;
        opacity: 1;
    }
`

const slideRightExit = keyframes`
    0% {
        transform: none;
        opacity: 1;
    }

    100% {
        transform:  translate(-25vw);
        opacity: 0;
    }
`

const Columns = styled.div`
    display: grid;
    grid-template: 22vh auto 105px / 7% 40% 53%;
    height: 100%;

    @media ${DEVICE.laptopM} {
        grid-template: 18vh auto 105px / 7% 40% 53%;
    }

    @media ${DEVICE.laptopS} {
        grid-template: repeat(5, auto) / 100%;
    }

    &.right-slide {
        .slide-enter-active {
            animation: ${slideRightEnter} 0.5s both;
        }

        .slide-exit-active {
            animation: ${slideRightExit} 0.5s both;
        }
    }

    &.left-slide {
        .slide-enter-active {
            animation: ${slideRightExit} 0.5s reverse both;
        }

        .slide-exit-active {
            animation: ${slideRightEnter} 0.5s reverse both;
        }
    }

    .slide {
        opacity: 1;
    }

    .slide-enter-done {
        opacity: 1;
    }

    .slide-exit-done {
        opacity: 0;
    }

    .title {
        max-width: 43vw;
        height: 14vh;

        @media ${DEVICE.laptopM} {
            max-width: 34vw;
        }

        @media ${DEVICE.laptop} {
            max-width: 370px;
        }

        @media ${DEVICE.laptopS} {
            max-width: none;
            height: auto;
        }
    }
`
