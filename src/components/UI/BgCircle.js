import React from "react";
import classes from "./BgCircle.module.css";

function BgCircle(props) {
  const link = props.link;
  return (
    <div className={classes.circle} style={{ backgroundColor: props.color }}>
      <img src={link} alt="basket" height={props.height} width={props.height} />
      <p className={classes.amount}>{props.amount}</p>
    </div>
  );
}

export default BgCircle;
