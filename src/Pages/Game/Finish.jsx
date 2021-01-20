import React from "react";
import { Layout } from "../Layout/Layout";
import "./Finish.scss"

export const Finish = () => {
    return (
        <Layout>
            <div className="finish-container">
                <h1>Finish</h1>
                <p>
                    Perjalananmu telah usai! Selamat!<br/>
                    Pengumuman akan dilaksanakan pada tanggal DD MONTH YYYY.<br/>
                    Ditunggu ya!
                </p>
                <div className="youtube-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/U9tdW8o7mWg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="trailer ami"
                    ></iframe>
                </div>
            </div>
        </Layout>
    );
}