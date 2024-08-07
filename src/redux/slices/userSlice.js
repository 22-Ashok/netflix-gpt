import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:'userInfo',
    initialState:null,

    reducers:{

        signInUser:(state,action)=>{
           state = action.payload
        } ,

        signOutUser:(state)=>{
            state = null
        }
    }
})

export const{signInUser, signOutUser} = userSlice.actions
export default userSlice.reducer 
