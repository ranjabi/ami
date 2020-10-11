import React from "react";
import Layangan from "../../images/layangan.png";
import Awan from "../../images/Awan 1 1.png";

import "./AboutUsSection.scss";

const aboutUs =
  "Aku Masuk ITB (AMI) merupakan salah satu program dibawah Kementrian Koordinator Pengembangan Sosial Kemasyarakatan KM ITB yang bergerak untuk membawa semarak melanjutkan pendidikan tinggi dan menyebarkan informasi mengenai dunia perkuliahan kepada siswa/siswi SMA/sederajat. Program tersebut diharapkan dapat meningkatkan angka partisipasi siswa yang melanjutkan pendidikan ke perguruan tinggi.";

export const AboutUsSection = () => {
  return (
    <div className="AboutUsSection-wrapper">
      <img src={Awan} className="AboutUsSection-awan" alt="awan" />
      <div className="AboutUsSection-container">
        <img
          src={Layangan}
          className="AboutUsSection-layangan"
          alt="layangan AMI"
        />
        <div className="AboutUsSection-text">
          <h1>TENTANG KAMI</h1>
          <p>{aboutUs}</p>
        </div>
      </div>
    </div>
  );
};
