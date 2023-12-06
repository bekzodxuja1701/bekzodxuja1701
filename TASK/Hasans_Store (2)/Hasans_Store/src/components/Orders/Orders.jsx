import { useContext } from "react";
import styles from "./Orders.module.css";
import GadgetsCtx from "../../context/gadgets-context";
import OrderGadget from "./OrderGadget/OrderGadget";

function Orders() {
  const ctx2 = useContext(GadgetsCtx);
  console.log(ctx2);
  return (
    <div className={styles.orderCard}>
      <h2>SHOPPING CART</h2>
      {ctx2.items.map((gadget) => (
        <OrderGadget key={gadget.id} gadget={gadget} />
      ))}
      {ctx2.items.length != 0 && (
        <div className={styles.pp}>
          Total Price:
          <h3>
            <span>$</span>
            <span>{ctx2.totalPrice}</span>
          </h3>
        </div>
      )}
      {ctx2.items.length === 0 && (
        <span className={styles.info}>
          There is no product in your cart!
          <br></br> ☹️
        </span>
      )}
    </div>
  );
}

export default Orders;
