import React from "react";
import {useLocation, useHistory} from "react-router-dom";
import db from "./dataKompetisi";
import "./Competition.scss";
import {Button} from "../Form/Form";
import {SiLine, SiWhatsapp} from "react-icons/si";

export const Competition = () => {
  const location = useLocation().pathname.split("/");
	const targetUrl = location[location.length - 1];
	const data = db.filter((row) => row.url === targetUrl)[0];
	const history = useHistory();

	if (!data) {
		history.push("/lomba");
	}

	const redirect = () => {
		window.open(data.linkPendaftaran, "_blank");
	};

	return (
		<>
			<div className='title'>{data.judul}</div>
			<div className='tema'>Tema: {data.tema}</div>
			<div className='button-wrapper'>
				<Button onClick={redirect} onClickParams={""} text='Daftar Sekarang' />
			</div>
			<BlokLomba title='Deskripsi' data={data.deskripsi} />
			<BlokLomba title='Ketentuan Peserta' data={data.ketentuanPeserta} />
			<BlokLomba title='Ketentuan Karya' data={data.ketentuanKarya} />
			<BlokLomba title='Ketentuan Penilaian' data={data.ketentuanPenilaian} />
			<BlokLomba title='Lini Masa' data={data.liniMasa} />
			<ContactPerson title='Contact Person' data={data.contactPerson} />
		</>
	);
};

const BlokLomba = (props) => (
	<div className='blok-lomba'>
		<div className='subtitle'>{props.title}</div>
		<div className='content'>{props.data}</div>
	</div>
);

const ContactPerson = (props) => (
	<div className='blok-lomba'>
		<div className='subtitle'>Contact Person</div>
		<div className='contact-person'>
			<div className='contact-person-row'>{props.data.nama}</div>
			<div className='contact-person-row'>
				<SiLine />
				{props.data.line}
			</div>
			<div className='contact-person-row'>
				<SiWhatsapp />
				{props.data.whatsapp}
			</div>
		</div>
	</div>
);