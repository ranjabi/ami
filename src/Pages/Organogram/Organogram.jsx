import React from "react";
import {
  ketua,
  kesekjenan,
  fr,
  mamet,
  acara,
  relasi,
  pensuasanaan,
  operasional,
} from "./data.js";
import { OrganogramCard } from "../../components/Card/CarouselOrganogram";
import "./Organogram.scss";
import { Layout } from "../Layout/Layout.js";

const Organogram = () => {
  const divisions = [
    ketua,
    kesekjenan,
    fr,
    mamet,
    acara,
    relasi,
    pensuasanaan,
    operasional,
  ];
  return (
    <Layout>
      <div className="organogram-container">
        <h1>Organogram</h1>
        <div className="organogram">
          {divisions.map((division, idx) => (
            <OrganogramCard data={division} key={idx} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export { Organogram };
