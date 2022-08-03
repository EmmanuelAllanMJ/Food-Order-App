import React from "react";
import MainPart from "./components/Main/MainPart";
import Navigation from "./components/Navigation/Navigation";
import BlackSemiCircle from "./components/UI/BlackSemiCircle";

import classes from "./App.module.css";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider className={classes.class}>
      {/* <Cart /> */}
      <BlackSemiCircle />
      <Navigation />
      <MainPart />
    </CartProvider>
  );
}

export default App;
