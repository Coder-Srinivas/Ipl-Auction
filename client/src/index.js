import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./sass/main.scss";

require("dotenv").config();

ReactDOM.render(
  <BrowserRouter>
    <meta http-equiv="Content-Security-Policy" content="default-src *;
    img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *;
    style-src  'self' 'unsafe-inline' *"/>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
