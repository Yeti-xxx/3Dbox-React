import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { MeshArray } from '../../utils/MeshArraySelection'
import MyGui from '../MyGui/index'
import { useSelector } from 'react-redux'
const Mymesh = memo((props) => {
    const { meshGlobalArray } = useSelector((state) => ({
        meshGlobalArray: state.cube.meshGlobalArray
    }))
    let { MeshObj = MeshArray[0], guiShow = true, uuid } = props
    if (guiShow) {
        meshGlobalArray.map(item => {
            if (item.uuid === uuid) {
                MeshObj = item
            }
        })
    }
    const meshRef = useRef();
    // 记录鼠标是否悬浮在当前模型
    const [hoverFlag, setHoverFlag] = useState(false)
    // click状态
    const [clickState, setClickState] = useState(false)
    const hoverHandle = (flag) => {
        if (guiShow) {
            setHoverFlag(flag)
        }
    }
    const clickHandle = () => {
        setClickState(!clickState)
    }
    return (
        <mesh ref={meshRef}
            onPointerOver={() => hoverHandle(true)}
            onPointerOut={() => hoverHandle(false)}
            onClick={() => clickHandle()}>
            {hoverFlag && <axesHelper args={[5]} />}
            <MeshObj.Geometry args={MeshObj.args} />
            <meshStandardMaterial color={hoverFlag ? 'white' : 'skyblue'} />
            {guiShow && clickState && <MyGui meshRef={meshRef} />}
        </mesh >
    )
})
Mymesh.propTypes = {
    MeshObj: PropTypes.object,
    guiShow: PropTypes.bool
}
export default Mymesh
