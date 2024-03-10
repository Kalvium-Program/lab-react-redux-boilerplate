import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Reducer"

export const mystore = configureStore({
    reducer:{
        counterReducer
    }
})
