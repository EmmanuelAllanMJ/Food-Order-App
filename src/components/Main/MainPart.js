import React from "react";
import MealMainImg from "./MealMainImg/MealMainImg";
import Order from "./Order/Order";
import classes from "./MainPart.module.css";

function MainPart() {
  return (
    <div className={`${classes.container}`}>
      <Order />
      <MealMainImg />
    </div>
  );
}

export default MainPart;
