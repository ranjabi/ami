import React from "react";
import { Competition } from "../../components/Competition/Competition";
import { Layout } from "../Layout/Layout";
import { NavLink } from "react-router-dom";
import { competitionRoutes } from "../../routes/routes.js";
import "./CompetitionPage.scss";

export const CompetitionPage = (props) => {
  return (
    <Layout>
      <div className="specific-competition-container">
        <Competition {...props} />
        <div className="competitions-container-small">
          {competitionRoutes.map((competition) => (
            <NavLink
              key={competition.label}
              to={competition.path}
              className="competition-thumbnail-small"
              activeClassName="competition-thumbnail-small active-thumbnail"
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
