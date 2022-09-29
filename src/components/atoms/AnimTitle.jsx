import { observer } from "mobx-react-lite"
import React from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../constants"
import { showContent } from "../../constants/animations"
import { CourseProgressStore } from "../../store"

function AnimTitle({ data = {} }) {
    return (
        <Container color={CourseProgressStore.activeSectColor}>
            {Object.entries(data).map(([time, text], index) => (
                <TitleWrapper
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    style={
                        Object.keys(data)[index + 1]
                            ? {
                                  animationDelay: `${
                                      +Object.keys(data)[index + 1] - 1
                                  }s`,
                              }
                            : { animation: "none" }
                    }
                >
                    <Title style={{ animationDelay: `${time}s` }}>{text}</Title>
                </TitleWrapper>
            ))}
        </Container>
    )
}

export default observer(AnimTitle)

const TitleWrapper = styled.div`
    position: absolute;
    animation: ${showContent} 0.5s forwards reverse;
`

const Title = styled.div`
    animation: ${showContent} 0.5s both;
`

const Container = styled.div`
    width: 30vw;
    /* max-width: 30vw !important; */
    margin-bottom: 20px;
    margin-right: 4.6vw;
    height: 10vh!important;

    font-family: FocoBold, sans-serif;
    font-size: 1.4vw;
    line-height: 1.14;
    text-align: center;
    color: ${({ color }) => color || COLORS.green};

    transition: 0.4s;
    overflow: hidden;

    &.paused {
        animation-play-state: paused !important;

        * {
            animation-play-state: paused !important;
        }
    }

    @media ${DEVICE.laptop} {
        max-width: 430px;
        margin-right: 0;
        display: flex;
        justify-content: center;
        font-size: 18px;

        height: 50px!important;
        width: 100%;
    }
`
