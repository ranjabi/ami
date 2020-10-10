import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo_new.png";
import Tebing from "../../../images/Group 1.png";
import { Button } from "../../Form.js";

import "./MainSection.scss";

export const MainSection = () => {
  return (
    <div className="MainSection-wrapper">
      <div className="MainSection-container">
        <img src={Logo} className="MainSection-logo" alt="main section logo" />
        <p>Aku Masuk ITB 2021</p>
        <Link to="/UploadCerita" className="linkBuutton">
          <Button text="Cerita Inspiratif" doNothing />
        </Link>
      </div>
      <img src={Tebing} className="MainSection-tebing" alt="batu" />
    </div>
  );
};
