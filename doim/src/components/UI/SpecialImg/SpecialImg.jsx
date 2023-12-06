import React from "react";
import styles from "./SpecialImg.module.css";

import image1 from "../../../assets/img/Gallery!.png";
import image2 from "../../../assets/img/Gallery2.png";
import image3 from "../../../assets/img/Gallery3.png";
import image4 from "../../../assets/img/Gallery4.png";
import image5 from "../../../assets/img/Gallery5.png";
import image6 from "../../../assets/img/Gallery6.png";

export default function SpecialImg({ ImgID }) {
  return (
    <div className={styles.ImgBack}>
      <img
        src={
          (ImgID == "1" && image1) ||
          (ImgID == "2" && image2) ||
          (ImgID == "3" && image3) ||
          (ImgID == "4" && image4) ||
          (ImgID == "5" && image5) ||
          (ImgID == "6" && image6)
        }
        className={styles.img}
        alt="image"
      />
    </div>
  );
}
