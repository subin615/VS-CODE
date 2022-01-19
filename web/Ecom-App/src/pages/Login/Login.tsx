import React from "react";
import Input from "../../common/atom/Input";
import GoogleSignUp from "../../auth/Google";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <div className="main-container">
      <div className="login-container">
        <h1 className="signin-title">Sign In</h1>
        <p className="login__subTitle">Sign in and start managing</p>
        <div className="login__input-container">
          <div className="login__input-field">
            <Input label="Email" variant="outlined" id="login-email-input" />
          </div>
          <div className="login__input-field">
            <Input
              label="Password"
              variant="outlined"
              id="login-password-input"
            />
          </div>
          <div className="login__user-actions width__70">
            <span className="font-size__700">Remember me</span>
            <span className="font-size__700">Forgot password?</span>
          </div>
          <div className="width__70">
            <button type="submit" className="width__70 login-button-color">
              Login
            </button>
          </div>
          <div className="g-signin">
            <GoogleSignUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
