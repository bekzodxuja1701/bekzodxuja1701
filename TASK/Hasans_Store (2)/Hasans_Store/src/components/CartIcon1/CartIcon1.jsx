import React, { useContext } from "react";
import RoutesContext from "../../context/route-context";

function CartIcon1() {
  const ctx = useContext(RoutesContext);
  return (
    <nav
      className="logo_h"
      style={{ color: "#fff" }}
      onClick={() => ctx.onToggleRoute("home")}
    >
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="icon-in-div"
        height="2.5em"
        width="2.8em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
        <path d="M9 8v8"></path>
        <path d="M15 8v8"></path>
        <path d="M9 12h6"></path>
      </svg>
    </nav>
  );
}

export default CartIcon1;
