import React from "react";
import ReactDOM from "react-dom";
import classes from "./BlackSemiCircle.module.css";

const Circle = () => {
  return <p className={classes.circle}>11</p>;
};

function BlackSemiCircle(props) {
  return (
    <React.Fragment>
          {/* {ReactDOM.createPortal(<Circle />, document.getElementById("bgCircle"))} */}
          <Circle/>
    </React.Fragment>
  );
}

export default BlackSemiCircle;
