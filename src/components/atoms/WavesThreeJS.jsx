import React, { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import DocsLink from "./DocsLink"
import points from "../../data/testData"

function Dots({count}) {

    const wavespeed = 0.2;
    const wavewidth = 200;
    const waveheight = 100;

    const ref = useRef() 
    const { camera } = useThree()
    camera.lookAt(0, 0, 1200)     

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
                const t = clock.elapsedTime;

                positions[i].y = Math.cos((t +
                    (positions[i].x / wavewidth) +
                    (positions[i].z / wavewidth) ) * wavespeed * 2) * waveheight *
                    Math.cos(positions[i].z / wavewidth) 

                vec.copy(positions[i])
                transform.setPosition(vec)

            ref.current.setMatrixAt(i, transform)
            ref.current.instanceMatrix.needsUpdate = true

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
    })

    return null
}

export default function WavesThreeJS() {

    const [test, setTest] = useState(points)

    // eslint-disable-next-line no-restricted-syntax
    for(const item of test.points) {
        console.log(item)
    }

    return (
        <>
            <Canvas
                style={{height: '450px'}}
                camera={{ position: [-400, 300, 1200], fov: 75, far: 2500}}>
                <Dots count={600} data={test.points} setData={setTest}/>
                <Rig/>
                {/* <primitive object={new THREE.AxesHelper(1000)} /> */}
            </Canvas>
            {
                // eslint-disable-next-line consistent-return
                () => {
                    // eslint-disable-next-line no-restricted-syntax, no-unreachable-loop
                    for(const item of test.points) {
                        return <DocsLink data={item[1]} text="" key={item[0]}/>
                    }
                }
            }
        </>
    )
}
