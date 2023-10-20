import PropTypes from 'prop-types'
import React, { forwardRef, memo, useCallback, useState } from 'react'
import { ParamWrapper } from './style'
// name + input 组件
const index = forwardRef((props, ref) => {
    const { title } = props
    const [inputValue, setInputValue] = useState(1)
    // 向外暴露用于获取值的方法
    const getInputCode = useCallback(() => {
        return inputValue
    })
    const handleInputChange = useCallback((event) => {
        const reg = new RegExp('^[0-9]*$')
        // 匹配是否为数字
        if (reg.test(event.target.value)) {
            // 更新状态变量 inputValue
            setInputValue(event.target.value);
        }
    })
    return (
        <ParamWrapper>
            <div className="params">
                <div className="name" onClick={getInputCode}>{title}</div>
                <div className="input" onChange={handleInputChange}>
                    <input type="text" ref={ref}/>
                </div>
            </div>
        </ParamWrapper>
    )
})

index.propTypes = {
    title: PropTypes.string
}

export default index