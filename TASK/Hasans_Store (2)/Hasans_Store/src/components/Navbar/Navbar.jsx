import React from "react";
import styles from "./Navbar.module.css";
import CartIcon1 from "../CartIcon1/CartIcon1";
import CartIcon2 from "../CartIcon2/CartIcon2";

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <CartIcon1 />
        <CartIcon2 />
      </div>
    </>
  );
}

export default Navbar;
