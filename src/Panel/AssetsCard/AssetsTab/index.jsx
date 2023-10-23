import PropTypes from 'prop-types'
import { Canvas } from '@react-three/fiber'
import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { AssetsTabWrapper } from './style'
// 组件引入
import MyGltf from '../../../BaseComponent/MyGltf/index'
import Mymesh from '../../../BaseComponent/Mymesh/Mymesh'
// 引入Action
import { changeShowParamsAction} from '../../../store/modules/control'
import {changToParamObjAction } from '../../../store/modules/cube'
const index = memo((props) => {
    // 接收父组件传来的cube信息
    const { Obj } = props
    const dispatch = useDispatch()
    // 单击模型事件
    const ClickHandle = useCallback(() => {
        dispatch(changeShowParamsAction(true))
        dispatch(changToParamObjAction(Obj))
    }, [])
    return (
        <AssetsTabWrapper>
            <div className="cube" onClick={ClickHandle}>
                <Canvas camera={{ position: [2, 2, 2] }}>
                    {
                        Obj.type === 'Geometry' ?
                            <Mymesh MeshObj={Obj} guiShow={false} /> : <MyGltf Obj={Obj} />
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