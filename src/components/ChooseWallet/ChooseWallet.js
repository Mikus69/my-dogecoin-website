import classes from "./ChooseWallet.module.css";
import React from "react";
import multidoge from "../../images/multidoge.png";
import dogeLogo from "../../images/Dogecoin_Logo.png";
import Button from "../UI/Button/Button";
import android from "../../images/Android Badge.png";

const ChooseWallet = () => {
  return (
    <div className={classes.container}>
      <h1>Choose You Wallet</h1>
      <p>
        You have to sync with the blockchain to use Dogecoin. MultiDoge is a
        "light" wallet. It syncs with the blockchain by "skimming" through the
        blockchain, providing fast sync times. Dogecoin Core, on the other hand,
        is a "full" wallet. It syncs by downloading it, providing a
        solid-working Dogecoin wallet.
      </p>
      <h2>Multidoge</h2>
      <img src={multidoge} alt="multidoge" />
      <Button>Windows</Button>
      <Button>Linux</Button>
      <Button>macOS</Button>
      <h2>Dogecoin Core</h2>
      <img className={classes.logo} src={dogeLogo} alt="Dogecoin Logo" />
      <div className={classes.buttonContainer}>
        <div>
          <Button>Windows 32-bit</Button>
          <Button>Windows 64-bit</Button>
        </div>
        <div>
          <Button>Linux 32-bit</Button>
          <Button>Linux 64-bit</Button>
        </div>
        <Button>macOS</Button>
      </div>
      <h2>Android</h2>
      <img className={classes.android} src={android} alt="android" />
    </div>
  );
};

export default ChooseWallet;
