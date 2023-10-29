import PropTypes from 'prop-types'
import React, { memo, useCallback, useRef } from 'react'
import { OptionCardWrapper } from './style'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import Param from '../../component/Param/index'
import { changeShowParamsAction } from '../../store/modules/control'
import { changeCubeArrayAction } from '../../store/modules/cube'
import { changeLightsArray } from '../../store/modules/lights'
import { v4 as uuidv4 } from 'uuid'
// 选项信息卡，用于模型具体数值输入
const style = memo((props) => {
    const { toParamObj, toParamLightObj } = useSelector((state) => ({
        showParams: state.control.showParams,
        toParamObj: state.cube.toParamObj,
        toParamLightObj: state.lights.toParamLightObj
    }), shallowEqual)
    let param = toParamLightObj.type? toParamLightObj : toParamObj
    console.log(param);
    const ParamRefArray = useRef([])
    const dispatch = useDispatch()
    const createClick = useCallback(() => {
        ParamRefArray.current.push({ uuid: uuidv4() })
        // 关闭当前组件
        dispatch(changeShowParamsAction(false))
        if (param.type === 'Geometry') {
            dispatch(changeCubeArrayAction(ParamRefArray.current))
        }
        if (param.type === 'Light') {
            dispatch(changeLightsArray(ParamRefArray.current))
        }
    }, [])
    const pushParamRef = (dom) => {
        // 向子组件直接传函数，获取的dom参数就是子组件内部的ref
        try {
            ParamRefArray.current.push(dom)
        } catch (error) {

        }
    }
    return (
        // GLTF模型直接忽略创建参数
        param.type !== 'GLTF' && <OptionCardWrapper>
            <div className="container">
                <div className="cardContext">
                    <div className="title">
                        {
                            param.name
                        }
                    </div>
                    <div className="paramsContext">
                        {
                            param.construc.map(item => {
                                const newItme = item.split('-')
                                return (
                                    <Param title={newItme[1]} key={item} ref={pushParamRef} />
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