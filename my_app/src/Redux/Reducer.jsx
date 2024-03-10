import { createSlice } from "@reduxjs/toolkit";

const CreateSlice = createSlice({
    name:'counter',
    initialState:0,
    reducers:{
        Increment:(state)=>state+1,
        Decrement:(state)=>state-1
    }
})

export const counterAction = CreateSlice.actions
export const counterReducer = CreateSlice.reducer
export const Selector = (state)=> state.counterReducer