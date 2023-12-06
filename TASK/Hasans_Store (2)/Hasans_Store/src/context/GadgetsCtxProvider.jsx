import React, { useReducer } from "react";
import GadgetsCtx from "./gadgets-context";

const initialInfo = {
  totalPrice: 0,
  items: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const newItems = [...state.items];
      const findItem = newItems.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count += 1;
      } else {
        newItems.unshift({
          ...action.payload,
          count: 1,
        });
      }
      const totalPrice = newItems.reduce(
        (acc, el) => acc + el.price * el.count,
        0
      );
      return {
        ...state,
        items: newItems,
        totalPrice: totalPrice,
      };
    }
  }
};

function GadgetsCtxProvider({ children }) {
  const [gadgets, dispatch] = useReducer(reducer, initialInfo);
  const onAddGadget = (gadget) => {
    dispatch({ type: "ADD", payload: gadget });
  };
  const contexData = {
    ...gadgets,
    onAddGadget,
  };
  return (
    <GadgetsCtx.Provider value={contexData}>{children}</GadgetsCtx.Provider>
  );
}

export default GadgetsCtxProvider;
