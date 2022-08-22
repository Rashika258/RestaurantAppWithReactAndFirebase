import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { StateProvider } from "./components/context/StateProvider";
import { initialState } from "./components/context/initialState";
import reducer from "./components/context/reducer";

const rootElem = document.getElementById("root");

const root = ReactDOM.createRoot(rootElem);

root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);
