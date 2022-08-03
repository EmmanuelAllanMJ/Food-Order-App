import React, { useContext } from "react";
import CartContent from "../../../store/cart-content";
import Button from "../../UI/Button";
import FoodItem from "../FoodItem/FoodItem";
import classes from "./Order.module.css";
// import Image from "../../../assets/hamburger.png"

function Order(props) {
  const cartCtx = useContext(CartContent);
  const foodItem = [
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
  ];

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    // cartCtx.totalAmount += amount;
    console.log("first");
    return;
  };

  return (
    <div className={classes.column}>
      <h2 className={classes.order}>Order your Food</h2>
      <p className={classes.description}>
        Fresh and tasty seafood curry sit amet, consectetur Curabitur accumsan
        auctor pulvinar proin sit amet,
      </p>
      <p className={classes.amount}>Total Amount: ${totalAmount}</p>
      <Button />
      <div className={classes.items}>
        {cartCtx.items.map((item) => {
          return (
            <FoodItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              img={item.img}
              color={item.color}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Order;
