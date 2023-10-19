import { createSlice } from "@reduxjs/toolkit";

const cubeSlice = createSlice({
    name: 'cube',
    initialState: {
        // 全局cube数组，存放界面上的cube
        cubeArray: [],
        // 向param面板传入的obj
        toParamObj: {

        }
    },
    reducers: {
        changeCubeArrayAction(state, { payload }) {
            state.cubeArray = payload
        },
        changToParamObjAction(state, { payload }) {
            state.toParamObj = payload
        }
    }

})

export const {
    changeCubeArrayAction,
    changToParamObjAction
} = cubeSlice.actions
export default cubeSlice.reducer