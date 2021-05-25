import classes from "./Divider.module.css";
import React from "react";
import { ReactComponent as Arrow } from "../../../images/SVG/arrow-down.svg";

const Divider = () => {
  return (
    <div className={classes.container}>
      <div className={classes.line} />
      <Arrow className={classes.arrow} />
      <div className={classes.line} />
    </div>
  );
};

export default Divider;
