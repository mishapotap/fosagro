import React, { useState } from "react"
import styled, { css } from "styled-components";
import { COLORS } from "../../constants";

export default function CourseStepPoint({data, isActive}) {
    const { color, year, text, position, top, left } = data
    // TODO перенести состояние в mobX
    const [isCompleted, setIsCompleted] = useState(false);;
    return(
        <Container
            defaultColor={ COLORS.white }
            color={color}
            isCompleted={isCompleted} 
            isActive={isActive}
            top={top}
            left={left}
            onClick={() => setIsCompleted(!isCompleted)}>
                <PointContainer defaultColor={ COLORS.white } position={position}>
                    <Point/>
                </PointContainer>
                <TextContainer position={position} color={ COLORS.blue }>
                    { year && <Year>{year}</Year> }
                    <Text>{text}</Text>
                </TextContainer>
        </Container>
    )
}

const TextContainer = styled.div`
    position: absolute;
    left: -50px;
    ${(props) => props.position === "top" &&
        css`
            bottom: calc(100% + 90px);
    `}
    ${(props) => props.position === "bottom" &&
        css`
            top: calc(100% + 90px);
    `}

    min-width: 130px;

    font-size: 16px;
    line-height: 20px;
    text-align: center;

    color: ${props => props.color};

    transition: all .3s;
`

const Year = styled.div`
    font-family: 'FocoBold';
    font-weight: 700;
`

const Text = styled.div`
    font-family: 'FocoRegular';
    font-weight: 400;
`

const Point = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    transition: all .3s;
`

const PointContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;

    border-radius: 50%;
    border: 1px solid ${props => props.defaultColor};
    background: transparent;
    opacity: 0.75;
    transition: all .3s;
    ${Point} {
        background: ${props => props.defaultColor}
    }
    &:after {
        content: '';
        position: absolute;
        display: block;
        width: 1px;
        height: 78px;
        background: ${props => props.defaultColor};
        transition: all .3s;
    }
    ${(props) => props.position === "top" &&
        css`
            &:after{
                bottom: 100%;
            }`}
        ${(props) => props.position === "bottom" &&
        css`
            &:after{
                top: 100%;
        `}
`

const Container = styled.div`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    display: block;
    cursor: pointer;
    ${(props) => (props.isActive === true || props.isCompleted === true) &&
        css`
            ${PointContainer} {
                border-color: ${props.color};
            }

            ${PointContainer}:after {
                background: ${props.color};
            }

            ${Point} {
                background: ${props.color};
            }

            ${TextContainer} {
                color: ${props.defaultColor}
            }
        `}
`;