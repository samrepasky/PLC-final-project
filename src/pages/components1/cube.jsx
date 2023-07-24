import { useBox } from '@react-three/cannon';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Box(props) {
  const mesh = useRef();
  const [ref, api] = useBox(() => ({ mass: 1, args: [3, 3, 3], ...props }));

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={mesh} onClick={() => api.velocity.set(0, 2, 0)} castShadow>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}

export default Box;
