import React, { useRef } from "react"
import { Canvas, extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import test from "../../assets/test.png"

export default function WavesThreeJS() {
    return(
        <Scene/>
    )
}

export class WaveShaderMaterial extends THREE.ShaderMaterial {
    constructor() {
      super({
        transparent: true,
        uniforms: { 
            uTime: 0,
            uTexture: new THREE.Texture()
        },
        vertexShader: glsl`
            precision mediump float;
        
            varying vec2 vUv;
            varying float vWave;

            uniform float uTime;

            #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

            void main() {
                vUv = uv;

                vec3 pos = position;
                float noiseFreq = 2.5;
                float noiseAmp = 0.08;
                vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
                pos.z += snoise3(noisePos) * noiseAmp;
                vWave = pos.z;

                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
            }
        `,
        fragmentShader: glsl`
            precision mediump float;

            uniform float uTime;
            uniform sampler2D uTexture;

            varying vec2 vUv;
            varying float vWave;

            void main() {
                float wave = vWave * 0.2;
                vec3 texture = texture2D(uTexture, vUv + wave).rgb;
                gl_FragColor = vec4(texture, 0.99); 
            }
        `
      })
    }
  }

extend({ WaveShaderMaterial });

function Wave() {
    const ref = useRef();
    // eslint-disable-next-line no-return-assign
    useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()/8));

    const texture = useTexture(test)

    return (
        <mesh>
            <planeBufferGeometry args={[0.4, 0.4, 40, 40]}/>
            <waveShaderMaterial ref={ref} uTexture={texture} blending= {THREE.AdditiveBlending} side={THREE.DoubleSide}/>
        </mesh>
    );
}

function Rig() {
    // const { camera, viewport } = useThree()
    // useFrame((state) => {
    //   camera.position.y += (-state.mouse.y * viewport.height - camera.position.y) * 0.0005
    //   camera.lookAt(0, 0, 0)
    // })
    return null
  }

function Scene() {
    return (
        <Canvas camera={{ fov: 45, aspect: window.innerWidth / 400, near: 0.01, position: [0, 0, 1]}}>
            <Wave /> 
            <Rig />
        </Canvas>
    );
}