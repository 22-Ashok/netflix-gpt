import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({

   name:"userInfo",
   initialState:{
      userInfo: {},
      error: null              
   },
   reducers: {

    signinInfo: (state,action) => {
      state.userInfo = action.payload
         
    }, 

    signoutInfo: (state) => {
       state.userInfo = null;
    },

    errorPage: (state,action) => {
       state.error = action.payload
    }
   }
})

export const{ signinInfo, signoutInfo, errorPage } = userSlice.actions;
export default userSlice.reducer;