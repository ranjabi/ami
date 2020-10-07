import React from "react";
import { Navbar } from "../../Navbar/Navbar.js";
import { MainSection } from "./MainSection.js";
import { AboutUsSection } from "./AboutUsSection.js";
import { SmallSection } from "./SmallSection.js";
import { Footer } from "../../footer/Footer.jsx";

import HelmLakiLaki from "../../../images/Helm laki-laki 1.png";
import HelmWanita from "../../../images/Helm wanita 1.png";
import Awan from "../../../images/Awan 1 2.png";

import "./Homepage.scss";

const VisiTitle = "Visi";
const VisiDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper libero in massa accumsan auctor. Aenean tempor dictum dui, aliquam pharetra quam ullamcorper eu. Vivamus elementum turpis rhoncus magna ultrices lobortis in gravida augue. Integer sagittis, lorem varius laoreet ullamcorper, turpis eros aliquam dolor, ";
const VisiImage = HelmLakiLaki;

const MisiTitle = "Misi";
const MisiDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper libero in massa accumsan auctor. Aenean tempor dictum dui, aliquam pharetra quam ullamcorper eu. Vivamus elementum turpis rhoncus magna ultrices lobortis in gravida augue. Integer sagittis, lorem varius laoreet ullamcorper, turpis eros aliquam dolor, ";
const MisiImage = HelmWanita;

export const Homepage = () => {
  return (
    <div className="Homepage-wrapper">
      <img src={Awan} className="Homepage-awan" alt="awan" />
      <Navbar />
      <MainSection />
      <AboutUsSection />
      <SmallSection
        title={VisiTitle}
        description={VisiDescription}
        image={VisiImage}
      />
      <SmallSection
        title={MisiTitle}
        description={MisiDescription}
        image={MisiImage}
        reverse
      />
      <Footer />
    </div>
  );
};
