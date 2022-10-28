import React from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../../constants"
import { BubbleBg } from "../../../assets/svg/static"

export default function Bubble({ data = {}, style }) {
    const { text, title, id } = data

    return (
        <StyledBubble
            style={style}
            className={`bubble ${id ? `bubble-${id}` : ""}`}
        >
            <Question>?</Question>
            <BubbleContent>
                <BubbleTitle>{title}</BubbleTitle>
                <BubbleText>{text}</BubbleText>
            </BubbleContent>
        </StyledBubble>
    )
}

const StyledBubble = styled.div`
    position: fixed;
    z-index: 200;
    transform: translate(15px, calc(-60%)) scale(0.7);

    width: 17.2vw;
    height: 17.2vw;
    border-radius: 46%;
    background: url(${BubbleBg}) no-repeat center/contain;

    display: none;
    opacity: 0;
    transition: 0.3s;

    @media ${DEVICE.laptopS} {
        transform: translate(5px, calc(-100% - 10px)) scale(1);
    }

    &.shown {
        opacity: 1;
        transform: translate(15px, calc(-60%)) scale(1);

        @media ${DEVICE.laptopS} {
            transform: translate(5px, calc(-100% - 10px)) scale(1);
        }
    }

    @media ${DEVICE.laptopS} {
        width: 226px;
        height: 226px;
    }
`

const BubbleTitle = styled.div`
    font-family: FocoBold, sans-serif;
    font-size: 1.3vw;
    margin-bottom: 2.3vh;
    text-align: center;
    color: ${COLORS.blue};

    @media ${DEVICE.laptopS} {
        font-size: 16px;
        margin-bottom: 5px;
    }
`

const BubbleText = styled.div`
    font-family: CalibriLight, sans-serif;
    font-size: 0.94vw;
    color: ${COLORS.black};
    line-height: 1.27;
    text-align: center;

    @media ${DEVICE.laptopS} {
        font-size: 15px;
    }
`

const BubbleContent = styled.div`
    max-width: 78%;
    margin: 0 auto;
    padding-top: 9vh;

    @media ${DEVICE.laptopS} {
        padding-top: 38px;
    }
`

const Question = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.7vw;
    height: 5.7vw;

    font-family: "FocoBold", sans-serif;
    font-size: 3.6vw;
    color: ${COLORS.white};
    line-height: 1;

    border-radius: 50%;
    background-color: ${COLORS.blue};

    @media ${DEVICE.laptopS} {
        font-size: 30px;
        width: 46px;
        height: 46px;
    }
`
