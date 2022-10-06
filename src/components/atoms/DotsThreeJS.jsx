import React, { useMemo, useRef } from 'react'
import { useFrame, Html } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

export default function Dots({
    // количество точек в длинну
        width, 
    // количество точек в ширину
        height,
        transformArray,
        dataLine, 
        dataModal
    }) {

    const wavespeed = 0.2;
    const wavewidth = 200;
    const waveheight = 100;

    const ref = useRef() 

    const { vec, transform, positions } = useMemo(() => {

        // eslint-disable-next-line no-shadow
        const vec = new THREE.Vector3()
        // eslint-disable-next-line no-shadow
        const transform = new THREE.Matrix4()

        // eslint-disable-next-line no-shadow
        const positions = [];

        for ( let x = 0; x < height; x+=1 ) {
            for ( let y = 0; y < width; y+=0.5 ) { 
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

    const scroll = useScroll()
    const vecScroll = new THREE.Vector3()

    useFrame(({clock, camera}) => {

        for(let i = 0; i < height; i+=1) {
            const t = clock.elapsedTime;
            for(let j = 0; j < width * 2; j+=1) {
                const tempIJ = i*width*2 + j
                positions[tempIJ].y = Math.cos((t +
                    (positions[tempIJ].x / wavewidth) +
                    (positions[tempIJ].z / wavewidth) ) * wavespeed * 2) * waveheight *
                    Math.cos(positions[tempIJ].z / wavewidth) 
                    

                vec.copy(positions[tempIJ])
                transform.setPosition(vec)
    
                ref.current.setMatrixAt(tempIJ, transform)
                ref.current.instanceMatrix.needsUpdate = true

                camera.lookAt(0, 0, 1200 + scroll.offset*7000)
                camera.position.lerp(vecScroll.set(-400, 300, 1200 + scroll.offset*7000), 0.8 )
            
                vec.project(camera);

                const x = (vec.x *  .5 + .5) * window.innerWidth - 50;
                const y = (vec.y * -.5 + .5) * 450 - 50;
    
                const tempItem = `${i}.${j}`
                const tempObj = {}
                    
                if(data[tempItem]) {
                    tempObj[tempItem] = {i: x.toFixed(4), j: y.toFixed(4)}
                    setData((prevState) => ({ ...prevState, ...tempObj}));
                }

            }
        }
    })

    return (
        <>
            <instancedMesh ref={ref} args={[null, null, positions.length]}>
                <sphereGeometry args={[2,3,3]} attach="geometry" />
                <meshBasicMaterial color="white" attach="material" />
            </instancedMesh>
            <Html>
            {dataLine.map(section => (
                <CourseStep key={ section.id } sectId={section.id} 
                    intro={section.intro} test={section.test} button={section.button} 
                    points={section.points} dataModal={dataModal}
                    i={dataPoints[Object.keys(section.transform)].i}
                    j={dataPoints[Object.keys(section.transform)].j}/>
            ))}
            </Html>
        </>
    )
}