import React, { useContext } from "react";
import "./App.css";
import Home from "./pages/home/home";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/cart/cart";
import RoutesContext from "./context/route-context";

function App() {
  const ctx = useContext(RoutesContext);
  return (
    <>
      <Navbar />
      {ctx.route === "home" && <Home />}
      {ctx.route === "cart" && <Cart />}
    </>
  );
}

export default App;
