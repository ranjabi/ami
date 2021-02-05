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
               
                <Button text="Virtual Booth" onClick={() => redirectLink(virtualBoothLink)}>
                </Button>
                <p>
                    Virtual Booth fakultas dan program studi hadir di <b>ITB Day 2021!</b> <br />Kunjungi booth-booth virtual semua fakultas
                    dan prodi yang ada di ITB yang kamu minati. Temui langsung para mahasiwa perwakilan Himpunan Mahasiswa Jurusan
                    untuk info-info mengenai prodi-prodi di ITB!
                                        
                </p>
                                
            </div>

        </div>
    )
}
