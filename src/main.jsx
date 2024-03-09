import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import MyState from "./context/data/myState.jsx";

ReactDOM.render(
  <React.StrictMode>
    <MyState>
      <App />
    </MyState>
  </React.StrictMode>,
  document.getElementById("root")
);
