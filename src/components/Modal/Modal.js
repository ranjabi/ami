import React from 'react';

import "./Modal.scss"

export const Modal = ({children,open}) => {
  return(
    <div className={open ? "Modal-wrapper open" : "Modal-wrapper"}>
      <div className="Modal-container">
        {children}
      </div>
    </div>
  )
}
