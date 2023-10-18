import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { OptionCardWrapper } from './style'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import Param from '../../component/Param/index'
import { changeShowParamsAction } from '../../store/modules/control'
// 选项信息卡，用于模型具体数值输入
const style = memo((props) => {
    const { showParams } = useSelector((state) => ({
        showParams: state.control.showParams
    }), shallowEqual)
    const dispatch = useDispatch()
    const {
        cubeObj = {
            // 立方体
            Geometry: 'BoxGeometry',
            type: 'Geometry',
            name: '立方体',
            construc: ['width-宽度', 'height-高度', 'depth-深度'],
            imgSrc: '../../public/cuebImgSelection/BoxGeometry.jpg'
        } } = props
    const createClick = useCallback(() => {
        // 关闭当前组件
        dispatch(changeShowParamsAction(false))
    }, [])
    return (
        showParams && <OptionCardWrapper>
            <div className="container">
                <div className="cardContext">
                    <div className="title">
                        {
                            cubeObj.name
                        }
                    </div>
                    <div className="paramsContext">
                        {
                            cubeObj.construc.map(item => {
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