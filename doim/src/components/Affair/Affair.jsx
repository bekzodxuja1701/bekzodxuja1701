import React from "react";
import styles from "./Affair.module.css";
import Heading from "../UI/Heading/Heading";
import Span from "../UI/Span/Span";
import Box from "../UI/Box/Box";

export default function Affair() {
  return (
    <section className={styles.affair}>
      <Heading type={true}>
        Services We <br /> <Span>Provide</Span>
      </Heading>
      <div className={styles.boxes}>
        <Box iconID="1">Hair Cut</Box>
        <Box iconID="2">Beard Cut</Box>
        <Box iconID="3">Facial Pack</Box>
      </div>
    </section>
  );
}
