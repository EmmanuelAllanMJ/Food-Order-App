import React from "react";

const CartContent = React.createContext({
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
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContent;
