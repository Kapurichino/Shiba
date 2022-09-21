import { usePlane } from '@react-three/cannon'
import { useTexture } from '@react-three/drei';
import React from 'react'

const Floor = () => {
    const [planeRef] = usePlane(()=>({position:[0, -5, 0], rotation:[-Math.PI/2, 0, 0]}));
    const props = useTexture({map:'./texture/floor/Material_2083.jpg'});
    return (
        <mesh receiveShadow ref={planeRef}>
            <planeBufferGeometry attach="geometry" args={[50,50]}/>
            <meshLambertMaterial attach="material" {...props}/>
        </mesh>
    )
}

export default Floor
