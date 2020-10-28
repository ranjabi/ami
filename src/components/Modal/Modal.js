import React from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

export const Modal = ({ children, open }) => {
  return ReactDOM.createPortal(
    <div className={open ? "Modal-wrapper open" : "Modal-wrapper"}>
      <div className="Modal-container">{children}</div>
    </div>,
    document.getElementById("modal")
  );
};
