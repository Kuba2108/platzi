import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsApi from "../../api/Products"
import categoryApi from '../../api/CategoryApi'

export const fetchProducts = createAsyncThunk("products/fetchProducts",
async () => {
    const data = await productsApi.getProducts()
    return data
 }
)
export const fetchProdsByCategory = createAsyncThunk('products/fetchProdsByCategory', 
  async (id) => {
    const data = await categoryApi.getCategoryById(id)
    return data;
  }
 )


const productsSlice = createSlice({
    name: "products",
    initialState: {
        productsData: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.productsData = action.payload;
        })
        builder.addCase(fetchProdsByCategory.fulfilled, (state, action) => {
            state.productsData = action.payload;
        })
    }
})


export const  productReducer = productsSlice.reducer