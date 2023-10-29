import React, { memo, useCallback, useState } from 'react'
import { AssestCardWrapper } from './style'
import classnames from 'classnames'
import AssestTab from './AssetsTab/index'
// mesh选项数组
import { MeshArray } from '../../utils/MeshArraySelection'
// model选项数组
import { modelArr } from '../../utils/gltf'
// 灯光选项数组
import { lightArray } from '../../utils/lights'
import { useRef } from 'react'
const index = memo(() => {
  const [clickFlag, setClickFlag] = useState(0)
  const tabHandle = useCallback((flag) => {
    setClickFlag(flag)
  }, [])
  const tabsRef = useRef()
  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      tabsRef.current.scrollLeft += 20;
    }
    if (e.deltaY < 0) {
      tabsRef.current.scrollLeft -= 20;
    }
  }
  return (
    <AssestCardWrapper>
      <div className='CardContainer'>

        <div className='tabs' ref={tabsRef} onMouseEnter={() => {
          console.log(1);
        }} onWheel={(e) => handleScroll(e)}>
          <span className={classnames({ 'TabActive': clickFlag === 0 })} onClick={e => tabHandle(0)}>基础立方体</span>
          <span className={classnames({ 'TabActive': clickFlag === 1 })} onClick={e => tabHandle(1)}>基础模型</span>
          <span className={classnames({ 'TabActive': clickFlag === 2 })} onClick={e => tabHandle(2)}>灯光</span>
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
          </div> : null
        }
        {
          clickFlag === 1 ? <div className="cubes">
            {
              modelArr.map((item) => {
                return (
                  <AssestTab key={item.name} Obj={item}></AssestTab>
                )
              })
            }
          </div> : null
        }
        {
          clickFlag === 2 ? <div className="cubes">
            {
              lightArray.map((item) => {
                return (
                  <AssestTab key={item.name} Obj={item}></AssestTab>
                )
              })
            }
          </div> : null
        }
      </div>
    </AssestCardWrapper>
  )
})

export default index