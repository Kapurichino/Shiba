import React from 'react'
import Shiba from './Shiba'
import {Canvas, useFrame, useThree, useLoader} from '@react-three/fiber';
import {OrbitControls, Stars, PerspectiveCamera, useTexture, Cloud, useCubeTexture, Text3D, Center} from '@react-three/drei';
import styled from 'styled-components';
import Camera from './Camera';
import { Color } from 'three';

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
            <Canvas shadows >
                <color attach='background' args={['#f0f0f0']} camera={{ position: [2, 1, 1], near: 15, far: 30, fov: 60 }}/>
                <ambientLight intensity={0.5} />
                <directionalLight position={[-10, 10, 5]} shadow-mapSize={[256, 256]} shadow-bias={-0.0001} castShadow>
                <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10]} />
                </directionalLight>

                <OrbitControls autoRotate autoRotateSpeed={1} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                <Shiba/>
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
