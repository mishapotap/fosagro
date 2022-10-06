import React from "react"
import styled from "styled-components"
import LampLabel from "./LampLabel"
import LittleTitle from "./LittleTitle"

// элемент пока встречается только в 6 сценарии, слайд с заголовком "Социальные инструменты ФосАгро"

export default function LampList({ data = {} }) {
    const { items, title } = data

    return (
        <Container>
            {title && <LittleTitle text={title} />}
            {items && items.length > 0 && (
                <ListItems>
                    {items.map(({ id, text }) => (
                        <LampLabel key={id} text={text} />
                    ))}
                </ListItems>
            )}
        </Container>
    )
}

const Container = styled.div``

const ListItems = styled.div`
    & > * {
        margin-bottom: 8px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`
