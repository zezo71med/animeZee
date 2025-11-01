// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouters from "./routers.tsx";
import { store } from "./state/Store.ts";
import { Provider } from "react-redux";
 

createRoot(document.getElementById("root")!).render(
  <Provider  store={store}>
    <AppRouters />
  </Provider>
);
