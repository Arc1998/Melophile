 import { configureStore } from "@reduxjs/toolkit";
 import userAuthSlice from "../reducers/userReducer"
 import songReducer from "../reducers/songReducer"

 const store = configureStore({
   reducer: { user: userAuthSlice, song: songReducer },
 });
 
 export default store;

