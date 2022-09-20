import React from "react"
import styled, { css } from "styled-components"
import { COLORS, DEVICE } from '../../constants'
import { borderAnimationS, borderAnimationM } from "../../constants/animations"

export default function AnimatedBlueButton({children, rotate = 0, size, onClick, className}) {
  return (
    <Container className={className} background={COLORS.blue} hover={COLORS.white} size={size} onClick={onClick}>
      <Circle rotate={rotate} color={COLORS.white}>
        <Content>{children}</Content>
      </Circle>
      <AnimateCircle rotate={rotate}/>
    </Container>
  )
}

const Content = styled.div`
  font-family: 'FocoBold';
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  text-align: center;

  @media ${DEVICE.laptopM} {
    font-size: 15px;
  }
`;

const Circle = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 68% 32% 26% 74% / 44% 52% 48% 56%;
  transform: rotate(${props => `${props.rotate}deg`});
  transition: all 0.3s;
  ${Content} {
    color: ${props => props.color};
    transform: rotate(${props => `-${props.rotate}deg`});
  }
`;

const AnimateCircle = styled.div`
  z-index: 1;
  position: absolute;
  transform: rotate(${props => `-${props.rotate}deg`});
  opacity: 0.5;
  transition: all 0.3s;
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1)
  }
  ${(props) => props.size === "m" && css`
    width: 4.47vw;
    height: 4.4vw;
    ${AnimateCircle} {
      top: -5%;
      left: -4%;
      width: 100%;
      height: 96%;
      animation: ${borderAnimationM} 10s linear infinite;
    }
    ${Circle} {
      width: 91%;
      height: 89.5%;
    }

    @media ${DEVICE.laptop} {
      width: 60px;
      height: 60px;
    }
  `}
  ${(props) => props.size === "s" && css`
    width: 3vw;
    height: 3vw;

    @media ${DEVICE.laptop} {
      width: 40px;
      height: 40px;
    }
    &:hover {
      ${AnimateCircle} {
        background: ${props.hover};
      }
      ${Circle} {
        background: ${props.hover};
      }
      svg {
        path {
          fill: ${props.background};
          stroke: ${props.hover};
        }
      }
    }
    ${AnimateCircle} {
      top: 0;
      left: 0;
      width: 100%;
      height: 96%;
      animation: ${borderAnimationS} 10s linear infinite;
    }
    ${Circle} {
      width: 100%;
      height: 96%;
    }
    ${Content} {
      position: relative;
      top: 4%;
      left: 6%;
      width: 50%;

      svg {
        max-width: 100%;
      }
    }
  `}
  ${AnimateCircle} {
    background: ${props => props.background};
  }
  ${Circle} {
    background: ${props => props.background};
  }
`;
