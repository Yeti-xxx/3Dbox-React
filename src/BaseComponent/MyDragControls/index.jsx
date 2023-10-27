import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { extend } from "@react-three/fiber";
import { useState,useCallback,useEffect,useRef} from 'react';
import { useDispatch } from 'react-redux';
import { changeToOrbitControlsShow } from '../../store/modules/cube';
extend({ DragControls });
const index = memo((props) => {
    const { ca, gldom, scene, guiShow } = props
    const [children, setChildren] = useState([])
    const groupRef = useRef()
    const controlsRef = useRef()
    const dipatch = useDispatch()
    // 拖动时隐藏轨道控制器，避免物体拖动时视图也被拖动
    const handleHoverOn = useCallback(() => {
        dipatch(changeToOrbitControlsShow(false))
    })
    // 恢复控制器
    const handleHoverOff = useCallback(() => {
        dipatch(changeToOrbitControlsShow(true))
    })
    useEffect(() => {
        setChildren(groupRef.current.children);
    }, [])
    useEffect(() => {
        if (guiShow) {
            controlsRef.current.addEventListener("hoveron", handleHoverOn)
            controlsRef.current.addEventListener("hoveroff", handleHoverOff)
        }
    }, [children])
    return (
        <group ref={groupRef} >
            <dragControls ref={controlsRef} args={[children, ca, gldom]} />
            {props.children}
        </group>
    )
})

index.propTypes = {}

export default index