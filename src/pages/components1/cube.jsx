import React, { Component, useRef, useState } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";


function Box(props) {
    const mesh = useRef();
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    return (
      
       <mesh {...props} ref={mesh}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color={"orange"} />
       </mesh>
      
    );
  
  }

export default Box;