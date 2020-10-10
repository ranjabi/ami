import React from "react";

import "./SmallSection.scss";

export const SmallSection = ({ title, description, reverse, image }) => {
  return (
    <div className="SmallSection-wrapper">
      <div
        className={
          reverse ? "SmallSection-container reverse" : "SmallSection-container"
        }
      >
        <div className="SmallSection-text">
          <h1>{title}</h1>
          {description.length > 1 ? (
            <p>
              <ul>
                {description.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
            </p>
          ) : (
            <p>{description}</p>
          )}
        </div>
        <img src={image} alt="small section" />
      </div>
    </div>
  );
};
