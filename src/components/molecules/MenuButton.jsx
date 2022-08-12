import React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"
import { borderAnimationM } from "../../constants/animations"

export default function MenuButton({rotate, bgColor, bgAnimateColor, index, text}) {
    return(
        <Container>
        <Circle bgColor={bgColor}>
            <CircleContetnt style={{color: COLORS.white}}>
                <Index>{index}</Index>
                <Text>{text}</Text>
            </CircleContetnt>
                       
        </Circle>
        <AnimateCircle rotate={rotate} bgAnimateColor={bgAnimateColor}/>
        </Container>
    )
}

const AnimateCircle = styled.div`
    z-index: 1;
    position: absolute;
    top: -2px;
    left: -7px;
    width: 275px;
    height: 259px;
    background: ${props => props.bgAnimateColor || null};
    animation: ${borderAnimationM} 10s linear infinite;
    transform: rotate(${props => `${props.rotate}deg` || 0});
    transition: all 0.3s;
`;

const Circle = styled.div`
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    width: 257px;
    height: 257px;
    background: ${props => props.bgColor || null};
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
`

const CircleContetnt = styled.div`
    position: relative;
    top: 30px;
    left: 5px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 75%;
`

const Index = styled.div`
    width: 100%;
    font-family: 'FocoBold';
    font-weight: 800;
    font-size: 70px;
    line-height: 88px;
`;

const Text = styled.div`
    width: 100%;
    font-family: 'FocoBold';
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: left;
    text-transform: uppercase;
`;

const Container = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    transition: all 0.3s;
    &:hover {
        transform: scale(1.15)
    }
`;