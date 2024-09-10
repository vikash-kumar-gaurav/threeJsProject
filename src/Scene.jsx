import React, { useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

const Scene = () => {

    let tex = useTexture('img.png');
    let meshrotate = useRef(null);
    useFrame((state, delta)=>{
        meshrotate.current.rotation.y += delta;
        
    });
  return (
    <><mesh ref={meshrotate} >
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]}/> 
        <meshStandardMaterial transparent map={tex} side={THREE.DoubleSide} />
      </mesh>
      </>
  )
}

export default Scene;