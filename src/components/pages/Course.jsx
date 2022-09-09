import React, { useState, useRef } from "react"
import styled from "styled-components"
import { useParams } from "react-router"
import timelineData from "../../data/timelineData"
import { Layout } from "../atoms"
import { CourseStep } from "../molecules"
import { COLORS, DEVICE } from "../../constants"
import { MenuBackground } from "../../assets/images"
import {TimelineFooter} from "../organisms"
import { AnimateLine } from "../../assets/svg"
import { introModalData } from "../../data"

export default function Course() {
    const { id } = useParams();
    const dataLine = timelineData[`course${id}`];
    const dataModal = introModalData[`introModal${id}`];

    const ref = useRef(null);

    const [isDown, setIsDown] = useState(false);
    const [startX, setstartX] = useState(0);
    const [scrollLeft, setscrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDown(true);
        ref.current.classList.add('active');
        setstartX(e.pageX - ref.current.offsetLeft);
        setscrollLeft(ref.current.scrollLeft);
    }

    const handleMouseLeave = () => {
        setIsDown(false);
        ref.current.classList.remove('active');
    }

    const handleMouseUp = () => {
        setIsDown(false);
        ref.current.classList.remove('active');
    }

    const handleMouseMove = (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - ref.current.offsetLeft;
        const shift = (x - startX) * 1;
        ref.current.scrollLeft = scrollLeft - shift;
    } 

    let time = 0;
    let interval = null;

    const handleScroll = () => {
        time = 0;
        ref.current.classList.add('active');
        if(interval !== null) clearInterval(interval);
        interval = setInterval(() => {
            time += 100;
            if(time >= 300) {
                clearInterval(interval);
                ref.current.classList.remove('active');
            }
        }, 100);
    }

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
                <MenuContainer 
                    ref={ref}
                    onMouseDown={(e) => handleMouseDown(e)}
                    onMouseLeave={() => handleMouseLeave()}
                    onMouseUp={() => handleMouseUp()}
                    onMouseMove={(e) => handleMouseMove(e)}
                    onScroll={() => handleScroll()}
                    >
                    <Line width={dataLine.width}>
                        <AnimateLine color={COLORS.white}/>
                    </Line>
                    {dataLine.timeline.map((section) => (
                        <CourseStep key={ section.id } button={section.button} points={section.points} dataModal={dataModal} className="active"/>
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

const MenuContainer = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin: 0 -20px;
    overflow-x: auto;

    transition: all 0.3s;
    will-change: transform;
    user-select: none;
    cursor: pointer;

    ::-webkit-scrollbar {
        display: none;
    }

    &.active {
        cursor: grabbing;
        cursor: -webkit-grabbing;
        .active-button {
            transform: scale(1.1);
        }
        .active-point {
            transform: scale(1.02);
        }
    }
`

const Line = styled.div`
    z-index: -1;
    position: absolute;
    top: calc(50% - 150px);
    left: 0;
    max-width: ${(props) => props.width}px;
    overflow: hidden;
`