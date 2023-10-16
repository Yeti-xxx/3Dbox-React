import React, { memo, useEffect, useRef } from 'react'
import { GUI } from 'dat.gui';
import { useFrame } from '@react-three/fiber';
const Mymesh = memo(() => {
    const meshRef = useRef();
    useEffect(() => {
        const gui = new GUI();
        console.log(meshRef.current);
        gui.add(meshRef.current.position, 'x', -5, 5)
    })


    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
        </mesh>
    )
})

export default Mymesh