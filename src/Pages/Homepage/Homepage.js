import React from "react";
import { MainSection } from "./MainSection.js";
import { AboutUsSection } from "./AboutUsSection.js";
import { SmallSection } from "./SmallSection.js";
import {Layout} from "../Layout/Layout";

import HelmLakiLaki from "../../images/Helm laki-laki 1.png";
import HelmWanita from "../../images/Helm wanita 1.png";
import Awan from "../../images/Awan 1 2.png";
import AwanBottom from "../../images/Awan 3.png";
import Burung from "../../images/Burung 1.png";

import "./Homepage.scss";

const VisiTitle = "Visi";
const VisiDescription = [
  "Aku Masuk ITB sebagai wadah untuk eksplorasi potensi diri dan peluang, membangun rasa empati demi mewujudkan visi yang sama yaitu menyadarkan kaum terpelajar akan pentingnya pendidikan tinggi untuk kesejahteraan masing-masing individu dalam memajukan Indonesia.",
];
const VisiImage = HelmLakiLaki;

const MisiTitle = "Misi";
const MisiDescription = [
  `Mengupayakan perluasan penyebaran informasi terkait perguruan tinggi dan pentingnya pendidikan kepada siswa/i SMA/sederajat di Indonesia.`,
  `Menanamkan akan semangat kesatuan, gotong royong dan cinta tanah air terhadap semua elemen yang terlibat dalam AMI 2021.`,
  `Mewujudkan kesadaran akan peran mahasiswa sebagai insan terdidik yang berkewajiban membagikan ilmunya dan perannya sebagai bagian dari perguruan tinggi untuk melakukan pengabdian masyarakat.`,
  `Anggota dapat mengeksplorasi potensi diri dan peluang yang ada di tengah kondisi pandemi.`,
];
const MisiImage = HelmWanita;

export const Homepage = () => {
  return (
    <div className="Homepage-wrapper">
      <img src={Awan} className="Homepage-awan" alt="awan" />
      <Layout>
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
        <img src={AwanBottom} className="Homepage-awan-bottom" alt="awan" />
        <img src={Burung} className="Homepage-burung" alt="burung" />
      </Layout>
    </div>
  );
};
