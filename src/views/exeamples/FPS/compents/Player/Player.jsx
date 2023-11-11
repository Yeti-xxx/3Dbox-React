import {RigidBody, useRapier } from '@react-three/rapier'
import React, { memo, useRef } from 'react'
import * as THREE from 'three'
import { usePerson } from '../../hooks/usePerson'
import { useFrame } from '@react-three/fiber'
import * as RAPIER from '@dimforge/rapier3d-compat'

// 定义存储移动方向状态的变量
const MOVE_SPEED = 6
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

const Player = memo(() => {
    // 获取玩家
    const playRef = useRef()
    const { forward, backward, left, right, jump } = usePerson()
    const rapier = useRapier()
    const doJump = () => {
        playRef.current.setLinvel({ x: 0, y: 8  , z: 0 })
    }
    useFrame((state) => {
        if (!playRef.current) {
            return
        }
        const veclocity = playRef.current.linvel()

        frontVector.set(0, 0, backward - forward)
        sideVector.set(left - right, 0, 0)
        direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVE_SPEED).applyEuler(state.camera.rotation)

        playRef.current.wakeUp()
        playRef.current.setLinvel({
            x: direction.x, y: veclocity.y, z: direction.z
        })

        // jump
        const world = rapier.world
        const ray = world.castRay(new RAPIER.Ray(playRef.current.translation(), { x: 0, y: -1, z: 0 }))
        const ground = ray && ray.collider && Math.abs(ray.toi) <= 1

        if (jump && ground) {
            doJump()
        }

        const {x,y,z} = playRef.current.translation()
        state.camera.position.set(x,y,z)


    })



    return (
        <>
            <RigidBody position={[0, 1, 2]} ref={playRef}>
                <mesh>
                    <capsuleGeometry mass={1} args={[0.75, 0.5]} lockRotation/>
                </mesh>
            </RigidBody>
        </>
    )
})

export default Player