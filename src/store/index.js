import { configureStore } from '@reduxjs/toolkit'
import controlReducer from './modules/control'
const store = configureStore({
    reducer: {
        control: controlReducer
    }
})

export default store