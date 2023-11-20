import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import AssetsCard from '../../Panel/AssetsCard/index'
import MyCanvas from '../../BaseComponent/MyCanvas/index'
import OptionCard from '../../Panel/OptionCard/index'
import SouceMap from '../../Panel/SouceMap/index'

const index = memo(() => {
    const { showParams } = useSelector((state) => ({
        showParams: state.control.showParams,
    }), shallowEqual)
    return (
        <div>
            <AssetsCard />
            <SouceMap/>
            <MyCanvas />
            {showParams && <OptionCard />}
        </div>
    )
})

export default index