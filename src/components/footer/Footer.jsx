import React from "react";
import "./footer.scss";
import { FaInstagram } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import { ReactComponent as Youtube } from "../../images/youtube-logo.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <h1>our social media</h1>
      <div className="social-media">
        <a
          href="https://www.instagram.com/akumasukitb/"
          className="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-media-icon instagram-icon" />
        </a>
        <a
          href="https://timeline.line.me/user/_dVwCk_mf49WdkIDDrFEAtbpnSLOGwZuG_8VuoD0?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile"
          className="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLine className="social-media-icon line-icon" />
        </a>
        <a
          href="https://www.youtube.com/user/AkuMasukITB"
          className="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube className="social-media-icon youtube-icon" />
        </a>
      </div>
      <h4>Copyright © 2020, Institut Teknologi Bandung, Aku Masuk ITB </h4>
    </div>
  );
};
