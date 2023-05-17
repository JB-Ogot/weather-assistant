import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Home } from "../pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};
