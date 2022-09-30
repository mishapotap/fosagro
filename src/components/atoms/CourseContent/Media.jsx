/* eslint-disable no-unused-vars */
import { observer } from "mobx-react-lite"
import React, { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"
import coursePageComponents from "../coursePageComponents"
import ExtLinks from "../ExtLinks"
import { DEVICE } from "../../../constants"
import { CourseProgressStore } from "../../../store"

function Media({ pauseAnim, videoPlaying, restartAnim, sliderDelay, makeSliderAutoplay }) {
    const pageData = CourseProgressStore.activePageData

    const { component, data: mData, type: mediaType } = pageData.media
    const MediaComponent = coursePageComponents[component]
    const mediaData = mData || {}

    const [mediaKey, setMediaKey] = useState(1)
    const { links } = pageData

    const video = mediaType === "video"
    const circleSlider = mediaType === "circleSlider"
    const animation = mediaType === "animation"
    const objectSlider = mediaType === "objectSlider"

    const resetSettId = useRef(null)
    const mediaContRef = useRef(null)

    function resetAnimation(el) {
        el.classList.add("restart")

        resetSettId.current = setTimeout(() => {
            el.classList.remove("restart")
            resetSettId.current = null
        }, 400)
    }

    // чтобы слайдер корректно работал
    useEffect(() => {
        if (circleSlider) {
            setMediaKey(mediaKey + 1)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sliderDelay])

    useEffect(() => {
        if (restartAnim && !resetSettId.current) {
            resetAnimation(mediaContRef.current)
        }
    }, [restartAnim])

    let mediaProps = {data: mediaData};

    if (video) mediaProps = {...mediaProps, isPlaying: videoPlaying}
    if (circleSlider) mediaProps = {...mediaProps, delayTime: sliderDelay, makeAutoplay: makeSliderAutoplay}

    return (
        <Container
            className={`${
                animation && pauseAnim ? "anim-paused" : ""
            } media-test`}
            video={video}
            circleSlider={circleSlider}
            animation={animation}
            objectSlider={objectSlider}
            ref={mediaContRef}
        >
            <MediaColInner>
                <StyledMedia key={mediaKey}>
                    {MediaComponent && (
                        <MediaComponent
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...mediaProps}
                        />
                    )}
                </StyledMedia>
                {links && links.length > 0 && <StyledExtLinks links={links} />}
            </MediaColInner>
        </Container>
    )
}

export default observer(Media)

const StyledExtLinks = styled(ExtLinks)`
    bottom: 5px;
    right: 22%;
    z-index: 50;
`

const MediaColInner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;

    overflow: auto;
`

const StyledMedia = styled.div`
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

const Container = styled.div`
    width: 100%;
    height: 100%;
    transition: 0.5s;

    &.restart {
        animation: none !important;

        opacity: 0;

        * {
            animation: none !important;
        }
    }

    &.anim-paused {
        animation-play-state: paused!important;

        * {
            animation-play-state: paused!important;
        }
    }

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

            ${StyledMedia} {
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

            ${StyledMedia} {
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
            ${StyledMedia} {
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
            padding-right: 2vw;

            ${StyledMedia} {
                position: relative;
                padding-bottom: 45px;
                padding-right: 10px;
                width: 100%;

                flex-direction: column;
                align-items: flex-end;

                @media ${DEVICE.laptopS} {
                    width: 80%;
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


    ${StyledMedia} {
        @media ${DEVICE.laptopS} {
            justify-content: center;
        }
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
