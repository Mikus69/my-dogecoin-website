import classes from "./How.module.css";
import React from "react";
import mobileWallet from "../../images/dogecoin_mobilewallet.png";
import Button from "../UI/Button/Button";
import Divider from "../UI/Divider/Divider";

const How = () => {
  return (
    <div className={classes.container}>
      <h1>HOW TO GET STARTED WITH DOGECOIN.</h1>
      <Divider />
      <div className={classes.walletContainer}>
        <img
          src={mobileWallet}
          className={classes.mobileWallet}
          alt="mobilewallet"
        />
        <div>
          <div className={classes.text}>
            <h3 className={classes.heading}>1. Choose your Wallet</h3>
            <p className={classes.paragraph}>
              Pick a Wallet from our{" "}
              <Button className={classes.button}>Wallet Selection</Button>. A
              Wallet is used for holding your Dogecoins directly on your
              Computer/Smartphone.
            </p>
            <h3 className={classes.heading}>2. Configure your Wallet</h3>
            <p className={classes.paragraph}>
              After downloading, you can configure your Wallet according to our
              <Button className={classes.button}>Guide</Button>
            </p>
            <h3 className={classes.heading}>3. Get Some Dogecoin</h3>
            <p className={classes.paragraph}>
              There are numerous amounts of ways to get Dogecoin. You can buy
              them, trade for them, get tipped, "mine" them, and more. They are
              surprisingly endless!
            </p>
            <p className={classes.paragraph}>
              You can get tipped Dogecoin by participating in
              <Button className={classes.button}>our community</Button>. If
              that's not your style, another way to have your first Dogecoin is
              to participate at Dogecoin Folding@Home.
            </p>
            <p className={classes.paragraph}>
              <Button className={classes.button}>Folding@Home (FaH)</Button> is
              a distributed computing project. You can join team dogefolders,
              bring in your computing power, help to find cures for diseases and
              receive some Doges for your efforts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
