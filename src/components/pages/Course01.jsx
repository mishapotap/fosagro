import React from "react"
import styled from "styled-components"
import {
    MailButton,
    CourseProgressButton,
    SoundButton, 
} from "../molecules"
import timelineData from "../../data/timelineData"
import modules from "../modules"
import { ContentModule, Layout } from "../atoms"
import { COLORS } from "../../constants"
import { MenuBackground } from "../../assets/images"

export default function Course01() {
    return (
        <Layout page="course">
            <Background/>
            <Container>
                <CourseNumber>01</CourseNumber>
                <CourseTitle>Устойчивое развитие - модный термин или реальность, которая касается каждого?</CourseTitle>
                <MenuContainer>
                    {timelineData.map((section, index) => (
                        // TODO обернуть компоненты в link и дописать его в data
                        // eslint-disable-next-line react/no-array-index-key
                        <ContentModule key={index} data={section} modules={modules.base} />
                    ))}
                </MenuContainer>
                
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <CourseProgressButton />
                    <MailButton />
                    <SoundButton />
                </div>
            </Container>
        </Layout>
    )
}

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${MenuBackground}) no-repeat center center / cover;
    z-index: -1;
`

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    /* justify-content: space-between; */
`

const CourseNumber = styled.div`
    font-family: "FocoBold";
    font-size: 70px;
    line-height: 88px;
    color: ${COLORS.white};
`

const CourseTitle = styled.div`
    font-family: "FocoBold";
    font-size: 43px;
    line-height: 54px;
    color: ${COLORS.blue};
`

const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    overflow-x: auto;
    ::-webkit-scrollbar {
        width: 0;
    }
`
