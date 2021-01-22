import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes.js";
import { Navbar } from 'react-bootstrap';
import "./NavbarMain.scss";

export const NavbarMain = () => {
  return (
    <Navbar collapseOnSelect expand="md">
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse transition="false" id="navbar">
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
      </Navbar.Collapse>
    </Navbar>
  );
};
