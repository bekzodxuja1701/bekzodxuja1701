import React, { useState } from "react";
import RoutesContext from "./route-context";

function RoutesContextProvider({ children }) {
  const [route, setRoute] = useState("home");
  const onToggleRoute = (path) => setRoute(path);
  const contextData = {
    route,
    onToggleRoute,
  };
  return (
    <RoutesContext.Provider value={contextData}>
      {children}
    </RoutesContext.Provider>
  );
}

export default RoutesContextProvider;
