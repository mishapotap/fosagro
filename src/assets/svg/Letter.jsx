import React from "react"
import styled from "styled-components"
import { COLORS } from "../../constants"

export default function Letter({ fill = COLORS.white, stroke = COLORS.blue }) {
  return (
    <Wrapper
      width="28" 
      height="28" 
      viewBox="0 0 28 28" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M23.754 5.40982L24.0047 5.15469H23.647H4.38603H4.02832L4.27905 5.40982L13.9095 15.2098L14.0165 15.3187L14.1235 15.2098L23.754 5.40982ZM2.67744 22.6953V22.8453H2.82744H25.1618H25.3118V22.6953V6.96172V6.59525L25.0549 6.85655L14.7071 17.3793C14.4279 17.6177 14.2046 17.7371 14.0021 17.7474C13.8078 17.7572 13.5932 17.6677 13.3271 17.386L13.3271 17.386L13.325 17.3839L2.93442 6.81282L2.67744 6.55138V6.91797V22.6953ZM1.71182 3.2125H26.2774C26.8066 3.2125 27.2431 3.64799 27.2431 4.18359V23.8164C27.2431 24.3525 26.8116 24.7875 26.2774 24.7875H1.71182C1.17764 24.7875 0.746191 24.3525 0.746191 23.8164V4.18359C0.746191 3.64751 1.17764 3.2125 1.71182 3.2125Z" 
        fill={fill} 
        stroke={stroke}
        stroke-width="0.3"
      />
    </Wrapper>
  )
}
const Path = styled.path`
  transition: all 0.3;
`
const Wrapper = styled.svg``
