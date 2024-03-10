import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducer"

export const mystore = configureStore({
    reducer:{
        counterReducer
    }
})