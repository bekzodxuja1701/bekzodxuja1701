import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import user from "../../assets/icons/Profile.svg";
import notification from "../../assets/icons/Vector.svg";
import Button from "../UI/Button/Button";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.menu}>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">History</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
        </ul>
      </div>
      <div>
        <img src={user} alt="user" />
        <div>
          <img src={notification} alt="notification" />
          <span>2</span>
        </div>
        <Button padding="btnP3">Appointment</Button>
      </div>
    </nav>
  );
}
