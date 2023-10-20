import React, { memo, useEffect } from 'react'
import MyCanvas from './BaseComponent/MyCanvas/index'
import AssetsCard from './Panel/AssetsCard/index'
import OptionCard from './Panel/OptionCard/index'
import { shallowEqual, useSelector } from 'react-redux'
const App = memo(() => {
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

export default App