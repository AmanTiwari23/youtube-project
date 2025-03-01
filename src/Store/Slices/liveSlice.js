import { createSlice } from "@reduxjs/toolkit";

const liveSlice = createSlice({
    name:"liveSlice",
    initialState:[],
    reducers:{
        addMessages:(state,action)=>{
            if (state.length >= 8) {
                // Keep only the last 100 messages
                state.pop(); // Remove the first message (oldest)
              }
              state.unshift(action.payload); 
        },
    }
})

export const {addMessages} = liveSlice.actions;

export default liveSlice.reducer;