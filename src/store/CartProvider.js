import React, { useState, useReducer } from "react";
import CartContent from "./cart-content";

const defaultCartState = {
  items: [
    {
      id: "m1",
      name: "Burger",
      price: 3.25,
      amount: 0,
      img: "./images/hamburger.png",
      color: "#E9F2E8",
    },
    {
      id: "m2",
      name: "Doughnut",
      price: 2.25,
      amount: 0,
      img: "./images/doughnut.png",
      color: "#EFDFE7",
    },
    {
      id: "m3",
      name: "Salad",
      price: 5.25,
      amount: 0,
      img: "./images/salad.png",
      color: "#EBE1D7",
    },
    {
      id: "m4",
      name: "Cake",
      price: 3.49,
      amount: 0,
      img: "./images/confectionery.png",
      color: "#F1D6DC",
    },
  ],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price;
    //1.Finding index

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let existingCartItem = state.items[existingCartItemIndex];
    existingCartItem = {
      ...existingCartItem,
      amount: existingCartItem.amount + 1,
    };

    let updatedItem = [...state.items];
    updatedItem[existingCartItemIndex] = existingCartItem;

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
