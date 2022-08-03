import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  return (
    <div>
      <label htmlFor="name">Name</label>
      {/* <input type="text" ref={nameInputRef} id="name" /> */}
    </div>
  );
}

export default Input;
