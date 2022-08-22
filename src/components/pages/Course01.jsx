import React from "react"
import styled from "styled-components"
import {
    MailButton,
    CourseProgressButton,
    SoundButton, 
} from "../molecules"
import { MenuBackground } from "../../assets/images"
import timelineData from "../../data/timelineData"
import modules from "../modules"
import { ContentModule, Header } from "../atoms"
import { COLORS } from "../../constants"

export default function Course01() {
    return (
        <Layout>
            <Header course/>
            <CourseNumber>01</CourseNumber>
            <CourseTitle>
                Устойчивое развитие - модный термин или реальность, которая
                касается каждого?
            </CourseTitle>
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
        </Layout>
    )
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    /* padding-top: 80px; */
    background: url(${MenuBackground}) no-repeat center center / cover;
    overflow-x: hidden;
    overflow-y: hidden;
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
