import React from "react";
import "./sponsor.scss";
import sponsor1 from "../../images/bintangBeasiswa.jpg";
import sponsor2 from "../../images/pahamify.jpg";
import sponsor3 from "../../images/bni.png";

export const Sponsors = () => {
  return (
    <div className="sponsor">
      <h1>Sponsors</h1>
      <div className="sponsorImage">
        <img src={sponsor1} alt="" />
        <img src={sponsor2} alt="" />
        <img src={sponsor3} alt="" />
      </div>
    </div>
  );
};
