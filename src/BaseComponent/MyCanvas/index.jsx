import { Canvas } from '@react-three/fiber'
import React, { memo} from 'react'
import { OrbitControls } from '@react-three/drei'
import Mymesh from '../Mymesh/Mymesh'
import TestMesh from '../../test/Mymesh'
import { MyCanvasWrapper } from './style'
const index = memo(() => {

    return (
        <MyCanvasWrapper>
            <div className='MyCanvasContainer'>
                <Canvas camera={{ position: [5, 5, 5] }}>
                    <gridHelper args={[10000, 10000, '#903c48', '#4d4d4d']} />
                    <OrbitControls />
                    <Mymesh></Mymesh>
                    <ambientLight color="weight"  intensity={1}/>
                </Canvas>
            </div>
        </MyCanvasWrapper>
    )
})

export default index