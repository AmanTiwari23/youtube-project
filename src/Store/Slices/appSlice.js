import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"appSlice",
    initialState:{
        sideBar:false,
        videos:null,
    },
    reducers:{
        toogleSideBar:(state)=>{
            state.sideBar= !state.sideBar;
        },
        setVideos:(state,action)=>{
            state.videos = action.payload;
        }
    }
})

export const {toogleSideBar,setVideos} = appSlice.actions;

export default appSlice.reducer;