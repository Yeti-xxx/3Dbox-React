import React, { memo, useCallback, useState } from 'react'
import { AssestCardWrapper } from './style'
import classnames from 'classnames'
import AssestTab from './AssetsTab/index'
// mesh选项数组
import { MeshArray } from '../../utils/MeshArraySelection'
import { modelArr } from '../../utils/gltf'
const index = memo(() => {
  const [clickFlag, setClickFlag] = useState(0)
  const tabHandle = useCallback((flag) => {
    setClickFlag(flag)
  },[])
  return (
    <AssestCardWrapper>
      <div className='CardContainer'>
        <div className='tabs'>
          <span className={classnames({ 'TabActive': clickFlag === 0 })} onClick={e => tabHandle(0)}>基础立方体</span>
          <span className={classnames({ 'TabActive': clickFlag === 1 })} onClick={e => tabHandle(1)}>基础模型</span>
        </div>
        {
          clickFlag === 0 ? <div className="cubes">
            {
              MeshArray.map((item) => {
                return (
                  <AssestTab key={item.name} Obj={item}></AssestTab>
                )
              })
            }
          </div> : <div className="cubes">
            {
              modelArr.map((item) => {
                return (
                  <AssestTab key={item.name} Obj={item}></AssestTab>
                )
              })
            }
          </div>
        }
      </div>
    </AssestCardWrapper>
  )
})

export default index