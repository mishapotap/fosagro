import { observer } from "mobx-react-lite";
import React, { useRef, useState } from "react"
import styled from "styled-components"
import { CourseStep } from "../molecules"
import { Waves } from "../../assets/svg"
import { COLORS } from "../../constants"

function CourseMenu({ dataLine, dataModal }) {
    const ref = useRef(null);
    const line = useRef(null);

    const [isDown, setIsDown] = useState(false);
    const [startX, setstartX] = useState(0);
    const [scrollLeft, setscrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        if(e.target.parentNode === line.current) {
            setIsDown(true);
            ref.current.classList.add('active');
            setstartX(e.pageX - ref.current.offsetLeft);
            setscrollLeft(ref.current.scrollLeft);
        }
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

    return(
        <MenuContainer
            ref={ref}
            onMouseDown={(e) => handleMouseDown(e)}
            onMouseLeave={() => handleMouseLeave()}
            onMouseUp={() => handleMouseUp()}
            onMouseMove={(e) => handleMouseMove(e)}
            onScroll={() => handleScroll()}
            >
            <Line width={dataLine.width} ref={line}>
                <Waves color={COLORS.white}/>
            </Line>
            {dataLine.timeline.map((section) => (
                <CourseStep key={ section.id } sectId={section.id} intro={section.intro} test={section.test} button={section.button} points={section.points} dataModal={dataModal} className="active"/>
            ))}
    </MenuContainer>
    )
}

export default observer(CourseMenu)

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
    top: calc(50% - 110px);
    left: -377px;
    max-width: ${(props) => props.width}px;
    overflow: hidden;
`