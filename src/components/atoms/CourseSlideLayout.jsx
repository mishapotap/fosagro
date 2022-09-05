import React from "react"
import styled from "styled-components"
import { InteractiveCircle, Waves } from "../../assets/svg"
import Layout from "./Layout"
import { MailButton } from "../molecules"
import { COLORS, DEVICE } from "../../constants"

// TODO сделать нормальный шаблон с логикой

export default function CourseSlideLayout({
    sectColor = COLORS.blue,
    className,
    children,
}) {
    return (
        <StyledLayout page="section" className={className}>
            <InterCircleCont>
                <StyledInterCircle color={sectColor} />
            </InterCircleCont>
            <WavesContainer>
                <Waves color={sectColor} />
            </WavesContainer>
            <Content>
                {children}
            </Content>
            <MailButtonContainer>
                <MailButton />
            </MailButtonContainer>
        </StyledLayout>
    )
}

const Content = styled.div`
    height: 100%;
`

const StyledLayout = styled(Layout)`
    .content {
        padding: 3vh 6.5vw;
    }
`

const InterCircleCont = styled.div`
    position: fixed;
    right: -10%;
    top: 10%;
    z-index: -1;

    max-height: 110%;
    height: 110%;
    max-width: 60%;

    @media ${DEVICE.laptopS} {
        display: none;
    }
`

const StyledInterCircle = styled(InteractiveCircle)`
    max-width: 100%;
    max-height: 100%;
`

const WavesContainer = styled.div`
    position: fixed;
    left: 0;
    bottom: 8%;

    width: 100%;
    z-index: -1;
    min-height: 80px;
    overflow: hidden;

    svg {
        height: 100%;
        max-width: none;
    }
`

const MailButtonContainer = styled.div`
    position: fixed;
    bottom: 2.2vw;
    right: 2.5vw;

    @media ${DEVICE.laptop} {
        right: 20px;
        bottom: 20px;
    }

    @media ${DEVICE.laptopS} {
        display: none;
    }
`
