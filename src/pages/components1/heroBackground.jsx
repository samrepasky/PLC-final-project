import { Canvas, useFrame, extend } from "@react-three/fiber";
import React, { Component, useRef, useState } from 'react';
import { DirectionalLight, OrbitControls, Stats, Text, Stars } from "@react-three/drei";
import './components.css';

function Bbox(){
    return(
        <mesh position={[0,2,0]}>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color= "purple" />
        </mesh>
    )
}

import { usePlane } from '@react-three/cannon';

function Plane() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}

function Hero() {

    return (
        <Canvas shadows>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.8} position={[10, 15, 10]} angle={0.3} penumbra={1} castShadow />
        <DirectionalLight intensity={0.2} castShadow shadow-mapSize={[1024, 1024]} />
        <Stars />
        <Plane />
        <Box position={[0, 2, 0]} />
      </Canvas>
    );
  
  }

export default Hero;