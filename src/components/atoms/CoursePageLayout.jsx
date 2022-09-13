/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { useParams, useLocation } from "react-router"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { observer } from "mobx-react-lite"

import BackToChapterButton from "./BackToChapterButton"
import NextQuestionButton from "./NextQuestionButton"
import CourseSlideLayout from "./CourseSlideLayout"
import { StepProgressBar } from "../molecules"
import { Title, ContentBlock } from "./Content"

import { DEVICE, COLORS } from "../../constants"
import AudioPlayer from "./AudioPlayer"
import ExtLinks from "./ExtLinks"
import coursePageComponents from "./coursePageComponents"
import { CourseProgressStore } from "../../store"
import { Error404 } from "../pages"

// TODO на мобилках сделать чтобы анимация начинала проигрываться только тогда,
// когда попадет в область видимости
// ! кстати то же самое с видео, оно не должно проигрываться, если находится
// вне области видимости

// TODO может стоит как-то поправить анимации некоторые на моб, или убрать их?
// (текст в AnmateGlobal и AnimateChart например получается очень маленький)

// TODO переделать ссылки по-новому если заказчик одобрит

// TODO сделать чтобы label был между контентом и заголовком

// TODO изменить расположение аудиоплеера? (также в IntroModal)

// TODO сделать чтобы плавно появлялись элементы
// (чтобы прошлое состояние не было видно)

// TODO постараться сделать плавное переключение

function CoursePage() {
    const { id: courseId, sectId, pageId } = useParams()
    const pageData = CourseProgressStore.activePageData
    const location = useLocation()

    function setIds() {
        CourseProgressStore.setActiveCourseId(courseId)
        CourseProgressStore.setActiveSectId(sectId)
        CourseProgressStore.setActivePageId(pageId)
    }

    useEffect(() => {
        setIds()

        const slideContent = document.querySelector(".slide-content")
        if (slideContent) {
            setTimeout(() => {
                slideContent.scrollTop = 0
            }, 100)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    useEffect(() => {
        setIds()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!pageData) {
        return <Error404 />
    }

    const { component, data: mData, type: mediaType } = pageData.media
    const MediaComponent = coursePageComponents[component]
    const mediaData = mData || {}

    const { links, audioSrc, title } = pageData

    const video = mediaType === "video"
    const circleSlider = mediaType === "circleSlider"
    const animation = mediaType === "animation"
    const objectSlider = mediaType === "objectSlider"

    return (
        <StyledLayout>
            <Columns>
                <AudioColumn>
                    {audioSrc && (
                        <StyledAudioPlayer
                            src={audioSrc}
                            key={window.location.pathname}
                        />
                    )}
                </AudioColumn>
                <TitleColumn>
                    <Title color={CourseProgressStore.activeSectColor}>
                        {title}
                    </Title>
                </TitleColumn>
                <ContentColumn>
                    <Content>
                        <StyledContentBlock>
                            {pageData.content.map(
                                ({ component: compName, data }, index) => {
                                    const Component =
                                        coursePageComponents[compName]
                                    return Component ? (
                                        // eslint-disable-next-line react/no-array-index-key
                                        <Component data={data} key={index} />
                                    ) : null
                                }
                            )}
                        </StyledContentBlock>
                    </Content>
                </ContentColumn>
                <NavColumn>
                    <Nav>
                        <Link
                            to={CourseProgressStore.prevPageLink}
                            className="prev-btn"
                        >
                            <BackToChapterButton text="Назад" />
                        </Link>
                        <StepProgressBar />
                        <Link
                            to={CourseProgressStore.nextPageLink}
                            className="next-btn"
                        >
                            <NextQuestionButton text="Вперед" />
                        </Link>
                    </Nav>
                </NavColumn>
                <MediaColumn
                    video={video}
                    circleSlider={circleSlider}
                    animation={animation}
                    objectSlider={objectSlider}
                >
                    <MediaColInner>
                        <Media key={window.location.pathname}>
                            {MediaComponent && (
                                <MediaComponent data={mediaData} />
                            )}
                        </Media>
                        {links && links.length > 0 && (
                            <StyledExtLinks links={links} />
                        )}
                    </MediaColInner>
                </MediaColumn>
            </Columns>
        </StyledLayout>
    )
}

export default observer(CoursePage)

const StyledExtLinks = styled(ExtLinks)`
    bottom: 0;
    right: 36%;
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

const StyledLayout = styled(CourseSlideLayout)`
    .slide-content {
        @media ${DEVICE.laptopS} {
            overflow: auto;
            padding: 0 15px;
        }
    }

    .content {
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
    margin-bottom: 20px;

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
            padding-right: 4.8vw;
            padding-top: 13vh;

            @media ${DEVICE.laptopM} {
                padding-top: 8vh;
            }

            @media ${DEVICE.laptopS} {
                padding-right: 0;
                padding-top: 0;
            }

            ${MediaColInner} {
                @media ${DEVICE.laptopS} {
                    max-width: 820px;
                    margin: 0 auto;
                }
            }

            ${Media} {
                align-items: flex-start;
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

    .bubble-trigger {
        position: relative;
        cursor: pointer;

        &::after {
            position: absolute;
            bottom: 0;
            left: 0;

            width: 100%;
            height: 1px;
            background-color: ${COLORS.blue};
            transform: translateY(calc(100% + 3px));
            content: "";
        }
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
