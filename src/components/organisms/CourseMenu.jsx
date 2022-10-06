import { observer } from "mobx-react-lite";
import React, { useRef } from "react"
import styled from "styled-components"
// import { Prev, Next } from "../../assets/svg"
import { WavesThreeJS } from "../atoms"

function CourseMenu({ dataLine, dataModal }) {
    const ref = useRef(null);
    // const [isStart, setIsStart] = useState(true);
    // const [isFinish, setIsFinish] = useState(false);
    // const [isDown, setIsDown] = useState(false);
    // const [startX, setstartX] = useState(0);
    // const [scrollLeft, setscrollLeft] = useState(0);

    // const handleMouseDown = (e) => {
    //     if(e.target.parentNode === line.current) {
    //         setIsDown(true);
    //         ref.current.classList.add('active');
    //         setstartX(e.pageX - ref.current.offsetLeft);
    //         setscrollLeft(ref.current.scrollLeft);
    //     }
    // }

    // const handleMouseLeave = () => {
    //     setIsDown(false);
    //     ref.current.classList.remove('active');
    // }

    // const handleMouseUp = () => {
    //     setIsDown(false);
    //     ref.current.classList.remove('active');
    // }

    // const handleMouseMove = (e) => {
    //     if(!isDown) return;
    //     e.preventDefault();
    //     const x = e.pageX - ref.current.offsetLeft;
    //     const shift = (x - startX) * 1;
    //     ref.current.scrollLeft = scrollLeft - shift;
    // }

    // let time = 0;
    // let interval = null;

    // const handleScroll = () => {
    //     time = 0;
    //     ref.current.classList.add('active');
    //     if(interval !== null) clearInterval(interval);
    //     interval = setInterval(() => {
    //         time += 100;
    //         if(time >= 300) {
    //             clearInterval(interval);
    //             ref.current.classList.remove('active');
    //         }
    //     }, 100);

    //     // eslint-disable-next-line no-unused-expressions
    //     Math.round(ref.current.clientWidth + ref.current.scrollLeft) >= line.current.clientWidth + line.current.offsetLeft
    //         ? setIsStart(false) : setIsStart(true)

    //     // eslint-disable-next-line no-unused-expressions
    //     ref.current.scrollLeft === 0
    //         ? setIsFinish(false) : setIsFinish(true)
    // }   

    // let buttonTime = 0
    // let buttonInterval = null

    // function handleNext() {
    //     setIsFinish(true)

    //     buttonTime = 0

    //     if(buttonInterval !== null) clearInterval(buttonInterval)

    //     buttonInterval = setInterval(() => {
    //         buttonTime += 10;
    //         ref.current.scrollLeft += 20;
    //         if(buttonTime > 100) clearInterval(buttonInterval) 
    //     }, 10);

    //     // eslint-disable-next-line no-unused-expressions
    //     Math.round(ref.current.clientWidth + ref.current.scrollLeft) >= line.current.clientWidth + line.current.offsetLeft
    //         ? setIsStart(false) : setIsStart(true)
    // }

    // function handlePrew() {
    //     setIsStart(true)

    //     buttonTime = 0

    //     if(buttonInterval !== null) clearInterval(buttonInterval)

    //     buttonInterval = setInterval(() => {
    //         buttonTime += 10;
    //         ref.current.scrollLeft -= 20;
    //         if(buttonTime > 100) clearInterval(buttonInterval)
    //     }, 10);

    //     // eslint-disable-next-line no-unused-expressions
    //     ref.current.scrollLeft === 0
    //         ? setIsFinish(false) : setIsFinish(true)
    // }

    return(
        <>
            <MenuContainer
                ref={ref}
                // onMouseDown={(e) => handleMouseDown(e)}
                // onMouseLeave={() => handleMouseLeave()}
                // onMouseUp={() => handleMouseUp()}
                // onMouseMove={(e) => handleMouseMove(e)}
                // onScroll={() => handleScroll()}
                >
                <WavesThreeJS dataLine={dataLine.timeline} dataModal={dataModal}/>
            </MenuContainer>
            {/* {isFinish &&
                <Button 
                    className="button-prev"
                    onClick={() => handlePrew()}>
                    <Prev/>
                </Button>
            }
            {isStart && 
                <Button 
                    className="button-next"
                    onClick={() => handleNext()}>
                    <Next/>
                </Button>} */}
    </>
    )
}

export default observer(CourseMenu)

const MenuContainer = styled.div`
    position: relative;
    margin: 0 -20px;
`