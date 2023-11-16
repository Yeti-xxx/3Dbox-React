import React, { memo } from 'react'
import { DirectionalLightHelper, PointLightHelper } from "three"
import { useHelper } from "@react-three/drei";
import { useRef } from 'react'
import MyDragControls from '../../MyDragControls/index'
import { useThree } from "@react-three/fiber"

const index = memo((props) => {
    const {color='#3a5f0f',args=[0,0,0,0]} = props
    const { camera, gl, scene } = useThree()
    const directionRef = useRef()
    useHelper(directionRef, PointLightHelper)
    return (
        <MyDragControls ca={camera} gldom={gl.domElement} scene={scene} guiShow={true}>
            <mesh position={[args[0], args[1], args[2]]}>
                <pointLight ref={directionRef} intensity={100} position={[0,0,0]} color={color}  />
                <boxGeometry></boxGeometry>
            </mesh>
        </MyDragControls>
    )
})

index.propTypes = {}
export default index