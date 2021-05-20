import classes from "./DrawerToggleButton.module.css";
import React from "react";

const drawerToggleButton = (props) => (
  <button className={classes.toggleButton} onClick={props.onClick}>
    <div className={classes.toggleButtonLine} />
    <div className={classes.toggleButtonLine} />
    <div className={classes.toggleButtonLine} />
  </button>
);

export default drawerToggleButton;
