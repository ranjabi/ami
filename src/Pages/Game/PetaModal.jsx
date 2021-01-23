import React from "react";
import { Button } from "../../components/Form/Form";
import { gameRules } from "./data";
import { useHistory } from "react-router-dom";

export const PetaModal = (props) => {
  const history = useHistory();
  const openLink = () => {
    if(gameRules[props.pos].link)
      window.open(gameRules[props.pos].link, "_blank");
    else if(gameRules[props.pos].to)
      history.push(gameRules[props.pos].to);
  }
  return (
    <>
        <h2>{gameRules[props.pos].nama}</h2>
        <hr />
        <span id="start">
          {gameRules[props.pos].peraturan}
        </span>
        <Button onClick={openLink} text="Start the Game!" />
    </>
  );
};
