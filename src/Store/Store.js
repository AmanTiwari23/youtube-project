import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "../Store/Slices/appSlice"
import searchSliceReducer from "../Store/Slices/searchSlice";
import liveSliceReducer from "../Store/Slices/liveSlice";
const Store = configureStore({
    reducer:{
        appSlice:appSliceReducer,
        searchSlice:searchSliceReducer,
        liveSlice:liveSliceReducer,
    }
})

export default Store