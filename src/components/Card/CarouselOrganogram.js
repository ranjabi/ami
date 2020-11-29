import React, {useState} from "react";
import {FaInstagram, FaAngleRight, FaAngleLeft} from "react-icons/fa";
import "./CarouselOrganogram.scss";

const OrganogramCard = (props) => {
	function importAll(r) {
		let images = {};
		r.keys().map((item, index) => {
			images[item.replace("./", "")] = r(item);
		});
		return images;
	}
	const images = importAll(
		require.context("./images", false, /\.(png|jpe?g|svg)$/)
	);

	const [counter, setCounter] = useState(0);
	const [currentData, setCurrentData] = useState(props.data[0]);
	const [image, setImage] = useState(
		images[`${props.data[0].nama.toLowerCase()}.png`]
	);

	const handleClick = (change) => {
		let targetIdx = (counter + change) % props.data.length;
		targetIdx = targetIdx < 0 ? targetIdx + props.data.length : targetIdx;
		setCounter(targetIdx);
		setCurrentData(() => props.data[targetIdx]);
		let targetImg = images[`${props.data[targetIdx].nama.toLowerCase()}.png`];
		setImage(targetImg);
	};

	let imageCarousel =
		props.data.length == 1 ? (
			<>
				<div className='prev'></div>
				<img className='oc-image' src={image} alt={currentData.nama} />
				<div className='next'></div>
			</>
		) : (
			<>
				<div className='prev' onClick={() => handleClick(-1)}>
					<FaAngleLeft />
				</div>
				<img className='oc-image' src={image} alt={currentData.nama} />
				<div className='next' onClick={() => handleClick(1)}>
					<FaAngleRight />
				</div>
			</>
		);

	//oc stands for organogram card
	return (
		<div className='oc-container'>
			<div className='image'>{imageCarousel}</div>
			<div className='detail'>
				<p className='name'>{currentData.nama}</p>
				<p className='status'>{currentData.status}</p>
			</div>
			<a href={`https://www.instagram.com/${currentData.usernameIG}`}>
				<FaInstagram className='social-media-icon instagram-icon' />
			</a>
		</div>
	);
};

export {OrganogramCard};
