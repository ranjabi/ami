import React,{useState} from 'react';
import {Navbar} from "../../Navbar/Navbar.js"
import {InputField, TextArea, Button} from "../../Form.js"
import PerisaiImage from "../../../images/Perisai 1.svg"

import "./UploadCerita.scss"

export const UploadCerita = () => {
  const [nama,setNama] = useState("");
  const [fakultas,setFakultas] = useState("");
  const [hp,setHp] = useState("");
  const [cerita,setCerita] = useState("");
  return(
    <div>
      <Navbar />
      <div className="UploadCerita-wrapper">
        <div className="UploadCerita-containter">
          <div className="UploadCerita-badge">
            <h1>CERITAKAN
              <br></br>
              KISAHMU!
            </h1>
            <img src={PerisaiImage} alt="Upload Cerita"></img>
          </div>
          <div className="UploadCerita-form">
            <InputField label="Nama" hasLabel inputType="text" value={nama} handleChange={setNama}/>
            <InputField label="Fakultas" hasLabel inputType="text" value={fakultas} handleChange={setFakultas}/>
            <InputField label="Nomor HP" hasLabel inputType="text" value={hp} handleChange={setHp}/>
            <TextArea label="Ceritamu" hasLabel inputType="text" value={cerita} handleChange={setCerita}/>
            <Button text="Send Your Story"/>
          </div>
        </div>
      </div>
    </div>
  )
}
