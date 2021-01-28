import React from "react";
import { Layout } from "../Layout/Layout";
import "./KomikKarikatur.scss";
import CardColumns from 'react-bootstrap/CardColumns';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EksibisiCard } from "./EksibisiCard";
import { Button } from "../../components/Form/Form";
import { data } from "./data.js";

export const KomikKarikatur = () => {
	let data0 = data[0];
	let data1 = data[1];
	let data2 = data[2];
	let data3 = data[3];
	let data4 = data[4];
	let data5 = data[5];

	const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSdrz4ux_il0znw9Y4JdDNZeii8hjon4AV44GIeHycEIxvFnog/viewform?usp=pp_url&entry.1567668559=Karya+1";

	const openForm = () => {
		window.open(formLink, "_blank");
	};

  	return (
		<Layout>
		 	<div className='card-container'>
		 		<h1>Komik Karikatur</h1>
		 		<h2>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</h2>
				<CardColumns>
					<EksibisiCard data={data3}/>
					<EksibisiCard data={data4}/>
					<EksibisiCard data={data2}/>
				</CardColumns>
				<CardColumns>
					<EksibisiCard data={data0}/>
					<EksibisiCard data={data1}/>
					<EksibisiCard data={data5}/>
				</CardColumns>
				<Button onClick={() => openForm()} onClickParams='' text="Vote" />
		 	</div>
		</Layout>
	);
};
