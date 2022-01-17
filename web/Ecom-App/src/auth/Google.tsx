import React from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from "react-google-login";

const GoogleSignUp: React.FC = () => {
  const loginSuccess = (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log("login success", res);
  };
  const loginFailure = (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log("login failure", res);
  };

  const logout = () => {};
  return (
    <div>
      <GoogleLogin
        clientId="77440202337-s8pgbhqlrv2frnv7uq8p1m48a98k4fd0.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={loginSuccess}
        onFailure={loginFailure}
        cookiePolicy={"single_host_origin"}
      />
      {/* <GoogleLogout
        clientId="77440202337-s8pgbhqlrv2frnv7uq8p1m48a98k4fd0.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      ></GoogleLogout> */}
    </div>
  );
};

export default GoogleSignUp;
