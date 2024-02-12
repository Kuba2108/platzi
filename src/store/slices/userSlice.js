import { createSlice } from "@reduxjs/toolkit";




const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: null
    },
    // extraReducers: {}
})


export const  userReducer = userSlice.reducer