import React, { Suspense, memo, useCallback, useEffect, useRef, useState } from 'react'
import { Clone, useGLTF } from '@react-three/drei';
import MyGui from '../MyGui/index'
const index = memo((props) => {
    const { Obj, uuid } = props
    const { scene } = useGLTF(Obj.source)
    const [showGui, setShowGui] = useState(false)
    const CloneRef = useRef()
    const clickHandle = useCallback(() => {
        setShowGui(!showGui)
    })
    return (
        <Suspense>
            <Clone object={scene} ref={CloneRef} onClick={e => {
                if (uuid) {
                    e.stopPropagation()
                    clickHandle()
                }
            }}>
                {uuid && showGui && <MyGui meshRef={CloneRef} />}
            </Clone>
        </Suspense>
    )
})

index.propTypes = {}

export default index