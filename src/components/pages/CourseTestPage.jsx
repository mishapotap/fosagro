/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import styled from "styled-components"
import { useNavigate, useParams } from "react-router"
import CourseSlideLayout from "../atoms/CourseSlideLayout"
import { CourseTest } from "../atoms"
import { DEVICE } from "../../constants"
import { CourseTestStore, CourseProgressStore } from "../../store"
import { coursePagesData } from "../../data"
import Error404 from "./Error404"
import { showContent } from "../../constants/animations"

export default function CourseTestPage() {
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (coursePagesData[id]) {
            // установить в store
            CourseProgressStore.setIsTestActive(true)

            if (!CourseProgressStore.isTestAvailable) {
                navigate(`/course${id}`)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    CourseTestStore.setActiveChapterId(id)

    if (!coursePagesData[id]) {
        return <Error404 />
    }


    return (
        <StyledLayout type="test">
            <CourseTest />
        </StyledLayout>
    )
}

const StyledLayout = styled(CourseSlideLayout)`
    animation: ${showContent} 0.2s both;

    .back-to-chapter {
        @media ${DEVICE.laptopS} {
            margin-bottom: 35px;
        }
    }

    .content {
        padding-top: 7vh;

        @media ${DEVICE.laptopS} {
            padding-top: 13px;
        }
    }
`
