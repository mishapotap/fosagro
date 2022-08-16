import React, { useState } from "react"
import styled, { css } from "styled-components";
import { COLORS } from "../../constants";

export default function CourseStepPoint({color = null, text, position}) {
    // TODO перенести состояние в mobX
    const [isActive, setIsАсtive] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);;
    return(
        <Container
            defaultColor={ COLORS.white }
            color={color}
            isCompleted={isCompleted} 
            isActive={isActive}
            onMouseOver={() => setIsАсtive(true)}    
            onMouseOut={() => setIsАсtive(false)}
            onClick={() => setIsCompleted(!isCompleted)}>
                <PointContainer defaultColor={ COLORS.white } position={position}>
                    <Point/>
                </PointContainer>
                <Text color={ COLORS.blue } position={position}>{text}</Text>
        </Container>
    )
}

const Text = styled.div`
    position: absolute;
    left: -50px;
    max-width: 130px;
    font-family: 'FocoRegular';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;

    color: ${props => props.color};
    transition: all .3s;
    ${(props) => props.position === "top" &&
        css`
            bottom: calc(100% + 90px);
    `}
    ${(props) => props.position === "bottom" &&
        css`
            top: calc(100% + 90px);
    `}
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
    position: relative;
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

            ${Text} {
                color: ${props.defaultColor}
            }
        `}
`;