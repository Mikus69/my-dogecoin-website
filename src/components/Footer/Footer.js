import classes from "./Footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <div className={classes.container}>
      <p className={classes.paragraph}>Copyright © The Ðogecoin Project 2021</p>
      <p className={classes.paragraph}>
        Created by Jackson Palmer & Shibetoshi Nakamoto. Website Design by
        /u/edswf1. Logo by Christine Ricks.
      </p>
    </div>
  );
};

export default Footer;
