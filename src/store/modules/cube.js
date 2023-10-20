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
            state.cubeArray.push([])
            payload.map(item => {
                // 传入cube参数
                state.cubeArray[state.cubeArray.length - 1].push(item)
            })
            // 传入需要创建的cube类型
            state.cubeArray[state.cubeArray.length - 1].push(state.toParamObj)
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