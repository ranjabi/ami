import React, { useState } from "react";
import { Layout } from "../Layout/Layout";
import { petaRoutes } from "../../routes/routes.js";
import PetaImg  from "../../images/peta.png";
import { Modal } from "../../components/Modal/Modal";
import { PetaModal } from "./PetaModal";
import "./Peta.scss";

const PathButton = (props) => {
  return (
    <path onClick={(() => props.onClick(props.onClickParams))} id="path-button" d={props.dpath} fill="#fff" opacity="0" />
  );
};

export const Peta = (props) => {
  const [open, setOpen] = useState(props.pos ? true : false);
  const [pos, setPos] = useState(props.pos || 1);

  const changePos = (val) => {
    setPos(val);
    setOpen(true);
  }

  return (
    <Layout>
      <Modal setOpen={setOpen} open={open}>
        <PetaModal pos={pos} />
      </Modal>
      <div id="peta-container">
        <h1>Peta</h1>
        <svg id="peta" version="1.2" viewBox="0 0 841.922 1190.402">
          <image width="841.922px" height="1190.402px" href={PetaImg}></image>
          {petaRoutes.map(
            (landmark, index) => (
              <PathButton key={index} dpath={landmark.dpath} onClick={changePos} onClickParams={index+1} />
            ))}
        </svg>
      </div>
    </Layout>
  );
}