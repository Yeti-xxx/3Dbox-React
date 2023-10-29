import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'
const LightSlice = createSlice({
    name: 'lights',
    initialState: {
        lightsArray: [],
        lightsGlobaArray: [],
        toParamLightObj: {
        },
    },
    reducers: {
        changeLightsArray(state, { payload }) {
            state.lightsArray.push([])
            payload.map(item => {
                // 传入cube参数
                state.lightsArray[state.lightsArray.length - 1].push(item)
                return null
            })
            // 传入需要创建的Light类型
            state.lightsArray[state.lightsArray.length - 1].push(state.toParamLightObj)
        },
        changeToLightsGlobaArray(state, { payload }) {
            if (!payload.uuid) {
                payload.uuid = uuidv4()
            }
            state.lightsGlobaArray.push(payload[0] ? payload[0] : payload)
            // 添加type
            state.lightsGlobaArray[0].type = state.toParamLightObj.minType
            state.lightsArray = []
            state.toParamLightObj = []
        },
        changetoParamLightObj(state, { payload }) {
            state.toParamLightObj = payload
        }
    }
})
export const {
    changeLightsArray,
    changeToLightsGlobaArray,
    changetoParamLightObj
} = LightSlice.actions
export default LightSlice.reducer