import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import React, { memo } from 'react'
import { TestWrapper } from './style'
import Mymesh from './Mymesh'
const test = memo(() => {
    return (
        <TestWrapper>
            <div className='testContainer'>
                <Canvas camera={{ position: [5, 4, 5] }} scene={['skyblue']}>
                    <gridHelper args={[20, 20, '#903c48', '#4d4d4d']} />
                    <OrbitControls />
                    <directionalLight color="skyblue" position={[0, 0, 5]} />
                    <Mymesh>
                    </Mymesh>
                    <Mymesh>
                    </Mymesh>
                </Canvas>
            </div>
        </TestWrapper>
    )
})

export default test