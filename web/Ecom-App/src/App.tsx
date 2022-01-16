import React, {Suspense,lazy} from "react";
import ReactDOM from "react-dom";
import Navigation from './routes/index'
import "./index.css";

const App:React.FC = () => (
  <div className="container">
    <Navigation/>
  </div>
);

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
