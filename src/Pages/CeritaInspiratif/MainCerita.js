import React, { useState, useEffect } from "react";
import { Layout } from "../Layout/Layout";
import { Dropdown } from "../../components/Form/Form";
import data from "./data.json";
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./MainCerita.scss";

export const MainCerita = () => {
    const [ceritaId, setCeritaId] = useState(0);
    const changeCerita = (value) => {
        if(value === ceritaId)
            return;
        setCeritaId(value);
    }


    const [headerScrolled, setHeaderScrolled] = useState(false);
    const [navbarOffset, setNavbarOffset] = useState(0);
    const handleScroll = () => {
        const offset = window.scrollY;
        const navbar = document.getElementsByClassName("navbar-wrapper")[0];
        setHeaderScrolled(offset > navbar.offsetHeight-10);
    }
    const handleResize = () => {
        const navbar = document.getElementsByClassName("navbar-wrapper")[0];
        setNavbarOffset(navbar.offsetHeight);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', handleResize);
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <Layout>
            <div style={{minHeight: "calc(100vh - "+ navbarOffset +"px)"}} className="mainCerita-container">
                <div className={"headerCerita " + (headerScrolled? "headerScrolled" : "")}>
                    <Dropdown
                        useKey
                        hideTooltip
                        className="ddChangeCerita"
                        value={ceritaId}
                        options={data.map((d)=>{
                            return "Cerita Perjuangan " + d.author;
                        })}
                        handleChange={changeCerita}>
                    </Dropdown>
                </div>
                <div style={{opacity: 0, display: (headerScrolled ? "block" : "none")}} className="headerCerita">
                    <Dropdown
                        useKey
                        hideTooltip
                        className="ddChangeCerita"
                        value={ceritaId}
                        options={[]}>
                    </Dropdown>
                </div>
                <div className="bodyCerita">
                    <ReactReadMoreReadLess
                        charLimit={400}
                        readMoreText={"Read more ▼"}
                        readLessText={"Read less ▲"}
                    >
                        {data[ceritaId].cerita}
                    </ReactReadMoreReadLess>
                </div>
                <div className={"footerCerita"}>
                    <div className="footerContainer">
                        <p>{data[ceritaId].author}</p>
                        <p>{data[ceritaId].nim+" / "+data[ceritaId].fakultas+" / "+data[ceritaId].jurusan}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};