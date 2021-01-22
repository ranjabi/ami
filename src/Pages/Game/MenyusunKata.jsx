import React from "react";
import { useHistory } from 'react-router-dom';
import { Layout } from "../Layout/Layout";
import { Button } from "../../components/Form/Form";
import { menyusunKataLink } from "./data";
import "./MenyusunKata.scss";

export const MenyusunKata = () => {
  const history = useHistory();
  
  const openFormSubmit = () => {
    window.open(menyusunKataLink, "_blank");
  };

  const nextGame = () => {
    history.push("/games/peta");
  };

  return (
    <Layout>
      <div className="menyusunkata-container">
        <h1>Menyusun Kata</h1>
        <div className="kataacak-container">
          <h2>I N S T I T U T  T E K N O L O G I  B A N D U N G</h2>
        </div>
        <div className="buttons">
          <Button onClick={openFormSubmit} text="Form Submit" />
          <Button onClick={nextGame} text="Game Selanjutnya" />
        </div>
      </div>
    </Layout>
  );
};
