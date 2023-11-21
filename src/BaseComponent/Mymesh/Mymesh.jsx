import React, { memo, useRef, useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MeshArray } from '../../utils/MeshArraySelection'
import MyGui from '../MyGui/index'
import { shallowEqual, useSelector } from 'react-redux'
import MyDragControls from '../MyDragControls/index'
import { useThree } from "@react-three/fiber"
const Mymesh = memo((props) => {
    // 获取相机 render scene
    const { camera, gl, scene } = useThree()
    const { meshGlobalArray,clickCubeId } = useSelector((state) => ({
        meshGlobalArray: state.cube.meshGlobalArray,
        clickCubeId:state.cube.clickCubeId
    }),shallowEqual)
    let { MeshObj = MeshArray[0], guiShow = true, uuid } = props
    if (guiShow) {
        meshGlobalArray.map(item => {
            if (item.uuid === uuid) {
                MeshObj = item
            }
            return null
        })
    }
    const meshRef = useRef();
    // 记录鼠标是否悬浮在当前模型
    const [hoverFlag, setHoverFlag] = useState(false)
    // click状态
    const [clickState, setClickState] = useState(false)
    const hoverHandle = useCallback((flag) => {
        if (guiShow) {
            setHoverFlag(flag)
        }
    })
    const clickHandle = useCallback(() => {
        setClickState(!clickState)
    })
    useEffect(()=>{
        if (clickCubeId===uuid) {
            hoverHandle(true)
            clickHandle()
        }else{
            hoverHandle(false)
            
        }
    },[clickCubeId])
    return (
        <MyDragControls ca={camera} gldom={gl.domElement} scene={scene} guiShow={guiShow}>
            <mesh ref={meshRef}
                onPointerOver={() => hoverHandle(true)}
                onPointerOut={() => hoverHandle(false)}
                onClick={() => clickHandle()}
            >
                {hoverFlag && <axesHelper args={[5]} />}
                <MeshObj.Geometry args={MeshObj.args} />
                <meshStandardMaterial color={hoverFlag ? 'white' : 'skyblue'} />
                {guiShow && clickState && <MyGui meshRef={meshRef} />}
            </mesh >
        </MyDragControls>
    )
})
Mymesh.propTypes = {
    MeshObj: PropTypes.object,
    guiShow: PropTypes.bool
}
export default Mymesh
