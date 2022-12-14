/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import "wicg-inert"
import { observer } from "mobx-react-lite"

import { Tree } from "../../../assets/svg"
import { CourseTestStore, SoundStore } from "../../../store"
import { DEVICE } from "../../../constants"

import TestBlock from "./TestBlock"
import FinalBlock from "./FinalBlock"
import StartBlock from "./StartBlock"

function CourseTest() {
    // eslint-disable-next-line no-unused-vars
    const [treeKey, setTreeKey] = useState(0)

    useEffect(() => {
        SoundStore.setIsPlayingSound(false)

        return () => {
            // если пользователь уходит в процессе решения теста, сбрасываем прогресс
            if (!CourseTestStore.userPassedTest) {
                CourseTestStore.resetActiveTestProgress()
            }
        }
    }, [])

    useEffect(() => {
        if (CourseTestStore.restartTest) {
            setTreeKey(prevKey => prevKey + 1)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CourseTestStore.restartTest])

    return (
        <Columns>
            <FirstColumn>
                <StartBlock />
                <TestBlock />
                <FinalBlock />
            </FirstColumn>
            <SecondColumn
                className={!CourseTestStore.showFinal ? "hide" : ""}
                key={treeKey}
            >
                <Tree />
            </SecondColumn>
        </Columns>
    )
}

const Columns = styled.div`
    display: flex;
    height: 100%;
    max-height: 100%;

    @media ${DEVICE.laptopS} {
        flex-direction: column;
        /* height: auto;
        max-height: none; */
    }

    .tree {
        max-height: 100%;
        height: 100%;
        padding-bottom: 2vh;
        padding-right: 25px;

        @media ${DEVICE.laptopS} {
            padding-right: 0;
        }
    }

    .test,
    .final {
        transition: 0.25s;
        opacity: 0;
    }

    .test-enter-done,
    .final-enter-done {
        opacity: 1;
    }

    .test-exit,
    .final-exit {
        opacity: 0;
    }

    .start {
        transition: 0.25s;
    }

    .start-enter-done {
        opacity: 1;
    }

    .start-exit {
        opacity: 0;
    }

    .right-col {
        display: flex;
        justify-content: flex-end;
    }
`

const FirstColumn = styled.div`
    flex: 0 1 51%;
    max-width: 51%;
    height: 100%;

    overflow-y: hidden;
    padding-right: 10px;

    @media ${DEVICE.laptopS} {
        overflow-y: visible;
        padding-right: 0;
        order: 2;

        flex: 0 1 100%;
        max-width: 500px;
        margin: 0 auto;
        text-align: center;
    }

    @media ${DEVICE.mobile} {
        max-width: 100%;
    }
`

const SecondColumn = styled.div`
    max-height: 100%;
    height: 100%;
    flex: 0 1 49%;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    @media ${DEVICE.laptopS} {
        order: 1;
        justify-content: center;
        min-height: 440px;
        width: 60%;
        margin: 0 auto;

        flex: 0 1 100%;
        height: auto;
        max-height: none;
        margin-bottom: 20px;

        &.hide {
            display: none;
        }
    }

    @media ${DEVICE.mobile} {
        width: 96%;
    }
`

export default observer(CourseTest)
