import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    selectedCountry: null,
    selectedCity: null,
    loader: false,
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
    clearSelectedCity: (state) => {
      state.selectedCity = null;
    },
    toggleLoader: (state) => {
      state.loader = !state.loader;
    },
  },
});

export const {
  setSelectedCountry,
  setSelectedCity,
  clearSelectedCountry,
  clearSelectedCity,
  toggleLoader,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
