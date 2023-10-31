import React, { useCallback, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
export const Experience = () => {
  const boxRef = useRef();
  const starRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <mesh ref={boxRef}>
    
      </mesh>

      <gridHelper args={[10, 10]} />
    </>
  );

};