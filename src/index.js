import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { StateProvider } from "../src/context/StateProvider";
import { initialState } from "../src/context/initialState";
import reducer from "../src/context/reducer";
import { BrowserRouter } from "react-router-dom";

const rootElem = document.getElementById("root");

const root = ReactDOM.createRoot(rootElem);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
