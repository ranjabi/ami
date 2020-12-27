import React from "react";
import { NavLink } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { competitionRoutes } from "../../routes/routes.js";
import { Button } from "../../components/Form/Form";
import "./MainCompetition.scss";

export const MainCompetition = () => {

  const pdfLink =
		"https://drive.google.com/file/d/1OCtvEH61scfp4fXTnVQ4Ru-YlbRV2dnE/view?usp=sharing";

  const downloadPDF = () => {
		window.open(pdfLink, "_blank");
	};

  return (
		<Layout>
			<div className='mainCompetition-container'>
				<h1>Lomba</h1>
				<div className='competitions-container'>
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
				</div>
				<Button onClick={() => downloadPDF()} onClickParams='' text="Download PDF Lomba" />
			</div>
		</Layout>
	);
};
