import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { CourseProgressStore } from "../../../store";
import PrevButton from "../PrevButton";
import NextButton from "../NextButton";
import { StepProgressBar } from "../../molecules";
import { DEVICE } from "../../../constants";

function Nav({onNextClick, onBackClick}) {
    return (
        <StyledNav>
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
                <NextButton text="Вперед" />
            </Link>
        </StyledNav>
    )
}

export default observer(Nav)

const StyledNav = styled.div`
    display: flex;
    align-items: center;

    .step-progress-bar {
        width: 33vw;

        @media ${DEVICE.laptopS} {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
        }
    }

    .prev-btn {
        margin-right: 25px;
        z-index: 50;

        @media ${DEVICE.laptopS} {
            order: 2;
            margin: 200px 90px 15px 0;
        }
    }

    .next-btn {
        margin-left: 25px;
        z-index: 50;

        @media ${DEVICE.laptopS} {
            order: 3;
        }
    }

    @media ${DEVICE.laptopS} {
        flex-direction: column;
        align-items: flex-end;
    }
`
