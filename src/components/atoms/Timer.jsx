import React from "react"
import styled from "styled-components"
import TimerNumber from "./TimerNumber"

export default function Timer() {
    function getDayOfYear() {
        const now = new Date()
        const start = new Date(now.getFullYear(), 0, 0)
        const diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000
        const oneDay = 1000 * 60 * 60 * 24
        const day = Math.floor(diff / oneDay)
        return day.toString()
    }

    const day = getDayOfYear()
    const numbers = day.split('').map((item, index) => ({number: item, id: index}))

    return (
        <Container>
            {numbers.map(({ number, id }) => (
                <TimerNumber number={number} key={id} />
            ))}
        </Container>
    )
}

const Container = styled.div`
    display: flex;

    > div {
        margin-right: 2px;

        &:last-child {
            margin-right: 0;
        }
    }
`
