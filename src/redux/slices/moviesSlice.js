import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"allMovie",
    initialState: {
        movieList:[]
    },
    reducers: {

        allMoviesList: (state, action) => {
           state.movieList = [action.payload];
        }
    }
})

export const{ allMoviesList } = moviesSlice.actions;
export default moviesSlice.reducer;
