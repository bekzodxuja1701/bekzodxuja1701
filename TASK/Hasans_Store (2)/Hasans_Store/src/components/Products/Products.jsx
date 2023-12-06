import React from "react";
import styles from "./Products.module.css";
import gadgets from "../../data/gadgets";
import Product from "./Product/Product";

function Products() {
  return (
    <>
      <div className={styles.products}>
        <h2>PRODUCTS</h2>
        <div className={styles.productsMiddle}>
          {gadgets.map((gadget) => {
            return <Product key={gadget.id} gadget={gadget} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
