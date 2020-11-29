import React, {useState} from "react";
import data from "./data.json";
import {OrganogramCard} from "../../components/Card/CarouselOrganogram";
import "./Organogram.scss";

const Organogram = () => {
	let data0 = [data[0]];
	let data1 = data;
	let data2 = data;
	let data3 = data;
	let data4 = data;
	let data5 = data;
	let data6 = data;
	let data7 = data;
	let data8 = data;
	let data9 = data;

	return (
		<>
			<h1>Organogram</h1>
			<div className='organogram'>
				<span></span>
				<OrganogramCard data={data0} />
				<span></span>
				<OrganogramCard data={data1} />
				<OrganogramCard data={data2} />
				<OrganogramCard data={data3} />
				<OrganogramCard data={data4} />
				<OrganogramCard data={data5} />
				<OrganogramCard data={data6} />
				<OrganogramCard data={data7} />
				<OrganogramCard data={data8} />
				<OrganogramCard data={data9} />
			</div>
		</>
	);
};

export {Organogram};
