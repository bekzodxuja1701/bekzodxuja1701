import React from "react";
import styles from "./Box.module.css";
import icon1 from "../../../assets/icons/scissors.svg";
import icon2 from "../../../assets/icons/electricRazor.svg";
import icon3 from "../../../assets/icons/cleanser.svg";
import Paragraph from "../Paragraph/Paragraph";

export default function Box({ iconID, children }) {
  return (
    <div className={styles.box}>
      <div>
        <img
          src={
            (iconID == "1" && icon1) ||
            (iconID == "2" && icon2) ||
            (iconID == "3" && icon3)
          }
          alt="icon"
        />
      </div>
      <Paragraph type={false}>{children}</Paragraph>
      <Paragraph type={true}>
        long established fact that a reacted by the readable content of hen
        looking at.
      </Paragraph>
    </div>
  );
}
