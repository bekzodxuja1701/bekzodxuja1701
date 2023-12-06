import React from "react";
import styles from "./Gallery.module.css";
import Heading from "../UI/Heading/Heading";
import Span from "../UI/Span/Span";
import SpecialImg from "../UI/SpecialImg/SpecialImg";
import Button from "../UI/Button/Button";

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <Heading>
        Our <Span>Gallery</Span>
      </Heading>
      <div className={styles.images}>
        <SpecialImg ImgID="1" />
        <SpecialImg ImgID="5" />
        <SpecialImg ImgID="6" />
        <SpecialImg ImgID="2" />
        <SpecialImg ImgID="4" />
        <SpecialImg ImgID="3" />
      </div>
      <Button padding={"btnP3"}>View All</Button>
    </section>
  );
}
