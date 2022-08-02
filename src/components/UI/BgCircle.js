import React from "react";
import classes from "./BgCircle.module.css";

function BgCircle(props) {
  const link = props.link;
  return (
    <button
      onClick={props.onClick}
      className={`${classes.circle} ${classes.bump}`}
      style={{ backgroundColor: props.color }}
    >
      <img src={link} alt="basket" height={props.height} width={props.height} />
      <p className={classes.amount}>{props.amount}</p>
    </button>
  );
}

export default BgCircle;
