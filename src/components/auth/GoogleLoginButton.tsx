import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/reducers";

const CLIENT_ID =
  "853779199276-n7m185d3t257dq9t8klln505hppup5bh.apps.googleusercontent.com";

export const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSuccess = (credentialResponse: any) => {
    dispatch(setToken(credentialResponse));
    localStorage.setItem("token", JSON.stringify(credentialResponse));
    navigate("/");
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </GoogleOAuthProvider>
  );
};
