import classes from "./How.module.css";
import React from "react";
import mobileWallet from "../../images/dogecoin_mobilewallet.png";

const How = () => {
  return (
    <div className={classes.container}>
      <h1>HOW TO GET STARTED WITH DOGECOIN.</h1>
      <img src={mobileWallet} alt="mobilewallet" />
      <div className={classes.text}>
        <h3>1. Choose your Wallet</h3>
        <p>
          Pick a Wallet from our Wallet Selection. A Wallet is used for holding
          your Dogecoins directly on your Computer/Smartphone.
        </p>
        <h3>2. Configure your Wallet</h3>
        <p>
          After downloading, you can configure your Wallet according to our
          Guide
        </p>
        <h3>3. Get Some Dogecoin</h3>
        <p>
          There are numerous amounts of ways to get Dogecoin. You can buy them,
          trade for them, get tipped, "mine" them, and more. They are
          surprisingly endless!
        </p>
        <p>
          You can get tipped Dogecoin by participating in our community. If
          that's not your style, another way to have your first Dogecoin is to
          participate at Dogecoin Folding@Home.
        </p>
        <p>
          Folding@Home (FaH) is a distributed computing project. You can join
          team dogefolders, bring in your computing power, help to find cures
          for diseases and receive some Doges for your efforts.
        </p>
      </div>
    </div>
  );
};

export default How;
