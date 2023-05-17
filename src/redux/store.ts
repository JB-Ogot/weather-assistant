import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./reducers/dashboard";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});
