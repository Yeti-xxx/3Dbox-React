import React, { memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { GUI } from 'dat.gui';
import { MeshArray } from '../../utils/MeshArraySelection'
const Mymesh = memo((props) => {
    const { MeshObj = MeshArray[0], guiShow = true } = props
    const meshRef = useRef();
    useEffect(() => {
        if (guiShow) {
            const gui = new GUI();
        }
    }, [MeshObj])
    return (
        <mesh ref={meshRef}>
            <MeshObj.Geometry/>
            <meshStandardMaterial />
        </mesh>
    )
})
Mymesh.propTypes = {
    MeshObj: PropTypes.object,
    guiShow: PropTypes.bool
}
export default Mymesh
