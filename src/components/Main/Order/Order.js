import React from "react";
import Button from "../../UI/Button";
import FoodItem from "../FoodItem/FoodItem";
import classes from "./Order.module.css";
// import Image from "../../../assets/hamburger.png"

function Order(props) {
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

  return (
    <div className={classes.column}>
      <h2 className={classes.order}>Order your Food</h2>
      <p className={classes.description}>
        Fresh and tasty seafood curry sit amet, consectetur Curabitur accumsan
        auctor pulvinar proin sit amet,
      </p>
      <p className={classes.amount}>Total Amount: ${props.amount}</p>
      <Button />
      <div className={classes.items}>
        {foodItem.map((item) => {
          return (
            <FoodItem
              key={item.id}
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
