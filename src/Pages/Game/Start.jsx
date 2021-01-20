import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Button } from "../../components/Form/Form";
import { Modal } from "../../components/Modal/Modal";
import { Layout } from "../Layout/Layout";
import { isGameOpen, gameRules, gameClosed } from "./data";
import "./Start.scss";

export const StartGame = () => {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const modalFun = () => {
        if(isGameOpen)
            history.push("/games/menyusun-kata");
        else
            setOpen(false);
    }
    return(
        <Layout>
            <Modal id="modal" setOpen={setOpen} open={open}>
                <h2>{isGameOpen?gameRules[0].nama:gameClosed.nama}</h2>
                <hr />
                <span id={isGameOpen && "start"}>
                    {isGameOpen?gameRules[0].peraturan:gameClosed.message}
                </span>
                <Button onClick={modalFun} text="Oke" />
            </Modal>
            <div id="ctm">
                <h1>Check The Mission</h1>
                <Button onClick={setOpen} onClickParams={true} text="Start" />
            </div>
        </Layout>
    )
}