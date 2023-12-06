import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import RoutesContextProvider from "./context/RoutesContextProvider.jsx";
import GadgetsCtxProvider from "./context/GadgetsCtxProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RoutesContextProvider>
    <GadgetsCtxProvider>
      <App />
    </GadgetsCtxProvider>
  </RoutesContextProvider>
);
