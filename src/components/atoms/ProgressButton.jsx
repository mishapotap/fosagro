import React from "react"
import styled, { keyframes,css } from "styled-components" 
import { COLORS } from '../../constants/theme'

export default function ProgressButton({children, rotate, size}) {
  return (
    <Container background={COLORS.blue} hover={COLORS.white} size={size}>
      <Circle rotate={rotate} color={COLORS.white}>
        <Content>{children}</Content> 
      </Circle>
      <AnimateCircle rotate={rotate}/>
    </Container>
  )
}

const borderAnimationM = keyframes`
  0% {
      border-radius: 68% 32% 26% 74% / 44% 52% 48% 56%;
  }
  25% {
      border-radius: 54% 46% 54% 46% / 76% 74% 26% 24%;
  }
  50% {
      border-radius: 31% 69% 68% 32% / 48% 60% 40% 52%;
  }
  75% {
      border-radius: 59% 41% 49% 51% / 23% 24% 76% 77%;
  }
  100% {
      border-radius: 68% 32% 26% 74% / 44% 52% 48% 56%;
  }
`

const borderAnimationS = keyframes`
  0% {
    border-radius: 45% 55% 51% 49% / 63% 65% 35% 37%;
  }
  25% {
    border-radius: 73% 27% 41% 59% / 52% 50% 50% 48%;
  }
  50% {
    border-radius: 46% 54% 47% 53% / 30% 41% 59% 70%;
  }
  75% {
    border-radius: 39% 61% 65% 35% / 47% 41% 59% 53%;
  }
  100% {
    border-radius: 45% 55% 51% 49% / 63% 65% 35% 37%;
  }
`

const Content = styled.div`
  font-family: 'FocoBold';
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
`;

const Circle = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 68% 32% 26% 74% / 44% 52% 48% 56%;
  transform: rotate(${props => `${props.rotate}deg` || 0});
  transition: all 0.3s;
  ${Content} {
    color: ${props => props.color || null};
    transform: rotate(${props => `-${props.rotate}deg` || 0});
  }
`;

const AnimateCircle = styled.div`
  z-index: 1;
  position: absolute;
  transform: rotate(${props => `-${props.rotate}deg` || 0});
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
    width: 86px;
    height: 84px;
    ${AnimateCircle} {
      top: -4px;
      left: -4px;
      width: 86px;
      height: 84px;
      animation: ${borderAnimationM} 10s linear infinite;
    }
    ${Circle} {
      width: 79px;
      height: 77px;
    }
  `}
  ${(props) => props.size === "s" && css`
    width: 58px;
    height: 58px;
    &:hover {
      ${AnimateCircle} {
        background: ${props.hover || null};
      }
      ${Circle} {
        background: ${props.hover || null};
      }
      svg {
        path {
          fill: ${props.background || null};
          stroke: ${props.hover || null};
        }
      }
    }
    ${AnimateCircle} {
      top: 0;
      left: 0;
      width: 58px;
      height: 56px;
      animation: ${borderAnimationS} 10s linear infinite;
    }
    ${Circle} {
      width: 58px;
      height: 56px;
    }
    ${Content} {
      position: relative;
      top: 3px;
      left: 3px;
    }
  `}
  ${AnimateCircle} {
    background: ${props => props.background || null};
  }
  ${Circle} {
    background: ${props => props.background || null};
  }
`;
