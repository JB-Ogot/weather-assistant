import { createSlice } from "@reduxjs/toolkit";

const loginTokenSlice = createSlice({
  name: "loginToken",
  initialState: null,
  reducers: {
    setToken: (state, action) => {
      return action.payload;
    },
    clearToken: () => null,
  },
});

export const { setToken, clearToken } = loginTokenSlice.actions;
export default loginTokenSlice.reducer;
