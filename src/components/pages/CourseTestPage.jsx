/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import styled from "styled-components"
import { useParams } from "react-router"
import CourseSlideLayout from "../atoms/CourseSlideLayout"
import { CourseTest } from "../atoms"
import { DEVICE } from "../../constants"
import { CourseTestStore, CourseProgressStore } from "../../store"
import { coursePagesData } from "../../data"
import Error404 from "./Error404"

export default function CourseTestPage() {
    const { id } = useParams()

    useEffect(() => {
        if (coursePagesData[id]) {
            // установить в store
            CourseProgressStore.setIsTestActive(true)
        }
    }, [])

    if (!coursePagesData[id]) {
        return <Error404 />
    }

    CourseTestStore.setActiveCourseId(id)

    return (
        <StyledLayout type="test">
            <CourseTest />
        </StyledLayout>
    )
}

const StyledLayout = styled(CourseSlideLayout)`
    .back-to-chapter {
        @media ${DEVICE.laptopS} {
            margin-bottom: 60px;
        }
    }
`
