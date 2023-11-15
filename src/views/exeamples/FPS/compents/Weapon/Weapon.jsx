import React, { memo } from 'react'
import {WeaponModel} from './WeaponModel'
const Weapon = memo((props) => {
  return (
    <group {...props}>
       <WeaponModel/> 
    </group>
  )
})

export default Weapon