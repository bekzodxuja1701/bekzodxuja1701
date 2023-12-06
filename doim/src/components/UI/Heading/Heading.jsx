import React from "react";
import styles from "./Heading.module.css";

export default function Heading({ type, children }) {
  return <h1 className={type ? styles.h2 : styles.h1}>{children}</h1>;
}
