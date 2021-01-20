import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Modal } from "../../components/Modal/Modal";
import { Layout } from "../Layout/Layout";
import { Button } from "../../components/Form/Form";
import { gameRules } from "./data";
import "./Final.scss"

export const Final = () => {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [token, setToken] = useState("");
    const validateToken = () => {
        var isValid = true;
        if(isValid){
            window.open("https://quizizz.com/");
            history.push(gameRules[5].endto);
        } else {
            setOpen(true);
        }
    };
    
    return(
        <Layout>
            <Modal setOpen={setOpen} open={open}>
                <h2>Kode Salah</h2>
                <hr />
                <span>
                    Maaf kodenya salah, silahkan coba lagi.
                </span>
                <Button onClick={()=>setOpen(false)} text="Oke" />
            </Modal>
            <div className="Final">
                <h1>Final</h1>
                <p>Selamat, kamu sampai di tahap final! Tugas terakhirmu sekarang
                    adalah masukkan token yang sudah didapatkan sebelumnya.
                </p>
                <div className="form">
                    <input type="text" name="token" autoComplete="Off" value={token} onChange={(e) => setToken(e.target.value)} required/>
                    <label>
                        Masukkan Token
                    </label>
                </div>
                <Button onClick={validateToken} text="Submit"/>
            </div>
        </Layout>
    )
}