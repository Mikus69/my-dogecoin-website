import classes from "./Drawer.css";
import React from "react";

const Drawer = (props) => {
  let drawerClasses = "drawer";
  if (props.show) {
    drawerClasses = "drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>Wallets</li>
        <li>What is Dogecoin?</li>
        <li>Get started now!</li>
        <li>Guide</li>
      </ul>
    </nav>
  );
};

export default Drawer;
