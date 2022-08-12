import React, { useState } from "react"
import styled, { css } from "styled-components";
import { COLORS } from "../../constants";

export default function CourseStepPoint({color = null}) {
    // TODO перенести состояние в mobX
    const [isCompleted, setIsCompleted] = useState(false);
    return(
        <Container isCompleted={isCompleted} 
        color={color} 
        onClick={() => setIsCompleted(!isCompleted)} 
        defaultColor={ COLORS.white }/>
    )
}

const Container = styled.div`
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    opacity: 0.75;
    background: ${props => props.defaultColor || null};
    transition: all .3s;
    &:hover {
        transform: scale(1.2)
    }

    ${(props) => props.isCompleted === true &&
        css`
            background: ${props.color};
    `}
`;