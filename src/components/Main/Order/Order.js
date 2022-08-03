import React, { useContext } from "react";
import CartContent from "../../../store/cart-content";
import Button from "../../UI/Button";
import FoodItem from "../FoodItem/FoodItem";
import classes from "./Order.module.css";

function Order(props) {
  const cartCtx = useContext(CartContent);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;


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
