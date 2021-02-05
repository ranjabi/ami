import React from 'react';
import { Button } from "../../components/Form/Form"

import "./VirtualBooth.scss"

const redirectLink = (link) => {
    window.open(link, "_blank");
}

export const VirtualBooth = () => {
    const virtualBoothLink = "http://bit.ly/VBAMI2021";
    return (
        <div className="virtualbooth-wrapper">
            <div className="virtualbooth-container">
                <h1>Virtual Booth 2021</h1>
                <p>
                    Virtual Booth fakultas dan program studi hadir di <b>ITB Day 2021!</b> Kunjungi booth-booth virtual semua fakultas
                    dan prodi yang ada di ITB yang kamu minati. Temui langsung para mahasiwa perwakilan Himpunan Mahasiswa Jurusan
                    untuk info-info mengenai prodi-prodi di ITB!
                    <br/>
                    Jelajah kampus ITB bersama AMI 2021 di ITB Day 2021! Bersama tour guide kami, berkelilinglah mengunjungi gedung-gedung
                    dan kompleks kampus ITB yang tersohor. Tour yang virtual namun tetap imersif ini dirancang khusus untuk kalian, para 
                    calon-calon mahasiswa ITB!
                    
                </p>
                <Button text="Virtual Booth" onClick={() => redirectLink(virtualBoothLink)}>
                </Button>
            </div>

        </div>
    )
}
