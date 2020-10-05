import React from 'react';

import "./NavbarButton.scss"

export const NavbarButton = ({text, path}) => {
  return(
    <a className="navbar-button" href={path}>
      <h4>
        {text}
      </h4>
      <span className="line"></span>
    </a>
  )
}
