import React, { useContext } from "react";
import styles from "./Product.module.css";
import cart from "../../../assets/icons/corzinka.png";
import GadgetsCtx from "../../../context/gadgets-context";

function Product({ gadget }) {
  const ctx = useContext(GadgetsCtx);

  return (
    <div className={styles.productsMiddleInfo}>
      <img src={gadget.thumbnail} alt="phone" />
      <h3>{gadget.title}</h3>
      <div className={styles.box}>
        <p>$ {gadget.price}</p>
        <img
          src={cart}
          alt="corzinka"
          onClick={() => ctx.onAddGadget(gadget)}
        />
      </div>
    </div>
  );
}

export default Product;
