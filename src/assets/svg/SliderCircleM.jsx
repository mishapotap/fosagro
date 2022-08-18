import React from "react"
import styled, { css } from "styled-components"
import { circleStroke } from "../../constants/animations"
import { DEVICE } from "../../constants"

export default function SliderCircleM({ color, time, activePathItem }) {
  return (
    <Container>
      <Wrapper
        width="100%" 
        height="100%" 
        viewBox="0 0 971 897" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"   
      >
        <Path
          d="M403 8C260.303 42.0173 140.088 135.754 68.9998 262" 
          stroke={color}
          stroke-width="1.5" 
          stroke-linecap="round"
        />
        <Path
          d="M522 1055C234.259 1055 0.999756 816.768 0.999756 522.895C0.999756 464.968 10.0627 409.204 26.8193 357" 
          stroke={color}
          stroke-width="1.5" 
          stroke-linecap="round"
        />
        <Path
          d="M1044 534C1044 239.632 810.292 1 522 1"
          stroke={color}
          stroke-width="1.5" 
          stroke-linecap="round"
        />
      </Wrapper>
      <WrapperAbsolute
        activePathItem = { activePathItem }
        time = { time }
        width="100%" 
        height="100%" 
        viewBox="0 0 971 897" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"   
      >
      <PathAbsolute className="two"
        d="M403 8C260.303 42.0173 140.088 135.754 68.9998 262" 
        stroke={color}
        stroke-linecap="round"
      />
      <PathAbsolute className="three"
        d="M522 1055C234.259 1055 0.999756 816.768 0.999756 522.895C0.999756 464.968 10.0627 409.204 26.8193 357" 
        stroke={color} 
        stroke-linecap="round"
      />
      <PathAbsolute className="one"
        d="M1044 534C1044 239.632 810.292 1 522 1"
        stroke={color}
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
    stroke-dasharray: 1430;
  }
  &.two {
    stroke-dasharray: 980;
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
      animation: ${circleStroke(1145, 600)} ${`${props.time/1000}s`} linear; 
    }
    ${PathAbsolute}.two {
      stroke-dashoffset: 980;
    }
    ${PathAbsolute}.three {
      stroke-dashoffset: 800;
    }
  `}
  ${(props) => props.activePathItem === 2 && css`
    ${PathAbsolute}.one {
      stroke-dashoffset: 600;
    }
    ${PathAbsolute}.two {
      animation: ${circleStroke(980, 543)} ${`${props.time/1000}s`} linear;
    }
    ${PathAbsolute}.three {
      stroke-dashoffset: 800;
    }
  `}
  ${(props) => props.activePathItem === 3 && css`
    ${PathAbsolute}.one {
      stroke-dashoffset: 600;
    }
    ${PathAbsolute}.two {
      stroke-dashoffset: 543;
    }
    ${PathAbsolute}.three {
      animation: ${circleStroke(1000, 1600)} ${`${props.time/1000}s`} linear;
    }
  `}
`

const Container = styled.div`
  position: relative;
  display: none;
  max-width: 1045px;
  max-height: 1045px;
  width: 100%;
  height: 100%;
  svg {
    max-width: calc(100% - 2px);
    height: calc(100% - 2px);
  }
  @media ${DEVICE.mobileL} {
    display: block;
  }
`

