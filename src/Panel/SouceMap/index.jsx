import React, { memo, useEffect } from 'react'
import { SourceMapWrapper } from './style'
import { Card, Button } from 'antd'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { RemoveToMeshGlobaArray, changeToClickCubeId } from '../../store/modules/cube'
const index = memo(() => {
  const { meshGlobalArray } = useSelector((state) => ({
    meshGlobalArray: state.cube.meshGlobalArray
  }), shallowEqual)
  const dispatch = useDispatch()
  const removeMesh = (index) => {
    dispatch(RemoveToMeshGlobaArray(index))
  }
  const clickHandle = (uuid) => {
    dispatch(changeToClickCubeId(uuid))
  }
  return (
    <SourceMapWrapper>
      <div className="container">
        {
          meshGlobalArray?.map((item, index) => {
            return (
              <Card
                style={{
                  width: 210,
                  height: 60,
                  backgroundColor: '#c1c1c1'
                }}
                key={item.uuid}
                onClick={e=>clickHandle(item.uuid)}
              >
                <span>{item.Geometry || item.name}</span>
                <Button type="text" onClick={e => {
                  e.stopPropagation()
                  removeMesh(index)
                }}>
                  删除
                </Button>
              </Card>
            )
          })
        }
      </div>
    </SourceMapWrapper>
  )
})

export default index