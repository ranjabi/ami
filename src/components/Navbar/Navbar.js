import React from "react";
import { NavLink } from "react-router-dom";
// import { NavbarButton } from "./NavbarButton.js";
import { routes } from "../../routes/routes.js";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        {routes.map((route) => (
          <NavLink
            exact={route.path === "/"}
            className="navbar-link"
            activeClassName="navbar-link-active"
            key={route.label}
            to={route.path}
          >
            <h4>{route.label}</h4>
            <div className="line"></div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
