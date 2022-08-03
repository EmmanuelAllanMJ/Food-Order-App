import React, { useState, useReducer } from "react";
import CartContent from "./cart-content";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItem = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price;

    return {
      items: updatedItem,
      totalAmount: updatedTotalAmount,
    };
  }
};

function CartProvider(props) {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
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
