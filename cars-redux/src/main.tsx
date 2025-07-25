import { createRoot } from "react-dom/client";
import "./index.css";
import "bulma/css/bulma.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/index";
import React from "react";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
