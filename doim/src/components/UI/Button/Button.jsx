import React from "react";
import styles from "./Button.module.css";

export default function Button({ children, padding }) {
  return (
    <button className={`${styles["btn"]} ${styles[`${padding}`]}`}>
      {children}
    </button>
  );
}
