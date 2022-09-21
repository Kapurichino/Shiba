import { useGLTF } from '@react-three/drei'
import React, { useLayoutEffect } from 'react'

const Shiba = () => {
    const shiba = useGLTF('./shiba/scene.gltf');
    useLayoutEffect(() => shiba.scene.traverse(o => o.isMesh && (o.castShadow = o.receiveShadow = true)), [])
  return (
    <>
      <primitive object={shiba.scene}/>
    </>
  )
}

export default Shiba
