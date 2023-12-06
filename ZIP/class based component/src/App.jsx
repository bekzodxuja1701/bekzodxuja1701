import React, { useContext, useState } from "react";
import "./App.css";
import List from "./components/List/List";
import ShowClContext from "./components/context/show-cl-context";

function App() {
  const ctx = useContext(ShowClContext);
  return (
    <>
      {ctx.showCl && <List number={2023} />}
      <button onClick={ctx.onToggle}>hide or show</button>
    </>
  );
}

export default App;
