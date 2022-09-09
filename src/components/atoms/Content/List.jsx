import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { Leave } from "../../../assets/svg"
import { COLORS, DEVICE } from "../../../constants"

export default function List({ data = {} }) {
    const { items, title } = data

    return (
        <Container>
            <ListItems>
                {title && <ListTitle>{title}</ListTitle>}
                {items &&
                    items.length > 0 &&
                    items.map(({ id, text }) => (
                        <ListItem key={id}>
                            <StyledLeave color={COLORS.blue} />
                            <ListText>{parse(text)}</ListText>
                        </ListItem>
                    ))}
            </ListItems>
        </Container>
    )
}

const Container = styled.div``

const ListItems = styled.ul``

const StyledLeave = styled(Leave)`
    width: 1.2vw;
    flex-shrink: 0;
    margin-right: 10px;
    margin-top: 2px;

    @media ${DEVICE.laptop} {
        width: 18px;
    }
`

const ListItem = styled.li`
    margin-bottom: 2vh;
    display: flex;
    align-items: flex-start;

    &:last-child {
        margin-bottom: 0;
    }

    @media ${DEVICE.laptop} {
        margin-bottom: 15px;
    }
`

const ListText = styled.div`
    font-family: "CalibriLight", sans-serif;
    font-size: 1.3vw;
    color: ${COLORS.black};
    line-height: 1.5;

    @media ${DEVICE.laptopM} {
        font-size: 1.2vw;
    }

    @media ${DEVICE.laptopS} {
        font-size: 17px;
    }

    span {
        font-family: "FocoBold", sans-serif;
        color: ${COLORS.blue};
    }
`

const ListTitle = styled.div`
    font-family: "FocoBold", sans-serif;
    color: ${COLORS.blue};
    font-size: 1.3vw;

    margin-bottom: 2.1vh;

    @media ${DEVICE.laptopM} {
        font-size: 1.25vw;
        margin-bottom: 15px;
    }

    @media ${DEVICE.laptop} {
        font-size: 18px;
    }
`
