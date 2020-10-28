import React from "react";
import { Button } from "../../components/Form/Form";
import "../../components/Form/form.scss";

export const UploadCeritaClosed = (props) => {
  return (
    <>
      <h2>Mohon Maaf</h2>
      <hr />
      <h4>
        Kini, form berbagi kisah inspiratif telah ditutup. Tapi jangan khawatir,
        kami akan segera kembali untuk membagikan kisah-kisah rekan seperjuangan
        kalian di sini :)
      </h4>
      <Button text="Kembali Ke Beranda" onClick={props.kembaliKeBeranda} />
    </>
  );
};
