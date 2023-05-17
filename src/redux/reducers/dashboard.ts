import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    selectedCountry: null,
    selectedCity: null,
  },
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    clearSelectedCountry: (state) => {
      state.selectedCountry = null;
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
});

export const { setSelectedCountry, setSelectedCity, clearSelectedCountry } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
