import React from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../constants"
import { MailButton, SoundButton, InstructionButton, CourseProgressBar } from "../molecules"

export default function TimelineFooter() {
    return(
        <Grid>
            <Text>Прогресс обучения</Text>
            <CourseProgressBar />
            <InstructionButton />
            <SoundButton />
            <MailButton />
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    column-gap: 35px;
    grid-template-columns: auto 1fr auto auto auto;
    grid-template-rows: 90px;
    align-items: center;
    @media ${DEVICE.laptopS} {
        column-gap: 15px;
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