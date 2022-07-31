import React from "react";
import BgCircle from "../UI/BgCircle";
import classes from "./Navigation.module.css";
import basket from "../../assets/basket.png";

function Navigation() {
  return (
    <nav className={`${classes.nav} ${classes.container}`}>
      <div className={classes.imgName}>
        <img
          src={require("../../assets/Food_Icon.jpg")}
          alt="meal-logo"
          className={classes.logo}
        />

        <h1 className={classes.meals}>Meals</h1>
      </div>
      <BgCircle height="36" link={basket} amount="1" color="#fedda3" />
    </nav>
  );
}

export default Navigation;
