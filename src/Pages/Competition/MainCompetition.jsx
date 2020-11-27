import React from "react";
import { NavLink } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { competitionRoutes } from "../../routes/routes.js";
import "./MainCompetition.scss";

export const MainCompetition = () => {
  return (
    <Layout>
      <div className="mainCompetition-container">
        <h1>Lomba</h1>
        <div className="competitions-container">
          {competitionRoutes.map((competition) => (
            <NavLink
              key={competition.label}
              to={competition.path}
              className="competition-thumbnail"
            >
              <img src={competition.image} alt={competition.label} />
              <p>{competition.label}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </Layout>
  );
};
