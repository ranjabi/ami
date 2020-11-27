import React from "react";
import { Layout } from "../Layout/Layout";
import { competitionRoutes } from "../../routes/routes.js";

export const MainCompetition = () => {
  return (
    <Layout>
      <div className="mainCompetition-container">
        <h1>Lomba</h1>
        <div className="competitions-container">
          {competitionRoutes.map((competition) => (
            <div className="competition-thumbnail">
              <img src={competition.image} alt={competition.label} />
              <p>{competition.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
