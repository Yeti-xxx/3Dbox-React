import React, { memo } from 'react'
import MyCanvas from './BaseComponent/MyCanvas/index'
import AssetsCard from './Panel/AssetsCard/index'
import OptionCard from './Panel/OptionCard/index'
const App = memo(() => {
  return (
    <div>
      <AssetsCard/>
      <MyCanvas/>
      <OptionCard/>
    </div>
  )
})

export default App