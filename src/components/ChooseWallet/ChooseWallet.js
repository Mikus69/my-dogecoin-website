import classes from "./ChooseWallet.module.css";
import React from "react";
import multidoge from "../../images/multidoge.png";
import dogeLogo from "../../images/Dogecoin_Logo.png";
import Button from "../UI/Button/Button";
import android from "../../images/Android Badge.png";
import { ReactComponent as Windows } from "../../images/SVG/windows.svg";
import { ReactComponent as Linux } from "../../images/SVG/linux.svg";
import { ReactComponent as Apple } from "../../images/SVG/apple.svg";
import Divider from "../UI/Divider/Divider";

const ChooseWallet = () => {
  return (
    <div className={classes.container}>
      <h1>Choose Your Wallet</h1>
      <Divider />
      <p>
        You have to sync with the blockchain to use Dogecoin. MultiDoge is a
        "light" wallet. It syncs with the blockchain by "skimming" through the
        blockchain, providing fast sync times. Dogecoin Core, on the other hand,
        is a "full" wallet. It syncs by downloading it, providing a
        solid-working Dogecoin wallet.
      </p>
      <div className={classes.mainDogeContainer}>
        <div className={classes.dogeContainer}>
          <h2>Multidoge</h2>
          <img className={classes.logo} src={multidoge} alt="multidoge" />
          <Button className={` ${classes.buttonContainer} ${classes.windows} `}>
            <Windows className={classes.icon} />
            Windows
          </Button>
          <Button className={` ${classes.buttonContainer} ${classes.linux} `}>
            <Linux className={classes.icon} />
            Linux
          </Button>
          <Button className={` ${classes.buttonContainer} ${classes.apple} `}>
            <Apple className={classes.icon} />
            macOS
          </Button>
        </div>
        <div className={classes.dogeContainer}>
          <h2>Dogecoin Core</h2>
          <img className={classes.logo} src={dogeLogo} alt="Dogecoin Logo" />
          <div className={classes.buttonItems}>
            <div className={classes.buttonItem}>
              <Button
                className={` ${classes.buttonContainer} ${classes.windows} `}
              >
                <Windows className={classes.icon} />
                Windows 32-bit
              </Button>
              <Button
                className={` ${classes.buttonContainer} ${classes.windows} `}
              >
                <Windows className={classes.icon} />
                Windows 64-bit
              </Button>
            </div>
            <div className={classes.buttonItem}>
              <Button
                className={` ${classes.buttonContainer} ${classes.linux} `}
              >
                <Linux className={classes.icon} />
                Linux 32-bit
              </Button>
              <Button
                className={` ${classes.buttonContainer} ${classes.linux} `}
              >
                <Linux className={classes.icon} />
                Linux 64-bit
              </Button>
            </div>
            <div className={classes.buttonItem}>
              <Button
                className={` ${classes.buttonContainer} ${classes.apple} `}
              >
                <Apple className={classes.icon} />
                macOS
              </Button>
            </div>
          </div>
        </div>
      </div>
      <h2>Android</h2>
      <img className={classes.android} src={android} alt="android" />
    </div>
  );
};

export default ChooseWallet;
