import React, { memo } from 'react'
import PropTypes from 'prop-types'
import MyPointLight from './MyPointLight/index'
import MyDirectionLight from './MyDirectionalLight/index'

// Light集中管理
const Light = memo((props) => {
    const { minType } = props.LightObj
    const getLight = (minType) => {
        switch (minType) {
            case 'MyDirectionalLight':
                return <MyDirectionLight {...props}/>
            case 'MyPointLight':
                return <MyPointLight {...props}/>
        }
    }
    return (
        <>
            {
                getLight(minType)
            }
        </>
    )
})
Light.propTypes = {
    LightObj: PropTypes.object
}

export default Light