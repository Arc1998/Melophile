import {createSlice} from '@reduxjs/toolkit'
const initialState={
   userAuth:{
      name:"",
      email:""
   },
   isLoggedIn:false
}

const userAuthSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
      login: (state,action)=>{
         state.userAuth.name = action.payload.name as string;
         state.userAuth.email = action.payload.email as string;
         state.isLoggedIn=true
      },
      logout:(state)=>{
         state.userAuth.name = "";
         state.userAuth.email = "";
         state.isLoggedIn=false
      }
    }
})

export const {login,logout}= userAuthSlice.actions
export default userAuthSlice.reducer