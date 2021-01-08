import React from "react";
import { Layout } from "../Layout/Layout";
import "./Eksibisi.scss";
import CardColumns from 'react-bootstrap/CardColumns';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EksibisiCard } from "./EksibisiCard";
import { Button } from "../../components/Form/Form";
import { data } from "./data.js";

export const Eksibisi = () => {
	let data0 = data[0];
	let data1 = data[1];
	let data2 = data[2];
	let data3 = data[3];
	let data4 = data[4];
	let data5 = data[5];
	let data6 = data[6];
	let data7 = data[7];
	let data8 = data[8];
	let data9 = data[9];
	let data10 = data[10];
	let data11 = data[11];
	let data12 = data[12];
	let data13 = data[13];
	let data14 = data[14];
	let data15 = data[15];

	const formLink = "https://docs.google.com/forms/u/0/d/1IRQYB9l8jTBrVgIorV9XECVq-3RbCbnNMvsaEkXT390/viewform?edit_requested=true";

	const openForm = () => {
		window.open(formLink, "_blank");
	};

  	return (
		<Layout>
		 	<div className='card-container'>
		 		<h1>Showcase Karya</h1>
		 		<h2>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</h2>
				<CardColumns>
					<EksibisiCard data={data0}/>
					<EksibisiCard data={data1}/>
					<EksibisiCard data={data2}/>
				</CardColumns>
				<CardColumns>
					<EksibisiCard data={data3}/>
					<EksibisiCard data={data4}/>
					<EksibisiCard data={data5}/>
				</CardColumns>
				<CardColumns>
					<EksibisiCard data={data6}/>
					<EksibisiCard data={data7}/>
					<EksibisiCard data={data8}/>
				</CardColumns>
				<CardColumns>
					<EksibisiCard data={data9}/>
					<EksibisiCard data={data10}/>
					<EksibisiCard data={data11}/>
				</CardColumns>
				<CardColumns>
					<EksibisiCard data={data12}/>
					<EksibisiCard data={data13}/>
					<EksibisiCard data={data14}/>
				</CardColumns>
				<CardColumns>
					<EksibisiCard data={data15}/>
				</CardColumns>
				<Button onClick={() => openForm()} onClickParams='' text="Vote" />
		 	</div>
		</Layout>
	);
};
