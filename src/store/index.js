import { configureStore } from '@reduxjs/toolkit'
import controlReducer from './modules/control'
import cubeReducer from './modules/cube'
const store = configureStore({
    reducer: {
        control: controlReducer,
        cube: cubeReducer
        
    }
})

export default store