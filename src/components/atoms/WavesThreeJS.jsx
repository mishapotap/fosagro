import React, { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import styled from 'styled-components'
import testPoints from "../../data/testData"

function Dots({count}) {

    const wavespeed = 0.2;
    const wavewidth = 200;
    const waveheight = 100;

    const ref = useRef() 
    const { camera } = useThree()
    camera.lookAt(0, 0, 1200)  
    camera.updateProjectionMatrix();   

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
  }, [])

    useFrame(({clock}) => {
        
        for (let i = 0; i < positions.length; i+=1) {

            console.log(i, i % 15, i % 1200)

            const t = clock.elapsedTime;
            positions[i].y = Math.cos((t +
                (positions[i].x / wavewidth) +
                (positions[i].z / wavewidth) ) * wavespeed * 2) * waveheight *
                Math.cos(positions[i].z / wavewidth) 

            vec.copy(positions[i])
            transform.setPosition(vec)

            ref.current.setMatrixAt(i, transform)
            ref.current.instanceMatrix.needsUpdate = true

            // ref.current.updateWorldMatrix(true, false);
            // ref.current.getWorldPosition(vec);
        
            vec.project(camera);

            // const a = vec.z / 9000;
            // const b = vec.y / 450;
            // // // convert the normalized position to CSS coordinates
            // const x = (a *  .5 + .5) * window.innerWidth;
            // const y = (b * -.5 + .5) * 450;
            
            // if ((i + 1) % 200 === 0) console.log(x.toFixed(4),y.toFixed(4))
            // if ((i) % 100 === 0) console.log(x, y)

        }
    })

    return (
        <instancedMesh ref={ref} args={[null, null, positions.length]}>
            <sphereGeometry args={[2,3,3]} attach="geometry" />
            <meshBasicMaterial color="skyblue" attach="material" />
        </instancedMesh>
    )
}

function Rig() {
    const { camera, viewport } = useThree()

    useFrame((state) => {
        camera.position.y = (-state.mouse.y * viewport.height - camera.position.y) * (Math.exp(state.mouse.y) / 100)
        camera.lookAt(0, (-state.mouse.y * viewport.height - camera.position.y) * (Math.exp(state.mouse.y) / 100), 1200)
        camera.updateProjectionMatrix();
    })

    return null
}

export default function WavesThreeJS() {

    const array = Object.keys(testPoints.testPoints)

    const [test, setTest] = useState(testPoints.testPoints)    

    return (
        <>
            <Canvas
                style={{height: '450px'}}
                camera={{ position: [-400, 300, 1200], fov: 75, far: 2500}}>
                <Dots count={600} data={test} setData={setTest}/>
                <Rig/>
                {/* <primitive object={new THREE.AxesHelper(1000)} /> */}
            </Canvas>
            <div>
                {
                    array.map((item) =>(
                        <TestPoint data={test[item]} key={item}/>
                    ))
                }
            </div>
        </>
    )
}

const TestPoint = styled.div`
    display: block; 
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
`
