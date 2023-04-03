import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggIn: (state, action) => {
      state.userInfo = action.payload;
    },
    loggOut: (state) => {
      state.userInfo = null;
    },
  },
});

export default userSlice.reducer;
export const { loggIn, loggOut } = userSlice.actions;
