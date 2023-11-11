import React, { memo } from 'react'
import { Sky } from '@react-three/drei'

const MySky = memo(() => {
  return (
    <>
      <Sky sunPosition={[100,100,100]}/>
    </>
  )
})

export default MySky