import React, { useRef } from "react";
import Modal from "../../UI/Modal";
import classes from "./AddressForm.module.css";

function AddressForm(props) {
  const nameInputRef = useRef();
  const numberInputRef = useRef();
  const enteredName = nameInputRef.current;
  const enteredNumber = numberInputRef.current;

  const submitHandler = () => {
    console.log({ name: enteredName, phone: enteredNumber });
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="name">Name</label>
        <input type="text" ref={nameInputRef} id="name" />
        <label htmlFor="phone">Phone</label>
        <input type="number" ref={numberInputRef} id="name" />
        <div className={classes.amountAction}>
          <p className={classes.amount}>Amount : {props.amount}</p>
          <div className={classes.actions}>
            <button
              className={classes.button}
              type="button"
              onClick={props.onClose}
            >
              Close
            </button>
            <button className={classes.order}>Order</button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default AddressForm;
