import React from "react";
import Salad from "../../../assets/Salad.png";
import classes from "./MealMainImg.module.css";

function MealMainImg() {
  return (
    <React.Fragment>
      <img src={Salad} alt="Salad" className={classes.salad} />
    </React.Fragment>
  );
}

export default MealMainImg;
