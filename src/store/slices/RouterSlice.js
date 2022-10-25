import { createSlice } from "@reduxjs/toolkit";
export const routerSlice = createSlice({
    name: 'router',
    initialState:{
        url:""
    },
    reducer:{
        setUrl: (state,action) => {
            state.url = action.payload
        }
    }
})