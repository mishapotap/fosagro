import { observer } from "mobx-react-lite"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../constants"
import { CourseProgressStore } from "../../store"

function AnimTitle({ data = {} }) {
    const [text, setText] = useState("")
    const [showTitle, setShowTitle] = useState(false)
    const intervalIds = []

    function handleSetTimeout(time) {
        setShowTitle(false)

        setTimeout(() => {
            setText(data[time])
            setShowTitle(true)
        }, 500)
    }

    useEffect(() => {
        Object.keys(data).forEach((time) => {
            const stTime = `${time}000`

            const tmId = setTimeout(() => {
                handleSetTimeout(time)
            }, +stTime)

            intervalIds.push(tmId)
        })

        return () => {
            intervalIds.forEach((id) => clearTimeout(id))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container
            color={CourseProgressStore.activeSectColor}
            className={showTitle && "show"}
        >
            {text}
        </Container>
    )
}

export default observer(AnimTitle)

const Container = styled.div`
    max-width: 30vw!important;
    margin-bottom: 20px;
    margin-right: 4.6vw;

    font-family: FocoBold, sans-serif;
    font-size: 1.4vw;
    line-height: 1.14;
    text-align: center;
    color: ${({ color }) => color || COLORS.green};

    transition: 0.4s;
    opacity: 0;

    &.show {
        opacity: 1;
    }

    @media ${DEVICE.laptop} {
        max-width: 430px;
        font-size: 18px;
    }
`
