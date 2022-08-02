import React, { useState, useReducer } from "react";
import CartContent from "./cart-content";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, actions) => {
  if (actions.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + actions.value;
    return { totalAmount: updatedTotalAmount };
  }
};

function CartProvider(props) {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (amount) => {
    dispatch({ type: "ADD", value: amount });
  };
  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContent.Provider value={cartContext}>
      {props.children}
    </CartContent.Provider>
  );
}

export default CartProvider;