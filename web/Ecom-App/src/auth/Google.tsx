import React from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from "react-google-login";
import { ClientInfo } from "../util/constants";
import "./google.css";
import UserAPI from "../server/userAPI";

type GoogleAuth = GoogleLoginResponse | GoogleLoginResponseOffline;

const GoogleSignUp: React.FC = () => {
  const loginSuccess = (res: GoogleAuth) => {
    const successResponse = res as GoogleLoginResponse;
    // localStorage.setItem("token", JSON.stringify(successResponse.profileObj));
    console.log(successResponse.profileObj);
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
