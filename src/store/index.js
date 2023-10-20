import { configureStore } from '@reduxjs/toolkit'
import controlReducer from './modules/control'
import cubeReducer from './modules/cube'
const store = configureStore({
    reducer: {
        control: controlReducer,
        cube: cubeReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store