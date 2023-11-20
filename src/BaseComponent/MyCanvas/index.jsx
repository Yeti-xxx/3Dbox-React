import { Canvas } from '@react-three/fiber'
import React, { memo, useCallback, useEffect } from 'react'
import { OrbitControls } from '@react-three/drei'
import Mymesh from '../Mymesh/Mymesh'
import MyGltf from '../MyGltf/index'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RemoveToMeshGlobaArray, changeToMeshGlobaArray } from '../../store/modules/cube'
import { changeToLightsGlobaArray } from '../../store/modules/lights'
import { MyCanvasWrapper } from './style'
import MyDirectionalLight from '../Light/MyDirectionalLight/index'
import MypointLight from '../Light/MyPointLight/index'

const index = memo(() => {
    const dispatch = useDispatch()
    //获取cubeArray
    const { cubeArray, meshGlobalArray, orbitControlsShow, lightsArray, lightsGlobaArray } = useSelector((state) => ({
        cubeArray: state.cube.cubeArray,
        meshGlobalArray: state.cube.meshGlobalArray,
        orbitControlsShow: state.cube.orbitControlsShow,
        lightsArray: state.lights.lightsArray,
        lightsGlobaArray: state.lights.lightsGlobaArray
    }), shallowEqual)
    // 监听cubeArray
    useEffect(() => {
        filterArray(cubeArray, changeToMeshGlobaArray)
    }, [cubeArray])
    useEffect(() => {
        filterArray(lightsArray, changeToLightsGlobaArray)
    }, [lightsArray])
    // cubeArray结构相对复杂，在本组件内新建一个状态接收处理后的数据
    const filterArray = useCallback((cubeArray, reducerFn) => {
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
            dispatch(reducerFn(temp))
        })
        return temp
    })
    const lightsCreate = (item) => {
        // eslint-disable-next-line default-case
        switch (item.type) {
            case 'MyDirectionalLight':
                return <MyDirectionalLight args={item.args} />
            case 'MyPointLight':
                return <MypointLight args={item.args} />
        }
    }
    return (
        <MyCanvasWrapper>
            <div className='MyCanvasContainer'>
                <Canvas camera={{ position: [5, 5, 5] }}>
                    <gridHelper args={[10000, 10000, '#903c48', '#4d4d4d']} />
                    {orbitControlsShow && <OrbitControls />}
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
                                    <MyGltf uuid={item.uuid} Obj={item} key={item.uuid}></MyGltf>
                                )
                            }
                        })
                    }
                    {
                        lightsGlobaArray.map(item => {
                            return (
                                lightsCreate(item)
                            )
                        })
                    }
                </Canvas>
            </div>
        </MyCanvasWrapper>
    )
})

export default index