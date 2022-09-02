import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import modules from "../modules"
import { ContentModule, Layout } from "../atoms"
import { COLORS, DEVICE } from "../../constants"
import { MenuBackground } from "../../assets/images"
import {TimelineFooter} from "../organisms"
import * as routes from "../../constants/routes"
import timelineData from "../../data/timelineData"

export default function Course01() {
    return (
        <Layout page="course">
            <Background/>
            <Container>
                <CourseNumber>01</CourseNumber>
                <CourseTitle>Устойчивое развитие - модный термин или реальность, которая касается каждого?</CourseTitle>
                <Link to={routes.TEST}>НА СТРАНИЦУ TEST (АНИМАЦИИ)</Link>
                <Link to={routes.TO404}>НА 404 СТРАНИЦУ</Link>
                <MenuContainer>
                    {timelineData.map((section, index) => (
                        // TODO обернуть компоненты в link и дописать его в data
                        // eslint-disable-next-line react/no-array-index-key
                        <ContentModule key={index} data={section} modules={modules.base} />
                    ))}
                </MenuContainer>
                <TimelineFooter />
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
    @media ${DEVICE.laptopS} {
        font-size: 60px;
        line-height: 78px;
    }
    @media ${DEVICE.tablet} {
        font-size: 50px;
        line-height: 68px;
    }
    @media ${DEVICE.mobile} {
        font-size: 40px;
        line-height: 58px;
    }
`

const CourseTitle = styled.div`
    font-family: "FocoBold";
    font-size: 43px;
    line-height: 54px;
    color: ${COLORS.blue};
    @media ${DEVICE.laptopS} {
        font-size: 33px;
        line-height: 44px;
    }
    @media ${DEVICE.tablet} {
        font-size: 28px;
        line-height: 38px;
    }
    @media ${DEVICE.mobile} {
        font-size: 22px;
        line-height: 30px;
    }
`

const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    overflow-x: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`