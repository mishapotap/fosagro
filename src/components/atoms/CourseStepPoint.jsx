import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components";
import { COLORS, DEVICE } from "../../constants";

export default function CourseStepPoint({data, className, isActiveParent, isCompleted}) {
    const { color, year, text, position, top, left, width } = data
    const [isActive, setIsАсtive] = useState(isActiveParent);

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        isActiveParent ? setIsАсtive(true) : setIsАсtive(false)
    }, [isActiveParent])
    return(
        <Container
            className={className}
            defaultColor={ COLORS.white }
            color={color}
            isCompleted={isCompleted}
            isActive={isActive}
            top={top}
            left={left}
            onMouseOver={() => setIsАсtive(true)}
            onMouseOut={() => setIsАсtive(false)}>
                <PointContainer defaultColor={ COLORS.white } position={position}>
                    <Point/>
                </PointContainer>
                <TextContainer position={position} color={ COLORS.blue } width={width}>
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

            @media ${DEVICE.laptopM} {
                bottom: calc(100% + 70px);
            }
    `}
    ${(props) => props.position === "bottom" &&
        css`
            top: calc(100% + 90px);

            @media ${DEVICE.laptopM} {
                top: calc(100% + 70px);
            }
    `}

    ${(props) => props.position === "bottom" &&
        css`
            top: calc(100% + 90px);

            @media ${DEVICE.laptopM} {
                top: calc(100% + 70px);
            }
    `}

    min-width: ${({ width }) => width ? `${width}px` : '128px'};

    font-size: 16px;
    line-height: 1.18;
    text-align: center;

    color: ${props => props.color};

    transition: all .3s;

    @media ${DEVICE.laptopM} {
        font-size: 13.5px;
    }
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

        @media ${DEVICE.laptopM} {
            height: 60px;
        }
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

    cursor: default;
    transition: all 0.3s;
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