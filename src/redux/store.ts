import { configureStore } from "@reduxjs/toolkit";
import loginTokenReducer from "./reducers/auth";
import dashboardReducer from "./reducers/dashboard";

export const store = configureStore({
  reducer: {
    loginToken: loginTokenReducer,
    dashboard: dashboardReducer,
  },
});
