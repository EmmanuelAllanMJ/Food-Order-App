import React, { Fragment, useState } from "react";
import BgCircle from "../UI/BgCircle";
import classes from "./Navigation.module.css";
import basket from "../../assets/basket.png";
import AddressForm from "../Main/Order/AddressForm";

function Navigation(props) {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = (props) => {
    setShowModal(!showModal);
  };
  return (
    <Fragment>
      {showModal && <AddressForm onClose={showModalHandler} />}
      <nav className={`${classes.nav} ${classes.container}`}>
        <div className={classes.imgName}>
          <img
            src={require("../../assets/Food_Icon.jpg")}
            alt="meal-logo"
            className={classes.logo}
          />

          <h1 className={classes.meals}>Meals</h1>
        </div>
        <BgCircle
          onClick={showModalHandler}
          className={classes.cart}
          height="36"
          link={basket}
          amount="1"
          color="#fedda3"
        />
      </nav>
    </Fragment>
  );
}

export default Navigation;
