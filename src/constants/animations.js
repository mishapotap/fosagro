import { keyframes } from "styled-components"

export const leavesAnimation = keyframes`
0% {
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}
100% {
  -webkit-transform: scale(1);
  transform: scale(1);
}
`

export const borderAnimationS = keyframes`
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

export const borderAnimationM = keyframes`
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


export default {
    leavesAnimation,
    borderAnimationS,
    borderAnimationM,
}
