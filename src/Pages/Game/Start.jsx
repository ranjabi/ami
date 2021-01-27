import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Button } from "../../components/Form/Form";
import { Modal } from "../../components/Modal/Modal";
import { Layout } from "../Layout/Layout";
import { isGameOpen, gameDate, gameRules, gameClosed } from "./data";
import "./Start.scss";

export const StartGame = () => {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const modalFun = () => {
        if(isGameOpen){
            history.push("/games/menyusun-kata");
        } else
            setOpen(false);
    }
    useEffect(() => {
        if(!isGameOpen)
            var timeout = setTimeout(()=>{window.location.reload()}, gameDate.getTime() - (new Date()).getTime());
        return () => (timeout && clearTimeout(timeout));
    }, []);
    return(
        <Layout>
            <Modal id="modal" setOpen={setOpen} open={open}>
                <h2>{isGameOpen?gameRules[0].nama:gameClosed.nama}</h2>
                <hr />
                <span id={isGameOpen?"start":undefined}>
                    {isGameOpen?gameRules[0].peraturan:gameClosed.message}
                </span>
                <Button onClick={modalFun} text={isGameOpen?"Start the Game!":"Oke"} />
            </Modal>
            <div id="ctm">
                <h1>Check The Mission</h1>
                <Button onClick={setOpen} onClickParams={true} text="Start" />
            </div>
        </Layout>
    )
}