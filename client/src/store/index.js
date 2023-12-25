import { configureStore } from "@reduxjs/toolkit";
import accountSlice from './accountSlice'
import postSlice from "./postSlice";
export default configureStore({
    reducer:{
        account : accountSlice,
       post:postSlice
    }
})