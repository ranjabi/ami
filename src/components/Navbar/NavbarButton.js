import React from "react";

import "./NavbarButton.scss";

export const NavbarButton = ({ text, path, onlyHomepage }) => {
  const handleClick = (event) => {
    event.preventDefault();
    let isWithinThisPage = document.querySelector(path);
    isWithinThisPage
      ? isWithinThisPage.scrollIntoView({ behavior: "smooth", block: "start" })
      : (document.location.href = "/");
  };

  return (
    <a className="navbar-button" href={path} onClick={handleClick}>
      <h4>{text}</h4>
      <span className="line"></span>
    </a>
  );
};
