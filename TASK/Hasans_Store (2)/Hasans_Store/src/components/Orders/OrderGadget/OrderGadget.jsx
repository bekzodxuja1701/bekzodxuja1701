import { useContext } from "react";
import styles from "./OrderGadget.module.css";
import GadgetsCtx from "../../../context/gadgets-context";

function OrderGadget({ gadget }) {
  const ctx2 = useContext(GadgetsCtx);
  const addGadjet = (id) => console.log("");
  const GetGadjet = (id) => console.log("");
  const deleteGadjet = (id) => console.log("");
  return (
    <div className={styles.gadgetCard}>
      <div className={styles.box}>
        <div className={styles.phoneImg}>
          <img src={gadget.thumbnail} alt="" />
        </div>
        <div className={styles.counter}>
          {gadget.count !== 1 && (
            <button onClick={() => GetGadjet(gadget.id)}>-</button>
          )}
          {gadget.count === 1 && <button disabled>-</button>}
          <span>{gadget.count}</span>
          <button onClick={() => addGadjet(gadget.id)}>+</button>
        </div>
      </div>
      <div className={styles.title}>
        <span>{gadget.brand}</span>
        <span>{gadget.title}</span>
      </div>
      <div className={styles.price}>
        <h3>
          <span>$</span>
          {gadget.price}
        </h3>
        <span>Delete</span>
      </div>
    </div>
  );
}

export default OrderGadget;
