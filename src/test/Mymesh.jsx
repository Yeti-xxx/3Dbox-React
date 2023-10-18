import React, { Suspense, memo} from 'react'
import { useGLTF,Clone} from '@react-three/drei';
import { modelArr } from '../utils/gltf';
const Mymesh = memo(() => {
    const { scene } = useGLTF(modelArr[0].source)
    return (
        <Suspense>
            <Clone object={scene} />
        </Suspense>
    )
})

export default Mymesh








