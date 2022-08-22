import React from "react"
import styled from "styled-components"
import { vinogradov, vinogradovText, lomanosov, lomanosovText, bydiko, bydikoText } from "../../assets/images/Course1"
import { DEVICE } from "../../constants/index"
import { animateScience, animateScienceShowBlocks, animateScienceShowLast } from "../../constants/animations"

export default function CourseAnimateScience() {
  return(
    <Container>
        <Wpap className="first">
            <ImageText src={lomanosovText} alt="vinogradov" />
            <ImagePeople src={lomanosov} alt="vinogradov" />
        </Wpap>
        <Wpap className="second">
            <ImageText src={vinogradovText} alt="vinogradov" />
            <ImagePeople src={vinogradov} alt="vinogradov"/>
        </Wpap>
        <Wpap className="last">
            <ImageText src={bydikoText} alt="vinogradov" />
            <ImagePeople src={bydiko} alt="vinogradov" />
        </Wpap>
    </Container>
  )
}

const Container = styled.div`
    position: relative;
`

const ImagePeople = styled.img`
    position: relative;
    z-index: 2;
`

const ImageText = styled.img`
    position: relative;
    top: 2vw;
    z-index: 1;
    max-width: inherit;
    animation: ${animateScience} 15s ease-in-out;
    opacity: 0;
    transition: all .3s;
    @media ${DEVICE.mobile} {
        top: 5vw;
    }
`

const Wpap = styled.div`
    position: absolute;
    left: 0;
    top: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-width: 37.55vw;
    width: 100%;

    opacity: 0;
    animation: ${animateScienceShowBlocks} 15s ease-in-out;
    transition: all .3s;

    @media ${DEVICE.mobile} {
        max-width: 100%;
    }

    &.first {
        animation-delay: 1s;
        
        ${ImagePeople} {
            max-width: 25vw;
            @media ${DEVICE.mobile} {
                max-width: 70vw;
            }
        }
        ${ ImageText } {
            animation-delay: 2s;
        }

    }

    &.second {
        animation-delay: 16s;
        ${ImagePeople} {
            max-width: 25vw;
            @media ${DEVICE.mobile} {
                max-width: 70vw;
            }
        }
        ${ ImageText } {
            animation-delay: 17s;
        }
    }

    &.last {
        animation: ${animateScienceShowLast} 15s ease-in-out;
        animation-delay: 31s;
        animation-fill-mode: forwards;
        ${ImagePeople} {
            max-width: 35vw;
            @media ${DEVICE.mobile} {
                max-width: 100%;
            }
        }
        ${ ImageText } {
            animation-fill-mode: forwards;
            animation-delay: 32s;
        }
    }
`

