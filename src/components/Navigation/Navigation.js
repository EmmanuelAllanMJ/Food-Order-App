import React, { Fragment, useContext, useState } from "react";
import BgCircle from "../UI/BgCircle";
import classes from "./Navigation.module.css";
import basket from "../../assets/basket.png";
import CartContent from "../../store/cart-content";
import Cart from "../Cart/Cart";

function Navigation(props) {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = (props) => {
    setShowModal(!showModal);
  };

  const cartCtx = useContext(CartContent);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <Fragment>
      {/* {showModal && <AddressForm onClose={showModalHandler} />} */}
      {showModal && <Cart onClose={showModalHandler} />}
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
          amount={numberOfCartItems}
          color="#fedda3"
        />
      </nav>
    </Fragment>
  );
}

export default Navigation;
