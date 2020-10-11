import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../../Navbar/Navbar.js";
import { Footer } from "../../footer/Footer.jsx";
import { InputField, TextArea, Button, Dropdown } from "../../Form.js";
import PerisaiImage from "../../../images/perisai.png";

import "./UploadCerita.scss";

export const UploadCerita = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [angkatan, setAngkatan] = useState(20);
  const [fakultas, setFakultas] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [line_id, setLineID] = useState("");
  const [cerita, setCerita] = useState("");
  const [daftarJurusan, setDaftarJurusan] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.akumasukitb.com/api/fakultas"
      );

      setDaftarJurusan(result.data.data);
    };
    fetchData();
  }, [daftarJurusan]);

  const sendCerita = async () => {
    const response = await axios.post(
      "https://api.akumasukitb.com/api/cerita",
      {
        nama,
        nim: +nim,
        angkatan,
        fakultas,
        jurusan,
        line_id,
        cerita,
      }
    );
    console.log(JSON.stringify(response));
  };

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
            <InputField
              label="NIM"
              hasLabel
              inputType="number"
              value={nim}
              handleChange={setNim}
            />
            <Dropdown
              label="Angkatan"
              hasLabel
              value={angkatan}
              options={[20, 19, 18, 17, 16, 15, 14]}
              handleChange={setAngkatan}
            />
            {daftarJurusan && (
              <Dropdown
                label="Fakultas"
                hasLabel
                value={fakultas}
                options={Object.keys(daftarJurusan)}
                handleChange={setFakultas}
              />
            )}
            {daftarJurusan && fakultas && (
              <Dropdown
                label="Jurusan"
                hasLabel
                value={jurusan}
                options={daftarJurusan[fakultas]}
                handleChange={setJurusan}
              />
            )}
            <InputField
              label="ID Line"
              hasLabel
              inputType="text"
              value={line_id}
              handleChange={setLineID}
            />
            <TextArea
              label="Ceritamu"
              hasLabel
              inputType="text"
              value={cerita}
              handleChange={setCerita}
            />
            <Button text="Send Your Story" onClick={sendCerita} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
