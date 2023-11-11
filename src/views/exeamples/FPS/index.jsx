import React, { memo } from 'react'
import { FPSWrapper } from './style'
import { Canvas } from '@react-three/fiber'
import MySky from './compents/sky/MySky'
import MyGround from './compents/Ground/MyGround'
import { PointerLockControls } from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import Player from './compents/Player/Player'

const index = memo(() => {
  return (
    <FPSWrapper>
      <div className="aim"></div>
      <Canvas camera={{ fov: 45 ,position:[0,5,0]}}>
        <ambientLight intensity={1.5} />
        <PointerLockControls />
        {/* 引入物理系统 */}
        <Physics gravity={[0, -20, 0]}>
          {/* 地面 */}
          <MyGround />
          {/* 玩家 */}
          <Player/>
          <RigidBody>
            <mesh position={[0, 3, -5]}> <boxGeometry /> </mesh>
          </RigidBody>
        </Physics>
        <MySky />
      </Canvas>
    </FPSWrapper>
  )
})

export default index