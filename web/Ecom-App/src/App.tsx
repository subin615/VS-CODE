import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import Navigation from "./routes/index";
import { ChakraProvider } from "@chakra-ui/provider";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => (
  <div className="container">
    <Navigation />
  </div>
);

export default App;
ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
  ,
  document.getElementById("app")
);
