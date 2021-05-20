import classes from "./What.module.css";
import React from "react";
import Button from "../UI/Button/Button";

const What = () => {
  return (
    <div className={classes.container}>
      <h1>What is Dogecoin?</h1>
      <p>
        Dogecoin is an open source peer-to-peer digital currency, favored by
        Shiba Inus worldwide.
      </p>
      <h2>THE FUN AND FRIENDLY INTERNET CURRENCY.</h2>
      <p>
        Dogecoin sets itself apart from other digital currencies with an
        amazing, vibrant community made up of friendly folks just like you.
      </p>
      <Button>Reddit Community</Button>
      <Button>Discord Community</Button>
      <Button>Dogeducation Reddit Community</Button>
      <h2>WHAT'S WITH DOGECOIN AND THE DOG?</h2>
      <p>
        "Doge" is our fun, friendly mascot! The Shiba Inu is a Japanese breed of
        dog that was popularized as an online meme and represents Dogecoin.
      </p>
      <Button>Learn more about Doge</Button>
      <Button>Shiba Inu</Button>
    </div>
  );
};

export default What;
