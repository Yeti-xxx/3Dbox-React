import React, { memo, useState, useRef, useEffect } from 'react'
import { WeaponModel } from './WeaponModel'
import * as TWEEN from '@tweenjs/tween.js'
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"

// 定义武器的反冲力和持续时间
const recoilAmount = 0.02
const recoilDuration = 100
const easing = TWEEN.Easing.Quadratic.Out
const Weapon = memo((props) => {
  const [isShooting, setIsShooting] = useState(false)
  // 为反冲和返回起始位置动画添加了两个 useState 状态
  const [recoilAnimation, setRecoilAnimation] = useState(null)
  const [recoilBackAnimation, setRecoilBackAnimation] = useState(null)
  const weaponRef = useRef()

  const generateRecoilOffset = () => {
    return new THREE.Vector3(
      Math.random() * recoilAmount,
      Math.random() * recoilAmount,
      Math.random() * recoilAmount,
    )
  }

  useEffect(() => {
    document.addEventListener('mousedown', () => {
      setIsShooting(true)
    })
    document.addEventListener('mouseup', () => {
      setIsShooting(false)
    })
  }, [])

  const generateNewPositionOfRecoil = (currentPosition) => {
    const recoilOffset = generateRecoilOffset()
    return currentPosition.clone().add(recoilOffset)
  }

  const initRecoilAnimation = () => {
    const currentPosition = new THREE.Vector3(0.3, -0.1, 0.3)
    const initialPosition =new THREE.Vector3(0.3, -0.1, 0.3)
    const newPosition = generateNewPositionOfRecoil(currentPosition)

    const twRecoilAnimation = new TWEEN.Tween(currentPosition)
      .to(newPosition, recoilDuration)
      .easing(easing)
      .onUpdate(() => {
        weaponRef.current.position.copy(currentPosition)
      })

    const twRecoilBackAnimation = new TWEEN.Tween(currentPosition)
      .to(initialPosition, recoilDuration)
      .easing(easing)
      .onUpdate(() => {
        weaponRef.current.position.copy(currentPosition)
      })

    twRecoilAnimation.chain(twRecoilBackAnimation)

    setRecoilAnimation(twRecoilAnimation)
    setRecoilBackAnimation(twRecoilBackAnimation)
  }

  const startShooting = () => {
    recoilAnimation.start()
  }

  useEffect(() => {
    initRecoilAnimation()
    if (isShooting) {
      startShooting()
    }
  }, [isShooting])

  useFrame(() => {
    if (isShooting) {
      startShooting()
    }
    weaponRef.current.position.copy(new THREE.Vector3(0.3, -0.1, 0.3))
  })

  useFrame(() => {
    TWEEN.update()
  })
  return (
    <group {...props} ref={weaponRef}>
      <WeaponModel />
    </group>
  )
})

export default Weapon