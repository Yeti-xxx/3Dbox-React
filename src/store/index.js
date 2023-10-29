import { configureStore } from '@reduxjs/toolkit'
import controlReducer from './modules/control'
import cubeReducer from './modules/cube'
import lightsReducer from './modules/lights'
const store = configureStore({
    reducer: {
        control: controlReducer,
        cube: cubeReducer,
        lights: lightsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store