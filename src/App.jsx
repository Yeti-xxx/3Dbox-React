import React, { memo } from 'react'
import MyCanvas from './BaseComponent/MyCanvas/index'
import AssetsCard from './Panel/AssetsCard/index'
const App = memo(() => {
  return (
    <div>
      <AssetsCard/>
      <MyCanvas/>
    </div>
  )
})

export default App