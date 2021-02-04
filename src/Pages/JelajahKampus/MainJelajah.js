import React from "react";
import { Layout } from "../Layout/Layout";
import { ButtonSection } from "./ButtonSection.js"
import "./MainJelajah.scss";

import HelmLakiLaki from "../../images/Helm laki-laki 1.png";
import HelmWanita from "../../images/Helm wanita 1.png";
import ITB from "../../images/itb1920.png";

export const MainJelajah = () => {
    const ganeshaLink = "http://bit.ly/JKAMI2021";
    const liveLink = "http://bit.ly/zoom_jk_ami2021";

    return (
		<Layout>
			<div className='mainJelajah-container'>
				<h1>Jelajah Kampus</h1>
				<p>
					Jelajah Kampus ITB bersama AMI 2021 di ITB Day 2021! Bersama tour guide kami, 
					berkelilinglah mengunjungi gedung-gedung dan kompleks kampus ITB yang tersohor. 
					Tour yang virtual namun tetap imersif ini dirancang khusus untuk kalian, para calon-calon mahasiswa ITB!
				</p>
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
						text = "Live Campus Tour"
						image = {ITB}
						link = {liveLink}
					/>
				</div>
			</div>
		</Layout>
	);
};
