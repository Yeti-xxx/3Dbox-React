import { createSlice } from "@reduxjs/toolkit";
// 引入uuid
import { v4 as uuidv4 } from 'uuid'
const cubeSlice = createSlice({
    name: 'cube',
    initialState: {
        // 用于接收从创建面板传来的cube数据
        cubeArray: [],
        // 向param面板传入的obj
        toParamObj: {
        },
        // 存储全局的cube数据
        meshGlobalArray:[],
        orbitControlsShow:true
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
            if (!payload.uuid) {
                payload.uuid = uuidv4()
            }
            state.meshGlobalArray.push(payload[0]?payload[0]:payload)
            // state.cubeArray = []
            // state.toParamObj = []
        },
        changeToOrbitControlsShow(state,{payload}){
            state.orbitControlsShow = payload
        }
    }

})

export const {
    changeCubeArrayAction,
    changToParamObjAction,
    changeToMeshGlobaArray,
    changeToOrbitControlsShow
} = cubeSlice.actions
export default cubeSlice.reducer