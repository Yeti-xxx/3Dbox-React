import { createSlice } from "@reduxjs/toolkit";

const controlSlice = createSlice({
    name: 'control',
    initialState: {
        showParams: false
    },
    reducers: {
        changeShowParamsAction(state, {payload}) {
            state.showParams = payload
        }
    }
})

export const {
    changeShowParamsAction
} = controlSlice.actions

export default controlSlice.reducer