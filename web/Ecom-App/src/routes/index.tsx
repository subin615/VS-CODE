import { CircularProgress, Center } from "@chakra-ui/react";
import React, { Suspense, lazy, useRef, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthenicationRoute from "./authentication/AuthenticationRoute";
import AuthorizedRoute from "./authorized/AuthorizedRoute";

const Loading = () => {
  return (
    <Center h={"99vh"}>
      <CircularProgress isIndeterminate color="var(--primary-color)" />
    </Center>
  );
};

const Navigation: React.FC = () => {
  const [token, _] = useState(() => {
    const getToken = localStorage.getItem("token");
    if (!getToken) return false;
    return true;
  });
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        {token ? <AuthorizedRoute /> : <AuthenicationRoute />}
      </Suspense>
    </Router>
  );
};

export default Navigation;
