"use strict";
import * as bootstrap from "bootstrap";
import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import imageURL from './assets/trollHuntersArcadia.png';

//REACT
// ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"));

// JQuery
$(function () {
  // bootstrap tooltips
  //$('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
});

//REACT
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
