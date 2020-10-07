import React from 'react';
import Logo from "../../../images/Logo.png"
import Awan from "../../../images/Awan 1 1.png"

import "./AboutUsSection.scss"

const aboutUs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper libero in massa accumsan auctor. Aenean tempor dictum dui, aliquam pharetra quam ullamcorper eu. Vivamus elementum turpis rhoncus magna ultrices lobortis in gravida augue. Integer sagittis, lorem varius laoreet ullamcorper, turpis eros aliquam dolor, "

export const AboutUsSection = () => {
  return(
    <div className="AboutUsSection-wrapper">
      <img src={Awan} className="AboutUsSection-awan"/>
      <div className="AboutUsSection-container">
        <img src={Logo} className="AboutUsSection-logo"/>
        <div className="AboutUsSection-text">
          <h1>TENTANG KAMI</h1>
          <p>{aboutUs}</p>
        </div>
      </div>
    </div>
  )
}
