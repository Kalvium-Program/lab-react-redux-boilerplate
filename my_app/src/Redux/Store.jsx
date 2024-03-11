import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer"

export const myCountstore = configureStore({
    reducer:{
        Reducer
    }
})
