import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {Layout} from "../Layout/Layout";
import { InputField, TextArea, Button, Dropdown } from "../../components/Form/Form";
import PerisaiImage from "../../images/perisai.png";
import {Redirect} from "react-router-dom";

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

  const errNamaText = "Namanya minimal 5 karakter bang!";
  const errNIMText = "Coba di cek lagi NIMnya bang!";
  const errFakultasText = "Fakultas Tidak Boleh Kosong!"
  const errCeritaText = "Ceritanya minimal 100 karakter bang!";
  const errLineText = "ID Line tidak boleh kosong!";

  const [errNama, setErrNama] = useState(errNamaText);
  const [errNim, setErrNim] = useState(errNIMText);
  const [errAngkatan, setErrAngkatan] = useState("");
  const [errFakultas, setErrFakultas] = useState(errFakultasText);
  const [errCerita, setErrCerita] = useState(errCeritaText);
  const [errIDLine, setErrIDLine] = useState(errLineText);

  const [redirect, setRedirect] = useState(false);

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
    if(errNama || errNim || errAngkatan || errCerita || errIDLine || fakultas===""){
      window.alert("Formnya belom beres bang!");
    }else{
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
      if(response.data.status==='success'){
        setRedirect(true);
      }else{
        window.alert("Sorry, something went wrong :(");
      }
      console.log(JSON.stringify(response));
    }
  };

  const changeFakultas = (value) => {
    setFakultas(value);
    setJurusan("TPB");
    if(value){
      setErrFakultas("");
    }else{
      setErrFakultas(errFakultasText)
    }
  }

  const changeName = (value) => {
    setNama(value);
    if(value.length<5){
      setErrNama(errNamaText);
    }else{
      setErrNama("");
    }
  }

  const changeCerita = (value) => {
    setCerita(value);
    if(value.length<100){
      setErrCerita(errCeritaText);
    }else{
      setErrCerita("");
    }
  }

  const changeIDLine = (value) => {
    setLineID(value);
    if(value.length===0){
      setErrIDLine(errLineText);
    }else{
      setErrIDLine("");
    }
  }

  const checkNim = useCallback((nim) => {
    let nimRegex = /(?<fakultas>\d{3})(?<tahun>\d{2})(?<digit>\d{3})/;
    if(!nimRegex.test(nim)){
      setErrNim(errNIMText);
    }else{
      let testRes = nimRegex.exec(nim);
      setErrAngkatan("");
      if(testRes.groups.tahun!==angkatan){
        setErrNim("Yakin itu ga salah nulis tahun?");
        setErrAngkatan("Yakin itu ga salah pilih tahun?");
      }else if(testRes.groups.digit==="000"){
        setErrNim("Hayo, emang ada absen 000 ya?");
      }else{
        setErrNim("");
      }
    }
  },[angkatan])

  useEffect(()=>{
    checkNim(nim);
  },[nim,angkatan, checkNim]) 

  return (
    <Layout>
      {redirect && <Redirect to="/"/>}
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
              handleChange={changeName}
              error={errNama}
            />
            <InputField
              label="NIM"
              hasLabel
              inputType="number"
              value={nim}
              handleChange={setNim}
              error={errNim}
            />
            <Dropdown
              label="Angkatan"
              hasLabel
              value={angkatan}
              options={[20, 19, 18, 17, 16, 15, 14]}
              handleChange={setAngkatan}
              error={errAngkatan}
            />
            {daftarJurusan && (
              <Dropdown
                label="Fakultas"
                hasLabel
                value={fakultas}
                options={Object.keys(daftarJurusan)}
                handleChange={changeFakultas}
                error={errFakultas}
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
              handleChange={changeIDLine}
              error={errIDLine}
            />
            <TextArea
              label="Ceritamu"
              hasLabel
              inputType="text"
              value={cerita}
              handleChange={changeCerita}
              error={errCerita}
            />
            <Button text="Send Your Story" onClick={sendCerita} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
