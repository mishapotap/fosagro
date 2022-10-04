import React, { useMemo, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import styled from 'styled-components'
import testPoints from "../../data/testData"

function Dots({count, data,
     setData
    }) {

    const wavespeed = 0.2;
    const wavewidth = 200;
    const waveheight = 100;

    const ref = useRef() 
    const { camera } = useThree()
    // camera.lookAt(0, 0, lookAtZ)

    const { vec, transform, positions } = useMemo(() => {

        // eslint-disable-next-line no-shadow
        const vec = new THREE.Vector3()
        // eslint-disable-next-line no-shadow
        const transform = new THREE.Matrix4()

        // eslint-disable-next-line no-shadow
        const positions = [];

        for ( let x = 0; x < 30; x+=2 ) {
            for ( let y = 0; y < count; y+=0.5 ) { 
                const position = new THREE.Vector3()   

                position.x = x * 15;
                position.y = 0;
                position.z = y * 15;

                positions.push(position); 
            }
        }
        
        // eslint-disable-next-line no-shadow
        return { vec, transform, positions }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useFrame(({clock}) => {

        for(let i = 0; i < 15; i+=1) {
            const t = clock.elapsedTime;
            for(let j = 0; j < count * 2; j+=1) {
                positions[i*count*2 + j].y = Math.cos((t +
                    (positions[i*count*2 + j].x / wavewidth) +
                    (positions[i*count*2 + j].z / wavewidth) ) * wavespeed * 2) * waveheight *
                    Math.cos(positions[i*count*2 + j].z / wavewidth) 

                vec.copy(positions[i*count*2 + j])
                transform.setPosition(vec)
    
                ref.current.setMatrixAt(i*count*2 + j, transform)
                ref.current.instanceMatrix.needsUpdate = true
            
                vec.project(camera);

                const x = (vec.x *  .5 + .5) * window.innerWidth - 10;
                const y = (vec.y * -.5 + .5) * 450 - 10;
    
                const temp = `${i}.${j}`
                const nextTemp = {}
    
                if(data[temp]) {
                    nextTemp[temp] = {i: x.toFixed(4), j: y.toFixed(4)}
                    setData((prevState) => ({ ...prevState, ...nextTemp}));
                }
            }
        }
    })

    return (
        <instancedMesh ref={ref} args={[null, null, positions.length]}>
            <sphereGeometry args={[2,3,3]} attach="geometry" />
            <meshBasicMaterial color="skyblue" attach="material" />
        </instancedMesh>
    )
}

function Controls({setCamera}) {
    const { camera } = useThree()
    setCamera(camera)
}

export default function WavesThreeJS() {

    const array = Object.keys(testPoints.testPoints)

    const [test, setTest] = useState(testPoints.testPoints)  

    const [camera, setCamera] = useState(null);
    
    const [lookAtZ, setLookAtZ] = useState(1200)
    useEffect(() => {
        // console.log(test)
    }, [test])


    function handleWheel(e) { 
        const vec = new THREE.Vector3()
        const tempDel = 0.01

        camera.lookAt(0, 0, lookAtZ+(e.deltaY*tempDel))
        camera.position.lerp(vec.set(-400, 300, lookAtZ+e.deltaY), 0.01 )
        camera.updateProjectionMatrix()

        setLookAtZ(lookAtZ+(e.deltaY*tempDel))
    
        
    }

    return (
        <Container>
            <Canvas style={{height: "450px"}}
                camera={{ position: [-400, 300, 1200], fov: 75, far: 2500}}
                onWheel={(e) => handleWheel(e)}>
                <Dots count={600} data={test} setData={setTest} lookAtZ={lookAtZ}/>
                <Controls setCamera={setCamera}/>
            </Canvas>
            <PointContainer>
                {
                    array.map((item) =>(
                        <TestPoint key={item} style={{ transform: `translate(${test[item].i}px, ${test[item].j}px)`}}/>
                    ))
                }
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

const TestPoint = styled.div`
    position: absolute; 
    left: 0;             
    top: 0;

    display: block; 
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
`
