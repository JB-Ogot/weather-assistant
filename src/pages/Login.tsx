import React from "react";
import { GoogleLoginButton } from "../components";

export const Login = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex-row border p-10 rounded-xl shadow-md">
        <div className="pb-4">
          <span className="text-lg font-medium text-gray-900">
            Welcome to Weather Assistant
          </span>
        </div>
        <GoogleLoginButton />
      </div>
    </div>
  );
};
