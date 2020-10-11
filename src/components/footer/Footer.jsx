import React from "react";
import "./footer.scss";
import { FaInstagramSquare, FaLine, FaYoutubeSquare } from "react-icons/fa";

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
          <FaInstagramSquare />
        </a>
        <a
          href="https://timeline.line.me/user/_dVwCk_mf49WdkIDDrFEAtbpnSLOGwZuG_8VuoD0?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile"
          className="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLine />
        </a>
        <a
          href="https://www.youtube.com/user/AkuMasukITB"
          className="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutubeSquare />
        </a>
      </div>
      <hr />
      <h4>Copyright © 2020, Institut Teknologi Bandung, Aku Masuk ITB </h4>
    </div>
  );
};
