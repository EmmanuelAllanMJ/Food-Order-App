import React from "react";
import classes from "./Button.module.css";
import Cart from "../../assets/cart.png";

function Button(props) {
  return (
    <div>
      <button className={classes.button} onClick={props.onClick}>
        <span>
          <img src={Cart} alt="cart" className={classes.cart} />
        </span>
        <p> Buy Now</p>
      </button>
    </div>
  );
}

export default Button;
