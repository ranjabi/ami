import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "../../Navbar/Navbar.js";
import { Footer } from "../../footer/Footer.jsx";
import { InputField, TextArea, Button, Dropdown } from "../../Form.js";
import PerisaiImage from "../../../images/Perisai 1.svg";

import "./UploadCerita.scss";

export const UploadCerita = () => {
  const [nama, setNama] = useState("");
  const [fakultas, setFakultas] = useState("STEI");
  const [jurusan, setJurusan] = useState("TEKNIK ELEKTRO");
  const [email, setEmail] = useState("");
  const [cerita, setCerita] = useState("");

  // const daftar_fakultas = [
  //   "FITB",
  //   "FMIPA",
  //   "FSRD",
  //   "FTI",
  //   "FTMD",
  //   "FTTM",
  //   "FTSL",
  //   "SAPPK",
  //   "SBM",
  //   "SF",
  //   "SITH",
  //   "STEI",
  // ];

  // const daftar_jurusan = {
  //   FITB: [
  //     "TEKNIK GEOLOGI",
  //     "TEKNIK GEODESI DAN GEOMATIKA",
  //     "METEOROLOGI",
  //     "OSEANOGRAFI",
  //   ],
  //   FMIPA: ["MATEMATIKA", "FISIKA", "ASTRONOMI", "KIMIA", "AKTUARIA"],
  //   FSRD: [
  //     "SENI RUPA",
  //     "KRIA",
  //     "DESAIN INTERIOR",
  //     "DESAIN KOMUNIKASI VISUAL",
  //     "DESAIN PRODUK",
  //   ],
  //   FTI: [
  //     "TEKNIK KIMIA",
  //     "TEKNIK FISIKA",
  //     "TEKNIK INDUSTRI",
  //     "MANAJEMEN REKAYASA INDUSTRI",
  //     "TEKNIK PANGAN",
  //     "TEKNIK BIOENERGI DAN KEMURDI",
  //   ],
  //   FTMD: ["TEKNIK MESIN", "TEKNIK DIRGANTARA", "TEKNIK MATERIAL"],
  //   FTTM: [
  //     "TEKNIK PERTAMBANGAN",
  //     "TEKNIK PERRMINYAKAN",
  //     "TEKNIK GEOFISIKA",
  //     "TEKNIK METALURGI",
  //   ],
  //   FTSL: [
  //     "TEKNIK SIPIL",
  //     "TEKNIK LINGKUNGAN",
  //     "TEKNIK KELAUTAN",
  //     "TEKNIK DAN PENGELOLAAN SUMBER DAYA AIR",
  //     "REKAYASA INFRASTRUKTUR LINGKUNGAN",
  //   ],
  //   SAPPK: ["ARSITEKTUR", "PERENCANAAN WILAYAH DAN KOTA"],
  //   SBM: ["MANAJEMEN", "KEWIRAUSAHAAN"],
  //   SF: ["Sains dan Teknologi Farmasi", "Farmasi Klinik dan Komunitas"],
  //   SITH: [
  //     "BIOLOGI",
  //     "MIKROBIOLOGI",
  //     "REKAYASA HAYATI",
  //     "REKAYASA PERTANIAN",
  //     "REKAYASA KEHUTANAN",
  //     "TEKNOLOGI PASCA PANEN",
  //   ],
  //   STEI: [
  //     "TEKNIK ELEKTRO",
  //     "TEKNIK INFORMATIKA",
  //     "TEKNIK TENAGA LISTRIK",
  //     "TEKNIK TELEKOMUNIKASI",
  //     "SISTEM DAN TEKNOLOGI INFORMASI",
  //     "TEKNIK BIOMEDIS",
  //   ],
  // };

  const daftar_jurusan = async () => {
    const data = await axios.get("http://api.akumasukitb.com/api/fakultas");
    console.log(data);
  };
  daftar_jurusan();

  return (
    <div>
      <Navbar />
      <div className="UploadCerita-wrapper">
        <div className="UploadCerita-containter">
          <div className="UploadCerita-badge">
            <h1>
              CERITAKAN
              <br></br>
              KISAHMU!
            </h1>
            <img
              src={PerisaiImage}
              className="UploadCerita-perisai-image"
              alt="Upload Cerita"
            ></img>
          </div>
          <div className="UploadCerita-form">
            <InputField
              label="Nama"
              hasLabel
              inputType="text"
              value={nama}
              handleChange={setNama}
            />
            {/* <Dropdown
              label="Fakultas"
              hasLabel
              value={fakultas}
              options={daftar_fakultas}
              handleChange={setFakultas}
            />
            {fakultas !== "" && (
              <Dropdown
                label="Jurusan"
                hasLabel
                value={jurusan}
                options={daftar_jurusan[fakultas]}
                handleChange={setJurusan}
              />
            )} */}
            <InputField
              label="Email"
              hasLabel
              inputType="text"
              value={email}
              handleChange={setEmail}
            />
            <TextArea
              label="Ceritamu"
              hasLabel
              inputType="text"
              value={cerita}
              handleChange={setCerita}
            />
            <Button text="Send Your Story" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
