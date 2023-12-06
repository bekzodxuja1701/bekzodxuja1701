import React, { useState } from "react";
import styles from "./AddProduct.module.css";
import Button from "../Button/Button";

const AddProduct = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const getInputsInfo = () => {
    onAddProduct(name, price);
    setName("");
    setPrice("");
  };
  return (
    <div className={styles.add}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button clickHandler={getInputsInfo}>add</Button>
    </div>
  );
};

export default AddProduct;
