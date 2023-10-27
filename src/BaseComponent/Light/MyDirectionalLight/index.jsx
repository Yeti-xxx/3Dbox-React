import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { DirectionalLightHelper } from "three"
import { useHelper } from "@react-three/drei";
import { useRef } from 'react'

const index = memo((props) => {
    const directionRef = useRef()
    useHelper(directionRef,DirectionalLightHelper)
    return (
        <group>
            <directionalLight ref={directionRef} intensity={1} position={[5, 5, 5]} />
        </group>
    )
})

index.propTypes = {}

export default index