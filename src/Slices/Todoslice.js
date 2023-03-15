import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const Fetchtodos = createAsyncThunk('todo/fetchTodos',
    async() =>{
        // const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        // return response.json()
        return await axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.data)
        // .catch((error) => error)
    }
)



const initialState = {
    loading: true,
    data: [],
    isError: false
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(Fetchtodos.pending,(state) =>{
            state.loading = true
        })
        builder.addCase(Fetchtodos.fulfilled, (state,action) => {
            state.loading = false
            state.data = action.payload
            state.isError = ""
        })
        builder.addCase(Fetchtodos.rejected, (state,action) =>{
            state.loading = false
            state.data = []
            state.isError = action.payload
        })
    }
})

export default todoSlice.reducer