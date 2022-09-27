import React from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../constants"
import { borderAnimationM } from "../../constants/animations"

export default function MenuButton({rotate = 0, bgColor = COLORS.white, bgAnimateColor = COLORS.white, index, text, duration = ""}) {

    return(
        <Container>
        <Circle bgColor={bgColor}>
            <CircleContetnt style={{color: COLORS.white}}>
                <IndexContainer>
                    <Index>{index}</Index>
                    <Duration>{duration}</Duration>
                </IndexContainer>
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
    width: 14.3vw;
    height: 13.5vw;
    background: ${props => props.bgAnimateColor || null};
    animation: ${borderAnimationM} 10s linear infinite;
    transform: rotate(${props => `${props.rotate}deg` || 0});
    transition: all 0.3s;

    @media ${DEVICE.laptopS} { 
        width: 22.3vw;
        height: 21.5vw;
    }
    
    @media ${DEVICE.mobile} { 
        width: 35.3vw;
        height: 34.5vw;
    }
`;

const Circle = styled.div`
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    width: 13.4vw;
    height: 13.4vw;
    background: ${props => props.bgColor};
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    
    @media ${DEVICE.laptopS} { 
        width: 21vw;
        height: 21vw;
    }

    @media ${DEVICE.mobile} { 
        width: 34vw;
        height: 34vw;
    }
`

const CircleContetnt = styled.div`
    margin-top: 1.3vw;
    margin-left: 0.25vw;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 75%;

    @media ${DEVICE.laptopS} { 
        margin-top: 3vw;
    }

    @media ${DEVICE.mobile} { 
        margin-top: 6vw;
    }
`

const IndexContainer = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: start;
`

const Duration = styled.div`
    margin-left: 5px;
    font-size: 0.94vw;
    line-height: 3.6vw;
    text-transform: lowercase;

    @media ${DEVICE.laptopS} { 
        font-size: 1.8vw;
        line-height: 7vw;
    }

    @media ${DEVICE.mobile} { 
        font-size: 2.5vw;
        line-height: 9.1vw;
    }
`

const Index = styled.div`
    font-weight: 800;
    font-size: 3.6vw;
    line-height: 4.6vw;

    @media ${DEVICE.laptopS} { 
        font-size: 6vw;
        line-height: 7vw;
    }

    @media ${DEVICE.mobile} { 
        font-size: 8.1vw;
        line-height: 9.1vw;
    }
    
`;

const Text = styled.div`
    width: 100%;
    font-weight: 700;
    font-size: 0.94vw;
    line-height: 1.25vw;
    text-align: left;
    text-transform: uppercase;

    @media ${DEVICE.laptopS} { 
        font-size: 1.42vw;
        line-height: 1.95vw;
    }

    @media ${DEVICE.mobile} { 
        font-size: 2.4vw;
        line-height: 2.9vw;
    }

`;

const Container = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    transition: all 0.3s;
    &:hover {
        z-index: 2;
        transform: scale(1.15)
    }
`;