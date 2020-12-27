import React, { useState } from "react";
import { Layout } from "../Layout/Layout";
import { Dropdown } from "../../components/Form/Form";
import data from "./data.json";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./MainCerita.scss";

export const MainCerita = () => {
  const [ceritaId, setCeritaId] = useState(0);
  const changeCerita = (value) => {
    if (value === ceritaId) return;
    setCeritaId(value);
  };

  const handleCarousel = (change) => {
    let target = ceritaId + change;
    target = target < 0 ? target + data.length : target % data.length;
    setCeritaId(target);
  };

  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [navbarOffset, setNavbarOffset] = useState(0);
  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   const navbar = document.getElementsByClassName("navbar-wrapper")[0];
  //   setHeaderScrolled(offset > navbar.offsetHeight - 10);
  // };
  // const handleResize = () => {
  //   const navbar = document.getElementsByClassName("navbar-wrapper")[0];
  //   setNavbarOffset(navbar.offsetHeight);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   window.addEventListener("load", handleResize);
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     window.removeEventListener("load", handleResize);
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <Layout>
      <div
        style={{ minHeight: "calc(100vh - " + navbarOffset + "px)" }}
        className="mainCerita-container"
      >
        <h1>Cerita Inspiratif</h1>
        {/* <div className="youtube-wrapper">
          <iframe
            src="https://www.youtube.com/embed/CYr2r8GXBJM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed
          viverra tellus in hac habitasse platea dictumst vestibulum. Imperdiet
          nulla malesuada pellentesque elit eget. Id volutpat lacus laoreet non
          curabitur gravida arcu ac tortor. Turpis tincidunt id aliquet risus
          feugiat in ante. Tortor id aliquet lectus proin. Proin sagittis nisl
          rhoncus mattis. Mattis pellentesque id nibh tortor. Tristique nulla
          aliquet enim tortor at auctor. Eget lorem dolor sed viverra ipsum.
        </p> */}
        <div
          className={"headerCerita " + (headerScrolled ? "headerScrolled" : "")}
        >
          <Dropdown
            useKey
            hideTooltip
            className="ddChangeCerita"
            value={ceritaId}
            options={data.map((d) => {
              return "Cerita Perjuangan " + d.author;
            })}
            handleChange={changeCerita}
          ></Dropdown>
        </div>
        <div
          style={{ opacity: 0, display: headerScrolled ? "block" : "none" }}
          className="headerCerita"
        >
          <Dropdown
            useKey
            hideTooltip
            className="ddChangeCerita"
            value={ceritaId}
            options={[]}
          ></Dropdown>
        </div>
        {data[ceritaId].youtube && (
          <div className="youtube-wrapper">
            <iframe
              src={data[ceritaId].youtube}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Youtube Video"
            ></iframe>
          </div>
        )}
        {data[ceritaId].spotify && (
          <div className="spotify-wrapper">
            <iframe
              src={data[ceritaId].spotify}
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Spotify Podcast"
            ></iframe>
          </div>
        )}

        <div className="bodyCerita">
          <FaChevronLeft className="prev" onClick={() => handleCarousel(-1)} />
          <ReactReadMoreReadLess
            charLimit={400}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
          >
            {data[ceritaId].cerita}
          </ReactReadMoreReadLess>
          <FaChevronRight className="next" onClick={() => handleCarousel(1)} />
        </div>
        <div className={"footerCerita"}>
          <div className="footerContainer">
            <p>{data[ceritaId].author}</p>
            <p>
              {data[ceritaId].nim +
                " / " +
                data[ceritaId].fakultas +
                " / " +
                data[ceritaId].jurusan}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
