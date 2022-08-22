import React from "react"
import styled, { css } from "styled-components"
import { circleStroke } from "../../constants/animations"
import { DEVICE } from "../../constants"

export default function SliderCircleS({ color, time, activePathItem }) {
  return (
    <Container>
      <Wrapper
        width="100%" 
        height="100%" 
        viewBox="0 0 794 788" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M313.992 8.30029C202.493 34.5754 108.559 106.978 53.0132 204.491" 
          stroke={ color } 
          stroke-width="1.5" 
          stroke-linecap="round"
        />
        <Path
          d="M21.169 281.142C8.07952 321.817 1 365.267 1 410.401C1 577.564 98.1126 721.621 238 787.217" 
          stroke={ color } 
          stroke-width="1.5" 
          stroke-linecap="round"
        />
        <Path
          d="M407.981 1C587.571 1 739.869 120.741 793 286.566" 
          stroke={ color } 
          stroke-width="1.5" 
          stroke-linecap="round"
        />
      </Wrapper>
      <WrapperAbsolute
        activePathItem = { activePathItem }
        time = { time }
        width="100%" 
        height="100%" 
        viewBox="0 0 794 788" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <PathAbsolute className="two"
          d="M313.992 8.30029C202.493 34.5754 108.559 106.978 53.0132 204.491" 
          stroke={ color } 
          stroke-linecap="round"
        />
        <PathAbsolute className="three"
          d="M21.169 281.142C8.07952 321.817 1 365.267 1 410.401C1 577.564 98.1126 721.621 238 787.217" 
          stroke={ color } 
          stroke-linecap="round"
        />
        <PathAbsolute className="one"
          d="M407.981 1C587.571 1 739.869 120.741 793 286.566" 
          stroke={ color } 
          stroke-linecap="round"
        />
      </WrapperAbsolute>
    </Container>
  )
}
const Path = styled.path`
  position: absolute;
  opacity: .3;
  transition: all 0.3;
`

const PathAbsolute = styled.path`
  stroke-width: 2;
  animation-fill-mode: forwards;
  &.one {
    stroke-dasharray: 550;
  }
  &.two {
    stroke-dasharray: 1100;
  }
  &.three {
    stroke-dasharray: 1000;
  }
`

const Wrapper = styled.svg``

const WrapperAbsolute = styled.svg`
  position: absolute;
  top: -1px;
  left: 0;
  ${(props) => props.activePathItem === 1 && css`
    ${PathAbsolute}.one {
      animation: ${circleStroke(585, 1100)} ${`${props.time/1000}s`} linear; 
    }
    ${PathAbsolute}.two {
      stroke-dashoffset: 1100;
    }
    ${PathAbsolute}.three {
      stroke-dashoffset: 1000;
    }
  `}
  ${(props) => props.activePathItem === 2 && css`
    ${PathAbsolute}.one {
      stroke-dashoffset: 1100;
    }
    ${PathAbsolute}.two {
      animation: ${circleStroke(1100, 765)} ${`${props.time/1000}s`} linear;
    }
    ${PathAbsolute}.three {
      stroke-dashoffset: 1000;
    }
  `}
  ${(props) => props.activePathItem === 3 && css`
    ${PathAbsolute}.one {
      stroke-dashoffset: 1100;
    }
    ${PathAbsolute}.two {
      stroke-dashoffset: 765;
    }
    ${PathAbsolute}.three {
      animation: ${circleStroke(1000, 400)} ${`${props.time/1000}s`} linear;
    }
  `}
`

const Container = styled.div`
  position: relative;
  display: block;
  max-width: 41.4vw;
  max-height: 41.4vw;
  width: 100%;
  height: 100%;
  svg {
    max-width: calc(100% - 2px);
    height: calc(100% - 2px);
  }
  @media ${DEVICE.mobile} {
    display: none;
  }
`

