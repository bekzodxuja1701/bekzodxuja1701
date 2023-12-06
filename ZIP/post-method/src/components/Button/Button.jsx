import React from "react";
import styles from "./Button.module.css";
const Button = ({ children, clickHandler }) => {
  return (
    <button className={styles.btn} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
