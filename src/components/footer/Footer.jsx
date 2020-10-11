import React from "react";
import "./footer.scss";
import { FaInstagram } from "react-icons/fa";
import { RiLineLine, RiYoutubeLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <div className="footer">
      <h1>our social media</h1>
      <div className="footer-icons">
        <a
          href="https://www.instagram.com/akumasukitb/"
          className="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://timeline.line.me/user/_dVwCk_mf49WdkIDDrFEAtbpnSLOGwZuG_8VuoD0?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile"
          className="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLineLine />
        </a>
        <a
          href="https://www.youtube.com/user/AkuMasukITB"
          className="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiYoutubeLine />
        </a>
      </div>
      <h4>Copyright © AMI 2021</h4>
    </div>
  );
};
