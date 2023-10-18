import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { OptionCardWrapper } from './style'
import Param from '../../component/Param/index'
// 选项信息卡，用于模型具体数值输入
const style = memo((props) => {
    const { showCard = false,
        cubeObj = {
            // 立方体
            Geometry: 'BoxGeometry',
            type: 'Geometry',
            name: '立方体',
            construc: ['width-宽度', 'height-高度', 'depth-深度'],
            imgSrc: '../../public/cuebImgSelection/BoxGeometry.jpg'
        } } = props
    return (
        <OptionCardWrapper>
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
                                    <Param title={newItme[1]} key={item}/>
                                )
                            })
                        }
                    </div>
                    <div className="createBtn">
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