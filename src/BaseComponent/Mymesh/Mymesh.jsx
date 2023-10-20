import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { GUI } from 'dat.gui';
import { MeshArray } from '../../utils/MeshArraySelection'
import { AxesHelper } from 'three';
const Mymesh = memo((props) => {
    const { MeshObj = MeshArray[0], guiShow = true } = props
    const meshRef = useRef();
    // 记录鼠标是否悬浮在当前模型
    const [hoverFlag, setHoverFlag] = useState(false)
    const hoverHandle = (flag) => {
        if (guiShow) {
            setHoverFlag(flag)
        }
    }
    return (
        <mesh ref={meshRef} onPointerOver={() => hoverHandle(true)} onPointerOut={() => hoverHandle(false)}>
            {hoverFlag && <axesHelper args={[5]} />}
            <MeshObj.Geometry args={MeshObj.args} />
            <meshStandardMaterial color={hoverFlag?'white':'skyblue'} />
        </mesh >
    )
})
Mymesh.propTypes = {
    MeshObj: PropTypes.object,
    guiShow: PropTypes.bool
}
export default Mymesh
