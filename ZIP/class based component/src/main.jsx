import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ShowClContextProvider from "./components/context/ShowClContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShowClContextProvider>
    <App />
  </ShowClContextProvider>
);
