import React, { FC, useEffect } from "react";
import { useJwt } from "react-jwt";
import { Navigate } from "react-router-dom";
import { MainView } from "./MainView";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const HomeLayout: FC = () => {
  const loginToken = localStorage.getItem("token") as string;
  const { decodedToken, isExpired } = useJwt(
    JSON.parse(loginToken)?.credential
  );

  useEffect(() => {
    if (decodedToken) {
      const token: any = decodedToken;
      const expirationTime = token.exp * 1000;
      const currentTime = Date.now();
      if (currentTime >= expirationTime) {
        localStorage.removeItem("token");
      }
    }
  }, [decodedToken]);

  if (!loginToken || isExpired) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="h-full overflow-hidden">
      <Navbar />
      <div className="jwa-main-layout">
        <Sidebar />
        <MainView />
      </div>
    </div>
  );
};
