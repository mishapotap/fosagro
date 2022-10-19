/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { useLocation, useNavigate, useParams } from "react-router"
import { observer } from "mobx-react-lite"
import timelineData from "../../data/timelineData"
import { COLORS, DEVICE } from "../../constants"
import { MenuBackground } from "../../assets/images"
import { Footer, CourseMenu } from "../organisms"
import { introModalData } from "../../data"
import Error404 from "./Error404"
import {
    CookiesStore,
    CourseProgressStore,
    ModalStore,
    SoundStore,
} from "../../store"
import { CookiesInfoModal, Notification, Layout, ExtLinkModal } from "../atoms"

function Course() {
    const { id } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const titleAudio = useRef()
    const disabledRef = useRef(null)
    const wrapperRef = useRef(null)

    const playTitleOnInstrClose = useRef(null)

    useEffect(() => {
        if (location.pathname.includes("instruction")) {
            ModalStore.showModal("instruction")
            if (titleAudio.current) titleAudio.current.pause()
        } else if (ModalStore.isVisible.instruction) {
            ModalStore.closeModal("instruction")
        }

        if (location.pathname.includes("intro")) {
            ModalStore.showModal("intro")
        } else if (ModalStore.isVisible.intro) {
            ModalStore.closeModal("intro")
        }
    }, [location])

    const dataLine = timelineData[`course${id}`]
    const dataModal = introModalData[`introModal${id}`]

    useEffect(() => {
        if (id) {
            CourseProgressStore.setActiveChapterId(id)

            if (
                !CookiesStore.userAcceptedCookies ||
                CookiesStore.userAcceptedCookiesNow
            ) {
                if (
                    dataLine &&
                    dataModal &&
                    !CourseProgressStore.userVisitedAnyChapter
                ) {
                    navigate("instruction")
                    CourseProgressStore.setUserVisitedAnyChapter(true)
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    function activeTitleSound() {
        setTimeout(() => {
            if (ModalStore.isVisible.instruction) {
                playTitleOnInstrClose.current = true
                return
            }
            titleAudio.current.play().then(() => {
                disabledRef.current.classList.add("active")
                wrapperRef.current.classList.add("active")
            })
        }, 500)
        titleAudio.current.addEventListener("ended", () => {
            disabledRef.current.classList.remove("active")
            wrapperRef.current.classList.remove("active")
        })
    }

    function titleSoundPlay() {
        if (
            !ModalStore.isVisible.instruction &&
            !ModalStore.isVisible.intro &&
            !ModalStore.isVisible.menu &&
            !ModalStore.isVisible.mail
        ) {
            if (SoundStore.getIsPlaying()) {
                if (playTitleOnInstrClose.current) {
                    activeTitleSound()
                } else if (!SoundStore.getPlayedTitleSound(`course${id}`)) {
                    activeTitleSound()
                }
            }
            SoundStore.setPlayedTitleSound(`course${id}`, true)
        }
        window.removeEventListener("click", titleSoundPlay)
    }

    useEffect(() => {
        window.addEventListener("click", titleSoundPlay, { ones: true })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, location])

    useEffect(() => {
        CourseProgressStore.setIsTimelinePageActive(true)

        return () => {
            if (ModalStore.isVisible.instruction)
                ModalStore.closeModal("instruction")

            window.removeEventListener("click", titleSoundPlay)
            CourseProgressStore.setIsTimelinePageActive(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (ModalStore.isVisible.instruction || ModalStore.isVisible.mail) {
            SoundStore.setIsPlayingSound(false)
        } else {
            SoundStore.setIsPlayingSound(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalStore.isVisible.instruction, ModalStore.isVisible.mail])

    useEffect(() => {
        if (
            !ModalStore.isVisible.instruction &&
            playTitleOnInstrClose.current
        ) {
            setTimeout(() => {
                titleSoundPlay()
                playTitleOnInstrClose.current = false
            }, 200)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ModalStore.isVisible.instruction])

    if (!dataLine && !dataModal) {
        return <Error404 />
    }

    return (
        <StyledLayout page="course">
            <CookiesInfoModal />
            {dataLine.metaTitle && (
                <Helmet>
                    <title data-rh="true">{dataLine.metaTitle}</title>
                    <meta
                        name="description"
                        content={dataLine.metaDescription}
                    />
                </Helmet>
            )}
            <Notification
                show={CourseProgressStore.showNotification}
                position={CourseProgressStore.notifPos}
            />
            <Background />
            <Container>
                <Wrapper ref={wrapperRef}>
                    <CourseNumber>{dataLine.id}</CourseNumber>
                    <CourseTitle>{dataLine.title}</CourseTitle>
                    {dataLine.supTitle && (
                        <CourseSupTitle>{dataLine.supTitle}</CourseSupTitle>
                    )}
                </Wrapper>
                <ContainerDisabled ref={disabledRef} />
                <CourseMenu dataLine={dataLine} dataModal={dataModal} />
                <Footer />
            </Container>
            <Audio src={dataLine.titleAudio} ref={titleAudio} />
        </StyledLayout>
    )
}

export default observer(Course)

const StyledLayout = styled(Layout)`
    .content {
        @media ${DEVICE.laptopM} {
            padding-bottom: 10px;
        }

        @media ${DEVICE.mobile} {
            padding-top: 5px;
        }
    }

    .notif-container {
        transform: translate(-28%, -100%);
    }
`

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${MenuBackground}) no-repeat center center / cover;
    z-index: -1;
`

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    /* justify-content: space-between; */
`

const Wrapper = styled.div`
    z-index: 102;
    position: relative;
    padding: 25px 0 0 60px;
    transform-origin: 0 0;
    transition: all 0.3s;
    &.active {
        transform: scale(1.2);

        @media ${DEVICE.laptopS} {
            transform: scale(1.08);
        }
    }

    @media ${DEVICE.laptopM} {
        padding: 0 0 0 calc(3vw - 20px);
    }
`

const ContainerDisabled = styled.div`
    transition: all 0.3s;
    &.active {
        z-index: 101;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.05);
    }
`

const CourseNumber = styled.div`
    font-family: "FocoBold";
    font-size: 3.4vw;
    line-height: 1.25;
    color: ${COLORS.white};

    @media ${DEVICE.laptopM} {
        font-size: 2.5vw;
    }

    @media ${DEVICE.laptopS} {
        font-size: 40px;
    }
`

const CourseTitle = styled.div`
    max-width: 65%;
    font-family: "FocoBold";
    font-size: 2.1vw;
    line-height: 1.25;
    color: ${COLORS.blue};

    @media ${DEVICE.laptopM} {
        font-size: 1.8vw;
        max-width: 55%;
    }

    @media ${DEVICE.laptopS} {
        max-width: 100%;
        font-size: 20px;
    }
`

const CourseSupTitle = styled.div`
    max-width: 50%;
    margin-top: 10px;
    font-family: "FocoRegular";
    font-weight: 400;
    font-size: 1.3vw;
    line-height: 1.28;

    color: ${COLORS.blue};

    @media ${DEVICE.laptopM} {
        font-size: 1.2vw;
    }
    @media ${DEVICE.laptopS} {
        max-width: none;
        font-size: 16px;
    }
`

const Audio = styled.audio``
