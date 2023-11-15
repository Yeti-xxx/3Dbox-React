import React, { memo } from 'react'
import { mesh } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import ground_texture from '../../../../../assets/img/ground_textrue.jpg'
import * as THREE from 'three'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

const MyGround = memo(() => {
    // 引入地面纹理
    const texture = useTexture(ground_texture)
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping

    return (
        <>
            {/* 为地面包裹RigidBody 使得地面可以和物体发生碰撞*/}
            <RigidBody type='fixed' colliders={false}>
                <mesh receiveShadow position={[0, -5, 0]} rotation-x={-Math.PI / 2}>
                    <planeGeometry args={[500, 500]} />
                    <meshStandardMaterial color='gray' map={texture} map-repeat={[50, 50]} />
                </mesh>
                <CuboidCollider args={[500,2,500]} position={[0,-2,0]}/>
            </RigidBody>
        </>
    )
})

export default MyGround