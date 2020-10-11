import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Sidebar from "./components/sidebar/Sidebar";
import Introduction from "./components/intro/Introduction";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";

ReactDOM.render(
  <React.StrictMode>
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Introduction></Introduction>
          <About></About>
          <Experience></Experience>
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
