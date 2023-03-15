import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count: 10,
    name: ""
}

const countSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        Increament: (state,action) => {
            state.count++
            state.name = action.payload
        },
        Decreament: (state,action) => {
            state.count--
            state.name = action.payload
        }
    }
})

export default countSlice.reducer
export const counterAction = countSlice.actions
