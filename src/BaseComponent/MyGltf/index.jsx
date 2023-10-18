import React, { Suspense, memo } from 'react'
import { Clone, useGLTF } from '@react-three/drei';
const index = memo((props) => {
    const { Obj } = props
    const {scene} = useGLTF(Obj.source)
    return (
        <Suspense>
            <Clone object={scene} />
        </Suspense>
    )
})

index.propTypes = {}

export default index