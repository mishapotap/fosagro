import React from "react"
import styled from "styled-components"
import { useParams } from "react-router"
import timelineData from "../../data/timelineData"
import { Layout } from "../atoms"
import { COLORS, DEVICE } from "../../constants"
import { MenuBackground } from "../../assets/images"
import { TimelineFooter, CourseMenu} from "../organisms"
import { introModalData } from "../../data"

export default function Course() {
    const { id } = useParams();
    const dataLine = timelineData[`course${id}`];
    const dataModal = introModalData[`introModal${id}`];

    return (
        <Layout page="course">
            <Background/>
            <Container>
                <Wrapper>
                    <CourseNumber>{dataLine.id}</CourseNumber>
                    <CourseTitle>{dataLine.title}</CourseTitle>
                    {
                        dataLine.supTitle && <CourseSupTitle>{dataLine.supTitle}</CourseSupTitle>
                    }
                </Wrapper>
                <CourseMenu dataLine={dataLine} dataModal={dataModal}/>
                <TimelineFooter/>
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

const Wrapper = styled.div`
    padding: 45px 0 0 60px;

    @media ${DEVICE.laptopM} {
        padding: 0 0 0 calc(3vw - 20px);
    }
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
    max-width: 65%;
    font-family: "FocoBold";
    font-size: 43px;
    line-height: 54px;
    color: ${COLORS.blue};

    @media ${DEVICE.laptopS} {
        max-width: 100%;
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

const CourseSupTitle = styled.div`
    max-width: 50%;
    margin-top: 10px;
    font-family: 'FocoRegular';
    font-weight: 400;
    font-size: 25px;
    line-height: 32px;

    color: ${COLORS.blue};

    @media ${DEVICE.laptopM} {
        font-size: 20px;
        line-height: 24px;
    }

    @media ${DEVICE.mobile} {
        font-size: 16px;
        line-height: 20px;
    }
`