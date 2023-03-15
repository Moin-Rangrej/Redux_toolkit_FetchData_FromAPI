import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    numOfcake : 20
}

const cakeSlice = createSlice({
    name: "cakeData",
    initialState,
    reducers :{
        cakeIncreament : (state) => {
            state.numOfcake = state.numOfcake + 1
        },
        cakeDecreament: (state) =>{
            state.numOfcake = state.numOfcake - 1
        }
    }    
})

export default cakeSlice.reducer
export const cakeAction = cakeSlice.actions