import React, { memo } from 'react'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { WelComWrapper } from './style'
import { Link } from 'react-router-dom'

const index = memo(() => {
  return (
    <WelComWrapper>
      <Canvas className='WelComeCanvas'>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight color={'rgba(252,70,107,1)'}
          position={[10, 10, 10]}
          angle={0.15} penumbra={1} decay={0} intensity={15} />
        <pointLight color={'rgba(63,94,251,1)'} position={[-10, -10, -10]} decay={0} intensity={8} />
        <Box position={[3.2, 0, 0]} />
      </Canvas>
      <div className="SelectContainer">
        <div className="selection">
          <Link to={"/work"}>New Work</Link>
        </div>
        <div className="selection">
          <Link to={"/exeamples/FPS"}>Exeamples</Link>
        </div>
      </div>
    </WelComWrapper>
  )
})

export default index


function Box(props) {
  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.y += 0.003
    ref.current.rotation.x += 0.003
  })
  return (
    <mesh
      {...props}
      ref={ref}
    >
      <boxGeometry args={[3.3, 3.3, 3.3]} />
      <meshStandardMaterial />
    </mesh>
  )
}

