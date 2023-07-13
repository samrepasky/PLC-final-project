
import { Canvas, useFrame, extend } from "@react-three/fiber";
import React, { Component, useRef, useState } from 'react';
import { OrbitControls, Stats, Text, Stars } from "@react-three/drei";
import './components.css';

function Bbox(){
    return(
        <mesh position={[0,2,0]}>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color= "purple" />
        </mesh>
    )
}
function Plane(){
    return(
        <mesh position={[0,0,0]} rotation={[-Math.PI/2,0,0]}>
            <planeBufferGeometry attach="geometry" args={[100,100]}/>
            <meshLambertMaterial attach="material" color= "blue" />
        </mesh>
    )
}

function Hero() {

    return (
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <Stars />
        <spotLight 
            position= {[10,15,10]} angle={0.3}
        />
            <Bbox />
            <Plane />
      </Canvas>
      
    );
  
  }

export default Hero;