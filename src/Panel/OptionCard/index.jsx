import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { OptionCardWrapper } from './style'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import Param from '../../component/Param/index'
import { changeShowParamsAction } from '../../store/modules/control'
// 选项信息卡，用于模型具体数值输入
const style = memo((props) => {
    const { showParams, toParamObj } = useSelector((state) => ({
        showParams: state.control.showParams,
        toParamObj: state.cube.toParamObj
    }), shallowEqual)
    const dispatch = useDispatch()
    const createClick = useCallback(() => {
        // 关闭当前组件
        dispatch(changeShowParamsAction(false))
    }, [])
    return (
        // GLTF模型直接忽略创建参数
        showParams && toParamObj.type !== 'GLTF' && <OptionCardWrapper>
            <div className="container">
                <div className="cardContext">
                    <div className="title">
                        {
                            toParamObj.name
                        }
                    </div>
                    <div className="paramsContext">
                        {
                            toParamObj.construc.map(item => {
                                const newItme = item.split('-')
                                return (
                                    <Param title={newItme[1]} key={item} />
                                )
                            })
                        }
                    </div>
                    <div className="createBtn" onClick={e => createClick()}>
                        create
                    </div>
                </div>
            </div>
        </OptionCardWrapper>
    )
})

style.propTypes = {
    showCard: PropTypes.bool,   //隐藏或显示选项信息卡
    cubeObj: PropTypes.object   //通过cubeObj获取模型的构造信息

}

export default style