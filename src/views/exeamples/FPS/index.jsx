import React, { memo } from 'react'
import { FPSWrapper } from './style'
import { Canvas, useFrame } from '@react-three/fiber'
import MySky from './compents/sky/MySky'
import MyGround from './compents/Ground/MyGround'
import { PointerLockControls } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import Player from './compents/Player/Player'
import Weapon from './compents/Weapon/Weapon'
import * as TWEEN from "@tweenjs/tween.js";

const shadowOffset = 50
const index = memo(() => {
  return (
    <FPSWrapper>
      <div className="aim"></div>
      <Canvas camera={{ fov: 45, position: [0, 5, 0] }} shadows>
        <directionalLight
          castShadow
          intensity={1.8}
          position={[100, 10, 0]}
          shadow-mapSize={4096}
          shadow-camera-top={shadowOffset}
          shadow-camera-bottom={-shadowOffset}
          shadow-camera-left={shadowOffset}
          shadow-camera-right={-shadowOffset}
        />
        <ambientLight intensity={1.5} />
        <PointerLockControls />
        {/* 引入物理系统 */}
        <Physics gravity={[0, -20, 0]}>
          {/* 地面 */}
          <MyGround />
          {/* 玩家 */}
          <Player />
          <RigidBody>
            <mesh castShadow receiveShadow position={[0, 3, -5]}> <boxGeometry /> </mesh>
          </RigidBody>
          <RigidBody>
            <mesh castShadow receiveShadow position={[0, 3, -5]}> <boxGeometry /> </mesh>
          </RigidBody>
          <RigidBody>
            <mesh castShadow receiveShadow position={[0, 3, -5]}> <boxGeometry /> </mesh>
          </RigidBody>
          <RigidBody>
            <mesh castShadow receiveShadow position={[0, 3, -5]}> <boxGeometry /> </mesh>
          </RigidBody>
        </Physics>
        <MySky />
        <Weapon />
      </Canvas>
    </FPSWrapper>
  )
})

export default index