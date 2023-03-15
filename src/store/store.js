import {configureStore} from '@reduxjs/toolkit'
import Numbers from '../Slices/Numbers'
import Userdata from '../Slices/Userslice'
import cakeData from '../Slices/Cakeslice'
import TodoReducer from '../Slices/Todoslice'

const store = configureStore({
    reducer: {
        countnum: Numbers,
        userdata: Userdata,
        cake: cakeData,
        todos: TodoReducer
    }
})

export default store