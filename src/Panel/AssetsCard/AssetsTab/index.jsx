import PropTypes from 'prop-types'
import { Canvas } from '@react-three/fiber'
import React, { memo, useCallback, useRef } from 'react'
import { AssetsTabWrapper } from './style'
import MyGltf from '../../../BaseComponent/MyGltf/index'
import { changeShowParamsAction } from '../../../store/modules/control'
import { useDispatch } from 'react-redux'
const index = memo((props) => {
    const dispatch = useDispatch()
    // 单击模型事件
    const ClickHandle = useCallback(() => {
        dispatch(changeShowParamsAction(true))
    }, [])
    // 接收父组件传来的cube信息
    const { Obj } = props
    const meshRef = useRef()
    return (
        <AssetsTabWrapper>
            <div className="cube" onClick={ClickHandle}>
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