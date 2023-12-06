import React from "react";
import styles from "./Paragraph.module.css";

export default function Paragraph({ type, children }) {
  return <p className={type?styles.paragraph:styles.headinglike}> {children}</p>;
}
