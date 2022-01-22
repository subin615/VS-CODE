import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "../../pages/Registration/Registration";
import Home from "../../pages/home/Home";
import NavBar from "../../components/navigationBar/NavBar";

const Login = lazy(() => import("../../pages/login/Login"));

const AuthenicationRoute: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default AuthenicationRoute;
