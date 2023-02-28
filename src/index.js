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
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(
  <React.StrictMode>
    <div test={el.getAttribute("test")} other={el.getAttribute("other")}>
      {test} {other}
    </div>

    {/* <App/> */}
  </React.StrictMode>
);
