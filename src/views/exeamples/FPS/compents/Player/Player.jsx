import { RigidBody, useRapier} from '@react-three/rapier'
import React, { memo, useRef ,useState,useEffect} from 'react'
import { usePerson } from '../../hooks/usePerson'
import { useFrame } from '@react-three/fiber'
import Weapon from '../Weapon/Weapon'
import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d-compat"
import * as TWEEN from "@tweenjs/tween.js";

// 定义存储移动方向状态的变量
const MOVE_SPEED = 12
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const rotation = new THREE.Vector3()

const Player = memo(() => {
    // 获取玩家
    const playRef = useRef()
    const { forward, backward, left, right, jump } = usePerson()
    const rapier = useRapier()
    const ObjectRef = useRef()
    const swayingObjectRef = useRef();
    const [swayingAnimation, setSwayingAnimation] = useState(null);
    const [swayingBackAnimation, setSwayingBackAnimation] = useState(null);
    const [isSwayingAnimationFinished, setIsSwayingAnimationFinished] = useState(true);
    const [swayingNewPosition, setSwayingNewPosition] = useState(new THREE.Vector3(-0.005, 0.005, 0));
    const [swayingDuration, setSwayingDuration] = useState(1000);
    const [isMoving, setIsMoving] = useState(false);
    const doJump = () => {
        playRef.current.setLinvel({ x: 0, y: 8, z: 0 })
    }
    useFrame(() => {
        TWEEN.update();
    })
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

        const { x, y, z } = playRef.current.translation()
        state.camera.position.set(x, y, z)

        ObjectRef.current.rotation.copy(state.camera.rotation)
        ObjectRef.current.position.copy(state.camera.position).add(state.camera.getWorldDirection(rotation))

        setIsMoving(direction.length() > 0);

        if (swayingAnimation && isSwayingAnimationFinished) {
            setIsSwayingAnimationFinished(false);
            swayingAnimation.start();
        }
    })


    const setAnimationParams = () => {
        if (!swayingAnimation) return;

        swayingAnimation.stop();
        setIsSwayingAnimationFinished(true);

        if (isMoving) {
            setSwayingDuration(() => 300);
            setSwayingNewPosition(() => new THREE.Vector3(-0.05, 0, 0));
        } else {
            setSwayingDuration(() => 1000);
            setSwayingNewPosition(() => new THREE.Vector3(-0.01, 0, 0));
        }
    }

    const initSwayingObjectAnimation = () => {
        const currentPosition = new THREE.Vector3(0, 0, 0);
        const initialPosition = new THREE.Vector3(0, 0, 0);
        const newPosition = swayingNewPosition;
        const animationDuration = swayingDuration;
        const easing = TWEEN.Easing.Quadratic.Out;

        const twSwayingAnimation = new TWEEN.Tween(currentPosition)
            .to(newPosition, animationDuration)
            .easing(easing)
            .onUpdate(() => {
                swayingObjectRef.current.position.copy(currentPosition);
            });

        const twSwayingBackAnimation = new TWEEN.Tween(currentPosition)
            .to(initialPosition, animationDuration)
            .easing(easing)
            .onUpdate(() => {
                swayingObjectRef.current.position.copy(currentPosition);
            })
            .onComplete(() => {
                setIsSwayingAnimationFinished(true);
            });

        twSwayingAnimation.chain(twSwayingBackAnimation);

        setSwayingAnimation(twSwayingAnimation);
        setSwayingBackAnimation(twSwayingBackAnimation);
    }

    useEffect(() => {
        setAnimationParams();
    }, [isMoving]);

    useEffect(() => {
        initSwayingObjectAnimation();
    }, [swayingNewPosition, swayingDuration]);

    return (
        <>
            <RigidBody position={[0, 1, 2]} ref={playRef}>
                <mesh castShadow>
                    <capsuleGeometry mass={1} args={[0.75, 0.5]} lockRotation />
                </mesh>
            </RigidBody>
            <group ref={ObjectRef}>
                <group ref={swayingObjectRef}>
                    <Weapon position={[0.3, -0.1, 0.3]} scale={0.3} />
                </group>
            </group>
        </>
    )
})

export default Player