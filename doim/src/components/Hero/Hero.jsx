import React from "react";
import styles from "./Hero.module.css";
import HeroImg from "../../assets/img/heroImg.png";
import Heading from "../UI/Heading/Heading";
import Span from "../UI/Span/Span";
import Paragraph from "../UI/Paragraph/Paragraph";
import Button from "../UI/Button/Button";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInfo}>
        <div>
          <Heading type={false}>
            <Span>Hairstyle</Span> Reflects The Personality Inside You
          </Heading>
          <Paragraph type={true}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page w hen looking at.
          </Paragraph>
        </div>

        <Button padding="btnP2">Get Started</Button>
      </div>
      <img src={HeroImg} className={styles.heroImg} alt="heroInfo" />
    </div>
  );
}
