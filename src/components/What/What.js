import classes from "./What.module.css";
import React from "react";
import Button from "../UI/Button/Button";
import { ReactComponent as Reddit } from "../../images/SVG/reddit.svg";
import { ReactComponent as Discord } from "../../images/SVG/discord.svg";
import { ReactComponent as Wikipedia } from "../../images/SVG/wikipedia-logo.svg";
import Divider from "../UI/Divider/Divider";

const What = () => {
  return (
    <div className={classes.container}>
      <h1>WHAT IS DOGECOIN?</h1>
      <Divider />
      <p>
        Dogecoin is an open source peer-to-peer digital currency, favored by
        Shiba Inus worldwide.
      </p>
      <iframe
        className={classes.video}
        src="https://www.youtube.com/embed/_KVZmS_UO5I"
      />
      <div className={classes.mainContainer}>
        <div className={classes.childContainer}>
          <h3>THE FUN AND FRIENDLY INTERNET CURRENCY.</h3>
          <p>
            Dogecoin sets itself apart from other digital currencies with an
            amazing, vibrant community made up of friendly folks just like you.
          </p>
          <Button
            className={` ${classes.buttonContainer} ${classes.blueButton}`}
          >
            <Reddit className={classes.icon} />
            Reddit Community
          </Button>
          <Button
            className={` ${classes.buttonContainer} ${classes.blueButton}`}
          >
            <Discord className={classes.icon} />
            Discord Community
          </Button>
          <Button
            className={` ${classes.buttonContainer} ${classes.transparentButton}`}
          >
            <Reddit className={classes.icon} />
            Dogeducation Reddit Community
          </Button>
        </div>
        <div className={classes.childContainer}>
          <h3>WHAT'S WITH DOGECOIN AND THE DOG?</h3>
          <p>
            "Doge" is our fun, friendly mascot! The Shiba Inu is a Japanese
            breed of dog that was popularized as an online meme and represents
            Dogecoin.
          </p>
          <Button
            className={` ${classes.buttonContainer} ${classes.blueButton}`}
          >
            Learn more about Doge
          </Button>
          <Button
            className={` ${classes.buttonContainer} ${classes.transparentButton}`}
          >
            <Wikipedia className={classes.icon} />
            Shiba Inu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default What;
