import React, { useState } from "react";
import { Layout } from "../Layout/Layout";
import { data } from "./data.js";
import { Dropdown } from "../../components/Form/Form";
import DefaultImage from "../../images/itb1920.png";
import "./JatinangorPage.scss"

export const JatinangorPage = () => {
    const [tempatId, setTempatId] = useState(0);
    const changeCerita = (value) => {
        if (value === tempatId) return;
        setTempatId(value);
    };

    const imageDiv = (props) => {
        if (props === DefaultImage) return "defaultImage";
        return "image";
    };

    return (
        <Layout>
            <div className="mainNangor-container">
                <h1>ITB JATINANGOR</h1>
                <div className="video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/L7XzTiuvJHs"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Tur ITB Jatinangor"
                    ></iframe>
                </div>
                <p>
                    Kampus ITB-Jatinangor dikembangkan di lahan aset Pemerintah Provinsi Jawa Barat yaitu
                    ex-lahan Universitas Winayamukti. ITB Jatinangor mengelola distribusi dan kebutuhan airnya sendiri
                    dengan sumber airnya berasal dari situ yang ada di kampus dan kemudian dikelola sendiri. Selain itu,
                    katanya, Laboratorium Kimia Dasar di ITB Jatinangor paling bagus jika dibandingkan dengan ITB
                    kampus lainnya. Kampus ITB Jatinangor pun dikelilingi oleh track lari yang bisa digunakan bukan
                    hanya oleh mahasiswa ITB namun juga masyarakat umum Jatinangor. Kampus ITB Jatinangor ini
                    bertetangga dengan beberapa perguruan tinggi lainnya yaitu Unpad, IPDN, dan Ikopin.
                </p>
                <h2>Trivia/Funfact Jatinangor</h2>
                <div className="headerTempat">
                    <Dropdown
                        useKey
                        hideTooltip
                        className="changeTempat"
                        value={tempatId}
                        options={data.map((d) => {
                            return d.tempat;
                        })}
                        handleChange={changeCerita}
                    ></Dropdown>
                </div>
                <div className="bodyTempat">
                    <img src={data[tempatId].image} alt={data[tempatId].tempat} className={imageDiv(data[tempatId].image)} />
                    {data[tempatId].fact}
                </div>
            </div>
        </Layout>
    );
};