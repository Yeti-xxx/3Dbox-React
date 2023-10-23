import { createSlice } from "@reduxjs/toolkit";
const cubeSlice = createSlice({
    name: 'cube',
    initialState: {
        // 用于接收从创建面板传来的cube数据
        cubeArray: [],
        // 向param面板传入的obj
        toParamObj: {
        },
        // 存储全局的cube数据
        meshGlobalArray:[]
    },
    reducers: {
        changeCubeArrayAction(state, { payload }) {
            state.cubeArray.push([])
            payload.map(item => {
                // 传入cube参数
                state.cubeArray[state.cubeArray.length - 1].push(item)
                return null
            })
            // 传入需要创建的cube类型
            state.cubeArray[state.cubeArray.length - 1].push(state.toParamObj)
        },
        changToParamObjAction(state, { payload }) {
            state.toParamObj = payload
        },
        changeToMeshGlobaArray(state,{payload}){
            state.meshGlobalArray.push(payload[0])
            state.cubeArray = []
        }
    }

})

export const {
    changeCubeArrayAction,
    changToParamObjAction,
    changeToMeshGlobaArray
} = cubeSlice.actions
export default cubeSlice.reducer