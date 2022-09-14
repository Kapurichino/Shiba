import React from 'react'
import Shiba from './Shiba'
import {Canvas, useFrame, useThree, useLoader} from '@react-three/fiber';
import {OrbitControls, Stars, PerspectiveCamera, useTexture, Cloud, useCubeTexture, Text3D, Center, PresentationControls, Plane} from '@react-three/drei';
import styled from 'styled-components';
import Camera from './Camera';
import { Color } from 'three';
import Floor from './Plane';
import { Physics } from '@react-three/cannon';
import Light from './Light';

const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
`

const CanvasContainer = styled.div`
    width:50%;
    height: 100vh;
`

const ContentContainer = styled.div`
    width:50%;
    height:100vh;
    background: linear-gradient(135deg, #f12711, #f5af19);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-size: 3rem;
    font-family: 'Playfair Display', serif;
`

const Content = styled.p`
    font-size: 1.5rem;
    font-family: 'Playfair Display', serif;
`

const sizes={
    width : window.innerWidth,
    height : window.innerHeight
}

const Model = () => {
  return (
    <Container>
        <CanvasContainer>
            <Canvas shadows dpr={2}>
                <color attach='background' args={['#0d1903']}/>
                <Light/>
                <Camera sizes={sizes}/>
                <OrbitControls maxPolarAngle={Math.PI/3} minPolarAngle={Math.PI/3} enableZoom={false}/>
                <Physics gravity={[0, -4, 0]}>
                    <Floor/>
                    <Shiba/>
                    {/* <RigidBody position={[0, -1, 0]} type="fixed" colliders="false">
                        <CuboidCollider restitution={0.1} args={[1000, 1, 1000]} />
                    </RigidBody> */}
                </Physics>
            </Canvas>
        </CanvasContainer>
        <ContentContainer>
            <Title>
                Yes, here's adorable shiba.
            </Title>
            <Content>
                Hi, This Web Site is the purpose of practice 3D Object Controls.
            </Content>
        </ContentContainer>
    </Container>
  )
}

export default Model
