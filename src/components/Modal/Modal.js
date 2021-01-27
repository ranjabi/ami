import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

export const Modal = ({ children, open, setOpen }) => {
  useEffect(() => {
    const closeModal = () => {
      setOpen(false);
    }
    document.getElementById("modal-touch").addEventListener("click", closeModal);
    return () => {
        document.getElementById("modal-touch").removeEventListener("click", closeModal);
    }
  }, [setOpen]);
  return ReactDOM.createPortal(
    <div className={open ? "Modal-wrapper open" : "Modal-wrapper"}>
      <div id="modal-touch"></div>
      <div className="Modal-container">{children}</div>
    </div>,
    document.getElementById("modal")
  );
};
