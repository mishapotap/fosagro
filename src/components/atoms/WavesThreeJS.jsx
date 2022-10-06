import React from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import styled from 'styled-components'
import DotsThreeJS from "./DotsThreeJS"

export default function WavesThreeJS({dataLine, dataModal}) {

    const transformArray = {};

    dataLine.forEach(item => {
        const key = Object.keys(item.transform)
        transformArray[key] = item.transform[key]
    });

    return (
        <Container>
            <Canvas style={{height: "450px"}}
                camera={{ position: [-400, 300, 1200], fov: 75, far: 2500}}>
                <ScrollControls horizontal pages={10} style={{top: "15px"}}>
                    <DotsThreeJS width={600} height={30} transformArray={transformArray} dataModal={dataModal} dataLine={dataLine}/>
                </ScrollControls>
            </Canvas>
            {/* <PointContainer>
               
            </PointContainer> */}
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    overflow: hidden;
`

// const PointContainer = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
// `
