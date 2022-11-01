import { observer } from "mobx-react-lite"
import React from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../constants"
import { showContent } from "../../constants/animations"
import { CourseProgressStore } from "../../store"

function AnimTitle({ data = {} }) {
    return (
        <Container color={CourseProgressStore.activeSectColor}>
            {Object.entries(data).map(([time, idata], index) => (
                <TitleWrapper
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    style={
                        Object.keys(data)[index + 1]
                            ? {
                                  animationDelay: `${
                                      +Object.keys(data)[index + 1] - 1
                                  }s`,
                                  top: typeof idata === 'object' && `${idata.top}%`
                              }
                            : { animation: "none", top: typeof idata === 'object' && `${idata.top}%` }
                    }
                >
                    <Title style={{ animationDelay: `${time}s` }}>{typeof idata === 'object' ? idata.text : idata}</Title>
                </TitleWrapper>
            ))}
        </Container>
    )
}

export default observer(AnimTitle)

const TitleWrapper = styled.div`
    position: absolute;
    animation: ${showContent} 0.5s forwards reverse;

    @media ${DEVICE.laptopS} {
        top: 0!important;
    }
`

const Title = styled.div`
    animation: ${showContent} 0.5s both;
    opacity: 0;
`

const Container = styled.div`
    position: relative;
    width: 30vw;
    margin-bottom: 10px;
    margin-right: 5vw;
    height: 13vh!important;

    font-family: FocoBold, sans-serif;
    font-size: 1.4vw;
    line-height: 1.14;
    text-align: center;
    color: ${({ color }) => color || COLORS.green};

    transition: 0.4s;
    /* overflow: hidden; */

    &.paused {
        animation-play-state: paused !important;

        * {
            animation-play-state: paused !important;
        }
    }

    @media ${DEVICE.laptopS} {
        display: flex;
        justify-content: center;
        font-size: 18px;

        height: 65px!important;
        width: 100%;
        max-width: 450px!important;
        margin-left: auto;
        margin-right: auto;
    }

`
