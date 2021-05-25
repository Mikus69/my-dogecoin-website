import classes from "./LandingPage.module.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import doge from "../../images/DogeLogo.png";
import Button from "../UI/Button/Button";
import ChooseWallet from "../ChooseWallet/ChooseWallet";
import What from "../What/What";
import How from "../How/How";
import GetWallet from "../GetWallet/GetWallet";
import Footer from "../Footer/Footer";
import { ReactComponent as Github } from "../../images/SVG/github.svg";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.landing}>
        <h2>1 Dogecoin = 1 Dogecoin</h2>
        <img src={doge} alt="doge logo" className={classes.dogeLogo} />
        <p>
          Dogecoin is an open source peer-to-peer digital currency, favored by
          Shiba Inus worldwide.
        </p>
        <div className={classes.landingButtons}>
          <Button className={classes.landingButtonLeft}>Get Started Now</Button>
          <Button className={classes.landingButtonRight}>
            <Github className={classes.icon} /> Source
          </Button>
        </div>
      </div>
      <ChooseWallet />
      <What />
      <How />
      <GetWallet />
      <Footer />
    </div>
  );
};

export default LandingPage;
