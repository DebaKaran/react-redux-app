import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./output.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
