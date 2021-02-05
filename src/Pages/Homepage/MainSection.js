import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo_new.png";
import Tebing from "../../images/Group 1.png";
import { Button } from "../../components/Form/Form";

import "./MainSection.scss";

export const MainSection = () => {
  return (
    <div className="MainSection-wrapper">
      <div className="MainSection-container">
        <img src={Logo} className="MainSection-logo" alt="main section logo" />
        <p>Aku Masuk ITB 2021</p>
        <Link to="/jelajah" className="linkBuutton">
          <Button text="Jelajah Kampus"/>
        </Link>
      </div>
      <img src={Tebing} className="MainSection-tebing" alt="batu" />
    </div>
  );
};
