import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Form/Form";
import "./ButtonSection.scss"

export const ButtonSection = ({reverse, text, image, link}) => {
    const history = useHistory();

    const openPage = (link) => {
        if (link !== "nangor") {
            window.open(link, "_blank");
        } else {
            history.push("/jelajah/jatinangor");
        }
    };

    return (
        <div className="button-wrapper">
          <div
            className={
              reverse ? "button-container reverse" : "button-container"
            }
          >
            <div className="button-holder">
                <Button onClick={() => openPage(link)} onClickParams='' text={text} />	  
            </div>
            <img src={image} alt="button section" />
          </div>
        </div>
      );
};