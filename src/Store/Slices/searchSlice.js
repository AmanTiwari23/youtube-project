import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"searchSlice",
    initialState:{

    },
    reducers:{
        addToCache:(state,action)=>{
            Object.assign(state, action.payload);
        },
    }
})

export const {addToCache} = searchSlice.actions;

export default searchSlice.reducer;