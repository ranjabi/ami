import React from 'react';
import {NavbarButton} from "./NavbarButton.js"
import {NavbarData} from "./NavbarData.js"

import "./Navbar.scss"

export const Navbar = () => {

  return(
    <div className="navbar-wrapper">
      <div className="navbar-container">
        {NavbarData.map(data => <NavbarButton text={data.text} path={data.path} key={data.path}/>)}
      </div>
    </div>
  )
}
