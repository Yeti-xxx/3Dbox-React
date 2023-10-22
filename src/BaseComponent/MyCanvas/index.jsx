import { Canvas } from '@react-three/fiber'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { OrbitControls, useSelect } from '@react-three/drei'
import Mymesh from '../Mymesh/Mymesh'
import TestMesh from '../../test/Mymesh'
import { MyCanvasWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
const index = memo(() => {
    //获取cubeArray
    const { cubeArray } = useSelector((state) => ({
        cubeArray: state.cube.cubeArray,
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
            })
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
                        cubeArrayState.map((item,i) => {
                            return (
                                <Mymesh MeshObj={item} key={i}></Mymesh>
                            )
                        })
                    }
                </Canvas>
            </div>
        </MyCanvasWrapper>
    )
})

export default index