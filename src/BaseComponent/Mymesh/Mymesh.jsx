import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { GUI } from 'dat.gui';
const Mymesh = memo((props) => {
    const {Mymesh} = props
    const meshRef = useRef();
    useEffect(() => {
        const gui = new GUI();
        gui.add(meshRef.current.position, 'x', -5, 5)
    },[Mymesh])
    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
        </mesh>
    )
})
Mymesh.propTypes = {
    MeshObj:PropTypes.object
}
export default Mymesh
