import React from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from "react-google-login";
import { ClientInfo } from "../util/constants";
import "./google.css";

type GoogleAuth = GoogleLoginResponse | GoogleLoginResponseOffline;

const GoogleSignUp: React.FC = () => {
  const loginSuccess = (res: GoogleAuth) => {
    console.log("login success", res);
    localStorage.setItem(
      "token",
      JSON.stringify((res as GoogleLoginResponse).profileObj)
    );
  };
  const loginFailure = (res: GoogleAuth) => {
    console.log("login failure", res);
  };

  //function for logout
  const logout = () => {
    console.log("logout");
    console.clear();
  };
  return (
    <div className="googleLogin">
      <GoogleLogin
        clientId={ClientInfo.ClientId}
        buttonText="Google"
        onSuccess={loginSuccess}
        onFailure={loginFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={false}
      />
    </div>
  );
};

export default GoogleSignUp;
