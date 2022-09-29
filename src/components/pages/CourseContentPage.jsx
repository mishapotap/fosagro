/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useLocation, useNavigate, useParams } from "react-router"
import CourseSlideLayout from "../atoms/CourseSlideLayout"
import { CourseProgressStore } from "../../store"
import Error404 from "./Error404"
import { DEVICE } from "../../constants"
import { CourseContent } from "../atoms"

export default function CourseContentPage() {

    const navigate = useNavigate()
    const { id: courseId, sectId, pageId } = useParams()
    const [showContent, setShowContent] = useState(false)

    const location = useLocation()

    useEffect(() => {
        if (!CourseProgressStore.isWrongPath) {
            const pageAvailable = CourseProgressStore.isPageAvailable(
                courseId,
                sectId,
                pageId
            )

            if (!pageAvailable) {
                navigate(`/course${courseId}`)
            } else {
                CourseProgressStore.setVisitedPage()
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    function setIds() {
        CourseProgressStore.setActiveChapterId(courseId)
        CourseProgressStore.setActiveSectId(sectId)
        CourseProgressStore.setActivePageId(pageId)
        if (!showContent) setShowContent(true)
    }

    function handleDisappear() {
        const layout = document.querySelector('.layout');

        function handleTrend() {
            navigate(`/course${courseId}/test`)
            layout.removeEventListener('transitionend', handleTrend)
        }

        setShowContent(false)
        layout.addEventListener('transitionend', handleTrend)
    }

    if (
        CourseProgressStore.isWrongPath ||
        !CourseProgressStore.activePageData
    ) {
        return <Error404 />
    }

    return (
        <StyledLayout className={showContent && "show"}>
            <CourseContent setIds={setIds} onDisappear={handleDisappear} />
        </StyledLayout>
    )
}

const StyledLayout = styled(CourseSlideLayout)`
    opacity: 0;
    transition: 0.2s;

    &.show {
        opacity: 1;
    }

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
