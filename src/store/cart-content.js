import React from "react";
import foodList from "./Food";

const CartContent = React.createContext({
  items: [foodList],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContent;
