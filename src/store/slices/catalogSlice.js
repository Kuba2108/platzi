
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "../../api/CategoryApi"

export const fetchCategory = createAsyncThunk("catalog/fetchCategory", 
async() => {
    const data = await categoryApi.getCategory()
    return data
 })


const catalogSlice = createSlice({
    name: "catalog",
    initialState: {
        catalogData: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategory.fulfilled, (state, action) => {
           console.log(action, "----action----");
            state.catalogData = action.payload;
     }
    )
  }
})

export const  catalogReducer = catalogSlice.reducer