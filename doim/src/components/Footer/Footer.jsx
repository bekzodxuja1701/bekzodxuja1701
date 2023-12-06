import React from "react";
import styles from "./Footer.module.css";

import logo from "../../assets/logo.png";
import googleLogo from "../../assets/icons/google.svg";

import Paragraph from "../UI/Paragraph/Paragraph";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} className={styles.logo} alt="logo" />
      <Paragraph type={true}>
        It is a long established fact that a reader will be distracted by the
        readable
      </Paragraph>
      <div className={styles.icons}>
        <div>
          <img src={googleLogo} alt="logo" />
        </div>
        <div>
          <img src={googleLogo} alt="logo" />
        </div>
        <div>
          <img src={googleLogo} alt="logo" />
        </div>
      </div>
    </footer>
  );
}
