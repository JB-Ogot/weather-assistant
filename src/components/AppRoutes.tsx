import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from ".";
import { Login } from "../pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Layout />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};
