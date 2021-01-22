import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { Modal } from "../../components/Modal/Modal";
import { Layout } from "../Layout/Layout";
import { Button, InputField } from "../../components/Form/Form";
import { gameRules } from "./data";
import "./Final.scss"

export const Final = () => {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [token, setToken] = useState("");
    const [isSendData, setIsSentData] = useState(false);
    const validateToken = async () => {
        try {
            setIsSentData(true);
            const response = await axios.post(
                "https://api.akumasukitb.com/api/itbday",
                {
                    "code": token
                }
            );
            if (response.data.status === "success") {
                setIsSentData(false);
                window.open(response.data.meet);
                history.push(gameRules[5].endto);
            }
        } catch(err) {
            if(err.response && err.response.status === 400){
                setModalMessage("Maaf kodenya salah, silahkan coba lagi.");
            } else {
                setModalMessage("Maaf, ada kesalahan dari server kami :(");
            }
            setOpen(true);
            setIsSentData(false);
        }
    };
    
    return(
        <Layout>
            <Modal setOpen={setOpen} open={open}>
                <h2>Kode Salah</h2>
                <hr />
                <span>
                    {modalMessage}
                </span>
                <Button onClick={()=>setOpen(false)} text="Oke" />
            </Modal>
            <div className="Final">
                <h1>Final</h1>
                <p>Selamat, kamu sampai di tahap final! Tugas terakhirmu sekarang
                    adalah masukkan token yang sudah didapatkan sebelumnya.
                </p>
                <InputField
                    label="Token"
                    hasLabel
                    inputType="text"
                    value={token}
                    handleChange={setToken}
                />
                <Button disabled={isSendData} onClick={validateToken} text={isSendData?"...":"Submit"}/>
            </div>
        </Layout>
    )
}