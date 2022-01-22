import React, { lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import Registration from "../../pages/registration/Registration";
import NavBar from "../../components/navigationBar/NavBar";
import Home from "../../pages/home/Home";
import ProductDetails from "../../pages/productDetails/ProductDetails";

const Registration = lazy(
  () => import("../../pages/registration/Registration")
);
const Login = lazy(() => import("../../pages/login/Login"));

const AuthenicationRoute: React.FC = () => {
  const routePath = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routePath]);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default AuthenicationRoute;
