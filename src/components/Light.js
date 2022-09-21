import { useHelper } from '@react-three/drei'
import React, { useRef } from 'react'
import { SpotLightHelper } from 'three'

const Light = () => {
  const spotRef = useRef();
  useHelper(spotRef, SpotLightHelper, 'cyan')
  return (
    <>
        <ambientLight intensity={0.1} />
        <spotLight castShadow ref={spotRef} color='red' intensity={3} penumbra={0.8} angle={0.4} position={[0, 2, 2]}/>
    </>
  )
}

export default Light
