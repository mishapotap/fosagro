import React from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../constants"
import { MailButton, SoundButton, InstructionButton, CourseProgressBar } from "../molecules"

export default function Footer({className = "timeLine"}) {
    const background = className === "home" ? COLORS.white : COLORS.blue
    const color = className === "home" ? COLORS.blue : COLORS.white

    return(
        <Grid className={className}>
            {
                className === "timeLine" &&
                <><Text>Прогресс обучения</Text><CourseProgressBar /></>
            }
            <InstructionButton background={background} color={color}/>
            <SoundButton background={background} color={color}/>
            <MailButton background={background} color={color}/>
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    column-gap: 1.82vw;
    grid-template-columns: auto 1fr auto auto auto;
    grid-template-rows: 9.6vh;
    align-items: center;
    @media ${DEVICE.laptopS} {
        column-gap: 15px;
        grid-template-rows: 80px;
    }
    &.home {
        grid-template-columns: auto auto auto;
        grid-template-rows: 7vh;
        @media ${DEVICE.laptopS} {
            grid-template-rows: 50px;
        }
        @media ${DEVICE.tablet} {
            grid-row-start: 1;
            grid-row-end: 1;
            justify-content: center;
            margin-bottom: 10px;
        }
    }
`

const Text = styled.div`
    /* text */
    font-family: "FocoRegular";
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${COLORS.blue_text};
`