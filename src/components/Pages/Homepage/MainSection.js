import React from 'react';
import Logo from "../../../images/Logo.png"
import Tebing from "../../../images/Group 1.png"
import Teratai1 from "../../../images/Teratai 1.png"
import Teratai2 from "../../../images/Teratai 2.png"
import {Button} from "../../Form.js"

import "./MainSection.scss"

export const MainSection = () => {
  return(
    <div className="MainSection-wrapper">
      <img src={Tebing} className="MainSection-tebing"/>
      <img src={Teratai1} className="MainSection-teratai1"/>
      <img src={Teratai2} className="MainSection-teratai2"/>

      <div className="MainSection-container">
        <img src={Logo} className="MainSection-logo"/>
        <h1>AMI 2021</h1>
        <p>Aku Masuk ITB 2021</p>
        
        <a href="/UploadCerita" className="linkBuutton">
          <Button text="Cerita Inspiratif" doNothing/>
        </a>
      </div>
    </div>
  )
}
