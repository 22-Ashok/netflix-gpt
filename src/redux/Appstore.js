import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import movieReducer from './slices/moviesSlice'

const appStore = configureStore({

    reducer: {
       userInfo:userReducer,
       allMovie:movieReducer
    }
})

export default appStore 