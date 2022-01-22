import React, { lazy } from "react";
import NavBar from "../../components/navigationBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import AuthNavBar from "../../components/navigationBar/AuthNavBar";

const AuthorizedRoute: React.FC = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <AuthNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default AuthorizedRoute;
