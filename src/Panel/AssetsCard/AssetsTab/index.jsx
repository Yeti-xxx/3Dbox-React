import PropTypes from 'prop-types'
import { Canvas } from '@react-three/fiber'
import React, { memo, useRef } from 'react'
import { AssetsTabWrapper } from './style'
import MyGltf from '../../../BaseComponent/MyGltf/index'
const index = memo((props) => {
    // 接收父组件传来的cube信息
    const { Obj } = props
    const meshRef = useRef()
    return (
        <AssetsTabWrapper>
            <div className="cube">
                <Canvas camera={{ position: [2, 2, 2] }}>
                    {
                        Obj.type === 'Geometry' ?
                            <mesh ref={meshRef}>
                                {
                                   <Obj.Geometry></Obj.Geometry>
                                }
                                <meshStandardMaterial />
                                <ambientLight color="skyblue" />
                            </mesh> : <MyGltf Obj={Obj}/>
                    }
                </Canvas>
            </div>
        </AssetsTabWrapper>
    )
})

index.propTypes = {
    cubeObj: PropTypes.object
}

export default index