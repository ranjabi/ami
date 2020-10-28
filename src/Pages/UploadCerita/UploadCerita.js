import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Layout } from "../Layout/Layout";
import { Modal } from "../../components/Modal/Modal.js";
import {
  InputField,
  TextArea,
  Button,
  Dropdown,
} from "../../components/Form/Form";
import PerisaiImage from "../../images/perisai.png";
import { useHistory } from "react-router-dom";
import "./UploadCerita.scss";
import { UploadCeritaClosed } from "./UploadCeritaClosed";

export const UploadCerita = () => {
  let history = useHistory();
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [line_id, setLineID] = useState("");
  const [cerita, setCerita] = useState("");
  const [daftarJurusan, setDaftarJurusan] = useState({});

  const errNamaText = "Namanya minimal 5 karakter ya";
  const errNIMText = "Coba di cek lagi NIMnya yuk!";
  const errFakultasText = "Fakultas tidak boleh kosong";
  const errLineText = "ID Line tidak boleh kosong";
  const ceritaPlaceholder = "minimal 100 karakter";

  const [errNama, setErrNama] = useState("");
  const [errNim, setErrNim] = useState("");
  const [errAngkatan, setErrAngkatan] = useState("");
  const [errFakultas, setErrFakultas] = useState("");
  const [ceritaCounter, setCeritaCounter] = useState(0);
  const [errIDLine, setErrIDLine] = useState("");

  const [open, setOpen] = useState(false);
  const shouldFormClose = new Date() >= new Date("2020-10-30T00:00:00+07:00");

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
    if (
      errNama ||
      errNim ||
      errAngkatan ||
      ceritaCounter < 100 ||
      errIDLine ||
      fakultas === ""
    ) {
      window.alert("Form belum lengkap");
    } else {
      console.log(shouldFormClose);
      if (!shouldFormClose) {
        try {
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
          if (response.data.status === "success") {
            setOpen(true);
          }
          setOpen(true);
        } catch (err) {
          window.alert("Maaf, ada kesalahan dari server kami :(");
        }
        return;
      }
      window.alert("Maaf, ada kesalahan dari server kami :(");
    }
  };

  const changeFakultas = (value) => {
    setFakultas(value);
    setJurusan("TPB");
    if (value) {
      setErrFakultas("");
    } else {
      setErrFakultas(errFakultasText);
    }
  };

  const changeName = (value) => {
    setNama(value);
    if (value.length < 5) {
      setErrNama(errNamaText);
    } else {
      setErrNama("");
    }
  };

  const changeCerita = (value) => {
    setCerita(value);
    setCeritaCounter(value.length);
  };

  const changeIDLine = (value) => {
    setLineID(value);
    if (value.length === 0) {
      setErrIDLine(errLineText);
    } else {
      setErrIDLine("");
    }
  };

  const checkNim = useCallback(
    (nim) => {
      let nimRegex = /(?<fakultas>\d{3})(?<tahun>\d{2})(?<digit>\d{3})/;
      if (!nimRegex.test(nim)) {
        nim && setErrNim(errNIMText);
      } else {
        let testRes = nimRegex.exec(nim);
        setErrAngkatan("");
        if (testRes.groups.tahun !== angkatan) {
          setErrNim("Tahun harus sama");
          setErrAngkatan("Tahun harus sama");
        } else if (testRes.groups.digit === "000") {
          setErrNim("Hayo, emang ada absen 000 ya? :)");
        } else {
          setErrNim("");
        }
      }
    },
    [angkatan]
  );

  useEffect(() => {
    checkNim(nim);
  }, [nim, angkatan, checkNim]);

  const kembaliKeBeranda = () => {
    history.push("/");
  };

  return (
    <Layout>
      <Modal open={shouldFormClose}>
        <UploadCeritaClosed kembaliKeBeranda={kembaliKeBeranda} />
      </Modal>
      <Modal open={open}>
        <h4>
          Terimakasih atas kontribusimu untuk memantik semangat pendidikan
          tinggi. Teruslah kobarkan api semangatmu untuk kemajuan bangsa. Jika
          ceritamu terpilih, kami akan menghubungi lebih lanjut.
        </h4>
        <Button text="Kembali Ke Beranda" onClick={kembaliKeBeranda} />
      </Modal>

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
            <div className="UploadCerita-opening">
              <p>
                Kata adalah perwujudan kesatuan perasaan yang dapat menyusun
                sebuah cerita sebagai pemantik imajinasi, pengarah inspirasi,
                dan energi. Mari, para​ tonggak masa depan bangsa, berjalanlah
                bersama AMI 2021 membawa semangat pendidikan tinggi ke seluruh
                penjuru negeri dengan menuangkan kisahmu dalam kata. Tiap kisah
                dan sudut pand​ang dalam mencapai perjalanan ini berbeda-beda.
                Konsekuensi seseorang yang terdidik adalah mendidik.{" "}
              </p>
              <br></br>
              <p>
                Siapkah kamu, wahai mahasiswa harapan bangsa, untuk memantik
                semangat berpendidikan tinggi?
              </p>
            </div>
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
              label="Kisah perjuanganmu menjadi mahasiswa ITB"
              placeholder={ceritaPlaceholder}
              hasLabel
              inputType="text"
              value={cerita}
              handleChange={changeCerita}
              error={`${ceritaCounter} karakter`}
            />
            <Button text="Send Your Story" onClick={sendCerita} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
