import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    userLogin: (state) => {
      state.isLoggedIn = true;
    },
    userLogout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export default userSlice.reducer;
export const { userLogin, userLogout } = userSlice.actions;
export const selectIsUserLogin = (state) => state.user.isLoggedIn;
