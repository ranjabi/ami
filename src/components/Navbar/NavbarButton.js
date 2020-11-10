import React from "react";

import "./NavbarButton.scss";

export const NavbarButton = ({ text }) => {
  return (
    <div className="navbar-button">
      <h4>{text}</h4>
      <span className="line"></span>
    </div>
  );
};
