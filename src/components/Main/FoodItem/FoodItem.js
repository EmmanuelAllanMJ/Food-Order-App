import React, { useContext } from "react";
import CartContent from "../../../store/cart-content";
import classes from "./FoodItem.module.css";

function FoodItem(props) {
  const cartCtx = useContext(CartContent);
  const onAddHandler = () => {
    const item = {
      id: props.id,
      name: props.name,
      amount: props.amount,
      price: props.price,
      img: props.img,
      color: props.color,
    };

    cartCtx.addItem(item);
  };

  return (
    <div
      className={classes.shape}
      style={{ backgroundColor: props.color }}
      onClick={onAddHandler}
    >
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
