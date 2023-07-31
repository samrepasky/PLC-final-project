import React, { Component, useRef, useState } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";

const GRAVITY = -9.81;

function Box(props) {
    const mesh = useRef();
    const [velocity, setVelocity] = useState([0, 0, 0]);

    useFrame(() => {
        const newVelocity = velocity.map((v, i) => v + GRAVITY * Math.abs(v));
        setVelocity(newVelocity);
        mesh.current.position.y += velocity[1];
    });

    return (
      
       <mesh {...props} ref={mesh}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color={"orange"} />
       </mesh>
      
    );
  
  }

export default Box;