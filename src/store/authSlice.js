import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    /*************  ✨ Windsurf Command ⭐  *************/
    /**
     * Set the authentication status to false and reset the user data.
     * @param {object} state - The state of the authSlice.
     */
    /*******  bc5e1917-ee43-4f2d-8927-805ed5b0ae4c  *******/ logout: (
      state
    ) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
