import React from "react";
import classes from "./Toolbar.module.css";
import logo from "../../images/Dogecoin_Logo.png";
import DrawerToggleButton from "../Drawer/DrawerToggleButton";

const Toolbar = (props) => {
  return (
    <header className={classes.toolbar}>
      <nav className={classes.toolbarNavigation}>
        <img src={logo} alt="Dogecoin_Logo" className={classes.logo} />
        <div className={classes.spacer} />
        <div className={classes.toolbarNavigationItems}>
          <ul>
            <li>Wallets</li>
            <li>What is Dogecoin?</li>
            <li>Get started now!</li>
            <li>Guide</li>
          </ul>
        </div>
        <div className={classes.drawerToggleButton}>
          <DrawerToggleButton onClick={props.onClick} />
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
