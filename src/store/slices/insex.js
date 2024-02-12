



import {configureStore, combineReducers} from "@reduxjs/toolkit"
import { catalogReducer } from "./catalogSlice"
import { productReducer } from "./productsSlice"
import { userReducer } from "./userSlice"


const rootReducer = combineReducers({
    catalog: catalogReducer,
    products: productReducer,
    user: userReducer,
})

const store = configureStore({
    reducer: rootReducer
})

export default store