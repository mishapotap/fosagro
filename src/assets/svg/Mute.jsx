import React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"

export default function Mute({ color = COLORS.white }) {
  return (
    <Wrapper
      width="25" 
      height="22" 
      viewBox="0 0 25 22" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3.13476 15.8235L7.76555 15.8235L15.3264 21.3707C16.1239 21.9171 16.7055 21.1504 16.7496 20.6834L16.7496 0.88246C16.7804 0.358137 16.0446 -0.346835 15.2823 0.195113L7.71709 5.6939L3.13477 5.6939C1.39436 5.6939 0.0196673 7.11706 0.0196671 8.85746L0.0196668 12.6599C0.0152606 14.4047 1.43842 15.8235 3.13476 15.8235ZM14.9166 18.8945L8.91114 14.5325L8.91114 7.07741L14.9166 2.67133L14.9166 18.8945ZM1.76007 8.90152C1.76007 8.12165 2.31083 7.52683 3.04224 7.52683L7.07821 7.52683L7.07821 14.0831L3.04664 14.0831C2.35929 14.0831 1.76447 13.4882 1.76447 12.7084L1.76447 8.90152L1.76007 8.90152V8.90152Z" 
        fill={color}
      />
      <Path
        d="M21.5596 5.20361C24.3156 10.0451 23.9802 12.4308 21.5596 16.3551" 
        stroke={color} 
        stroke-width="2" 
        stroke-linecap="round"
      />
      <Rect 
        width="21.5595" 
        height="21.5595" 
        fill={color} 
        transform="translate(21.5596 21.5596) rotate(-180)"
      />
    </Wrapper>
  )
}
const Path = styled.path`
  transition: all 0.3;
`

const Rect = styled.path`
  transition: all 0.3;
`

const Wrapper = styled.svg``

