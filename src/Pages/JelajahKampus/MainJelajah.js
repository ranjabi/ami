import React from "react";
import { Layout } from "../Layout/Layout";
import { ButtonSection } from "./ButtonSection.js"
import "./MainJelajah.scss";

import HelmLakiLaki from "../../images/Helm laki-laki 1.png";
import HelmWanita from "../../images/Helm wanita 1.png";
import ITB from "../../images/itb1920.png";

export const MainJelajah = () => {
    const ganeshaLink = "https://youtube.com/";
    const virtualLink = "https://google.com";

    return (
		<Layout>
			<div className='mainJelajah-container'>
				<h1>Jelajah Kampus</h1>
				<div className='jelajah-container'>
					<ButtonSection
						text = "Kampus Ganesha"
						image = {HelmLakiLaki}
						link = {ganeshaLink}
					/>
					<ButtonSection
						text = "Kampus Jatinangor"
						image = {HelmWanita}
						link = "nangor"
						reverse
					/>
					<ButtonSection
						text = "Zoom Explanation Room"
						image = {ITB}
						link = {virtualLink}
					/>
				</div>
			</div>
		</Layout>
	);
};
