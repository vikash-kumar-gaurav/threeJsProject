import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import Scene from './Scene'

const App = () => {

  
  return (
    <>
    <Canvas className='' camera={ {fov:40}}>
      <OrbitControls />
      <ambientLight />
      <Scene />
    </Canvas>
    </>
  )
}

export default App