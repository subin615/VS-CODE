import React from "react";
import NavBar from "../../components/navigationBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";

const AuthorizedRoute: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default AuthorizedRoute;
