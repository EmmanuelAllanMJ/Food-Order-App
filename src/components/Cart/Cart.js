import React, { useContext } from "react";
import CartContent from "../../store/cart-content";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
  const cartCtx = useContext(CartContent);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const addItemHandler = (item) => {
    cartCtx.addItem(item);
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <li>
      {cartCtx.items.map((item) => {
        if (item.amount !== 0) {
          return (
            <div key={item.id} className={classes.cartItem}>
              <h3 className={classes.name}>{item.name}</h3>
              <p className={classes.price}>
                <span>$</span>
                {item.price}
              </p>
              <div className={classes.action}>
                <button
                  className={classes.add}
                  type="button"
                  onClick={addItemHandler.bind(null, item)}
                >
                  +
                </button>
                <p className={classes.amount}>{item.amount}</p>
                <button
                  className={classes.add}
                  onClick={removeItemHandler.bind(null, item.id)}
                >
                  -
                </button>
              </div>
            </div>
          );
        }
      })}
    </li>
  );
  return (
    <Modal onClose={props.onClose} className={classes.modal}>
      <h2 className={classes.heading}>Cart Items:</h2>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <p className={classes.totalAmount}>
        Total Amount :<span>${totalAmount}</span>{" "}
      </p>
      {props.onError && (
        <p className={classes.errorMessage}>Add at least one cart item</p>
      )}
      <button className={classes.order} onClick={props.onOrder}>
        Order
      </button>
      <button className={classes.close} onClick={props.onClose}>
        Close
      </button>
    </Modal>
  );
}

export default Cart;
