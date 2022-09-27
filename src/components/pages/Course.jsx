import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { useLocation, useNavigate, useParams } from "react-router"
import { observer } from "mobx-react-lite"
import timelineData from "../../data/timelineData"
import { Layout } from "../atoms"
import { COLORS, DEVICE } from "../../constants"
import { MenuBackground } from "../../assets/images"
import { TimelineFooter, CourseMenu } from "../organisms"
import { introModalData } from "../../data"
import Error404 from "./Error404"
import { CourseProgressStore, ModalStore, SoundStore } from "../../store"
import Notification from '../atoms/Notification'

function Course() {
    const { id } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const titleAudio = useRef()

    useEffect(() => {
        if (location.pathname.includes("instruction")) {
            ModalStore.showModal("instruction")
        }

        if (location.pathname.includes("intro")) {
            ModalStore.showModal("intro")
        }
    }, [location])

    const dataLine = timelineData[`course${id}`]
    const dataModal = introModalData[`introModal${id}`]

    useEffect(() => {
        if (id) {
            CourseProgressStore.setActiveCourseId(id)

            if (
                dataLine &&
                dataModal &&
                !CourseProgressStore.userVisitedAnyCourse
            ) {
                navigate('instruction')
                CourseProgressStore.setUserVisitedAnyCourse()
                CourseProgressStore.setUserVisitedCourse(id)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(() => {
        CourseProgressStore.setIsTimelinePageActive(true)

        return () => {
            if (ModalStore.isVisible.instruction) ModalStore.closeModal('instruction')
        }
    }, [])

    useEffect(() => {
        function titleSoundPlay() {
            if(!ModalStore.isVisible.instruction && !ModalStore.isVisible.intro) {

                // eslint-disable-next-line no-unused-expressions
                (SoundStore.getIsPlaying() && !SoundStore.getPlayedTitleSound(`course${id}`)) && titleAudio.current.play()
                SoundStore.setPlayedTitleSound(`course${id}`, true)
            }
            window.removeEventListener("click", titleSoundPlay)
        }
        window.addEventListener("click", titleSoundPlay, { ones: true})
    }, [id, location])

    useEffect(() => {
        document.addEventListener("click", () => {
            if(SoundStore.getPlayedTitleSound(`course${id}`)) {
                titleAudio.current.pause()
            }
        }, { once: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [SoundStore.getPlayedTitleSound(`course${id}`)])

    if (!dataLine && !dataModal) {
        return <Error404 />
    }

    return (
        <StyledLayout page="course">
            {dataLine.metaTitle && <Helmet>
                <title data-rh="true">{dataLine.metaTitle}</title>
                <meta
                    name="description"
                    content={dataLine.metaDescription}
                />
                </Helmet>
            }
            <Notification/>
            <Background />
            <Container>
                <Wrapper>
                    <CourseNumber>{dataLine.id}</CourseNumber>
                    <CourseTitle>{dataLine.title}</CourseTitle>
                    {dataLine.supTitle && (
                        <CourseSupTitle>{dataLine.supTitle}</CourseSupTitle>
                    )}
                </Wrapper>
                <CourseMenu dataLine={dataLine} dataModal={dataModal} />
                <TimelineFooter />
            </Container>
            <Audio src={dataLine.titleAudio}
                ref={titleAudio}/>
        </StyledLayout>
    )
}

export default observer(Course)

const StyledLayout = styled(Layout)`
    .content {
        @media ${DEVICE.laptopM} {
            padding-bottom: 10px;
        }
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
    padding: 25px 0 0 60px;

    @media ${DEVICE.laptopM} {
        padding: 0 0 0 calc(3vw - 20px);
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
        font-size: 22px;
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
        font-size: 16px;
    }
`

const Audio = styled.audio``
