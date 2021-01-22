import React from 'react';
import { Button } from "../../components/Form/Form"
import Poster from "../../images/poster.JPG"

import "./Tonamptn.scss"

const redirectLink = (link) => {
    window.open(link, "_blank");
}

export const Tonamptn = () => {
    const pendaftaranLink = "http://bit.ly/pendaftaranTONAMPTN2021";
    return (
        <div className="tonamptn-wrapper">
            <div className="tonamptn-container">
                <h1>TONAMPTN 2021</h1>
                <img src={Poster} alt="Poster"/>
                <p>
                    Pendaftaran <b>TONAMPTN 2021</b> telah resmi dibuka! <b>TONAMPTN 2021</b> adalah program tryout UTBK persembahan
                    kerjasama AMI 2021 x Pahamify bagi teman-teman kelas 12 SMA/sederajat yang ingin menguji kemampuan
                    atau berlatih mempersiapkan diri menghadapi UTBK dan proses SBMPTN tahun ini!
                </p>
                <p>
                    Ayo segera daftar dengan memencet tombol <b>"Daftar"</b> di bawah ini!
                </p>
                <Button text="Daftar" onClick={() => redirectLink(pendaftaranLink)}>
                </Button>
            </div>

        </div>
    )
}
