import React from "react"
import styled from "styled-components"
import { rotateInteractiveCircle } from "../../constants/animations"

export default function InteractiveCircle({color}) {
  return (
    <Container>
      <Wrapper
        viewBox="0 0 1166 1134" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path className="left"
          d="M863.473 1052.19L863.38 1052.21L863.298 1052.26C600.82 1209.31 254.362 1132.11 97.33 869.661L97.3255 869.654C-8.80973 698.683 -18.2992 545.301 24.2105 417.308C66.7272 289.294 161.281 186.618 263.329 117.13C467.413 -21.8353 656.77 -25.0478 822.445 49.7506C967.26 115.131 1019.96 198.767 1087.17 305.423C1096.86 320.788 1106.84 336.631 1117.44 352.966C1138.43 385.289 1154.37 441.604 1161.14 508.839C1167.91 576.056 1165.49 654.124 1149.78 729.913C1118.36 881.509 1033.83 1023.83 863.473 1052.19Z" 
          stroke={ color } 
          stroke-linecap="round"
        />
        <Path className="right"
          d="M863.473 1052.19L863.38 1052.21L863.298 1052.26C600.82 1209.31 254.362 1132.11 97.33 869.661L97.3255 869.654C-8.80973 698.683 -18.2992 545.301 24.2105 417.308C66.7272 289.294 161.281 186.618 263.329 117.13C467.413 -21.8353 656.77 -25.0478 822.445 49.7506C967.26 115.131 1019.96 198.767 1087.17 305.423C1096.86 320.788 1106.84 336.631 1117.44 352.966C1138.43 385.289 1154.37 441.604 1161.14 508.839C1167.91 576.056 1165.49 654.124 1149.78 729.913C1118.36 881.509 1033.83 1023.83 863.473 1052.19Z" 
          stroke={ color } 
          stroke-linecap="round"
        />
      </Wrapper>
    </Container>
  )
}

const Path = styled.path`
  opacity: .5;
  transition: all 0.3;
`
const Wrapper = styled.svg`
  .right {
    transform-origin: 583px 567px;
    animation: ${rotateInteractiveCircle(0, 360)} 50s linear infinite;
  }
  .left {
    transform-origin: 583px 567px;
    animation: ${rotateInteractiveCircle(0, -360)} 40s linear infinite;
  }
`

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65.1vw;
  height: 62.5vw;

  ${Wrapper} {
    max-width: calc(100% - 2.1vw);
    max-height: calc(100% - 3.74vw);
    width: 100%;
    height: 100%;
    overflow: overlay;
  }
`

