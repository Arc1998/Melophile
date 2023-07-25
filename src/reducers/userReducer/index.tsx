import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialStateType = {
  userAuth: {
    name: "",
    email: "",
  },
  isLoggedIn: false,
};

const userAuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserAuth>) => {
      const { name, email } = action.payload;
      state.userAuth.name = name;
      state.userAuth.email = email;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userAuth.name = "";
      state.userAuth.email = "";
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
