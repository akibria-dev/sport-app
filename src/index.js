import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
  rootElement
);
