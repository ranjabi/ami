import React from "react";
import { Layout } from "../Layout/Layout";
import "./Finish.scss"

export const Finish = () => {
    return (
        <Layout>
            <div className="finish-container">
                <h1>Finish</h1>
                <div className="youtube-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/U9tdW8o7mWg"
                        width="560"
                        height="315"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="trailer ami"
                    ></iframe>
                </div>
                <p>
                    Perjalananmu telah usai! Selamat!<br/>
                    Pengumuman pemenang dilakukan pada saat ITB Day, yang dilaksanakan pada tanggal 6 Februari 2021 (info lebih lanjut).<br/>
                    Ditunggu ya!
                </p>
            </div>
        </Layout>
    );
}