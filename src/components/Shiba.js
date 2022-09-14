import { useGLTF } from '@react-three/drei'
import React from 'react'

const Shiba = () => {
    const shiba = useGLTF('./shiba/scene.gltf');
  return (
    <>
      <primitive object={shiba.scene}/>
    </>
  )
}

export default Shiba
