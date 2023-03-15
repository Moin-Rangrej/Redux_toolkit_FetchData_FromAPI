import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading: false,
    data: [],
    isError: ""
}

export const Fetchusers = createAsyncThunk('users/fetchUsers',
    async() => {
        return await axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data)
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(Fetchusers.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(Fetchusers.fulfilled, (state,action) =>{
            state.loading = false
            state.data = action.payload
            state.isError = ""
        })
        builder.addCase(Fetchusers.rejected, (state,action) => {
            state.loading = false
            state.data = []
            state.isError = action.payload
        })
    }
})

export default userSlice.reducer