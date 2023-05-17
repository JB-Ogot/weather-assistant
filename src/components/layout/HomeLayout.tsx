import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { storeGoogleToken } from "../../redux";
import { MainView } from "./MainView";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const HomeLayout: FC = () => {
  const loginToken = localStorage.getItem("token") || "";
  const dispatch = useDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem("token") || "";
    if (storedToken) {
      dispatch(storeGoogleToken(JSON.parse(storedToken)));
    }
  }, [dispatch]);

  if (!loginToken) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="h-full overflow-hidden">
      <Navbar />
      <div className="flex flex-row h-full w-full px-20 py-10">
        <Sidebar />
        <MainView />
      </div>
    </div>
  );
};
