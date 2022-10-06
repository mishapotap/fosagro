import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import styled from 'styled-components'
import DotsThreeJS from "./DotsThreeJS"
import CourseStep from "../molecules/CourseStep"

export default function WavesThreeJS({dataLine, dataModal}) {

    const transformArray = {};

    dataLine.forEach(item => {
        const key = Object.keys(item.transform)
        transformArray[key] = item.transform[key]
    });

    const [dataPoints, setDataPoints] = useState(transformArray) 

    // console.log(dataPoints[Object.keys(dataLine[0].transform)])

    return (
        <Container>
            <Canvas style={{height: "450px"}}
                camera={{ position: [-400, 300, 1200], fov: 75, far: 2500}}>
                <ScrollControls horizontal pages={10} style={{top: "15px"}}>
                    <DotsThreeJS width={600} height={30} data={dataPoints} setData={setDataPoints}/>
                </ScrollControls>
            </Canvas>
            <PointContainer>
                {dataLine.map(section => (
                    // <div key={section.if} >yeye</div>
                    <CourseStep key={ section.id } sectId={section.id} 
                        intro={section.intro} test={section.test} button={section.button} 
                        points={section.points} dataModal={dataModal}
                        i={dataPoints[Object.keys(section.transform)].i}
                        j={dataPoints[Object.keys(section.transform)].j}/>
                ))}
            </PointContainer>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    overflow: hidden;
`

const PointContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`
