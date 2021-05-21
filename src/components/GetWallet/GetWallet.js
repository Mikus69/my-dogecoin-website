import classes from "./GetWallet.module.css";
import React from "react";
import Button from "../UI/Button/Button";
import { ReactComponent as Facebook } from "../../images/SVG/facebook.svg";
import { ReactComponent as Twitter } from "../../images/SVG/twitter.svg";
import { ReactComponent as Reddit } from "../../images/SVG/reddit.svg";
import { ReactComponent as Discord } from "../../images/SVG/discord.svg";

const GetWallet = () => {
  return (
    <div className={classes.container}>
      <Button className={classes.button}>Get Wallet</Button>
      <div className={classes.circleContainer}>
        <div className={classes.circle}>
          <Facebook className={classes.icon} />
        </div>
        <div className={classes.circle}>
          <Twitter className={classes.icon} />
        </div>
        <div className={classes.circle}>
          <Reddit className={classes.icon} />
        </div>
        <div className={classes.circle}>
          <Discord className={classes.icon} />
        </div>
      </div>
      <select className={classes.dropdown}>
        <option>English</option>
        <option>German</option>
        <option>Spanish</option>
      </select>
    </div>
  );
};

export default GetWallet;
