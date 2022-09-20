/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-bind */
import React, {useEffect, useRef} from "react"
import styled from "styled-components"
import "wicg-inert"
import { observer } from "mobx-react-lite"

import { Tree } from "../../../assets/svg"
import { CourseTestStore, SoundStore } from "../../../store"
import { DEVICE } from "../../../constants"

import TestBlock from "./TestBlock"
import FinalBlock from "./FinalBlock"
import StartBlock from "./StartBlock"
import { TestEnd } from "../../../assets/audio"

// TODO сделать чтобы тест можно было снова пройти?

function CourseTest() {
    SoundStore.setIsPlayingSound(false)
    const audioRef = useRef(null)
    // если пользователь уходит в процессе решения теста, сбрасываем прогресс

    useEffect(() => () => {
        if (!CourseTestStore.userPassedTest) {
            CourseTestStore.resetProgress()
        }
    }, [])

    useEffect(() => {
        if (CourseTestStore.showFinal) {
            audioRef.current.play()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CourseTestStore.showFinal])

    return (
        <Columns>
            <FirstColumn>
                <StartBlock />
                <TestBlock />
                <FinalBlock />
            </FirstColumn>
            <SecondColumn className={!CourseTestStore.showFinal ? "hide" : ""}>
                <Tree/>
            </SecondColumn>
            <audio src={TestEnd} ref={audioRef} />
        </Columns>
    )
}

const Columns = styled.div`
    display: flex;
    height: 100%;
    max-height: 100%;

    @media ${DEVICE.laptopS} {
        flex-direction: column;
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

    overflow-y: auto;
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

    &::-webkit-scrollbar {
        width: 3px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 82, 155, 0.6);
        border-radius: 2em;
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
        margin-bottom: 20px;
        justify-content: center;

        &.hide {
            display: none;
        }
    }
`

export default observer(CourseTest)
