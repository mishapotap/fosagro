import React from "react"
import styled from "styled-components"
import CourseSlideLayout from "../atoms/CourseSlideLayout"
import { CourseTest } from "../atoms"
import { DEVICE } from "../../constants"

export default function CourseTestPage() {
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
