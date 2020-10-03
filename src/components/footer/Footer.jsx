import React from "react";
import "./footer.scss";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiLineLine, RiYoutubeLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <div className="footer">
      <h1>our social media</h1>
      <div className="footer-icons">
        <a href="#" className="footer-icon">
          <FaInstagram />
        </a>
        <a href="#" className="footer-icon">
          <FaWhatsapp />
        </a>
        <a href="#" className="footer-icon">
          <RiLineLine />
        </a>
        <a href="#" className="footer-icon">
          <RiYoutubeLine />
        </a>
      </div>
      <h4>Copyright © AMI 2021</h4>
    </div>
  );
};
