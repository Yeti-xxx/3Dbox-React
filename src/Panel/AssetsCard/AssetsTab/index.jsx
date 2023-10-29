import PropTypes from 'prop-types'
import { Canvas } from '@react-three/fiber'
import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { AssetsTabWrapper } from './style'
import { Tooltip } from 'antd';
// 组件引入
import MyGltf from '../../../BaseComponent/MyGltf/index'
import Mymesh from '../../../BaseComponent/Mymesh/Mymesh'
import MyDirectionalLight from '../../../BaseComponent/Light/MyDirectionalLight/index'
// 引入Action
import { changeShowParamsAction } from '../../../store/modules/control'
import { changToParamObjAction, changeToMeshGlobaArray } from '../../../store/modules/cube'
import { changetoParamLightObj } from '../../../store/modules/lights'
// 引入uuid
import { v4 as uuidv4 } from 'uuid'
const index = memo((props) => {
    // 接收父组件传来的cube信息
    const { Obj } = props
    const dispatch = useDispatch()
    // 单击模型事件
    const ClickHandle = useCallback(() => {
        // 普通立方体模型处理
        if (Obj.type === 'Geometry') {
            dispatch(changeShowParamsAction(true))
            dispatch(changToParamObjAction(Obj))
        } else if (Obj.type === 'GLTF') {   //普通本地模型不需要构建参数 直接向全局数组添加
            dispatch(changeToMeshGlobaArray(Obj))
        }
        switch (Obj.type) {
            case 'Geometry':
                dispatch(changeShowParamsAction(true))
                dispatch(changToParamObjAction(Obj))
                break
            case 'GLTF':
                dispatch(changeToMeshGlobaArray(Obj))
                break
            case 'Light':
                dispatch(changeShowParamsAction(true))
                dispatch(changetoParamLightObj(Obj))
                break
        }
    }, [])
    return (
        <AssetsTabWrapper>
            <div className="cube" onClick={ClickHandle}>
                <Tooltip title={Obj.name}>
                    <Canvas camera={{ position: [2, 2, 2] }}>
                        {
                            Obj.type === 'Geometry' ?
                                <Mymesh MeshObj={Obj} guiShow={false} /> :
                                Obj.type === 'GLTF' ?
                                    <MyGltf Obj={Obj} /> : <MyDirectionalLight />
                        }

                    </Canvas>
                </Tooltip>
            </div>
        </AssetsTabWrapper>
    )
})

index.propTypes = {
    cubeObj: PropTypes.object
}

export default index