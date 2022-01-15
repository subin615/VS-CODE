import React from "react";
import ReactDOM from "react-dom";
import NavBar from './components/NavigationBar/NavBar'
import "./index.css";

const App:React.FC = () => (
  <div className="container">
    <NavBar />
  </div>
);

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
