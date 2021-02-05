import React from "react";

import { OrganogramCard } from "../../components/Card/CarouselOrganogram";
import "./MainCompetition.scss";
import { Layout } from "../Layout/Layout.js";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/Form/Form";
import { Link } from "react-router-dom";
import { eksibisiRoutes } from "../../routes/routes.js";
import { useHistory } from "react-router-dom";

const EksibisiMaster = () => {

  const yukvisualisasikanLink =
		"../yukvisualisasikan";
  
  const karikaturkomikLink =
    "../komikkarikatur";

  const yukvisualisasikan = () => {
		window.open(yukvisualisasikanLink, "_blank");
	};

  const karikaturkomik = () => {
		window.open(karikaturkomikLink, "_blank");
	};

  return (
    <Layout>
      <div className='mainCompetition-container'>
				<h1>Eksibisi</h1>
				{/* <div className='competitions-container'>
					{competitionRoutes.map((competition) => (
						<NavLink
							key={competition.label}
							to={competition.path}
							className='competition-thumbnail'
						>
							<img src={competition.image} alt={competition.label} />
							<p>{competition.label}</p>
						</NavLink>
					))}
				// </div> */}
				<Button onClick={() => yukvisualisasikan()} onClickParams='' text="Yuk Visualisasikan!" />
        <Button onClick={() => karikaturkomik()} onClickParams='' text="Karikatur dan Komik" />
			</div>
    </Layout>
  );
};

export { EksibisiMaster };
