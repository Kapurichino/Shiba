import React, {useRef} from 'react'
import {Canvas, useFrame, useThree, useLoader} from '@react-three/fiber';
import {OrbitControls, Stars, PerspectiveCamera, useTexture, Cloud, useCubeTexture, Text3D, Center} from '@react-three/drei';

const Camera = ({sizes}) => {
    const cameraRef = useRef();
  
    useFrame((state)=>{
      let time = state.clock.getElapsedTime();
      // cameraRef.current.position.x += Math.cos(time) * 0.1;
      // cameraRef.current.position.z += Math.sin(time) * 0.1;
      cameraRef.current.aspect = sizes.width / sizes.height;
      state.camera.updateProjectionMatrix();
    })
  
    return(
        <PerspectiveCamera ref={cameraRef} fov={75} aspect={sizes.width/sizes.height}/>
        // {<OrthographicCamera ref={cameraRef}/>}
      )
}

export default Camera
