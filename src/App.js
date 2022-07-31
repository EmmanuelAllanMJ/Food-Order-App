import React from "react";
import MainPart from "./components/Main/MainPart";
import Navigation from "./components/Navigation/Navigation";
import BlackSemiCircle from "./components/UI/BlackSemiCircle";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.class}>
      <BlackSemiCircle />
      <Navigation />
      <MainPart />
    </div>
  );
}

export default App;
