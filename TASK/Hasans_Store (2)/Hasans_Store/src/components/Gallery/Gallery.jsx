import React from 'react';
import styles from "./Gallery.module.css";
import gallery from "../../assets/img/gallery.png"

function Gallery() {
  return (
    <>
        <div className={styles.gallery}>
            <img src={gallery} alt="" />
        </div>
    </>
  )
}

export default Gallery;