import React from "react";
import styles from "./Span.module.css"

export default function Span({children}) {
  return <span className={styles.span}>{children}</span>
}
