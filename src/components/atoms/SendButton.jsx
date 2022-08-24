import React from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../constants"
import { Spinner } from "../../assets/svg"

export default function SendButton({ text, loading, onClick, disabled }) {
    return (
        <Container
            className={loading && "loading"}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
            {loading && <Spinner width="28%" color={COLORS.blue} />}
        </Container>
    )
}

const Container = styled.button`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.85em 3.1em;
    border-radius: 2.7em;
    border: 1px solid ${COLORS.blue};
    background-color: ${COLORS.blue};

    /* text */
    font-family: "CalibriRegular";
    text-align: center;
    color: ${COLORS.white};
    font-size: 18px;
    line-height: 1;

    /* transition */
    transition: all 0.3s;
    cursor: pointer;

    &:hover,
    &:focus {
        transition: all 0.3s;
        background-color: ${COLORS.white};
        color: ${COLORS.blue};
    }

    &:disabled {
        background: #b3afaf;
        border-color: #b3afaf;
        cursor: auto;

        &:hover {
            background: #b3afaf;
            border-color: #b3afaf;
            color: ${COLORS.white};
        }
    }

    &.loading {
        color: transparent;
        transition: none;

        &:hover,
        &:focus {
            transition: none;
            color: transparent;
        }

        &:disabled {
            color: transparent;
        }
    }

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media ${DEVICE.laptopM} {
        font-size: 16px;
    }

    @media ${DEVICE.laptopS} {
        font-size: 15.5px;
    }
`
