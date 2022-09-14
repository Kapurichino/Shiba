import { useHelper } from '@react-three/drei'
import React, { useRef } from 'react'
import { SpotLightHelper } from 'three'

const Light = () => {
    const spotRef = useRef();
    useHelper(spotRef, SpotLightHelper)
  return (
    <>
        <ambientLight intensity={0.5} />
        <spotLight ref={spotRef} color='red' intensity={1} penumbra={0.8} angle={0.9} position={[0, 2, 2]}/>
    </>
  )
}

export default Light
