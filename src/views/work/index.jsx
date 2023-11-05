import React, { memo } from 'react'
import AssetsCard from '../../Panel/AssetsCard/index'
import MyCanvas from '../../BaseComponent/MyCanvas/index'
import OptionCard from '../../Panel/OptionCard/index'
import { shallowEqual, useSelector } from 'react-redux'
const index = memo(() => {
    const { showParams } = useSelector((state) => ({
        showParams: state.control.showParams,
    }), shallowEqual)
    return (
        <div>
            <AssetsCard />
            <MyCanvas />
            {showParams && <OptionCard />}
        </div>
    )
})

export default index