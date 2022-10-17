import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { CourseProgressStore } from "../../../store";
import PrevButton from "../PrevButton";
import NextButton from "../NextButton";
import { StepProgressBar } from "../../molecules";
import { DEVICE } from "../../../constants";

// eslint-disable-next-line no-unused-vars
function Nav({onNextClick, onBackClick, animateNextBtn, isBtnsDisabled}) {

    return (
        <StyledNav inert={isBtnsDisabled ? '' : undefined}>
            <Link
                to={CourseProgressStore.prevPageLink}
                className="prev-btn"
                onClick={onBackClick}
            >
                <PrevButton text="Назад" />
            </Link>
            <StepProgressBar />
            <Link
                to={CourseProgressStore.nextPageLink}
                className="next-btn"
                onClick={onNextClick}
            >
                <NextButton text="Вперед" active={animateNextBtn} />
            </Link>
        </StyledNav>
    )
}

export default observer(Nav)

const StyledNav = styled.div`
    display: grid;
    grid-template: auto / repeat(3, auto);
    align-items: center;

    @media ${DEVICE.laptopS} {
        grid-template: repeat(2, auto) / repeat(2, auto);
        justify-content: center;
    }

    .step-progress-bar {
        width: 33vw;

        @media ${DEVICE.laptopS} {
            grid-area: 1 / 1 / 2 / 3;

            width: 88vw;
            max-width: 600px;
            margin-bottom: 15px;
        }
    }

    .prev-btn {
        margin-right: 25px;
        z-index: 50;

        @media ${DEVICE.laptopS} {
            grid-area: 2 / 1 / 3 / 2;
            justify-self: flex-start;
            margin-right: 30px;
        }
    }

    .next-btn {
        margin-left: 25px;
        z-index: 50;

        @media ${DEVICE.laptopS} {
            grid-area: 2 / 2 / 3 / 3;
            justify-self: flex-end;
        }
    }
`
