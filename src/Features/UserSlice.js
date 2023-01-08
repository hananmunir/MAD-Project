import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserState, logoutUser } = UserSlice.actions;
export const getUser = (state) => state.user.user;

export default UserSlice.reducer;
