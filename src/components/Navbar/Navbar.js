import React from "react";
import { NavbarButton } from "./NavbarButton.js";
import { NavbarData } from "./NavbarData.js";

import "./Navbar.scss";

export const Navbar = () => {
  const isHomepage = document.location.pathname === "/";
  const navbarButtons = isHomepage
    ? NavbarData
    : NavbarData.filter((data) => !data.onlyHomepage);

  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        {navbarButtons.map((data) => (
          <NavbarButton text={data.text} path={data.path} key={data.path} />
        ))}
      </div>
    </div>
  );
};
