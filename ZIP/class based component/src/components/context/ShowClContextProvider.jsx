import React, { useState } from "react";
import ShowClContext from "./show-cl-context";

function ShowClContextProvider({ children }) {
  const [showCl, setShowCl] = useState(false);
  const onToggle = () => setShowCl(!showCl);

  const contextData = {
    showCl,
    onToggle,
  };
  return (
    <ShowClContext.Provider value={contextData}>
      {children}
    </ShowClContext.Provider>
  );
}

export default ShowClContextProvider;
