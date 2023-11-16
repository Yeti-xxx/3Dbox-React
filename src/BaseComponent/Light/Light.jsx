import React, { memo } from 'react'
import PropTypes from 'prop-types'
import MyPointLight from './MyPointLight/index'
import MyDirectionLight from './MyDirectionalLight/index'

// Light集中管理
const Light = memo((props) => {
    const { minType } = props
    return
    (
        <>
            lights
        </>
    )
})
Light.propTypes = {
    LightObj: PropTypes.object
}

export default Light