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

export const circleStroke = (dashoffsetStart, dashoffsetEnd) => keyframes`
    from {
        stroke-dashoffset: ${dashoffsetStart};
    }
    to {
        stroke-dashoffset: ${dashoffsetEnd};
    }
`

export const rotateInteractiveCircle = (from, to) => keyframes`
    from {
        transform: rotate(${from}deg);
    }
    to {
        transform: rotate(${to}deg);
    }
`
export const CursorAnim = keyframes`
    0% {
        opacity: 0;
    }

    30% {
        opacity: 1;
        transform: translateY(20%) translateX(-100%);
    }

    50% {
        opacity: 0;
        transform: translateY(20%) translateX(-100%);
    }

    100% {
        opacity: 0;
        transform: translateY(20%) translateX(-100%);
    }
`

export const animateScience = keyframes`
    0% {
        opacity: 0;
        transform: scale(0);
    }
    10% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`

export const animateScienceShowBlocks = keyframes`
    0% {
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

export const animateScienceShowLast = keyframes`
    0% {
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
`

export const showContent = keyframes`
    0% {
        opacity: 0;
    }
    70% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const shartShowContent = keyframes`
    0% {
        opacity: 0;
        transform: scale(0);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`

export const circleAnimate = keyframes`
    0% {
        stroke-dasharray: 1200 0; 
        stroke-dashoffset: 1450;
    }
    33% {
        stroke-dasharray: 850 350; 
        stroke-dashoffset: 1180;
    }
    66% {
        stroke-dasharray: 350 850; 
        stroke-dashoffset: 700;
    }
    100% {
        stroke-dasharray: 0 1200; 
        stroke-dashoffset: 300;
    }
`

export default {
    leavesAnimation,
    borderAnimationS,
    borderAnimationM,
    circleStroke,
    rotateInteractiveCircle,
    CursorAnim,
    animateScience,
    animateScienceShowBlocks,
    animateScienceShowLast,
    showContent,
    shartShowContent,
    circleAnimate,
}
