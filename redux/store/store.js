import { combineReducers } from "redux";
import { authReducer } from "../reducer/authReducer";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer=combineReducers({
//     authState: authReducer
// })

export default store=configureStore({
    reducer:{
        authState:authReducer
    }
})