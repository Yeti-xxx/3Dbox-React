import { Canvas } from '@react-three/fiber'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import Mymesh from '../Mymesh/Mymesh'
import MyGltf from '../MyGltf/index'
import TestMesh from '../../test/Mymesh'
import { MyCanvasWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeToMeshGlobaArray } from '../../store/modules/cube'

const index = memo(() => {
    const dispatch = useDispatch()
    //获取cubeArray
    const { cubeArray, meshGlobalArray } = useSelector((state) => ({
        cubeArray: state.cube.cubeArray,
        meshGlobalArray: state.cube.meshGlobalArray
    }), shallowEqual)
    const [cubeArrayState, setCubeArrayState] = useState([])
    // 监听cubeArray
    useEffect(() => {
        const newArray = filterCubeArray(cubeArray);
        setCubeArrayState([...newArray])
    }, [cubeArray])
    // cubeArray结构相对复杂，在本组件内新建一个状态接收处理后的数据
    const filterCubeArray = useCallback((cubeArray) => {
        if (cubeArray.length === 0) {
            return []
        }
        const temp = []
        cubeArray.map(item => {
            const cubeObj = {
                args: [],
                Geometry: ''
            }
            temp.push(cubeObj)
            item.map(item2 => {
                item2.Geometry ? temp[temp.length - 1].Geometry = item2.Geometry : temp[temp.length - 1].args.push(item2.value)
                if (item2.uuid) {
                    temp[temp.length - 1].uuid = item2.uuid
                }
            })
            dispatch(changeToMeshGlobaArray(temp))
        })
        return temp
    })
    return (
        <MyCanvasWrapper>
            <div className='MyCanvasContainer'>
                <Canvas camera={{ position: [5, 5, 5] }}>
                    <gridHelper args={[10000, 10000, '#903c48', '#4d4d4d']} />
                    <OrbitControls />
                    <ambientLight color="weight" intensity={1} />
                    {
                        meshGlobalArray.map((item) => {
                            if (item.Geometry) {
                                return (
                                    <Mymesh uuid={item.uuid} MeshObj={item} key={item.uuid}></Mymesh>
                                )
                            }
                            if (item.type === 'GLTF') {
                                return (
                                    // <MyGltf uuid={uuid} Obj={item} key={uuid}></MyGltf>
                                    <MyGltf uuid={item.uuid} Obj={item} key={item.uuid}></MyGltf>
                                )
                            }
                        })
                    }
                </Canvas>
            </div>
        </MyCanvasWrapper>
    )
})

export default index