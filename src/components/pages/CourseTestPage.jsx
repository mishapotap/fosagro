import React from "react"
import styled from "styled-components"
import { useParams } from "react-router"
import CourseSlideLayout from "../atoms/CourseSlideLayout"
import { CourseTest } from "../atoms"
import { DEVICE } from "../../constants"
import { CourseTestStore } from "../../store"

export default function CourseTestPage() {
    const { id } = useParams()
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
