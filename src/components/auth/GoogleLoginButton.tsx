import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse: any) => {
    localStorage.setItem("token", JSON.stringify(credentialResponse));
    navigate("/");
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
    >
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </GoogleOAuthProvider>
  );
};
