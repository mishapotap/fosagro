import React from "react"
import styled, { css } from "styled-components"
import { COLORS, DEVICE } from "../../constants"
import { borderAnimationM } from "../../constants/animations"

export default function MenuButton({rotate = 0, bgColor = COLORS.white, bgAnimateColor = COLORS.white, index, text, type="menu"}) {
    return(
        <Container>
        <Circle bgColor={bgColor} type={type}>
            <CircleContetnt style={{color: COLORS.white}} type={type}>
                <Index type={type}>{index}</Index>
                <Text type={type}>{text}</Text>
            </CircleContetnt>
                       
        </Circle>
        <AnimateCircle rotate={rotate} bgAnimateColor={bgAnimateColor} type={type}/>
        </Container>
    )
}

const AnimateCircle = styled.div`
    z-index: 1;
    position: absolute;
    top: -2px;
    left: -7px;
    width: 39.3vw;
    height: 38.5vw;
    background: ${props => props.bgAnimateColor || null};
    animation: ${borderAnimationM} 10s linear infinite;
    transform: rotate(${props => `${props.rotate}deg` || 0});
    transition: all 0.3s;
    @media ${DEVICE.tablet} { 
        width: 26.3vw;
        height: 25.5vw;
    }
    @media ${DEVICE.laptopS} { 
        width: 14.3vw;
        height: 13.5vw;
    }
    ${(props) => props.type === "index" && css`
        @media ${DEVICE.tablet} { 
            width: 35.3vw;
            height: 34.5vw;
        }
        @media ${DEVICE.laptopS} { 
            width: 22.3vw;
            height: 21.5vw;
        }
        @media ${DEVICE.laptopM} { 
            width: 14.3vw;
            height: 13.5vw;
        }
    `}
`;

const Circle = styled.div`
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: center;
    width: 38vw;
    height: 38vw;
    background: ${props => props.bgColor};
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    @media ${DEVICE.tablet} { 
        width: 25.4vw;
        height: 25.4vw;
    }
    @media ${DEVICE.laptopS} { 
        width: 13.4vw;
        height: 13.4vw;
    }
    ${(props) => props.type === "index" && css`
        @media ${DEVICE.tablet} { 
            width: 34vw;
            height: 34vw;
        }
        @media ${DEVICE.laptopS} { 
            width: 21vw;
            height: 21vw;
        }
        @media ${DEVICE.laptopM} { 
            width: 13.4vw;
            height: 13.4vw;
        }
    `}
`

const CircleContetnt = styled.div`
    position: relative;
    top: 7.7vw;
    left: 0.25vw;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 75%;

    @media ${DEVICE.tablet} { 
        top: 3.5vw;
    }

    @media ${DEVICE.laptopS} { 
        top: 1.3vw;
    }

    ${(props) => props.type === "index" && css`
        @media ${DEVICE.tablet} { 
            top: 4.3vw;
        }

        @media ${DEVICE.laptopS} { 
            top: 3vw;
        }

        @media ${DEVICE.laptopM} { 
            top: 1.3vw;
        }
    `}
`

const Index = styled.div`
    width: 100%;
    font-family: 'FocoBold';
    font-weight: 800;
    font-size: 7.1vw;
    line-height: 8.1vw;

    @media ${DEVICE.tablet} { 
        font-size: 6.1vw;
        line-height: 7.1vw;
    }

    @media ${DEVICE.laptopS} { 
        font-size: 3.6vw;
        line-height: 4.6vw;
    }
    ${(props) => props.type === "index" && css`
        @media ${DEVICE.tablet} { 
            font-size: 9.1vw;
            line-height: 10.1vw;
        }

        @media ${DEVICE.laptopS} { 
            font-size: 6vw;
            line-height: 7vw;
        }

        @media ${DEVICE.laptopM} { 
            font-size: 3.6vw;
            line-height: 4.6vw;
        }
    `}
`;

const Text = styled.div`
    width: 100%;
    font-family: 'FocoBold';
    font-weight: 700;
    font-size: 2.72vw;
    line-height: 3.15vw;
    text-align: left;
    text-transform: uppercase;

    @media ${DEVICE.tablet} { 
        font-size: 1.82vw;
        line-height: 2.45vw;
    }

    @media ${DEVICE.laptopS} { 
        font-size: 0.94vw;
        line-height: 1.25vw;
    }

    ${(props) => props.type === "index" && css`
        @media ${DEVICE.tablet} { 
            font-size: 2.42vw;
            line-height: 3.05vw;
        }

        @media ${DEVICE.laptopS} { 
            font-size: 1.42vw;
            line-height: 1.95vw;
        }

        @media ${DEVICE.laptopM} { 
            font-size: 0.94vw;
            line-height: 1.25vw;
        }
    `}
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