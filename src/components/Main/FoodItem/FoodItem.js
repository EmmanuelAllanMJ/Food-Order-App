import React from "react";
import classes from "./FoodItem.module.css";

function FoodItem(props) {
  const addItem = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className={classes.shape} style={{ backgroundColor: props.color }}>
      <img className={classes.img} src={props.img} alt={props.name} />
      <div className={classes.amount}>{props.amount}</div>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.price}>
        <span className={classes.dollar}>$</span>
        {props.price}
      </p>
    </div>
  );
}

export default FoodItem;
