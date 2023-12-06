import React from "react";
import styles from "./History.module.css";
import Img from "../../assets/img/history.png";
import Heading from "../UI/Heading/Heading";
import Paragraph from "../UI/Paragraph/Paragraph";
import Button from "../UI/Button/Button";
import Span from "../UI/Span/Span";

export default function History() {
  return (
    <section className={styles.history}>
      <img src={Img} alt="History" />
      <div className={styles.historyInfo}>
        <Heading type={true}>
          <Span>Our</Span> History
        </Heading>
        <div>
          <Paragraph type={true}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page w hen looking at.
          </Paragraph>
          <Paragraph type={true}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page w hen looking at.
          </Paragraph>
        </div>
        <Button padding="btnP2">Learn more</Button>
      </div>
    </section>
  );
}
